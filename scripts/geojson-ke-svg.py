"""Konversi GeoJSON kab/kota Indonesia -> path SVG 38 wilayah Jawa Timur.

Pakai:  python3 -I scripts/geojson-ke-svg.py <all_kabkota_ind.geojson> src/data/peta-jatim.json
Sumber: github.com/eppofahmi/geojson-indonesia (kota/all_kabkota_ind.geojson)

Proyeksi equirectangular (lon dikali cos lintang tengah), lalu disederhanakan
Douglas-Peucker. Pulau di luar kotak potong (Bawean, Kangean, dst.) dibuang
supaya peta daratan utama + Madura tetap besar.
"""
import json
import math
import sys

MAKS_FILE_INPUT = 50 * 1024 * 1024  # batas atas ukuran input
LEBAR = 1000.0
TOLERANSI = 0.55  # piksel viewBox
LUAS_MIN = 1.5  # piksel^2; ring lebih kecil dibuang
KOTAK = {"lon_min": 110.85, "lon_max": 114.65, "lat_min": -8.85, "lat_max": -6.70}
LAT_TENGAH = math.radians(-7.75)


def proyeksi(lon, lat):
    x = (lon - KOTAK["lon_min"]) * math.cos(LAT_TENGAH)
    y = KOTAK["lat_max"] - lat
    return x, y


def jarak_garis(p, a, b):
    (x, y), (x1, y1), (x2, y2) = p, a, b
    dx, dy = x2 - x1, y2 - y1
    if dx == 0 and dy == 0:
        return math.hypot(x - x1, y - y1)
    t = max(0.0, min(1.0, ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy)))
    return math.hypot(x - (x1 + t * dx), y - (y1 + t * dy))


def sederhanakan(titik, tol):
    # Douglas-Peucker iteratif (hindari batas rekursi Python)
    if len(titik) < 3:
        return titik
    simpan = [False] * len(titik)
    simpan[0] = simpan[-1] = True
    tumpukan = [(0, len(titik) - 1)]
    while tumpukan:
        a, b = tumpukan.pop()
        maks, idx = 0.0, -1
        for i in range(a + 1, b):
            d = jarak_garis(titik[i], titik[a], titik[b])
            if d > maks:
                maks, idx = d, i
        if maks > tol and idx > 0:
            simpan[idx] = True
            tumpukan.append((a, idx))
            tumpukan.append((idx, b))
    return [p for p, s in zip(titik, simpan) if s]


def luas_dan_pusat(ring):
    a = cx = cy = 0.0
    for (x1, y1), (x2, y2) in zip(ring, ring[1:] + ring[:1]):
        k = x1 * y2 - x2 * y1
        a += k
        cx += (x1 + x2) * k
        cy += (y1 + y2) * k
    a /= 2
    if a == 0:
        return 0.0, ring[0]
    return abs(a), (cx / (6 * a), cy / (6 * a))


def main():
    if len(sys.argv) != 3:
        sys.exit("pakai: geojson-ke-svg.py <input.geojson> <output.json>")
    with open(sys.argv[1], "rb") as f:
        mentah = f.read(MAKS_FILE_INPUT + 1)
    if len(mentah) > MAKS_FILE_INPUT:
        sys.exit("input terlalu besar")
    data = json.loads(mentah)

    fitur = [f for f in data["features"] if f["properties"].get("province_id") == "35"]
    if len(fitur) != 38:
        sys.exit(f"harus 38 wilayah Jawa Timur, dapat {len(fitur)}")

    skala = LEBAR / ((KOTAK["lon_max"] - KOTAK["lon_min"]) * math.cos(LAT_TENGAH))
    tinggi = (KOTAK["lat_max"] - KOTAK["lat_min"]) * skala

    hasil = []
    for f in fitur:
        p = f["properties"]
        kode = "35" + p["kabkot_id"]
        geom = f["geometry"]
        poligon = geom["coordinates"] if geom["type"] == "MultiPolygon" else [geom["coordinates"]]
        bagian, terbesar = [], (0.0, None)
        for pol in poligon:
            for ring in pol[:1]:  # ring luar saja; lubang kab/kota diabaikan
                pts = [proyeksi(lon, lat) for lon, lat in ring]
                pts = [(x * skala, y * skala) for x, y in pts]
                luas, pusat = luas_dan_pusat(pts)
                if not (0 <= pusat[0] <= LEBAR and 0 <= pusat[1] <= tinggi):
                    continue
                if luas < LUAS_MIN:
                    continue
                pts = sederhanakan(pts, TOLERANSI)
                if len(pts) < 3:
                    continue
                if luas > terbesar[0]:
                    terbesar = (luas, pusat)
                bagian.append("M" + "L".join(f"{x:.1f},{y:.1f}" for x, y in pts) + "Z")
        if not bagian:
            sys.exit(f"wilayah {kode} kosong setelah dipotong")
        cx, cy = terbesar[1]
        hasil.append({"kode": kode, "d": "".join(bagian), "cx": round(cx, 1), "cy": round(cy, 1)})

    hasil.sort(key=lambda r: r["kode"])
    keluaran = {"viewBox": f"0 0 {LEBAR:.0f} {tinggi:.0f}", "wilayah": hasil}
    with open(sys.argv[2], "w", encoding="utf-8") as f:
        json.dump(keluaran, f, separators=(",", ":"))
    print(f"{len(hasil)} wilayah, viewBox {keluaran['viewBox']}")


if __name__ == "__main__":
    main()

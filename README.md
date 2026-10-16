# Wawasan Nusantara & Warisan Budaya Jawa Timur

Situs edukasi budaya Jawa Timur (Astro 7 + Tailwind 4, statis).
Production: https://talitha-budaya-jatim.vercel.app

`File by febri.html` = versi asli satu file, disimpan sebagai referensi (tidak ikut dideploy).

## Perintah

```bash
npm install
npm run dev       # http://localhost:4321
npm test          # vitest: walikan, filter wilayah, quiz, pelog, kecocokan data peta
npm run build     # hasil di dist/
vercel deploy --prod
```

## Struktur

- `src/pages/index.astro` – susunan halaman
- `src/components/` – satu file per section (Splash, Navbar, Hero, Wawasan, Kesenian, Adat, Peta, Kuliner, Interaktif, Quiz, Footer)
- `src/data/` – isi konten (`konten.ts`), 38 wilayah (`wilayah.ts`), geometri peta (`peta-jatim.json`)
- `src/lib/` – logika murni yang diuji
- `src/scripts/` – audio Web Audio API, partikel & animasi scroll
- `scripts/geojson-ke-svg.py` – membuat ulang `peta-jatim.json`

## Membuat ulang peta

```bash
mkdir -p /tmp/geo && curl -sSL -o /tmp/geo/kota.geojson \
  https://raw.githubusercontent.com/eppofahmi/geojson-indonesia/master/kota/all_kabkota_ind.geojson
python3 -I scripts/geojson-ke-svg.py /tmp/geo/kota.geojson src/data/peta-jatim.json
```

## Kredit data

- Geometri kab/kota: [eppofahmi/geojson-indonesia](https://github.com/eppofahmi/geojson-indonesia) (lisensi tidak dicantumkan di repo sumber).
- Foto: thumbnail dari Google Images & Unsplash (hotlink, belum berlisensi jelas).

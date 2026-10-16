export type Zona = 'Arekan' | 'Mataraman' | 'Tapak Kuda' | 'Tengger' | 'Madura' | 'Pantura';

export interface Wilayah {
  kode: string; // kode BPS, sama dengan kunci di peta-jatim.json
  nama: string;
  zona: Exclude<Zona, 'Tengger'>;
  tengger?: boolean; // punya komunitas Suku Tengger
  seni: string;
  kuliner: string;
  pusat: string;
}

export const MAKS_QUERY = 60;

export function cocokZona(w: Wilayah, zona: Zona | 'semua'): boolean {
  if (zona === 'semua') return true;
  if (zona === 'Tengger') return w.tengger === true;
  return w.zona === zona;
}

export function saringWilayah(data: readonly Wilayah[], query: string, zona: Zona | 'semua'): Wilayah[] {
  const q = query.slice(0, MAKS_QUERY).trim().toLowerCase();
  return data.filter(
    (w) =>
      cocokZona(w, zona) &&
      (!q || [w.nama, w.zona, w.seni, w.kuliner, w.pusat].some((s) => s.toLowerCase().includes(q))),
  );
}

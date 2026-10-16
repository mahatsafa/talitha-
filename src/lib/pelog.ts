// Pendekatan laras pelog (sen dari nada 1), mengikuti pengukuran rata-rata
// gamelan Jawa; tiap perangkat gamelan aslinya punya laras sendiri.
export const SEN_PELOG = [0, 120, 270, 540, 670, 785, 950] as const;
export const NAMA_NADA = ['Ji', 'Ro', 'Lu', 'Pat', 'Mo', 'Nem', 'Pi'] as const;

export function frekuensiPelog(nada: number, dasar = 277): number {
  if (!Number.isInteger(nada) || nada < 1 || nada > SEN_PELOG.length) {
    throw new RangeError(`nada pelog harus 1-${SEN_PELOG.length}`);
  }
  return dasar * 2 ** (SEN_PELOG[nada - 1] / 1200);
}

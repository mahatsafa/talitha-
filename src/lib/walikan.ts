// Penerjemah Boso Walikan Malangan: kata dibalik per bunyi, "NG" dan "NY"
// dihitung satu bunyi (Malang -> Ngalam). Beberapa kata punya bentuk baku sendiri.

export const MAKS_INPUT = 200;
export const CONTOH_KOSONG = 'AMERA';

const PENGECUALIAN: Record<string, string> = {
  POLISI: 'SILUP',
};

function pecahBunyi(kata: string): string[] {
  const bunyi: string[] = [];
  for (let i = 0; i < kata.length; i++) {
    const dua = kata.slice(i, i + 2);
    if (dua === 'NG' || dua === 'NY') {
      bunyi.push(dua);
      i++;
    } else {
      bunyi.push(kata[i]);
    }
  }
  return bunyi;
}

export function walikKata(kata: string): string {
  const besar = kata.toUpperCase();
  if (PENGECUALIAN[besar]) return PENGECUALIAN[besar];
  return pecahBunyi(besar).reverse().join('');
}

export function terjemahWalikan(teks: string): string {
  const dipotong = teks.slice(0, MAKS_INPUT);
  if (!dipotong.trim()) return CONTOH_KOSONG;
  // hanya huruf yang dibalik; spasi dan tanda baca tetap di tempatnya
  return dipotong.replace(/\p{L}+/gu, walikKata);
}

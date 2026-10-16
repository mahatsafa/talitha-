import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { terjemahWalikan, walikKata, MAKS_INPUT, CONTOH_KOSONG } from '../src/lib/walikan';
import { saringWilayah } from '../src/lib/wilayah';
import { buatQuiz } from '../src/lib/quiz';
import { frekuensiPelog } from '../src/lib/pelog';
import { WILAYAH } from '../src/data/wilayah';
import { SOAL_QUIZ } from '../src/data/konten';

describe('Boso Walikan', () => {
  it('membalik kata umum', () => {
    expect(walikKata('Arema')).toBe('AMERA');
    expect(walikKata('arek')).toBe('KERA');
    expect(walikKata('Bakso')).toBe('OSKAB');
    expect(walikKata('mas')).toBe('SAM');
  });
  it('NG dan NY dihitung satu bunyi', () => {
    expect(walikKata('Malang')).toBe('NGALAM');
    expect(walikKata('nyoba')).toBe('ABONY');
  });
  it('memakai bentuk baku untuk pengecualian', () => {
    expect(walikKata('polisi')).toBe('SILUP');
  });
  it('menjaga spasi dan tanda baca', () => {
    expect(terjemahWalikan('arek  Malang!')).toBe('KERA  NGALAM!');
  });
  it('input kosong menampilkan contoh', () => {
    expect(terjemahWalikan('   ')).toBe(CONTOH_KOSONG);
  });
  it('input dipotong sampai batas', () => {
    expect(terjemahWalikan('a'.repeat(MAKS_INPUT + 50))).toHaveLength(MAKS_INPUT);
  });
});

describe('Data & filter wilayah', () => {
  it('tepat 38 wilayah: 29 kabupaten + 9 kota, kode unik', () => {
    expect(WILAYAH).toHaveLength(38);
    expect(WILAYAH.filter((w) => w.nama.startsWith('Kabupaten'))).toHaveLength(29);
    expect(WILAYAH.filter((w) => w.nama.startsWith('Kota'))).toHaveLength(9);
    expect(new Set(WILAYAH.map((w) => w.kode)).size).toBe(38);
  });
  it('setiap wilayah punya path di peta SVG', () => {
    const peta = JSON.parse(readFileSync('src/data/peta-jatim.json', 'utf8'));
    const kodePeta = new Set(peta.wilayah.map((p: { kode: string }) => p.kode));
    expect(kodePeta.size).toBe(38);
    for (const w of WILAYAH) expect(kodePeta.has(w.kode), w.nama).toBe(true);
  });
  it('search dan zona bisa digabung', () => {
    const hasil = saringWilayah(WILAYAH, 'malang', 'Arekan');
    // Kota Batu ikut karena kulinernya "Apel Malang"
    expect(hasil.map((w) => w.nama).sort()).toEqual(['Kabupaten Malang', 'Kota Batu', 'Kota Malang']);
    expect(saringWilayah(WILAYAH, 'malang', 'Madura')).toEqual([]);
  });
  it('zona Tengger memilih kabupaten di kawasan Bromo', () => {
    const nama = saringWilayah(WILAYAH, '', 'Tengger').map((w) => w.nama);
    expect(nama).toContain('Kabupaten Probolinggo');
    expect(nama).toHaveLength(4);
  });
  it('mencari berdasarkan kuliner', () => {
    expect(saringWilayah(WILAYAH, 'soto dok', 'semua').map((w) => w.nama)).toEqual(['Kabupaten Jombang']);
  });
});

describe('Quiz', () => {
  it('skor 100 bila semua benar', () => {
    const quiz = buatQuiz(SOAL_QUIZ);
    for (const s of SOAL_QUIZ) quiz.jawab(s.jawaban);
    expect(quiz.selesai).toBe(true);
    expect(quiz.skor).toBe(100);
  });
  it('melaporkan jawaban benar saat salah', () => {
    const quiz = buatQuiz(SOAL_QUIZ);
    const salah = (SOAL_QUIZ[0].jawaban + 1) % SOAL_QUIZ[0].opsi.length;
    expect(quiz.jawab(salah)).toEqual({ benar: false, jawabanBenar: SOAL_QUIZ[0].jawaban, selesai: false });
    expect(quiz.skor).toBe(0);
  });
  it('menolak pilihan tidak valid dan jawaban setelah selesai', () => {
    const quiz = buatQuiz([{ q: 'x', opsi: ['a', 'b'], jawaban: 0 }]);
    expect(() => quiz.jawab(2)).toThrow();
    expect(() => quiz.jawab(-1)).toThrow();
    quiz.jawab(0);
    expect(() => quiz.jawab(0)).toThrow();
    quiz.ulang();
    expect(quiz.indeks).toBe(0);
    expect(quiz.skor).toBe(0);
  });
  it('kunci jawaban di data berada dalam rentang opsi', () => {
    for (const s of SOAL_QUIZ) expect(s.jawaban).toBeLessThan(s.opsi.length);
  });
});

describe('Laras pelog', () => {
  it('nada 1 sama dengan frekuensi dasar dan naik monoton', () => {
    expect(frekuensiPelog(1, 300)).toBe(300);
    for (let n = 2; n <= 7; n++) expect(frekuensiPelog(n)).toBeGreaterThan(frekuensiPelog(n - 1));
  });
  it('menolak nada di luar 1-7', () => {
    expect(() => frekuensiPelog(0)).toThrow(RangeError);
    expect(() => frekuensiPelog(8)).toThrow(RangeError);
  });
});

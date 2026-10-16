export interface Soal {
  q: string;
  opsi: string[];
  jawaban: number;
}

export interface HasilJawab {
  benar: boolean;
  jawabanBenar: number;
  selesai: boolean;
}

// Skor maksimal selalu 100, dibagi rata ke semua soal.
export function buatQuiz(soal: readonly Soal[]) {
  if (soal.length === 0) throw new Error('quiz tanpa soal');
  let indeks = 0;
  let benar = 0;

  return {
    get indeks() {
      return indeks;
    },
    get total() {
      return soal.length;
    },
    get soal() {
      return soal[Math.min(indeks, soal.length - 1)];
    },
    get selesai() {
      return indeks >= soal.length;
    },
    get skor() {
      return Math.round((benar / soal.length) * 100);
    },
    jawab(pilihan: number): HasilJawab {
      if (indeks >= soal.length) throw new Error('quiz sudah selesai');
      const s = soal[indeks];
      if (!Number.isInteger(pilihan) || pilihan < 0 || pilihan >= s.opsi.length) {
        throw new Error('pilihan tidak valid');
      }
      const tepat = pilihan === s.jawaban;
      if (tepat) benar++;
      indeks++;
      return { benar: tepat, jawabanBenar: s.jawaban, selesai: indeks >= soal.length };
    },
    ulang() {
      indeks = 0;
      benar = 0;
    },
  };
}

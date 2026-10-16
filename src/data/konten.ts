import type { Soal } from '../lib/quiz';

// Kolom `deskripsi` berisi HTML statis yang ditulis sendiri (bukan input pengguna).

const ph = (ukuran: string, teks: string) =>
  `https://placehold.co/${ukuran}/14110d/d4af37?text=${encodeURIComponent(teks).replace(/%20/g, '+')}`;

export const KESENIAN = [
  {
    nama: 'Reog Ponorogo',
    aksara: 'ꦫꦺꦪꦺꦴꦒ꧀ꦥꦺꦴꦤꦺꦴꦫꦺꦴꦒꦺꦴ',
    daerah: 'Ponorogo',
    gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ78AFx7T5KqefG0jz3GmlfWYPT8nlG4ra0D7EfVgQukQ&s=10',
    cadangan: ph('800x600', 'Reog Ponorogo'),
    deskripsi:
      'Tarian kolosal utama dengan sosok <strong>Dadak Merak</strong> seberat 50 kg yang diangkat hanya dengan kekuatan gigitan gigi sang pembarong, diiringi Warok dan Jatilan.',
    ikon: 'fa-shield-halved',
    label: 'Simbol Keberanian',
    catatan: 'Warisan UNESCO',
    animasi: 'reveal-abstract-skew',
  },
  {
    nama: 'Ludruk Jawa Timur',
    aksara: 'ꦭꦸꦢ꧀ꦫꦸꦏ꧀',
    daerah: 'Surabaya / Malang',
    gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2nqjkTGGPXvWAY0O851htFgi395NImYAtbEaIpym4Jg&s=10',
    cadangan: ph('800x600', 'Ludruk Arekan'),
    deskripsi:
      'Teater drama tradisional rakyat Arekan dengan bahasa sehari-hari (Suroboyoan/Ngoko), kidungan humoris, serta pesan pencerahan sosial politik yang merakyat.',
    ikon: 'fa-masks-theater',
    label: 'Teater Rakyat',
    catatan: 'Kidungan Jowo',
    animasi: 'reveal-spiral-twist',
  },
  {
    nama: 'Tari Remo',
    aksara: 'ꦠꦫꦶꦉꦩꦺꦴ',
    daerah: 'Jombang / Surabaya',
    gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1dLiaID3dwvBN6Wcc9DLa09mM1x1q3sE1ZeWneQ55CA&s=10',
    cadangan: ph('800x600', 'Tari Remo'),
    deskripsi:
      'Tarian penyambutan tamu agung khas Jawa Timur dengan gerakan kaki yang tegas, gemerincing lonceng gelang kaki (gelang gongseng), serta kibasan sampur yang energik.',
    ikon: 'fa-person-walking-arrow-right',
    label: 'Tarian Pembuka',
    catatan: 'Gongseng Kaki',
    animasi: 'reveal-elastic-slide',
  },
  {
    nama: 'Tari Gandrung Osing',
    aksara: 'ꦠꦫꦶꦒꦤ꧀ꦢ꧀ꦫꦸꦁ',
    daerah: 'Banyuwangi (Osing)',
    gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqYv9yBejEUHAbfz43qFIXOTRkozukXO85Y4Ai55VQTw&s=10',
    cadangan: ph('800x600', 'Tari Gandrung Banyuwangi'),
    deskripsi:
      'Tarian wujud rasa syukur masyarakat Suku Osing Banyuwangi usai panen raya, dipadu dengan kostum mahkota Omprok bersayap kancana yang memikat.',
    ikon: 'fa-wheat-awn',
    label: 'Wujud Syukur Panen',
    catatan: 'Mahkota Omprok',
    animasi: 'reveal-3d-flip',
  },
  {
    nama: 'Karapan Sapi Madura',
    aksara: 'ꦏꦫꦥꦤ꧀ꦱꦥꦶ',
    daerah: 'Pulau Madura',
    gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0pfBhDjvI5IJBzPe2I08SQ5cMJ4VB_TPd_w32lrQDNw&s=10',
    cadangan: ph('1200x600', 'Karapan Sapi Madura'),
    deskripsi:
      'Pacuan sapi tradisional bergengsi tinggi khas Madura tempat sepasang sapi jantan dihiasi ukiran emas ditarik oleh joki (tunggeng) melaju cepat di lintasan 100 meter. Simbol ketangguhan &amp; martabat harga diri (harkat).',
    ikon: 'fa-trophy',
    label: 'Adat Pesisir Madura',
    catatan: 'Iringan Saronen',
    animasi: 'reveal-abstract-skew',
    lebar: true,
  },
] as const;

export const ADAT = [
  {
    nama: 'Rumah Joglo Jatim',
    aksara: 'ꦗꦺꦴꦒ꧀ꦭꦺꦴꦗꦮꦠꦶꦩꦸꦂ',
    ikon: 'fa-house-chimney',
    gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpGgZf1GWL_tE5vywGElVPZe1xJ-ZSAje79H3UGbuWsA&s=10',
    cadangan: ph('600x400', 'Joglo Jawa Timur'),
    deskripsi:
      'Arsitektur limasan bermaterial kayu jati dengan atap berbentuk trapesium tinggi. Memiliki fondasi pendopo terbuka untuk menyambut tamu serta nilai filosofis keterbukaan sosial.',
    animasi: 'reveal-elastic-slide',
  },
  {
    nama: "Baju Pesa'an & Kebaya",
    aksara: 'ꦧꦗꦸꦥꦺꦱꦄꦤ꧀',
    ikon: 'fa-shirt',
    gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1QodKVMc01bg1gIQPEl7eHnA9G0HjnT4Y_paCZF9vHg&s=10',
    cadangan: ph('600x400', "Baju Pesa'an Madura"),
    deskripsi:
      "<strong>Pesa'an Madura:</strong> Kaos garis merah-putih berlapis luaran hitam longgar dengan ikatan Odheng di kepala, mencerminkan ketegasan, keberanian, dan kesederhanaan.",
    animasi: 'reveal-spiral-twist',
  },
  {
    nama: 'Keris & Clurit',
    aksara: 'ꦏꦼꦫꦶꦱ꧀ꦭꦤ꧀ꦕ꧀ꦭꦸꦫꦶꦠ꧀',
    ikon: 'fa-khanda',
    gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQbOfKa9DDEF3aKHAwkwhoWze6TNlVhNmpCHzz3Fdzww&s=10',
    cadangan: ph('600x400', 'Keris Mataraman & Clurit'),
    deskripsi:
      '<strong>Keris Mataraman:</strong> Pusaka berlekuk (luk) bernilai spiritual dan kehormatan.<br><strong>Clurit Madura:</strong> Senjata melengkung berbentuk bulan sabit simbol keberanian tak gentar.',
    animasi: 'reveal-3d-flip',
  },
] as const;

export const KULINER = [
  {
    nama: 'Rawon Daging Kluwek',
    aksara: 'ꦫꦮꦺꦴꦤ꧀',
    daerah: 'Surabaya / Pasuruan',
    gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYMuGh7rZJ4x3QuPFxRHU2IXUNT8t8Ij6WcNfMOKKP9w&s=10',
    cadangan: ph('600x400', 'Rawon Kluwek'),
    deskripsi: 'Sup daging sapi khas berbumbu rempah kluwek hitam pekat alami, disajikan dengan kecambah pendek, telur asin, dan sambal terasi.',
    animasi: 'reveal-abstract-skew',
  },
  {
    nama: 'Rujak Cingur',
    aksara: 'ꦫꦸꦗꦏ꧀ꦕꦶꦔꦸꦂ',
    daerah: 'Surabaya',
    gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnuP56TeR_3ly3RbBrycZcpSfUR6-XcfloKR38YTo0qA&s=10',
    cadangan: ph('600x400', 'Rujak Cingur'),
    deskripsi: 'Racikan cingur (mulut sapi), kangkung, bendoyo, tahu, tempe dengan bumbu ulekan petis udang khas Surabaya yang lezat nikmat.',
    animasi: 'reveal-spiral-twist',
  },
  {
    nama: 'Sate Ayam Ponorogo',
    aksara: 'ꦱꦠꦺꦥꦺꦴꦤꦺꦴꦫꦺꦴꦒꦺꦴ',
    daerah: 'Ponorogo',
    gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJliAQe4f2mLtGxlnGWYvawbym4_sz-fXbnps6HRZ8sQ&s=10',
    cadangan: ph('600x400', 'Sate Ponorogo'),
    deskripsi: 'Potongan filet ayam panjang tanpa lemak yang dimarinasi bumbu rempah halus sebelum dibakar, disiram bumbu kacang lembut memikat.',
    animasi: 'reveal-elastic-slide',
  },
  {
    nama: 'Bebek Goreng Sinjay',
    aksara: 'ꦧꦼꦧꦼꦏ꧀ꦱꦶꦚ꧀ꦗꦪ꧀',
    daerah: 'Bangkalan, Madura',
    gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcLNrzbgSG4Y__If2SpO3k5bUYAEgnH_67G1ZRYx0ftg&s=10',
    cadangan: ph('600x400', 'Bebek Sinjay Bangkalan'),
    deskripsi: 'Daging bebek empuk gurih khas Bangkalan disajikan lengkap dengan taburan bumbu kremes rempah dan sambal pencit (mangga muda) pedas segar.',
    animasi: 'reveal-3d-flip',
  },
  {
    nama: 'Nasi Tempong',
    aksara: 'ꦤꦱꦶꦠꦼꦩ꧀ꦥꦺꦴꦁ',
    daerah: 'Banyuwangi',
    gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQouTkSZGl4LGOGxY3E4LKGlaTHjmJJdwoIsknB33Jw-w&s=10',
    cadangan: ph('600x400', 'Nasi Tempong Banyuwangi'),
    deskripsi: 'Hidangan nasi hangat khas Suku Osing dengan sayuran rebus dan sambal ranti mentah yang rasa pedasnya menyengat bagai ditampar ("tempong").',
    animasi: 'reveal-abstract-skew',
  },
  {
    nama: 'Lontong Kupang',
    aksara: 'ꦭꦺꦴꦤ꧀ꦠꦺꦴꦁꦏꦸꦥꦁ',
    daerah: 'Sidoarjo',
    gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgOxk8mCTItP3zmZdouMATuoRKGbRV5OsFPSUjqveORQ&s=10',
    cadangan: ph('600x400', 'Lontong Kupang Sidoarjo'),
    deskripsi: 'Kuliner pesisir Sidoarjo berupa lontong dengan kerang kupang kecil, lentho singkong, kuah petis gurih, dan es kelapa muda penawar racun.',
    animasi: 'reveal-spiral-twist',
  },
] as const;

export const PITUTUR = [
  { aksara: 'ꦈꦫꦶꦥ꧀ꦲꦶꦏꦸꦈꦫꦸꦥ꧀', jawa: 'Urip Iku Urup', arti: 'Hidup itu hendaknya memberi manfaat dan menerangi orang lain di sekitarnya.' },
  { aksara: 'ꦩꦩꦪꦸꦲꦪꦸꦤꦶꦁꦧꦮꦤ', jawa: 'Memayu Hayuning Bawana', arti: 'Menjaga, memperindah, dan menyelamatkan kelestarian alam serta keharmonisan dunia.' },
  { aksara: 'ꦱꦸꦫꦢꦶꦫꦗꦪꦤꦶꦁꦫꦠ꧀ꦊꦧꦸꦂꦢꦺꦤꦶꦁꦥꦔꦱ꧀ꦠꦸꦠꦶ', jawa: 'Sura Dira Jayaningrat Lebur Dening Pangastuti', arti: 'Segala kejahatan dan amarah yang kuat akan lebur oleh kelembutan serta kebaikan.' },
  { aksara: 'ꦗꦼꦂꦧꦱꦸꦏꦶꦩꦮꦧꦺꦪ', jawa: 'Jer Basuki Mawa Beya', arti: 'Setiap kejayaan, cita-cita mulia, dan keberhasilan membutuhkan kerja keras serta pengorbanan.' },
] as const;

export const SOAL_QUIZ: readonly Soal[] = [
  {
    q: 'Tarian khas Suku Osing di Banyuwangi sebagai wujud rasa syukur atas hasil panen melimpah adalah...',
    opsi: ['Tari Remo', 'Tari Gandrung', 'Tari Saman', 'Tari Kecak'],
    jawaban: 1,
  },
  {
    q: 'Seni pertunjukan Reog Ponorogo terkenal dengan sosok penari yang membawa topeng mahkota raksasa dinamakan...',
    opsi: ['Barongan & Dadak Merak', 'Ondel-ondel', 'Barong Tagalog', 'Bantengan'],
    jawaban: 0,
  },
  {
    q: 'Tradisi pacuan sapi jantan hias khas Pulau Madura yang sarat gengsi dan harkat adalah...',
    opsi: ['Karapan Sapi', 'Yadnya Kasada', 'Kebo-keboan', 'Petik Laut'],
    jawaban: 0,
  },
  {
    q: "Semboyan resmi Provinsi Jawa Timur 'Jer Basuki Mawa Beya' mengandung arti...",
    opsi: ['Persatuan dalam Keberagaman', 'Keberhasilan Membutuhkan Pengorbanan & Kerja Keras', 'Keindahan Lautan dan Gunung', 'Kemenangan Kerajaan Majapahit'],
    jawaban: 1,
  },
  {
    q: 'Kuliner khas Jawa Timur berbumbu kluwek hitam pekat yang gurih lezat adalah...',
    opsi: ['Rendang', 'Rawon', 'Gudeg', 'Soto Betawi'],
    jawaban: 1,
  },
  {
    q: 'Seni teater asli Jombang yang menjadi cikal bakal Ludruk adalah...',
    opsi: ['Wayang Beber', 'Besutan', 'Kethek Ogleng', 'Dongkrek'],
    jawaban: 1,
  },
];

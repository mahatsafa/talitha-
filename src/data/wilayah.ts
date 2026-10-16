import type { Wilayah, Zona } from '../lib/wilayah';

// 29 kabupaten + 9 kota. Kode = kode wilayah BPS (kunci path di peta-jatim.json).
// tengger: kabupaten yang wilayahnya mencakup permukiman Suku Tengger (kawasan Bromo).
export const WILAYAH: readonly Wilayah[] = [
  // Arekan
  { kode: '3578', nama: 'Kota Surabaya', zona: 'Arekan', seni: 'Ludruk, Tari Remo', kuliner: 'Rujak Cingur, Rawon', pusat: 'Ibu Kota Provinsi' },
  { kode: '3515', nama: 'Kabupaten Sidoarjo', zona: 'Arekan', seni: 'Tari Banjarkemuning', kuliner: 'Lontong Kupang, Bandeng Presto', pusat: 'Sidoarjo' },
  { kode: '3507', nama: 'Kabupaten Malang', zona: 'Arekan', tengger: true, seni: 'Wayang Topeng Malangan', kuliner: 'Bakso Malang, Cwi Mie', pusat: 'Kepanjen' },
  { kode: '3573', nama: 'Kota Malang', zona: 'Arekan', seni: 'Boso Walikan, Tari Beskalan', kuliner: 'Bakso Bakar, Keripik Tempe', pusat: 'Kota Malang' },
  { kode: '3579', nama: 'Kota Batu', zona: 'Arekan', seni: 'Tari Bantengan', kuliner: 'Ketan Bintul, Apel Malang', pusat: 'Kota Batu' },
  { kode: '3514', nama: 'Kabupaten Pasuruan', zona: 'Arekan', tengger: true, seni: 'Seni Terbang Jidor', kuliner: 'Nasi Punel, Bipang Jangkar', pusat: 'Bangil' },
  { kode: '3575', nama: 'Kota Pasuruan', zona: 'Arekan', seni: 'Gandrung Pasuruan', kuliner: 'Roti Cikar', pusat: 'Kota Pasuruan' },
  { kode: '3516', nama: 'Kabupaten Mojokerto', zona: 'Arekan', seni: 'Bantengan, Wayang Beber', kuliner: 'Onde-onde, Sambal Wader', pusat: 'Mojosari' },
  { kode: '3576', nama: 'Kota Mojokerto', zona: 'Arekan', seni: 'Ludruk Mojokerto', kuliner: 'Onde-Onde Bo Liem', pusat: 'Kota Mojokerto' },
  { kode: '3525', nama: 'Kabupaten Gresik', zona: 'Arekan', seni: 'Tari Pencak Macan', kuliner: 'Nasi Krawu, Otak-otak Bandeng', pusat: 'Gresik' },
  { kode: '3517', nama: 'Kabupaten Jombang', zona: 'Arekan', seni: 'Besutan (cikal bakal Ludruk), Tari Remo', kuliner: 'Soto Dok, Ketan Merdeka', pusat: 'Jombang' },

  // Mataraman
  { kode: '3502', nama: 'Kabupaten Ponorogo', zona: 'Mataraman', seni: 'Reog Ponorogo', kuliner: 'Sate Ayam Ponorogo, Es Pleret', pusat: 'Ponorogo' },
  { kode: '3506', nama: 'Kabupaten Kediri', zona: 'Mataraman', seni: 'Jaranan Kediri', kuliner: 'Tahu Takwa, Gethuk Pisang', pusat: 'Ngasem' },
  { kode: '3571', nama: 'Kota Kediri', zona: 'Mataraman', seni: 'Jaranan Pegon', kuliner: 'Tahu Kuning, Soto Kediri', pusat: 'Kota Kediri' },
  { kode: '3519', nama: 'Kabupaten Madiun', zona: 'Mataraman', seni: 'Dongkrek', kuliner: 'Nasi Pecel Madiun', pusat: 'Caruban' },
  { kode: '3577', nama: 'Kota Madiun', zona: 'Mataraman', seni: 'Pencak Silat Gelanggang', kuliner: 'Brem Madiun, Pecel', pusat: 'Kota Madiun' },
  { kode: '3505', nama: 'Kabupaten Blitar', zona: 'Mataraman', seni: 'Jaranan Tril', kuliner: 'Nasi Ampok, Es Drop', pusat: 'Kanigoro' },
  { kode: '3572', nama: 'Kota Blitar', zona: 'Mataraman', seni: 'Tari Jipat', kuliner: 'Pecel Blitar', pusat: 'Kota Blitar' },
  { kode: '3518', nama: 'Kabupaten Nganjuk', zona: 'Mataraman', seni: 'Tari Salipuk', kuliner: 'Nasi Becek, Dumbleg', pusat: 'Nganjuk' },
  { kode: '3504', nama: 'Kabupaten Tulungagung', zona: 'Mataraman', seni: 'Tari Reog Kendang', kuliner: 'Sompil, Ayam Lodho', pusat: 'Tulungagung' },
  { kode: '3503', nama: 'Kabupaten Trenggalek', zona: 'Mataraman', seni: 'Tari Turonggo Yakso', kuliner: 'Nasi Tiwul, Alen-Alen', pusat: 'Trenggalek' },
  { kode: '3501', nama: 'Kabupaten Pacitan', zona: 'Mataraman', seni: 'Kethek Ogleng', kuliner: 'Nasi Tiwul, Salesi', pusat: 'Pacitan' },
  { kode: '3521', nama: 'Kabupaten Ngawi', zona: 'Mataraman', seni: 'Tari Orek-Orek', kuliner: 'Tepo Tahu, Keripik Tempe', pusat: 'Ngawi' },
  { kode: '3520', nama: 'Kabupaten Magetan', zona: 'Mataraman', seni: 'Tari Jalak Lawu', kuliner: 'Jeruk Pamelo, Tepo Kecipir', pusat: 'Magetan' },

  // Tapak Kuda / Osing
  { kode: '3510', nama: 'Kabupaten Banyuwangi', zona: 'Tapak Kuda', seni: 'Tari Gandrung, Seblang', kuliner: 'Nasi Tempong, Rujak Soto', pusat: 'Banyuwangi' },
  { kode: '3509', nama: 'Kabupaten Jember', zona: 'Tapak Kuda', seni: 'Jember Fashion Carnaval, Can-Macanan', kuliner: 'Suwar-Suwir, Proll Tape', pusat: 'Jember' },
  { kode: '3511', nama: 'Kabupaten Bondowoso', zona: 'Tapak Kuda', seni: 'Seni Singo Ulung', kuliner: 'Tape Tiga Dewi', pusat: 'Bondowoso' },
  { kode: '3512', nama: 'Kabupaten Situbondo', zona: 'Tapak Kuda', seni: 'Tari Landung', kuliner: 'Nasi Karak, Tajin Palapa', pusat: 'Situbondo' },
  { kode: '3508', nama: 'Kabupaten Lumajang', zona: 'Tapak Kuda', tengger: true, seni: 'Tari Topeng Kaliwogu', kuliner: 'Keripik Pisang, Ketan Bintul', pusat: 'Lumajang' },
  { kode: '3513', nama: 'Kabupaten Probolinggo', zona: 'Tapak Kuda', tengger: true, seni: 'Tari Kiprah Ratu, Upacara Yadnya Kasada (Tengger)', kuliner: 'Soto Kraksaan, Anggur', pusat: 'Kraksaan' },
  { kode: '3574', nama: 'Kota Probolinggo', zona: 'Tapak Kuda', seni: 'Jaran Bodhag', kuliner: 'Nasi Campur Probolinggo', pusat: 'Kota Probolinggo' },

  // Madura
  { kode: '3526', nama: 'Kabupaten Bangkalan', zona: 'Madura', seni: 'Karapan Sapi, Tari Muara Rejeki', kuliner: 'Bebek Sinjay, Nasi Serpang', pusat: 'Bangkalan' },
  { kode: '3527', nama: 'Kabupaten Sampang', zona: 'Madura', seni: 'Seni Daul Combo', kuliner: 'Nasi Kobel, Kaldu Kokot', pusat: 'Sampang' },
  { kode: '3528', nama: 'Kabupaten Pamekasan', zona: 'Madura', seni: 'Tari Saronen, Kerapan Sapi', kuliner: 'Sate Lalat, Campor', pusat: 'Pamekasan' },
  { kode: '3529', nama: 'Kabupaten Sumenep', zona: 'Madura', seni: 'Tari Muaghar, Musik Saronen', kuliner: 'Campor Sumenep, Rujak Corek', pusat: 'Sumenep' },

  // Pantura
  { kode: '3523', nama: 'Kabupaten Tuban', zona: 'Pantura', seni: 'Tari Thak-Thakan, Batik Tuban', kuliner: 'Rajungan Pedas, Tuak Legen', pusat: 'Tuban' },
  { kode: '3524', nama: 'Kabupaten Lamongan', zona: 'Pantura', seni: 'Tari Boran', kuliner: 'Soto Lamongan, Nasi Boran', pusat: 'Lamongan' },
  { kode: '3522', nama: 'Kabupaten Bojonegoro', zona: 'Pantura', seni: 'Tari Thengul', kuliner: 'Ledre, Sego Buwuhan', pusat: 'Bojonegoro' },
];

export const ZONA: readonly { id: Zona; label: string; warna: string }[] = [
  { id: 'Arekan', label: 'Arekan', warna: '#d4af37' },
  { id: 'Mataraman', label: 'Mataraman', warna: '#b5542c' },
  { id: 'Tapak Kuda', label: 'Tapak Kuda / Osing', warna: '#c98a2e' },
  { id: 'Tengger', label: 'Tengger', warna: '#f3e5ab' },
  { id: 'Madura', label: 'Madura', warna: '#9e2a2a' },
  { id: 'Pantura', label: 'Pantura', warna: '#8a7a2a' },
];

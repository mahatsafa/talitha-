// Mesin suara gamelan berbasis Web Audio API (tanpa file audio).
import { frekuensiPelog } from '../lib/pelog';

let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let analyser: AnalyserNode | null = null;
let aktif = true;
let bunyiSampai = 0; // waktu (ctx.currentTime) suara terakhir selesai
const pendengar = new Set<() => void>();

const MAKS_SUARA = 24; // batas suara bersamaan; lebih dari ini diabaikan
let suaraJalan = 0;

export function suaraAktif() {
  return aktif;
}

export function aturSuara(nyala: boolean) {
  aktif = nyala;
}

export function getAnalyser() {
  return analyser;
}

export function sedangBerbunyi() {
  return !!ctx && ctx.currentTime < bunyiSampai;
}

// Dipanggil setiap ada suara baru (dipakai visualizer)
export function saatBerbunyi(fn: () => void) {
  pendengar.add(fn);
}

function siapkan(): AudioContext | null {
  if (!aktif) return null;
  if (!ctx) {
    const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0.7;
    const kompresor = ctx.createDynamicsCompressor();
    analyser = ctx.createAnalyser();
    analyser.fftSize = 1024;
    master.connect(kompresor).connect(analyser).connect(ctx.destination);
  }
  if (ctx.state === 'suspended') void ctx.resume();
  return ctx;
}

interface Parsial {
  rasio: number;
  gain: number;
  durasi: number;
  detune?: number; // Hz
}

function bunyikan(dasar: number, parsial: Parsial[], geserNada = 1) {
  const c = siapkan();
  if (!c || !master || suaraJalan >= MAKS_SUARA) return;
  const t = c.currentTime;
  let selesai = t;
  for (const p of parsial) {
    const osc = c.createOscillator();
    const g = c.createGain();
    osc.type = 'sine';
    const f = dasar * p.rasio + (p.detune ?? 0);
    osc.frequency.setValueAtTime(f, t);
    if (geserNada !== 1) osc.frequency.exponentialRampToValueAtTime(f * geserNada, t + p.durasi);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(p.gain, t + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t + p.durasi);
    osc.connect(g).connect(master);
    osc.start(t);
    osc.stop(t + p.durasi + 0.05);
    suaraJalan++;
    osc.onended = () => suaraJalan--;
    selesai = Math.max(selesai, t + p.durasi);
  }
  bunyiSampai = Math.max(bunyiSampai, selesai);
  pendengar.forEach((fn) => fn());
}

// Bilah saron/bonang: parsial inharmonik khas logam
export function mainkanNada(nada: number) {
  bunyikan(frekuensiPelog(nada), [
    { rasio: 1, gain: 0.5, durasi: 1.8 },
    { rasio: 1, gain: 0.18, durasi: 1.6, detune: 2.5 },
    { rasio: 2.76, gain: 0.16, durasi: 0.7 },
    { rasio: 5.4, gain: 0.06, durasi: 0.25 },
  ]);
}

// Gong ageng: nada rendah dengan "ombak" (dua frekuensi berdekatan) dan sedikit turun
export function mainkanGong() {
  bunyikan(
    62,
    [
      { rasio: 1, gain: 0.7, durasi: 5 },
      { rasio: 1, gain: 0.5, durasi: 5, detune: 1.6 },
      { rasio: 2.02, gain: 0.22, durasi: 3 },
      { rasio: 2.98, gain: 0.12, durasi: 2 },
      { rasio: 4.1, gain: 0.05, durasi: 1 },
    ],
    0.94,
  );
}

export function bunyiSalah() {
  bunyikan(180, [
    { rasio: 1, gain: 0.35, durasi: 0.5 },
    { rasio: 1.06, gain: 0.25, durasi: 0.5 },
  ]);
}

// Partikel emas melayang + animasi masuk saat discroll.

const kurangiGerak = matchMedia('(prefers-reduced-motion: reduce)').matches;

function mulaiPartikel() {
  const canvas = document.getElementById('particlesCanvas') as HTMLCanvasElement | null;
  if (!canvas || kurangiGerak) return;
  const c = canvas.getContext('2d');
  if (!c) return;

  const MAKS_PARTIKEL = 60;
  interface P { x: number; y: number; r: number; vy: number; vx: number; a: number }
  let partikel: P[] = [];

  const baru = (acakY: boolean): P => ({
    x: Math.random() * canvas.width,
    y: acakY ? Math.random() * canvas.height : canvas.height + Math.random() * 100,
    r: Math.random() * 2.5 + 0.5,
    vy: Math.random() * 1.2 + 0.3,
    vx: (Math.random() - 0.5) * 0.5,
    a: Math.random() * 0.7 + 0.3,
  });

  const ukur = () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    // kepadatan mengikuti luas layar, dibatasi MAKS_PARTIKEL
    const n = Math.min(MAKS_PARTIKEL, Math.round((innerWidth * innerHeight) / 30000));
    partikel = Array.from({ length: n }, () => baru(true));
  };
  addEventListener('resize', ukur);
  ukur();

  let jalan = true;
  const langkah = () => {
    if (!jalan) return;
    c.clearRect(0, 0, canvas.width, canvas.height);
    for (const p of partikel) {
      p.y -= p.vy;
      p.x += p.vx;
      if (p.y < -10) Object.assign(p, baru(false));
      c.fillStyle = `rgba(212, 175, 55, ${p.a})`;
      c.beginPath();
      c.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      c.fill();
    }
    requestAnimationFrame(langkah);
  };
  // berhenti saat tab tidak terlihat supaya hemat baterai
  document.addEventListener('visibilitychange', () => {
    jalan = !document.hidden;
    if (jalan) requestAnimationFrame(langkah);
  });
  requestAnimationFrame(langkah);
}

function mulaiReveal() {
  const el = document.querySelectorAll('.reveal-init');
  if (kurangiGerak || !('IntersectionObserver' in window)) {
    el.forEach((e) => e.classList.add('active'));
    return;
  }
  const pengamat = new IntersectionObserver(
    (entri) => {
      for (const e of entri) {
        if (e.isIntersecting) {
          e.target.classList.add('active');
          pengamat.unobserve(e.target);
        }
      }
    },
    { threshold: 0.15 },
  );
  el.forEach((e) => pengamat.observe(e));
}

mulaiPartikel();
mulaiReveal();

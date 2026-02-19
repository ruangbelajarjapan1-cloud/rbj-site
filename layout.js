// File: layout.js
const siteHeader = `
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
      <a href="index.html" class="flex items-center gap-3 group">
        <img src="logo.jpg" class="h-10 w-10 rounded-xl object-contain shadow-sm group-hover:scale-105 transition duration-300" onerror="this.src='favicon-32x32.png'">
        <div>
          <h1 class="font-extrabold text-xl text-slate-900 tracking-tight" data-i18n="brand.name">RBM Jepang</h1>
        </div>
      </a>
      
      <nav class="hidden md:flex items-center gap-1 bg-slate-50/80 p-1.5 rounded-full text-sm font-semibold border border-slate-200/60">
        <a href="tentang.html" class="px-5 py-2 rounded-full text-slate-600 hover:bg-white hover:text-primary-600 hover:shadow-sm transition" data-i18n="nav.tentang">Tentang</a>
        <a href="program.html" class="px-5 py-2 rounded-full text-slate-600 hover:bg-white hover:text-primary-600 hover:shadow-sm transition" data-i18n="nav.program">Program</a>
        <a href="index.html#jadwal" class="px-5 py-2 rounded-full text-slate-600 hover:bg-white hover:text-primary-600 hover:shadow-sm transition" data-i18n="nav.jadwal">Jadwal</a>
        <a href="artikel.html" class="px-5 py-2 rounded-full text-slate-600 hover:bg-white hover:text-primary-600 hover:shadow-sm transition" data-i18n="nav.artikel">Artikel</a>
        <a href="galeri.html" class="px-5 py-2 rounded-full text-slate-600 hover:bg-white hover:text-primary-600 hover:shadow-sm transition" data-i18n="nav.galeri">Galeri</a>
        <a href="kontak.html" class="px-5 py-2 rounded-full text-slate-600 hover:bg-white hover:text-primary-600 hover:shadow-sm transition" data-i18n="nav.kontak">Kontak</a>
      </nav>

      <div class="hidden md:flex items-center gap-3">
        <div class="flex bg-slate-100 rounded-xl p-1 border border-slate-200">
          <button data-lang-btn="id" onclick="changeLang('id')" class="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 hover:bg-white transition">ID</button>
          <button data-lang-btn="ja" onclick="changeLang('ja')" class="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 hover:bg-white transition">JA</button>
        </div>
        <button onclick="openDaftarModal()" class="px-6 py-2.5 rounded-xl bg-primary-600 text-white text-sm font-bold shadow-lg shadow-primary-500/30 hover:bg-primary-700 hover:-translate-y-0.5 transition-all" data-i18n="nav.daftar">Daftar</button>
      </div>

      <button id="menuBtn" class="md:hidden p-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-primary-600 transition">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </button>
    </div>

    <div id="mobileMenu" class="md:hidden hidden border-t border-slate-100 bg-white absolute w-full shadow-2xl pb-4 rounded-b-3xl">
      <nav class="max-w-7xl mx-auto px-4 py-4 grid gap-2 text-sm font-semibold">
        <a href="tentang.html" class="p-4 rounded-2xl text-slate-700 hover:bg-slate-50 hover:text-primary-600 transition flex items-center gap-3"><span class="text-xl">🏢</span> Tentang Kami</a>
        <a href="program.html" class="p-4 rounded-2xl text-slate-700 hover:bg-slate-50 hover:text-primary-600 transition flex items-center gap-3"><span class="text-xl">📚</span> Program</a>
        <a href="index.html#jadwal" class="p-4 rounded-2xl text-slate-700 hover:bg-slate-50 hover:text-primary-600 transition flex items-center gap-3"><span class="text-xl">🕌</span> Jadwal Shalat</a>
        <a href="artikel.html" class="p-4 rounded-2xl text-slate-700 hover:bg-slate-50 hover:text-primary-600 transition flex items-center gap-3"><span class="text-xl">📰</span> Artikel</a>
        <a href="galeri.html" class="p-4 rounded-2xl text-slate-700 hover:bg-slate-50 hover:text-primary-600 transition flex items-center gap-3"><span class="text-xl">📸</span> Galeri</a>
        <a href="kontak.html" class="p-4 rounded-2xl text-slate-700 hover:bg-slate-50 hover:text-primary-600 transition flex items-center gap-3"><span class="text-xl">💬</span> Kontak</a>
        <button onclick="openDaftarModal()" class="w-full mt-2 px-4 py-3 rounded-xl bg-primary-600 text-white text-center font-bold">Daftar Sekarang</button>
      </nav>
    </div>
  </header>
`;

const siteFooter = `
  <footer class="py-12 border-t border-slate-200 mt-16 bg-white">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex flex-col md:flex-row gap-6 md:items-center justify-between">
        <div>
          <a href="index.html" class="flex items-center gap-3 mb-4">
            <img src="logo.jpg" class="h-8 w-8 rounded-lg object-contain shadow-sm" onerror="this.src='favicon-32x32.png'">
            <span class="font-extrabold text-lg text-slate-900 tracking-tight" data-i18n="brand.name">RBM Jepang</span>
          </a>
          <p class="text-sm text-slate-500 font-medium">© <span id="year"></span> Hak Cipta Dilindungi.</p>
        </div>
        <div class="flex gap-6 font-semibold text-sm text-slate-500">
          <a href="tentang.html" class="hover:text-primary-600 transition">Tentang</a>
          <a href="#" class="hover:text-primary-600 transition">Privasi</a>
          <a href="#" class="hover:text-primary-600 transition">Syarat & Ketentuan</a>
        </div>
      </div>
    </div>
  </footer>
`;

// Komponen Popup Google Form Global
const siteModalDaftar = `
  <div id="modalDaftar" class="fixed inset-0 z-[100] bg-slate-900/80 hidden flex-col items-center justify-center p-4 md:p-10 backdrop-blur-sm transition-opacity opacity-0">
    <div class="bg-white w-full max-w-4xl h-full md:h-[85vh] rounded-3xl flex flex-col overflow-hidden shadow-2xl transform scale-95 transition-transform duration-300 relative">
      <div class="h-16 flex items-center justify-between px-6 border-b border-slate-100 bg-white shrink-0">
        <span class="font-extrabold text-lg text-slate-800">Pendaftaran RBMJ</span>
        <button onclick="closeDaftarModal()" class="text-3xl text-slate-400 hover:text-red-500 transition">&times;</button>
      </div>
      <div class="flex-1 w-full bg-slate-50 relative overflow-hidden">
        <iframe src="https://forms.gle/dxqRenLyLq3KJ6cr5" class="absolute inset-0 w-full h-full border-0"></iframe>
      </div>
    </div>
  </div>
`;

// Fungsi Buka Tutup Modal Daftar
window.openDaftarModal = function() {
  const modal = document.getElementById('modalDaftar');
  if(modal) {
    modal.classList.remove('hidden');
    setTimeout(() => { modal.classList.remove('opacity-0'); modal.children[0].classList.remove('scale-95'); }, 10);
  }
};
window.closeDaftarModal = function() {
  const modal = document.getElementById('modalDaftar');
  if(modal) {
    modal.classList.add('opacity-0'); modal.children[0].classList.add('scale-95');
    setTimeout(() => { modal.classList.add('hidden'); }, 300);
  }
};

document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.getElementById("header-container");
    const footerContainer = document.getElementById("footer-container");
    
    if(headerContainer) headerContainer.innerHTML = siteHeader;
    // Inject Footer dan Modal Daftar di akhir body
    if(footerContainer) footerContainer.innerHTML = siteFooter + siteModalDaftar;

    const yearEl = document.getElementById('year');
    if(yearEl) yearEl.textContent = new Date().getFullYear();

    const btn = document.getElementById('menuBtn');
    const menu = document.getElementById('mobileMenu');
    if(btn && menu) btn.addEventListener('click', () => menu.classList.toggle('hidden'));
});

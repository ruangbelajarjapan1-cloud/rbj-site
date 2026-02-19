// File: layout.js
// Ini adalah "Komponen Pusat" untuk Header dan Footer di halaman internal

const siteHeader = `
  <header class="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <a href="index.html" class="flex items-center gap-3">
          <img src="logo.jpg" class="h-9 w-9 rounded-lg ring-1 ring-primary-200" alt="Logo RBMJ" onerror="this.src='favicon-32x32.png'">
          <span class="font-bold text-lg" data-i18n="brand.name">Ruang Belajar Muslim Jepang</span>
        </a>
        <nav class="hidden md:flex items-center gap-5 text-sm">
          <a href="index.html#tentang" class="hover:text-primary-600 transition" data-i18n="nav.tentang">Tentang</a>
          <a href="index.html#program" class="hover:text-primary-600 transition" data-i18n="nav.program">Program</a>
          <a href="index.html#jadwal" class="hover:text-primary-600 transition" data-i18n="nav.jadwal">Jadwal</a>
          <a href="index.html#artikel" class="hover:text-primary-600 transition" data-i18n="nav.artikel">Artikel</a>
          <a href="index.html#galeri" class="hover:text-primary-600 transition" data-i18n="nav.galeri">Galeri</a>
          <a href="kontak.html" class="hover:text-primary-600 transition" data-i18n="nav.kontak">Kontak</a>
          <a href="index.html#daftar" class="px-4 py-2 rounded-xl bg-primary-600 text-white hover:bg-primary-700 transition shadow-sm" data-i18n="nav.daftar">Daftar</a>
          <div class="ml-1 inline-flex rounded-xl ring-1 ring-slate-200 overflow-hidden bg-slate-50">
            <button data-lang-btn="id" onclick="changeLang('id')" class="px-3 py-1.5 text-xs font-bold" data-i18n-lang-id>ID</button>
            <button data-lang-btn="ja" onclick="changeLang('ja')" class="px-3 py-1.5 text-xs font-bold" data-i18n-lang-ja>日本語</button>
          </div>
        </nav>
        <button id="menuBtn" class="md:hidden p-2 rounded-lg border text-slate-600 hover:bg-slate-50 transition">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
    </div>
    <div id="mobileMenu" class="md:hidden hidden border-t bg-slate-50 absolute w-full shadow-lg">
      <nav class="max-w-7xl mx-auto px-4 py-4 grid gap-3 text-sm font-medium">
        <a href="index.html#tentang" data-i18n="nav.tentang">Tentang</a>
        <a href="index.html#program" data-i18n="nav.program">Program</a>
        <a href="index.html#jadwal" data-i18n="nav.jadwal">Jadwal</a>
        <a href="index.html#artikel" data-i18n="nav.artikel">Artikel</a>
        <a href="index.html#galeri" data-i18n="nav.galeri">Galeri</a>
        <a href="kontak.html" data-i18n="nav.kontak">Kontak</a>
        <a href="index.html#daftar" class="px-4 py-2 rounded-xl bg-primary-600 text-white text-center" data-i18n="nav.daftar">Daftar Sekarang</a>
      </nav>
    </div>
  </header>
`;

const siteFooter = `
  <footer class="py-10 border-t border-slate-200 mt-10 bg-slate-50">
    <div class="max-w-7xl mx-auto px-4 text-sm text-slate-600 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
      <p class="font-medium">© <span id="year"></span> <span data-i18n="brand.name">Ruang Belajar Muslim Jepang</span>. <br class="md:hidden"/><span class="text-slate-400" data-i18n="footer.copyright">Semua hak cipta dilindungi.</span></p>
      <div class="flex gap-6 font-medium">
        <a href="#" class="hover:text-primary-600 transition">Privasi</a>
        <a href="#" class="hover:text-primary-600 transition">S&K</a>
      </div>
    </div>
  </footer>
`;

// Fungsi ini akan menyuntikkan HTML ke halaman saat loading selesai
document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.getElementById("header-container");
    const footerContainer = document.getElementById("footer-container");

    if(headerContainer) headerContainer.innerHTML = siteHeader;
    if(footerContainer) footerContainer.innerHTML = siteFooter;

    // Aktifkan tahun dinamis
    const yearEl = document.getElementById('year');
    if(yearEl) yearEl.textContent = new Date().getFullYear();

    // Aktifkan tombol menu mobile
    const btn = document.getElementById('menuBtn');
    const menu = document.getElementById('mobileMenu');
    if(btn && menu) {
        btn.addEventListener('click', () => menu.classList.toggle('hidden'));
    }
});

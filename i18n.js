(function () {
  const dict = {
    id: {
      'brand.name':'Ruang Belajar Muslim Jepang',
      'banner.text':'Assalamualaikum—Pendaftaran Kelas Menyambut masa Baligh dibuka sampai 30 September.',
      'banner.cta':'Daftar sekarang',
      'nav.tentang':'Tentang','nav.program':'Program','nav.jadwal':'Jadwal','nav.artikel':'Artikel','nav.galeri':'Galeri','nav.kontak':'Kontak','nav.daftar':'Daftar',
      'hero.title.pre':'Belajar islam sesuai sunnah ','hero.title.hl':'di Jepang',
      'hero.subtitle':'Platform komunitas Muslim untuk belajar islam sesuai sunnah di Jepang. Terbuka untuk anak-anak dan semua kalangan usia.',
      'hero.cta.primary':'Daftar Kegiatan','hero.cta.secondary':'Lihat Program',
      'hero.b1':'✅ Kelas rutin online & offline','hero.b2':'✅ Artikel','hero.b3':'✅ Info halal & komunitas','hero.b4':'✅ download materi / artikel',
      'event.nearby':'Event Terdekat','event.sample':'Kajian Online • Belum Terjadwalkan',
      'sec.tentang':'Tentang Kami',
      'tentang.p':'Ruang Belajar Muslim (RBM) Jepang adalah lembaga pendidikan nonformal yang berlokasi di Yokohama, sekitar 40 menit hingga 1 jam perjalanan dari Tokyo. RBM Jepang berdiri pada 18 Desember 2022, sebagai respons atas kebutuhan pendidikan agama dan bahasa Arab bagi anak-anak Muslim diaspora yang semakin meningkat di wilayah Yokohama dan sekitarnya. ',
      'sec.program':'Program & Kegiatan','card.jp.title':'Kelas Iqro` anak','card.jp.p':'hijaiyah.',
      'card.islam.title':'Kelas PAI Online','card.islam.p':'Adab, fiqh praktis.',
      'card.tahfidz.title':'Kelas Perbaikan Bacaan Al-Qur`an dewasa','card.tahfidz.p':'tajwid, hafalan.',
      'sec.jadwal':'Jadwal','sch.1':'Kelas Iqro` anak — Selasa ~ Kamis 15:30 JST','sch.2':'Kelas PAI Online — Kamis 19:30 JST','sch.3':'Kelas Perbaikan Bacaan Al-Qur`an dewasa — Ahad 21:00 JST',
      'sec.artikel':'Artikel & Informasi','art.1.t':'Tips Belajar','art.1.p':'Strategi belajar efektif.','art.2.t':'Panduan Masjid','art.2.p':'Lokasi tempat ibadah di Yokohama.','art.3.t':'Etika Kerja','art.3.p':'Kebiasaan profesional di Jepang.',
      'sec.galeri':'Galeri Kegiatan','galeri.p':'g1.jpg',
      'sec.kontak':'Kontak','kontak.email':'Email','kontak.wa':'WhatsApp / Telegram','btn.join':'Gabung Grup',
      'form.name':'Nama','form.email':'Email','form.message':'Pesan','form.send':'Kirim',
      'sec.daftar':'Pendaftaran','daftar.p':'Silakan isi form pendaftaran (gantikan embed di bawah dengan Google Form Anda).',
      'footer.copyright':'Semua hak cipta dilindungi.',
      'lang.id':'ID','lang.ja':'日本語',
      'back.home':'Kembali ke Beranda',
      'program.teacher.title':'Daftar Pengajar','program.module.title':'Modul (PDF)','program.module.sample':'Modul Contoh (PDF)',
      'artikel.intro':'Kumpulan tulisan pendek & info bermanfaat untuk komunitas.','artikel.readmore':'Baca selengkapnya',
      'galeri.intro':'Dokumentasi kegiatan—upload foto ke folder ini lalu ganti sumber gambarnya.'
    },
    ja: {
      'brand.name':'ルアンベラジャルムスリムジャパン',
      'banner.text':'お知らせ：思春期を迎えるためのクラスの受講申込は9月30日まで',
      'banner.cta':'今すぐ申し込む',
      'nav.tentang':'紹介','nav.program':'プログラム','nav.jadwal':'スケジュール','nav.artikel':'記事','nav.galeri':'ギャラリー','nav.kontak':'お問い合わせ','nav.daftar':'申込',
      'hero.title.pre':'スンナに沿って学ぶ ','hero.title.hl':'日本で',
      'hero.subtitle':'日本にいるムスリムのための学びのコミュニティ。誰でも参加できます。',
      'hero.cta.primary':'プログラムに申し込む','hero.cta.secondary':'プログラムを見る',
      'hero.b1':'✅ 定期オンライン・オフラインクラス','hero.b2':'✅ 資料','hero.b3':'✅ ハラール＆コミュニティ情報','hero.b4':'✅ 資料をダウンロード',
      'event.nearby':'近日イベント','event.sample':'イスラムの学び（オンライン）• 未定',
      'sec.tentang':'私たちについて',
      'tentang.p':'RBMジャパン（Ruang Belajar Muslim Japan）は、神奈川県横浜市に拠点を置く非公式教育機関です。東京から約40分〜1時間の距離に位置しています。2022年12月18日に設立されたRBMジャパンは、横浜および周辺地域に住むムスリムの子どもたちのために、宗教教育とアラビア語教育のニーズの高まりに応える形で誕生しました。',
      'sec.program':'プログラム・活動','card.jp.title':'イクロークラス','card.jp.p':'ﾋｼﾞｬｲﾔｰ',
      'card.islam.title':'子供用のイスラムクラス　オンライン','card.islam.p':'アダブ、実践フィクフ',
      'card.tahfidz.title':'大人向けのクルアーン読誦改善クラス','card.tahfidz.p':'暗誦提出とタジュウィード',
      'sec.jadwal':'スケジュール','sch.1':'イクロ―の学び • 火～木曜日 15:30 JST','sch.2':'子供用のイスラムクラス — 木曜日 19:30 JST','sch.3':'大人向けのクルアーン読誦改善クラス — 日曜 21:00 JST',
      'sec.artikel':'記事・情報','art.1.t':'学習のコツ','art.1.p':'効果的な学び方','art.2.t':'モスク案内','art.2.p':'東京の礼拝場所','art.3.t':'日本の職場マナー','art.3.p':'プロとしての基本',
      'sec.galeri':'活動ギャラリー','galeri.p':'g1.jpg',
      'sec.kontak':'お問い合わせ・つながり','kontak.email':'メール','kontak.wa':'WhatsApp / Telegram','btn.join':'グループに参加',
      'form.name':'お名前','form.email':'メールアドレス','form.message':'メッセージ','form.send':'送信',
      'sec.daftar':'申し込み','daftar.p':'以下の埋め込みをあなたのGoogleフォームに置き換えてください。',
      'footer.copyright':'All rights reserved.',
      'lang.id':'ID','lang.ja':'日本語',
      'back.home':'ホームへ戻る',
      'program.teacher.title':'講師一覧','program.module.title':'モジュール（PDF）','program.module.sample':'サンプルPDF',
      'artikel.intro':'コミュニティ向けの短い記事やお役立ち情報です。','artikel.readmore':'続きを読む',
      'galeri.intro':'活動の写真です—このフォルダに画像を追加し、ソースを差し替えてください。'
    }, // <-- Tambahkan koma di sini
    // MULAI DARI SINI: Tambahkan blok bahasa Inggris
    en: {
      'brand.name': 'RBM Japan',
      'nav.tentang': 'About',
      'nav.program': 'Programs',
      'nav.jadwal': 'Schedule',
      'nav.artikel': 'Articles',
      'nav.galeri': 'Gallery',
      'nav.kontak': 'Contact',
      'nav.daftar': 'Register',
      'nav.fiqh': 'Fiqh Q&A',
      'hero.title.pre': 'Learn Islam according to the Sunnah ',
      'hero.title.hl': 'in Japan',
      'hero.subtitle': 'A Muslim community platform for learning Islam upon the Sunnah in Japan.',
      'hero.cta.primary': 'Register Now',
      'hero.cta.secondary': 'View Programs',
      'form.name': 'Full Name',
      'form.email': 'Email Address',
      'form.message': 'Your Message',
      'form.send': 'Send Message',
      'back.home': 'Back to Home'
    }
    // SAMPAI SINI
  };

  function applyLang(lang) {
    try {
      const d = dict[lang] || dict.id;
      document.documentElement.lang = lang === 'ja' ? 'ja' : 'id';
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const k = el.getAttribute('data-i18n');
        if (d[k] != null) el.textContent = d[k];
      });
      document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const k = el.getAttribute('data-i18n-html');
        if (d[k] != null) el.innerHTML = d[k];
      });
      document.querySelectorAll('[data-i18n-lang-id]').forEach(el => el.textContent = d['lang.id'] || 'ID');
      document.querySelectorAll('[data-i18n-lang-ja]').forEach(el => el.textContent = d['lang.ja'] || '日本語');
    } catch(e) {
      console.error('[i18n] applyLang error:', e);
    }
  }

  function getParam(name){ const u = new URL(window.location.href); return u.searchParams.get(name); }

  function init() {
    const paramLang = getParam('lang');
    const stored = localStorage.getItem('lang');
    const initial = paramLang || stored || ((navigator.language || 'id').startsWith('ja') ? 'ja' : 'id');
    localStorage.setItem('lang', initial);
    applyLang(initial);
  }

  // Pastikan DOM siap
  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);

  window.changeLang = function(lang){
    localStorage.setItem('lang', lang);
    applyLang(lang);
    const u = new URL(window.location.href);
    u.searchParams.set('lang', lang);
    history.replaceState({}, '', u);
    document.querySelectorAll('[data-lang-btn]').forEach(b => {
      b.setAttribute('aria-pressed', b.dataset.langBtn === lang ? 'true' : 'false');
    });
  };
})();

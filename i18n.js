(function () {
  const dict = {
    id: {
      'brand.name':'RBM Jepang',
      'nav.tentang':'Tentang','nav.program':'Program','nav.jadwal':'Jadwal','nav.artikel':'Artikel','nav.galeri':'Galeri','nav.kontak':'Kontak','nav.daftar':'Daftar', 'nav.fiqh':'Tanya Fiqh',
      'hero.title.pre':'Belajar islam sesuai sunnah ','hero.title.hl':'di Jepang',
      'hero.subtitle':'Platform komunitas Muslim untuk belajar islam sesuai sunnah di Jepang. Terbuka untuk anak-anak dan semua kalangan usia.',
      'hero.cta.primary':'Daftar Kegiatan','hero.cta.secondary':'Lihat Program',
      'sec.tentang':'Tentang Kami',
      'tentang.p':'Ruang Belajar Muslim (RBM) Jepang adalah lembaga pendidikan nonformal yang berlokasi di Yokohama, sekitar 40 menit hingga 1 jam perjalanan dari Tokyo. Berdiri pada 18 Desember 2022 untuk memenuhi kebutuhan pendidikan agama anak-anak Muslim diaspora.',
      'tentang.visi.t':'Visi', 'tentang.visi.d':'Menjadi ruang belajar islam sesuai sunnah bagi Muslim di Jepang.',
      'tentang.misi.t':'Misi', 'tentang.misi.d':'Menyediakan pembelajaran Islami dan bahasa yang mudah diakses.',
      'tentang.nilai.t':'Nilai', 'tentang.nilai.d':'Sunnah, kebersamaan, kebermanfaatan.',
      'sec.kontak':'Hubungi Kami',
      'kontak.desc':'Silakan hubungi kami untuk informasi program, pendaftaran, atau jika ada pertanyaan lainnya seputar kegiatan RBM Jepang.',
      'kontak.email':'Email', 'kontak.wa':'WhatsApp / Telegram', 'btn.join':'Gabung Grup',
      'kontak.form.t':'Kirim Pesan',
      'form.name':'Nama Lengkap', 'form.email':'Alamat Email', 'form.message':'Pesan Anda', 'form.send':'Kirim Pesan Sekarang',
      'back.home':'Kembali ke Beranda'
    },
    ja: {
      'brand.name':'RBM ジャパン',
      'nav.tentang':'紹介','nav.program':'プログラム','nav.jadwal':'スケジュール','nav.artikel':'記事','nav.galeri':'ギャラリー','nav.kontak':'お問い合わせ','nav.daftar':'申込', 'nav.fiqh':'フィクフ Q&A',
      'hero.title.pre':'スンナに沿って学ぶ ','hero.title.hl':'日本で',
      'hero.subtitle':'日本にいるムスリムのための学びのコミュニティ。誰でも参加できます。',
      'hero.cta.primary':'申し込む','hero.cta.secondary':'プログラムを見る',
      'sec.tentang':'私たちについて',
      'tentang.p':'RBMジャパンは、神奈川県横浜市に拠点を置く非公式教育機関です。ムスリムの子どもたちの宗教教育ニーズに応えるため、2022年に設立されました。',
      'tentang.visi.t':'ビジョン', 'tentang.visi.d':'日本にいるムスリムのためのスンナに基づいた学びの場となること。',
      'tentang.misi.t':'ミッション', 'tentang.misi.d':'アクセスしやすいイスラム教育と語学学習を提供すること。',
      'tentang.nilai.t':'価値観', 'tentang.nilai.d':'スンナ、団結、有益性。',
      'sec.kontak':'お問い合わせ・つながり',
      'kontak.desc':'プログラムに関する情報、お申し込み、その他のご質問はお気軽にご連絡ください。',
      'kontak.email':'メール', 'kontak.wa':'WhatsApp / Telegram', 'btn.join':'グループに参加',
      'kontak.form.t':'メッセージを送る',
      'form.name':'お名前', 'form.email':'メールアドレス', 'form.message':'メッセージ', 'form.send':'送信する',
      'back.home':'ホームへ戻る'
    },
    en: {
      'brand.name':'RBM Japan',
      'nav.tentang':'About Us','nav.program':'Programs','nav.jadwal':'Schedule','nav.artikel':'Articles','nav.galeri':'Gallery','nav.kontak':'Contact','nav.daftar':'Register', 'nav.fiqh':'Fiqh Q&A',
      'hero.title.pre':'Learn Islam upon the Sunnah ','hero.title.hl':'in Japan',
      'hero.subtitle':'A Muslim community platform for learning Islam upon the Sunnah in Japan. Open for children and all ages.',
      'hero.cta.primary':'Register Now','hero.cta.secondary':'View Programs',
      'sec.tentang':'About Us',
      'tentang.p':'Ruang Belajar Muslim (RBM) Japan is a non-formal educational institution based in Yokohama. Established in 2022 to meet the religious education needs of Muslim diaspora children.',
      'tentang.visi.t':'Vision', 'tentang.visi.d':'To be a space for learning Islam upon the Sunnah for Muslims in Japan.',
      'tentang.misi.t':'Mission', 'tentang.misi.d':'Providing accessible Islamic and language education.',
      'tentang.nilai.t':'Values', 'tentang.nilai.d':'Sunnah, togetherness, usefulness.',
      'sec.kontak':'Contact Us',
      'kontak.desc':'Please contact us for program information, registration, or any other questions regarding RBM Japan activities.',
      'kontak.email':'Email', 'kontak.wa':'WhatsApp / Telegram', 'btn.join':'Join Group',
      'kontak.form.t':'Send a Message',
      'form.name':'Full Name', 'form.email':'Email Address', 'form.message':'Your Message', 'form.send':'Send Message Now',
      'back.home':'Back to Home'
    }
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

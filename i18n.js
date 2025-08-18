(function(){
  const dict = {
    id: {
      'brand.name': 'Ruang Belajar Muslim Jepang',
      'banner.text': 'Assalamualaikum—Pendaftaran Kelas Menanti Masa Baligh dibuka sampai 30 September.',
      'banner.cta': 'Daftar sekarang',
      'nav.tentang': 'Tentang',
      'nav.program': 'Program',
      'nav.jadwal': 'Jadwal',
      'nav.artikel': 'Artikel',
      'nav.galeri': 'Galeri',
      'nav.kontak': 'Kontak',
      'nav.daftar': 'Daftar',
      'hero.title.pre': 'Belajar islam sesuai sunnah ',
      'hero.title.hl': 'di Jepang',
      'hero.subtitle': 'Platform komunitas Muslim untuk belajar islam sesuai sunnah di Jepang. Terbuka untuk anak-anak dan kalangan usia tertentu.',
      'hero.cta.primary': 'Daftar Kegiatan',
      'hero.cta.secondary': 'Lihat Program',
      'hero.b1': '✅ Kelas rutin online & offline',
      'hero.b2': '✅ Materi bisa diunduh',
      'hero.b3': '✅ Info halal & komunitas',
      'hero.b4': '✅ Gratis & mudah diupdate',
      'event.nearby': 'Event Terdekat',
      'event.sample': 'Kajian Online)• Tentative',
      'sec.tentang': 'Tentang Kami',
      'tentang.p': 'Ruang Belajar Muslim Jepang adalah komunitas belajar yang memfasilitasi kelas bahasa arab, kajian Islam, dan kelas iqro` anak.',
      'sec.program': 'Program & Kegiatan',
      'card.jp.title': 'Kelas Iqro`',
      'card.jp.p': 'Hijaiyah, Makhrojul huruf.',
      'card.islam.title': 'Kajian Islam Tematik',
      'card.islam.p': 'Akhlak, fiqh praktis.',
      'card.tahfidz.title': 'Perbaikan Bacaan Alqur`an',
      'card.tahfidz.p': 'Tajwid, Makhrojul huruf.',
      'sec.jadwal': 'Jadwal',
      'sch.1': 'Kajian Online — tentative',
      'sch.2': 'Kelas iqro` — selasa~kamis 15:00 JST',
      'sch.3': 'Kelas Perbaikan Bacaan Al-Qur`an — Ahad 21:15 JST',
      'sec.artikel': 'Artikel & Informasi',
      'art.1.t': 'Tips Belajar',
      'art.1.p': 'Strategi belajar efektif.',
      'art.2.t': 'Panduan Masjid',
      'art.2.p': 'Lokasi ibadah di Tokyo.',
      'art.3.t': 'Etika Kerja',
      'art.3.p': 'Kebiasaan profesional di Jepang.',
      'sec.galeri': 'Galeri Kegiatan',
      'galeri.p': 'Tambahkan foto kegiatan di sini (opsional).',
      'sec.kontak': 'Kontak & Jejaring',
      'kontak.email': 'Email',
      'kontak.wa': 'WhatsApp / LINE',
      'btn.join': 'Gabung Grup',
      'form.name': 'Nama',
      'form.email': 'Email',
      'form.message': 'Pesan',
      'form.send': 'Kirim',
      'sec.daftar': 'Pendaftaran',
      'daftar.p': 'Silakan isi form pendaftaran (gantikan embed di bawah dengan Google Form Anda).',
      'footer.copyright': 'Semua hak cipta dilindungi.',
      'lang.id': 'ID',
      'lang.ja': '日本語'
    },
    ja: {
      'brand.name': 'ルアンベラジャルジャパン',
      'banner.text': 'お知らせ：Baligh クラスの受講申込は9月30日まで',
      'banner.cta': '今すぐ申し込む',
      'nav.tentang': '紹介',
      'nav.program': 'プログラム',
      'nav.jadwal': 'スケジュール',
      'nav.artikel': '記事',
      'nav.galeri': 'ギャラリー',
      'nav.kontak': 'お問い合わせ',
      'nav.daftar': '申込',
      'hero.title.pre': 'スンナに沿って学ぶ ',
      'hero.title.hl': '日本で',
      'hero.subtitle': '日本にいるムスリムのための学びのコミュニティ。子どもから大人まで参加できます。',
      'hero.cta.primary': 'プログラムに申し込む',
      'hero.cta.secondary': 'プログラムを見る',
      'hero.b1': '✅ オンライン＆対面',
      'hero.b2': '✅ 資料をダウンロード可',
      'hero.b3': '✅ ハラール＆コミュニティ情報',
      'hero.b4': '✅ 無料・更新が簡単',
      'event.nearby': '近日イベント',
      'event.sample': 'イスラムの学び（オンライン）• Tentative',
      'sec.tentang': '私たちについて',
      'tentang.p': '日本のムスリムのために、日本語学習・イスラーム学習・子供用のIqro‘を提供しています。',
      'sec.program': 'プログラム・活動',
      'card.jp.title': '子供用のIqro‘',
      'card.jp.p': 'ﾋｼﾞｬｲﾔｰ、ﾏｸﾛｼﾞｭﾙ文字',
      'card.islam.title': 'テーマ別イスラーム学習',
      'card.islam.p': '徳目、実践フィクフ',
      'card.tahfidz.title': 'タフフィズ＆タフシーン',
      'card.tahfidz.p': '暗誦提出とタジュウィード',
      'sec.jadwal': 'スケジュール',
      'sch.1': 'イスラムの学び（オンライン）• Tentative',
      'sch.2': '子供用のIqro‘ — 火~木 15:00 JST',
      'sch.3': 'タフシーン — 日曜 21:15 JST',
      'sec.artikel': '記事・情報',
      'art.1.t': '学習のコツ',
      'art.1.p': '効果的な学び方',
      'art.2.t': 'モスク案内',
      'art.2.p': '東京の礼拝場所',
      'art.3.t': '日本の職場マナー',
      'art.3.p': 'プロとしての基本',
      'sec.galeri': '活動ギャラリー',
      'galeri.p': '活動写真をここに追加できます。',
      'sec.kontak': 'お問い合わせ',
      'kontak.email': 'メール',
      'kontak.wa': 'WhatsApp / LINE',
      'btn.join': 'グループに参加',
      'form.name': 'お名前',
      'form.email': 'メールアドレス',
      'form.message': 'メッセージ',
      'form.send': '送信',
      'sec.daftar': '申し込み',
      'daftar.p': '以下の埋め込みをあなたのGoogleフォームに置き換えてください。',
      'footer.copyright': 'All rights reserved.',
      'lang.id': 'ID',
      'lang.ja': '日本語'
    }
  };

  function applyLang(lang) {
    const d = dict[lang] || dict.id;
    document.documentElement.lang = lang === 'ja' ? 'ja' : 'id';
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (d[key] != null) el.textContent = d[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (d[key] != null) el.innerHTML = d[key];
    });
    document.querySelectorAll('[data-i18n-lang-id]').forEach(el => el.textContent = d['lang.id']);
    document.querySelectorAll('[data-i18n-lang-ja]').forEach(el => el.textContent = d['lang.ja']);
  }

  const stored = localStorage.getItem('lang') || 'id';
  applyLang(stored);

  window.changeLang = function(lang){
    localStorage.setItem('lang', lang);
    applyLang(lang);
  };
})();

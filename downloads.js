// ── R2 FILENAMES ──
// These are the literal names of the objects on the bucket. The installers are
// unversioned and overwritten in place each release, and the README / EULA /
// manual now cover the whole 2.x line rather than a single point release, so
// nothing here has to be touched when APP_VERSION moves — only when a file is
// actually renamed on the bucket.
// All six verified live on 3 Oct 2026.
const R2 = 'https://pub-fb3edae0830742f69b9a6233c43fdb62.r2.dev';

const DOWNLOADS = {
  mac_silicon: R2 + '/SelectaTool-arm.dmg',
  mac_intel:   R2 + '/SelectaTool.dmg',
  windows:     R2 + '/SelectaTool-win.exe',
  readme:      R2 + '/README.txt',
  eula:        R2 + '/Selecta-Tool-2.x-EULA.txt',
  manual:      R2 + '/Selecta-Tool-2.x-User-Manual.pdf',

  // ── WALKTHROUGH VIDEO ──
  // Paste the video URL here and the "Watch the walkthrough" button on
  // selectatool.html goes live on its own. While this is an empty string the
  // button renders greyed and labelled "Coming soon", so nothing 404s.
  walkthrough: '',
};

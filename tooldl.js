// Shared script for the Selecta Tool hand-out pages (tooldownload, toolupdate,
// toolpromo, toolbeta, toolfix). Loaded after version.js and downloads.js.
//
// Every link comes from downloads.js, so the pages never need editing when a
// file moves. Gumroad products link to these pages, and the installers come
// straight off R2: nothing has to be uploaded to each Gumroad product.
//
//   data-version            → filled with "v" + APP_VERSION
//   data-dl="mac_silicon"   → href set to DOWNLOADS.mac_silicon (any key works)
//   <body data-build="beta"> or "fix"
//                           → the Mac card reads BETA_DOWNLOADS.mac or
//                             FIX_DOWNLOADS.mac. Empty: the card stays switched
//                             off (no href, not clickable) and every
//                             [data-when="none"] block shows. Filled: the card
//                             goes live and [data-when="live"] shows instead.
(function() {
  if (typeof APP_VERSION !== 'undefined') {
    document.querySelectorAll('[data-version]').forEach(function(n) {
      n.textContent = 'v' + APP_VERSION;
    });
  }

  if (typeof DOWNLOADS !== 'undefined') {
    document.querySelectorAll('[data-dl]').forEach(function(a) {
      var url = DOWNLOADS[a.dataset.dl];
      if (url) a.href = url;
    });
  }

  // Only shown once the Windows build has actually fallen behind Mac.
  var winDevWarn = document.getElementById('winDevWarn');
  if (winDevWarn && typeof WINDOWS_VERSION !== 'undefined' &&
      !isVersionAtLeast(WINDOWS_VERSION, APP_VERSION)) {
    document.getElementById('windowsVersion').textContent = WINDOWS_VERSION;
    winDevWarn.hidden = false;
  }

  // ── BETA / FIX BUILDS ──
  var kind = document.body.dataset.build;
  if (!kind) return;
  var source = kind === 'beta'
    ? (typeof BETA_DOWNLOADS !== 'undefined' ? BETA_DOWNLOADS : {})
    : (typeof FIX_DOWNLOADS !== 'undefined' ? FIX_DOWNLOADS : {});
  var live = !!source.mac;

  document.querySelectorAll('[data-when]').forEach(function(n) {
    n.hidden = n.dataset.when !== (live ? 'live' : 'none');
  });

  if (!live) return;
  var card = document.getElementById('dl-mac');
  var btn = card.querySelector('.btn-dl');
  card.classList.remove('is-off');
  btn.href = source.mac;
  btn.target = '_blank';
  btn.rel = 'noopener noreferrer';
  btn.removeAttribute('aria-disabled');
  btn.innerHTML = 'Download .zip <span class="arrow" aria-hidden="true">&darr;</span>';
  card.querySelector('.dl-sub').textContent = 'Apple Silicon and Intel builds together · .zip';
})();

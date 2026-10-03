// Shared behaviour for the news-*.html pages: the mobile menu, and keeping any
// [data-app-version] text in step with APP_VERSION from version.js.
(function() {
  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    // Anchor the panel under the button rather than at a fixed top, since the
    // sticky header shifts as the page scrolls.
    function positionMobileMenu() {
      var r = hamburger.getBoundingClientRect();
      document.documentElement.style.setProperty('--menu-top', Math.round(r.bottom + 10) + 'px');
    }
    function setMobileMenu(open) {
      if (open) positionMobileMenu();
      mobileMenu.classList.toggle('open', open);
      hamburger.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
    positionMobileMenu();
    window.addEventListener('resize', positionMobileMenu);
    window.addEventListener('scroll', function() {
      if (mobileMenu.classList.contains('open')) positionMobileMenu();
    }, { passive: true });
    hamburger.addEventListener('click', function(e) {
      e.stopPropagation();
      setMobileMenu(!mobileMenu.classList.contains('open'));
    });
    mobileMenu.addEventListener('click', function(e) { e.stopPropagation(); });
    document.addEventListener('click', function() { setMobileMenu(false); });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') setMobileMenu(false);
    });
  }

  if (typeof APP_VERSION !== 'undefined') {
    Array.prototype.forEach.call(document.querySelectorAll('[data-app-version]'), function(el) {
      el.textContent = APP_VERSION;
    });
  }
})();

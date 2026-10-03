// Shared accessibility behaviour for the repeated mobile navigation.
(function() {
  function initMenuA11y() {
    var button = document.getElementById('hamburger');
    var menu = document.getElementById('mobileMenu');
    if (!button || !menu) return;

    button.setAttribute('aria-controls', menu.id);
    if (!button.hasAttribute('aria-expanded')) button.setAttribute('aria-expanded', 'false');

    function syncState() {
      var open = menu.classList.contains('open');
      button.setAttribute('aria-expanded', open ? 'true' : 'false');
      button.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      menu.setAttribute('aria-hidden', open ? 'false' : 'true');
    }

    syncState();
    new MutationObserver(syncState).observe(menu, { attributes: true, attributeFilter: ['class'] });

    document.addEventListener('keydown', function(event) {
      if (!menu.classList.contains('open')) return;
      if (event.key === 'Escape') {
        window.requestAnimationFrame(function() { button.focus(); });
        return;
      }
      if (event.key !== 'Tab') return;

      var items = [button].concat(Array.prototype.slice.call(
        menu.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
      ));
      var first = items[0];
      var last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMenuA11y);
  } else {
    initMenuA11y();
  }
})();

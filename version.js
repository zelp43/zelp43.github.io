const APP_VERSION = '2.0.9';
const WINDOWS_FROZEN_VERSION = '2.0.9';
const WINDOWS_STALE_THRESHOLD = '2.1';

const PRICES = {
  basic:   { intro: '$29.99',  regular: '$39.99',  orig: '$49.99' },
  pro:     { intro: '$54.99',  regular: '$64.99',  orig: '$99.99' },
  proPlus: { intro: '$144.99', regular: '$174.99', orig: '$270'   }
};

function isVersionAtLeast(version, target) {
  var v = version.split('.').map(Number);
  var t = target.split('.').map(Number);
  for (var i = 0; i < Math.max(v.length, t.length); i++) {
    var vi = v[i] || 0, ti = t[i] || 0;
    if (vi !== ti) return vi > ti;
  }
  return true;
}

const APP_VERSION = '2.2';

// Version of the shipping Windows build. Normally the same as APP_VERSION.
// The "Windows is behind" notice on the site appears automatically whenever
// this is LOWER than APP_VERSION, i.e. only once Windows actually falls behind
// Mac. Keep the two in step and no notice is shown.
const WINDOWS_VERSION = '2.2';

// Prices live in price.js.

function isVersionAtLeast(version, target) {
  var v = version.split('.').map(Number);
  var t = target.split('.').map(Number);
  for (var i = 0; i < Math.max(v.length, t.length); i++) {
    var vi = v[i] || 0, ti = t[i] || 0;
    if (vi !== ti) return vi > ti;
  }
  return true;
}

// ── SELECTA TOOL FREE TRIAL ──
// Limited time only, not a permanent part of the page. This file is the only
// place it lives, and `on` below is the only thing you touch.
//
//   on: false  →  the trial block vanishes from selectatool.html completely.
//                 No markup to delete, nothing left behind, the page reads
//                 exactly as it did before the trial existed. This is also
//                 the safe default if this file ever fails to load.
//   on: true   →  the block appears at the top of selectatool.html, directly
//                 under the hero and above Pricing & Features.
//
// So: pulling the trial down on GitHub is a one-character edit to this file.
//
// Loaded by: selectatool.html
const TRIAL = {

  // ── THE SWITCH ──
  on: true,

  // ── RELEASE TIME ──
  // Empty: the trial is open, so the button is live on load and no countdown
  // renders. Putting an ISO 8601 timestamp back in here (offset included,
  // e.g. '2026-10-04T15:00:00-04:00') holds the button shut and runs a clock
  // beside it until that moment passes, with nothing to deploy at the hour.
  releaseAt: '',

  kicker: 'Free trial · limited time',

  title: 'Try it free for a couple of hours',

  // One line. Keep it short and keep it honest about the ceiling.
  line: 'Limited build crates, Live Library and Duplicate Finder use. ' +
        'Everything else stays locked.',

  // Fine print under the button.
  foot: 'One-time offer · one machine, one email',

  // ── THE TRIAL LINK ──
  // Live. Note this file is served as-is, so whatever goes here is readable
  // by anyone who looks — which is fine now the trial is open.
  //
  // While this is an empty string the button renders greyed and labelled
  // "link coming soon", so nothing on the page ever 404s.
  url: 'https://juggernautmusic.gumroad.com/l/toolpromo'
};

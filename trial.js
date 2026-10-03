// ── SELECTA TOOL FREE TRIAL ──
// Limited time only, not a permanent part of the page. This file is the only
// place it lives, and `on` below is the only thing you touch.
//
//   on: false  →  the trial block vanishes from selectatool.html completely.
//                 No markup to delete, nothing left behind, the page reads
//                 exactly as it did before the trial existed. This is also
//                 the safe default if this file ever fails to load.
//   on: true   →  the block appears at the bottom of the page, under
//                 Purchasing & Licensing.
//
// So: pulling the trial down on GitHub is a one-character edit to this file.
//
// It sits low on the page on purpose. It is not announced anywhere above it
// and it is not in the FAQ or the search-engine data, so it stays something
// people come across rather than something the page sells.
//
// Loaded by: selectatool.html
const TRIAL = {

  // ── THE SWITCH ──
  on: true,

  // ── RELEASE TIME ──
  // The moment the trial opens. Before it, the block shows a small countdown
  // and the button is inert; the second it passes, the countdown disappears
  // and the button goes live on its own. Nothing has to be deployed at 3pm.
  //
  // ISO 8601, offset included. -04:00 is US Eastern on summer time, which is
  // what Eastern is on this date; it becomes -05:00 after 1 Nov 2026.
  // Set this to '' to drop the countdown and have the button follow `url`
  // alone, exactly as it did before.
  releaseAt: '2026-10-04T15:00:00-04:00',

  kicker: 'Free trial · limited time',

  title: 'Try it free for a couple of hours',

  // One line. Keep it short and keep it honest about the ceiling.
  line: 'Limited build crates, Live Library and Duplicate Finder use. ' +
        'Everything else stays locked.',

  // Fine print under the button.
  foot: 'One-time offer · one machine, one email',

  // ── THE TRIAL LINK ── ← this is the one line to swap at release
  // Filler for now: the Gumroad store front, so there is nothing real sitting
  // in the page source to be found early. Replace it with the actual trial
  // link and that is the whole change — no markup to touch anywhere else.
  //
  // Note this file is served as-is, so whatever goes here is readable by
  // anyone who looks. It is safe to put the real link in once `releaseAt` has
  // passed, or any time you are happy for it to be findable.
  //
  // While this is an empty string the button renders greyed and labelled
  // "link coming soon", exactly like the walkthrough button, so nothing on the
  // page ever 404s.
  url: 'https://juggernautmusic.gumroad.com'
};

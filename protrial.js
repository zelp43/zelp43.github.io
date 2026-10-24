// ── SELECTA PRO TRIAL ──
// 24 hours of every Pro tab, with capped use. Mac only. This replaces trial.js
// (the older couple-of-hours campaign trial) and is the only place the Pro Trial
// lives on the page, so `on` below is the only thing you touch to show or hide it.
//
//   on: false  →  the trial section at the bottom AND the Free trial column in the
//                 pricing table both vanish. The page reads exactly as it does
//                 without a trial. Also the safe default if this file fails to load.
//   on: true   →  the trial section appears at the bottom of the page, and a
//                 Free trial column is added to the left of Basic in Pricing and
//                 features, with a link under its button down to that section.
//
// Loaded by: selectatool2.html
//
// KEEP `caps` IN STEP WITH THE APP. The allowances are set on the server
// (pro_trial_config.quotas) and can change without a new app build — when one
// changes there, change it here too, or the column will promise the wrong number.
const TRIAL = {

  // ── THE SWITCH ──
  on: true,

  // ── RELEASE TIME ──
  // Empty: the button is live on load. An ISO 8601 timestamp with its offset
  // (e.g. '2026-11-01T15:00:00-04:00') holds the button shut and runs a
  // countdown beside it until that moment.
  releaseAt: '',

  kicker: 'Free trial · Mac only',

  title: 'Try every Pro tab free for 24 hours',

  line: 'Your 24 hours start the first time you scan, play or fix something, ' +
        'not when the key arrives. Use is capped, and the Free trial column above ' +
        'shows exactly how much. Selecta saves your library before anything changes.',

  // Fine print under the button. Says the Pro-keys-only rule up front.
  foot: 'One per Mac and per email · after the trial, this Mac activates Pro keys only',

  button: 'Get a free trial key',

  url: 'https://juggernautmusic.gumroad.com/l/protooltrial?wanted=true',

  // ── THE FREE TRIAL COLUMN ──
  // Keyed by each row's data-feat in the pricing table.
  //   true             → ✓ (full use for the 24 hours)
  //   false            → – (not part of the trial)
  //   'label'          → that label instead of a tick
  //   [label, 'note']  → label with a small note under it (label may be true)
  // A row missing from here shows –, so the column can never over-promise.
  caps: {
    // Core library tools
    'folder-crates':     ['10 crates', 'shared crate allowance'],
    'build-crates':      ['10 crates', 'up to 1,000 tracks each'],
    'scan-folder':       true,
    'apple-music':       ['3 playlists', '50 tracks each'],
    'live-library':      true,
    'mini-player':       true,
    'duplicate-finder':  ['10 groups', 'extras go to the Trash'],
    'crate-export':      ['3 sets', '50 tracks each'],

    // Pro tools
    'library-backup':    false,
    'import-backup':     false,
    'import-manifest':   false,
    'snapshots':         'View only',
    'send-tracks':       ['10 crate edits', 'shared'],
    'replace-records':   ['15 fixes', 'shared with File Doctor'],
    'file-doctor':       ['15 fixes', 'shared with Replace'],
    'streaming-links':   ['2 imports', '50 tracks each'],
    'tag-editor':        '50 tracks',
    'sampler':           [true, 'unlimited'],
    'cue-studio':        ['Unlimited', 'VirtualDJ import: 50 tracks'],
    'selecta-to-serato': false,
    'batch-dupes':       ['10 groups', 'shared with Duplicate Finder'],
    'exclusive-drops':   false,
    'priority-support':  false,

    // Gig Desk
    'gig-bookings':      [true, 'kept when you buy Pro'],
    'gig-documents':     ['5 documents', 'shared with reports'],
    'gig-money':         [true, 'reports count toward the 5'],
    'gig-currency':      true,
    'gig-file':          ['Saved', 'no backup file export'],

    // Pro Plus — the trial is one Mac, no seats or crew extras.
    'seats':             false,
    'seat-transfer':     false,
    'extra-seats':       false,
    'direct-support':    false,
    'genre-crates':      false,
    'sfx-bundle':        false,
    'early-beta':        false
  },

  // Listed in the trial section at the bottom of the page.
  notes: [
    'Mac only for now. Basic and Pro work fully on Windows.',
    'Your 24 hours start on your first scan, play or fix, not when you claim the key. Use the key within 7 days of getting it.',
    'Right before your 24 hours start, Selecta saves a restore point of your library. One click puts it back, during the trial or after, with or without a license.',
    'Once your 24 hours start, this Mac can only activate Pro keys. A Basic license already on the Mac keeps working, and the Mac goes back to it when the trial ends.',
    'One trial per Mac and per email. A job bigger than what is left is refused whole, never half-done.',
    'Quit Serato DJ Pro before you start. Most tabs pause while Serato is open, and the clock keeps running.'
  ]
};

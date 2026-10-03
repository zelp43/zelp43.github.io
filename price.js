// ── SELECTA TOOL PRICING ──
// Single source of truth for every price shown on the site. Edit this file
// (and nothing else) to change pricing, then redeploy.
//
//   intro   — what's advertised right now, on selectatool.html and in the
//             home page meta/social description.
//   regular — what the price flips to once the intro period ends. Nothing
//             reads this automatically: when the intro ends, move these
//             values into `intro` here.
//   orig    — the struck-through "was" price next to the intro price.
//
// Loaded by: selectatool.html, index.html
const PRICES = {
  basic:   { intro: '$29.99',  regular: '$39.99',  orig: '$49.99' },
  pro:     { intro: '$54.99',  regular: '$64.99',  orig: '$99.99' },
  proPlus: { intro: '$144.99', regular: '$174.99', orig: '$270.00' }
};

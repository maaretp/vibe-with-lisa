# Bug Report Comparison: bug_reports.txt vs rikard_bugs.txt

## Shared Bugs (20 issues found by both)

| bug_reports.txt | rikard_bugs.txt | Issue                                           |
| --------------- | --------------- | ----------------------------------------------- |
| #1              | BUG-03          | Featured potion charges 36g instead of 34g      |
| #2              | BUG-01          | Flask multiplier 1.35x instead of 1.5x          |
| #3              | BUG-02          | Bottle multiplier 2.5x instead of 2x            |
| #4              | BUG-11          | Quantity doesn't multiply ingredient costs      |
| #5              | BUG-05          | Negative quantities allowed                     |
| #6              | BUG-06          | Order submittable without selecting a potion    |
| #7              | BUG-04          | Delivery cost missing from total                |
| #8              | BUG-21          | Email field type="text" instead of "email"      |
| #9              | BUG-12          | Featured potion image 404                       |
| #10             | BUG-13          | Star rating 5 stars but review says "4/5"       |
| #11             | BUG-10          | Max quantity 99 bypassable via direct input     |
| #12             | BUG-08          | JS state not reset after submission             |
| #13             | BUG-18          | Quantity input tabindex="-1"                    |
| #14             | BUG-24          | SpellBook/Potion-terest links are "#"           |
| #15             | BUG-25          | Wandergram link to fake domain                  |
| #17             | BUG-19          | Copyright year outdated (2024 vs 2026)          |
| #18             | BUG-17          | Footer heading hierarchy inconsistent           |
| #19             | BUG-14          | Featured image alt text issue                   |
| #23             | BUG-07          | Featured potion name not shown in order summary |
| #25             | BUG-20          | Order confirmation lacks details                |

**Note:** Rikard's BUG-09 (featuredAdded flag persists) is a specific detail of the shared state-reset issue (Bug #12 / BUG-08 — which already mentions `featuredAdded`). Rikard's BUG-29 (Bottle size text inconsistency) is noted within Bug #3's description.

---

## Only in bug_reports.txt (10 unique issues)

| Bug | Issue                                                            |
| --- | ---------------------------------------------------------------- |
| #16 | Wandergram link missing `rel="noopener noreferrer"` (security)   |
| #20 | Email field lacks visible label element                          |
| #21 | No way to remove featured potion from order                      |
| #22 | "Add to Order" button re-enables after 2 seconds                 |
| #24 | Social media links inconsistent `target` behavior                |
| #26 | Delivery cost not shown as line item in order summary            |
| #27 | No character limit on Special Instructions textarea              |
| #28 | Form fields missing `name` attributes                            |
| #29 | Quantity "0" display inconsistency (shows 0 but calculates as 1) |
| #30 | No visible validation error messages                             |

---

## Only in rikard_bugs.txt (8 unique issues)

| Bug    | Issue                                                   |
| ------ | ------------------------------------------------------- |
| BUG-15 | Quantity input has no associated label (WCAG 4.1.2)     |
| BUG-16 | "15% OFF" badge insufficient color contrast (3.82:1)    |
| BUG-22 | Favicon returns 404                                     |
| BUG-23 | No `<meta name="description">` tag                      |
| BUG-26 | `<div>` elements nested inside `<label>` (invalid HTML) |
| BUG-27 | Buttons missing explicit `type` attribute               |
| BUG-28 | Missing security headers (CSP, X-Frame-Options, etc.)   |
| BUG-30 | Duplicate form control name "ingredient"                |

---

## Summary

- **20 bugs** found by both lists
- **10 bugs** found only by bug_reports.txt — leaning toward UX/usability issues (remove button, re-enabling button, validation feedback, missing name attributes)
- **8 bugs** found only by rikard_bugs.txt — leaning toward technical/standards issues (WCAG contrast, invalid HTML nesting, missing headers, favicon, meta tags)

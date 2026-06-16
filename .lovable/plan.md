## Goal
Update the existing ZEGORA site so the uploaded official company images are used in the requested sections, while keeping the current design language and structure intact.

## What I’ll change
1. **Hero section**
   - Replace the plain cream hero background with the uploaded travel image of the Ethiopian Muslim woman.
   - Keep the current hero content and layout.
   - Add a soft dark overlay for readability.
   - Position the background so the woman and airport scene remain clearly visible across desktop and mobile.

2. **About Us section**
   - Keep the current About section layout and current cropped reception image, since you chose to keep it.
   - Preserve the large left image / right text arrangement and the existing stats placement beside About.

3. **Certificates & Licenses section**
   - Add a new section directly after About.
   - Show three small trust cards for:
     - Government License
     - Certificate of Authorization
     - Excellence Award
   - Use the uploaded documents as the card visuals.
   - Add hover states and click-to-open full-size popup/lightbox behavior.
   - Keep the cards compact and professional instead of displaying the documents large by default.

4. **Our Professional Team section**
   - Add a new section below Certificates & Licenses.
   - Use the uploaded staff team image prominently.
   - Add the exact heading and description you provided.
   - Match the site’s existing spacing, typography, radius, and shadow treatment.

5. **Contact and map order**
   - Keep the current Contact section.
   - Move Google Maps into its own separate section below Contact so the order becomes:
     - Hero
     - Features
     - About
     - Certificates & Licenses
     - Our Professional Team
     - Contact
     - Google Maps
     - Footer
   - Since you asked to keep stats beside About, the stats will remain embedded in the About section rather than becoming their own standalone band.

6. **Official image usage**
   - Import the uploaded ZEGORA visuals as the official site imagery.
   - Do not substitute stock images.
   - Keep image presentation optimized for responsive layout and quality.

## Technical details
- Upload the new user-provided images as app assets and reference them from the site.
- Update the existing `Hero` component to support a background image with overlay.
- Create new homepage sections/components for:
  - `Certificates & Licenses`
  - `Our Professional Team`
  - a standalone map section
- Update the homepage route composition in `src/routes/index.tsx` to match the new section order.
- Add lightweight modal/lightbox state for certificate previews without introducing unrelated features.
- Keep styling within the current token system in `src/styles.css`; no redesign or palette shift.

## Files likely involved
- `src/components/site/sections/Hero.tsx`
- `src/components/site/sections/About.tsx`
- `src/components/site/sections/Contact.tsx`
- `src/components/site/sections/` new section files
- `src/routes/index.tsx`
- new `.asset.json` image pointers for the uploaded visuals

## Notes
- I will keep the current visual direction and only place the uploaded images into the requested sections.
- I will not add job forms, portal functionality, or unrelated new features.
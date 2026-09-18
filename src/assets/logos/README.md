# Organization logo sources

These images are used beside the corresponding experience and education records. This folder is currently empty -- `src/utils/orgLogos.tsx` falls back to a generic icon for every institution until a real mark is added here.

To add one:

1. Source the official logo from the organization's own site/brand assets.
2. Convert it to WebP, cropped/resized to roughly 192px on its longest side.
3. Drop it in this folder and register the organization's exact name in `src/utils/orgLogos.tsx`. Set `wide: true` for wide marks so they remain readable inside the existing icon frames.

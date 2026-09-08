# Zohaib — personal student portfolio for Vercel

This independent Vite/React version preserves the original cinematic layout, responsive gallery, three sample case studies, concept reel, color comparison, reduced-motion control, Instagram link, and copyable email contact. Public pages are prerendered for direct navigation and search engines. Fonts and images are local.

Zohaib selected a free personal student portfolio for Vercel. This version uses email contact, has no commercial quote/budget form, and does not collect or claim to save inquiries. Existing sample imagery is retained and identified as sample content. No additional artwork or achievements were invented.

The original full-stack project remains in `../portfolio` and is unchanged. Its Studio, database, uploads, and saved inquiries remain on the existing Sites deployment. They have not been migrated into Vercel. Editing Studio does not automatically update this separate static portfolio; rebuild and redeploy this source after changing `lib/content.ts` or assets.

## Build

Use Node 22.13 or newer and pnpm. Run `pnpm install`, `pnpm typecheck`, and `pnpm build`. Output is in `dist/`. Optionally set `SITE_URL` to the verified production URL before building to include canonical links and a sitemap.

Deploy the built folder or its ZIP with Vercel Drop. The static artifact contains its own Vercel configuration and needs no server, database, credentials, or build service. The source can also be deployed as a Vite project.

## Hosting status

Live at https://zohaib-inmotion.vercel.app/ on Vercel Hobby. Project `zohaib-inmotion`, team `achme15`. Domain configuration is valid and targets Production.

Verified unauthenticated HTTP access to the homepage, all three case studies, assets, and the custom 404 page. No custom domain has been purchased and no paid plan selected.

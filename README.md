# Swifti

## Local development

```bash
npm install
copy .env.example .env.local
npm run dev
```

Set `VITE_BACKEND_LINK` in `.env.local` to the public backend URL. `VITE_*` values are embedded into the production bundle and must not contain secrets.

## GitHub Pages

The `main` branch is deployed by `.github/workflows/deploy-pages.yml`. In repository **Settings → Pages**, select **GitHub Actions** as the source.

Optional repository variables used during the build:

- `VITE_BACKEND_LINK` — public HTTPS backend URL
- `VITE_YANDEX_API` — Yandex suggestions API URL

The Vite base path is derived from `GITHUB_REPOSITORY`, so it works both before and after renaming the repository from `SwiftiNew` to `Swifti`.

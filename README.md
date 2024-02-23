# next-strapi-static

Static-Site-Generation (SSG) using Next.js with Strapi as CMS.

## Getting Started


### Install all dependencies

```bash
pnpm install:all
```

Make sure that your .env files are created in both `/backend` and `/frontend` folders

### Start Strapi instance

```bash
pnpm strapi:build
pnpm strapi:dev
```
http://localhost:1337/admin

Login: strapi@strapi.com / Strapi123


### Start Next.js development server

```bash
pnpm next:dev
```

http://localhost:3000



### Build Next.js site

```bash
pnpm next:build
```
Static files will be generated in `/frontend/out/index.html` folder,
use "right-click" and "open with live server" to view the static site.
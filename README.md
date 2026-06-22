# React Router Example

This is a simple React app built with Vite that shows how React Router works.

The app has a layout wrapper with a header and footer, and three pages:
- Home
- About
- Contact

## Overview

The project uses `react-router-dom` v7 to show nested routes inside a layout.
The main layout displays the header, page content, and footer.

## Prerequisites

- Node.js 14 or higher
- npm or yarn

## Quick start

```bash
cd react/router
npm install
npm run dev
```

## App structure

- `src/main.jsx` — app entry and router config
- `src/App.jsx` — top-level app shell with header and footer
- `src/hoc/layout.jsx` — layout wrapper with `<Outlet />`
- `src/components/home/home.jsx` — Home page content
- `src/components/About/about.jsx` — About page content
- `src/components/contact/contact.jsx` — Contact page content
- `src/components/header/header.jsx` — navigation bar
- `src/components/footer/footer.jsx` — footer content

## Routes

- `/` → Home page
- `/about` → About page
- `/contact` → Contact page

## Notes

- Open `src/main.jsx` to see how routes are defined.
- Open `src/hoc/layout.jsx` to see how the shared layout works.
- Use `npm run dev` to start the local server.
- Use `npm run build` to build the app for production.

# Supreethraj_Task30

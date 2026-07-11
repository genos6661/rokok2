/**
 * config.js
 * Single source of truth for this app's own public domain.
 *
 * This MUST match the FRONTEND_DOMAIN constant in
 * admin/config/config.php, since that's what the admin panel uses to
 * build absolute image URLs for anything uploaded through it
 * (e.g. http://localhost:5173/uploads/products/xxx.jpg).
 *
 * Set VITE_FRONTEND_DOMAIN in a ".env" file (see .env.example) to
 * override the default for production builds.
 */
export const FRONTEND_DOMAIN =
  import.meta.env.VITE_FRONTEND_DOMAIN || window.location.origin

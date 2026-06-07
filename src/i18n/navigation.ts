import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// Locale-aware navigation helpers. `getPathname` is used to build
// hreflang alternates and the sitemap.
export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);

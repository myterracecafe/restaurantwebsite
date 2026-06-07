import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
    // Match the root and all internationalized pathnames, skip API/_next/static assets
    matcher: ['/', '/(tr|en|ar|de|ru|es|fr)/:path*'],
};

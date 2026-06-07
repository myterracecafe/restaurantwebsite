import { MetadataRoute } from 'next';
import siteInfo from '@/data/site-info.json';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: siteInfo.name,
        short_name: siteInfo.shortName,
        description: siteInfo.description,
        start_url: '/tr',
        display: 'standalone',
        background_color: '#fbf7f0',
        theme_color: '#35868f',
        icons: [
            { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
            { src: '/logo.webp', sizes: '512x512', type: 'image/webp' },
        ],
    };
}

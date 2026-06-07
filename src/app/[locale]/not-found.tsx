'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';

const T: Record<string, { t: string; m: string; h: string }> = {
    tr: { t: 'Sayfa bulunamadı', m: 'Aradığınız sayfa taşınmış veya hiç var olmamış olabilir.', h: 'Ana sayfaya dön' },
    en: { t: 'Page not found', m: 'The page you are looking for may have moved or never existed.', h: 'Back to home' },
    ar: { t: 'الصفحة غير موجودة', m: 'ربما تم نقل الصفحة التي تبحث عنها أو أنها غير موجودة.', h: 'العودة إلى الرئيسية' },
    de: { t: 'Seite nicht gefunden', m: 'Die gesuchte Seite wurde möglicherweise verschoben oder existiert nicht.', h: 'Zurück zur Startseite' },
    ru: { t: 'Страница не найдена', m: 'Возможно, страница была перемещена или не существует.', h: 'На главную' },
    es: { t: 'Página no encontrada', m: 'Es posible que la página se haya movido o no exista.', h: 'Volver al inicio' },
    fr: { t: 'Page introuvable', m: 'La page que vous cherchez a peut-être été déplacée ou n’existe pas.', h: 'Retour à l’accueil' },
};

export default function NotFound() {
    const locale = useLocale();
    const x = T[locale] ?? T.en;
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4 px-6 pt-28 text-center">
            <p className="font-display text-7xl font-bold text-brand-600">404</p>
            <h1 className="font-display text-2xl font-semibold text-stone-900">{x.t}</h1>
            <p className="max-w-md text-stone-600">{x.m}</p>
            <Link href={`/${locale}`} className="mt-2 rounded-full bg-terra-600 px-6 py-3 font-semibold text-white transition hover:bg-terra-700">
                {x.h}
            </Link>
        </div>
    );
}

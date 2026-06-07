'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';

const T: Record<string, { t: string; m: string; r: string; h: string }> = {
    tr: { t: 'Bir şeyler ters gitti', m: 'Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.', r: 'Tekrar dene', h: 'Ana sayfa' },
    en: { t: 'Something went wrong', m: 'An unexpected error occurred. Please try again.', r: 'Try again', h: 'Home' },
    ar: { t: 'حدث خطأ ما', m: 'حدث خطأ غير متوقع. يُرجى المحاولة مرة أخرى.', r: 'حاول مجدداً', h: 'الرئيسية' },
    de: { t: 'Etwas ist schiefgelaufen', m: 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut.', r: 'Erneut versuchen', h: 'Startseite' },
    ru: { t: 'Что-то пошло не так', m: 'Произошла непредвиденная ошибка. Попробуйте снова.', r: 'Повторить', h: 'Главная' },
    es: { t: 'Algo salió mal', m: 'Ocurrió un error inesperado. Inténtalo de nuevo.', r: 'Reintentar', h: 'Inicio' },
    fr: { t: 'Une erreur est survenue', m: 'Une erreur inattendue s’est produite. Veuillez réessayer.', r: 'Réessayer', h: 'Accueil' },
};

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
    const locale = useLocale();
    const x = T[locale] ?? T.en;
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center gap-5 px-6 pt-28 text-center">
            <h1 className="font-display text-3xl font-semibold text-stone-900">{x.t}</h1>
            <p className="max-w-md text-stone-600">{x.m}</p>
            <div className="flex flex-wrap justify-center gap-3">
                <button onClick={reset} className="rounded-full bg-terra-600 px-6 py-3 font-semibold text-white transition hover:bg-terra-700">
                    {x.r}
                </button>
                <Link href={`/${locale}`} className="rounded-full border border-stone-300 px-6 py-3 font-semibold text-stone-700 transition hover:bg-stone-50">
                    {x.h}
                </Link>
            </div>
        </div>
    );
}

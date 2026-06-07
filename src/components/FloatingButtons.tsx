'use client';

import FloatingCallButton from './FloatingCallButton';
import FloatingWhatsApp from './FloatingWhatsApp';

export default function FloatingButtons() {
    return (
        <div
            className="fixed z-30 flex md:z-40
                inset-x-0 bottom-0 w-full flex-row
                md:inset-auto md:bottom-6 md:right-6 md:w-auto md:flex-col md:items-end md:gap-3"
        >
            <FloatingCallButton />
            <FloatingWhatsApp />
        </div>
    );
}

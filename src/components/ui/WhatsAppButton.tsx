import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/34000000000" // Replace with actual number later
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/10 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
            aria-label="Contact on WhatsApp"
        >
            <MessageCircle size={28} />
        </a>
    );
}

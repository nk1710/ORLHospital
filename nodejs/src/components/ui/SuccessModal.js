import { Check } from "lucide-react";
import { useEffect } from "react";

export default function SuccessModal({ open, onClose, message = "Data saved successfully!" }) {
    useEffect(() => {
        if (open) {
            const timer = setTimeout(onClose, 3000);
            return () => clearTimeout(timer);
        }
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 m-3 z-50 flex items-center justify-center bg-black/60 pointer-events-none">
            <div className="bg-white mt-3 rounded-xl shadow-2xl p-8 text-center max-w-sm pointer-events-auto animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 m-3 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8 text-green-600" strokeWidth={3} />
                </div>

                <h3 className="font-bold text-xl text-slate-900 mb-2">Success!</h3>

                <p className="text-sm m-3 text-slate-600">
                    {message}
                </p>

                <p className="text-xs text-slate-500 m-3">
                    We'll contact you shortly.
                </p>
            </div>
        </div>
    );
}

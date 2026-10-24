export default function FormLoader({ open }) {
    if (!open) return null
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
  
        <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-sm">
  
          {/* Spinner */}
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
  
          <p className="font-semibold text-lg">
            Submitting Your Appointment Request...
          </p>
  
          <p className="text-sm text-slate-600 mt-2">
            Please wait, do not close or refresh this page.
          </p>
  
        </div>
  
      </div>
    )
  }
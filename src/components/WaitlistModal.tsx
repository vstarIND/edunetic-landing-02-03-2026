import { motion } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

export const WaitlistModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  const handleRedirect = () => {
    window.location.href = "https://waitlist.eduneticindia.in";
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-md glass p-10 md:p-14 rounded-[3rem] border-white/10 text-center"
      >
        <button onClick={onClose} className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors">
          <X size={28} />
        </button>

        <div className="mb-8">
          <div className="w-16 h-16 bg-cyan-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <ArrowRight className="text-cyan-primary" size={32} />
          </div>
          <h3 className="text-4xl font-display font-black text-white uppercase mb-3 tracking-tighter">
            Join the <span className="text-cyan-primary">Waitlist</span>
          </h3>
          <p className="text-zinc-400 font-medium leading-relaxed">
            We are moving our registration process to our official portal. Click below to secure your spot.
          </p>
        </div>
        
        <button 
          onClick={handleRedirect}
          className="w-full py-6 bg-cyan-primary text-black font-black uppercase tracking-widest rounded-2xl hover:bg-cyan-light transition-all transform hover:scale-[1.05] shadow-[0_0_20px_rgba(0,243,255,0.3)]"
        >
          Take Me There
        </button>

        <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-bold">
          Redirecting to waitlist.eduneticindia.in
        </p>
      </motion.div>
    </div>
  );
};

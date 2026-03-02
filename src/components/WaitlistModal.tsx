import { motion } from "motion/react";
import { X } from "lucide-react";

export const WaitlistModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
        onClick={onClose}
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-lg glass p-8 md:p-12 rounded-[3rem] border-white/10"
      >
        <button onClick={onClose} className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors">
          <X size={32} />
        </button>
        <h3 className="text-4xl font-display font-black text-white uppercase mb-2 tracking-tighter">
          Join the <span className="text-cyan-primary">Waitlist</span>
        </h3>
        <p className="text-zinc-500 mb-8 font-medium">Be the first to experience the future of education.</p>
        
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Thank you for joining our waitlist!'); onClose(); }}>
          <div className="space-y-1">
            <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Full Name *</label>
            <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-cyan-primary transition-colors text-white" placeholder="Enter your name" />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Mobile Number *</label>
            <input required type="tel" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-cyan-primary transition-colors text-white" placeholder="+91 XXXXX XXXXX" />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Email Address *</label>
            <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-cyan-primary transition-colors text-white" placeholder="name@example.com" />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Referral Code (Optional)</label>
            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-cyan-primary transition-colors text-white" placeholder="Enter code if any" />
          </div>
          <button type="submit" className="w-full py-5 bg-cyan-primary text-black font-black uppercase tracking-widest rounded-2xl hover:bg-cyan-light transition-all transform hover:scale-[1.02] mt-4">
            Secure My Spot
          </button>
        </form>
      </motion.div>
    </div>
  );
};

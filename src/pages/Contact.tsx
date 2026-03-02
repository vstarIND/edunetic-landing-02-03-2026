import { motion } from "motion/react";
import { Mail, Phone } from "lucide-react";

export const ContactPage = () => {
  return (
    <div className="bg-zinc-950 pt-32">
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-cyan-primary font-display font-bold uppercase tracking-widest text-sm mb-4">Get In Touch</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-8">Let's Build Future-Ready Schools Together</h3>
              <p className="text-zinc-400 text-lg mb-12">
                Join the movement to revolutionize education in India. Whether you're a school principal, a teacher, or a concerned parent, we want to hear from you.
              </p>
              
              <div className="space-y-6">
                <a 
                  href="mailto:contactus@eduneticindia.in"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-cyan-primary group-hover:bg-cyan-primary group-hover:text-black transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider">Email Us</div>
                    <div className="text-lg font-medium group-hover:text-cyan-primary transition-colors">contactus@eduneticindia.in</div>
                  </div>
                </a>
                <a 
                  href="https://wa.me/916394397986"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-cyan-primary group-hover:bg-cyan-primary group-hover:text-black transition-all">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider">WhatsApp Us</div>
                    <div className="text-lg font-medium group-hover:text-cyan-primary transition-colors">+91 6394 397 986</div>
                  </div>
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass p-8 md:p-12 rounded-[2rem]"
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Full Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-primary transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Mobile</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-primary transition-colors" placeholder="+91 00000 00000" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-primary transition-colors" placeholder="john@school.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-primary transition-colors" placeholder="How can we help your school?"></textarea>
                </div>
                <button className="w-full py-4 bg-cyan-primary text-black font-bold rounded-xl hover:bg-cyan-light transition-all transform hover:scale-[1.02]">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

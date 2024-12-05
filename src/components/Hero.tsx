import { motion } from 'framer-motion';
import { Camera, Calendar, Award } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden hero-gradient">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] 
        bg-cover bg-center"
        style={{ opacity: '0.3' }}
      ></div>

      <div className="relative container mx-auto px-4 py-32 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="gradient-text">Capturing Moments,</span>
            <br />
            <span className="text-white">Creating Memories</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Professional photography and event management services that turn your special moments into timeless memories
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full text-black font-semibold flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              Book a Session
            </button>
            <button className="px-8 py-4 border border-amber-400 rounded-full text-white font-semibold hover:bg-amber-500/10 transition-colors duration-300">
              View Portfolio
            </button>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {[
              { icon: Camera, title: "Professional Photography", desc: "Studio & Location Shoots" },
              { icon: Calendar, title: "Event Planning", desc: "Full-Service Management" },
              { icon: Award, title: "Award Winning", desc: "Industry Recognition" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl card-gradient backdrop-blur-sm border border-amber-900/20"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <item.icon className="w-10 h-10 text-amber-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
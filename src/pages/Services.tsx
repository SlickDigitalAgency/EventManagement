import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { servicesData } from '../data';

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional photography and event management solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-2xl card-gradient border border-amber-900/20 hover:border-amber-500/30 transition-colors duration-300"
            >
              <service.icon className="w-12 h-12 text-amber-400 mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <p className="text-amber-400 font-semibold">{service.price}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-6 py-2 w-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full text-black font-semibold hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300"
              >
                Book Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
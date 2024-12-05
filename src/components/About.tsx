import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Camera, Star, Heart } from "lucide-react";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6 pb-2">
            Crafting Unforgettable Moments
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            At our photography studio and event management company, we focus on
            creating lasting memories. With personalized photography and
            seamless event planning, we ensure that your special day is
            flawlessly captured and organized.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Camera,
                title: "Capturing Every Moment",
                description:
                  "From candid shots to staged portraits, we capture the essence of your event.",
              },
              {
                icon: Star,
                title: "Award-Winning Service",
                description:
                  "Our team consists of industry professionals dedicated to delivering excellence.",
              },
              {
                icon: Heart,
                title: "Client-Centered Approach",
                description:
                  "Your satisfaction is our priority. We work closely with you to bring your vision to life.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm"
              >
                <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

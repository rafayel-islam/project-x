import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../ultils/motion";

const features = [
  {
    icon: "🔍",
    title: "Find out what you need",
    description: "We present you a proposal and discuss nitty-gritty like",
  },
  {
    icon: "⚙️",
    title: "Work out the details",
    description: "Communication protocols apart from engagement models",
  },
  {
    icon: "🚀",
    title: "We get to work fast",
    description: "Protocols apart from engage models, pricing billing",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="max-w-7xl mx-auto px-4 py-16">
      {/* heading text */}
      <motion.div
        className="text-center mb-12"
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
      >
        <h2 className="text-3xl font-bold mb-4">How can we help your business?</h2>
        <p className="text-gray-600">
          When you resell besnik, you build trust and increase
        </p>
      </motion.div>

      {/* features box */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-6"
            variants={fadeIn("left", index * 0.3)}
            initial="hidden"
            whileInView="show"
          >
            <motion.div
              className="w-24 h-24 rounded-full mb-6 flex items-center justify-center"
              style={{
                background:
                  index === 0 ? "#F1EFFD" : index === 1 ? "#FEE7E7" : "#FFF3E4",
              }}
              variants={fadeIn("left", index * 0.4)}
            >
              <span className="text-3xl">{feature.icon}</span>
            </motion.div>

            <h3 className="text-2xl font-medium mb-3">{feature.title}</h3>
            <p className="text-gray-500 text-center">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* button */}
      <motion.div
        className="text-center mt-12"
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView="show"
      >
        <button className="bg-blue-600 text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-all relative">
          Become a Partner{" "}
          <span className="absolute -z-10 w-full h-full rounded-full bg-blue-600/50 blur-xl top-0 left-0"></span>
        </button>
      </motion.div>
    </section>
  );
};

export default FeaturesSection;

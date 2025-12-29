import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 p-8">
      <motion.div
       className="md:w-1/2 space-y-6 text-center md:text-left"
       initial={{ opacity: 0, y: -50 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ type: "spring", stiffness: 120 }}
       >
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Welcome to My Online Store
      </h1>
      <p className="text-xl text-gray-700">
        Browse amazing products and enjoy a seamless shopping experience
      </p>
      <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition">
        Start Shopping
      </button>
      </motion.div>
      
    <motion.div
     className="md-w-1/2 mt-10 md:mt-0 flex justify-center"
       initial={{ opacity: 0, y: -50 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ type: "spring", stiffness: 120 }}
     >
      <img
      src="https://source.unsplash.com/500x400/?shopping"
        alt = "Image Loading ...!!!"
        className="rounded-xl shadow-lg"
      />
    </motion.div>

    </div>
  );
}

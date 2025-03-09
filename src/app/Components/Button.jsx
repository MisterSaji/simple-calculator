"use client";

import { motion } from "framer-motion";

const Button = ({ value, onClick }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      className="bg-gray-600 hover:bg-gray-500 text-white text-xl font-bold p-4 rounded transition-all"
      onClick={() => onClick(value)}
    >
      {value}
    </motion.button>
  );
};

export default Button;

"use client"; // Client-side component

import { useState, useEffect } from "react";
import { Metadata } from "next"; // Next.js Metadata API
import Head from "next/head"; // For SEO
import { motion } from "framer-motion"; // For animations
import Button from "../Components/Button"; // Separate Button component

export const metadata = {
  title: "Next.js Calculator | Built with React & Tailwind",
  description: "A dynamic and interactive calculator built using Next.js, React, and Tailwind CSS.",
};

export default function Calculator() {
  const [input, setInput] = useState("");

  useEffect(() => {
    // Load previous input from localStorage
    const savedInput = localStorage.getItem("calculator-input");
    if (savedInput) {
      setInput(savedInput);
    }
  }, []);

  useEffect(() => {
    // Save input to localStorage
    localStorage.setItem("calculator-input", input);
  }, [input]);

  const handleClick = (value) => {
    if (value === "=") {
      try {
        const result = new Function("return " + input)();
        setInput(result.toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput(input + value);
    }
  };

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>

      <div className="flex flex-col justify-center items-center h-screen bg-gray-900">
        <motion.h1
          className="text-3xl font-bold text-white mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Next.js Calculator
        </motion.h1>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-80">
          <div className="bg-gray-700 text-white text-right text-2xl p-3 mb-4 rounded">
            {input || "0"}
          </div>

          <div className="grid grid-cols-4 gap-2">
            {["7", "8", "9", "/"].map((char) => (
              <Button key={char} value={char} onClick={handleClick} />
            ))}
            {["4", "5", "6", "*"].map((char) => (
              <Button key={char} value={char} onClick={handleClick} />
            ))}
            {["1", "2", "3", "-"].map((char) => (
              <Button key={char} value={char} onClick={handleClick} />
            ))}
            {["C", "0", "=", "+"].map((char) => (
              <Button key={char} value={char} onClick={handleClick} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

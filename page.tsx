
'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <motion.h1
        className="text-5xl font-extrabold mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to DesignSpectre-WRLD
      </motion.h1>
      <motion.p
        className="text-lg text-center max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Your creative realm of design, ideas, and community.
      </motion.p>
    </main>
  );
}

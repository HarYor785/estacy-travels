'use client'

import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({className, children }) => {


  return (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className={className}
    >
        {children}
    </motion.div>
  );
};

export default AnimatedSection;

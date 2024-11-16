'use client';
import React, { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';
import { cn } from './utils';

export const TextGenerateEffect = ({ words, className }) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(' ');

  useEffect(() => {
    animate('span', { opacity: 1 }, { duration: 2, delay: stagger(0.2) });
  }, [animate]);

  return (
    <div className={cn('font-bold', className)}>
      <div className="my-4">
        <motion.div ref={scope} style={{ display: 'inline-block' }}>
          {wordsArray.map((word, idx) => (
            <React.Fragment key={word + idx}>
              {idx > 0 && ' '}
              <motion.span
                className={cn(
                  // { 'text-purple': idx > 20, 'text-white': idx <= 3 },
                  'opacity-0'
                )}
                style={{ display: 'inline-block' }}
              >
                {word}
              </motion.span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

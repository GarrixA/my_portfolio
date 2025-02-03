export const imageVariants = {
  initial: { opacity: 0, scale: 0.2, x: 50, y: -300 },
  animate: { opacity: 1, scale: 1, y: 0, x: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, scale: 1.1, transition: { duration: 0.3 } },
};

export const textVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } },
  exit: { opacity: 0, y: 50, transition: { duration: 0.3 } },
};

export const buttonVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, delay: 0.4 },
  },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } },
};

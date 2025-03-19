// src/pages/_app.js
import '../../src/styles/global.css';
import '../styles/link.css';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from '../components/layout';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

const pageTransitionVariants = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.5,
    },
  },
};

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode="wait">
      <Layout>
        <motion.div
          key={router.route}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransitionVariants}
        >
          <Component {...pageProps} />
        </motion.div>
      </Layout>
    </AnimatePresence>
  );
}

export default MyApp;

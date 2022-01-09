import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";
const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

export const Article = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactChild | React.ReactChild[];
}) => {
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: "easeInOut" }}
      style={{ position: "relative" }}
    >
      {title && (
        <Head>
          <title>{title} - Takuya Matsuyama</title>
          <meta name="twitter:title" content={title} />
          <meta property="og:title" content={title} />
          <link rel="icon" href="/images/feather.png" />
        </Head>
      )}
      {children}
    </motion.article>
  );
};

'use client';

import { ReactNode } from "react";
import { AnimatePresence,motion } from "framer-motion";
import { usePathname } from "next/navigation";

type PageTransitionProps = { children: ReactNode};

export default function PageTransition({children}: PageTransitionProps) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <div key={pathname}>
        <motion.div
            initial={{opacity:1}}
            animate={{
              opacity:0,
              transition:{delay:1,duration:0.4,ease:"easeInOut"},
            }}
            className="h-screen w-screen fixed bg-sky-300 top-0 left-0 pointer-events-none"
        />
        {children}
      </div>
    </AnimatePresence>
  );
}

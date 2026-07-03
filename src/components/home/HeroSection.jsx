// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { ArrowRight } from 'lucide-react';

// const HERO_IMG = 'https://media.base44.com/images/public/6a04a0888946eab0cca07906/3837dd055_generated_c46509ac.png';

// export default function HeroSection() {
//   return (
//     <section className="relative h-screen min-h-[700px] overflow-hidden">
//       {/* Background image with parallax-like effect */}
//       <motion.div
//         initial={{ scale: 1.1 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 1.8, ease: 'easeOut' }}
//         className="absolute inset-0"
//       >
//         <img
//           src={HERO_IMG}
//           alt="Modern therapy office with natural light"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-foreground/20" />
//         <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
//       </motion.div>

//       {/* Horizon line */}
//       <div className="absolute bottom-0 left-0 right-0 h-px bg-primary/30" />

//       {/* Content */}
//       <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
//         <div className="max-w-2xl">
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-6"
//           >
//             West Palm Beach, Florida
//           </motion.p>

//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//             className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold text-card leading-[1.1] mb-6"
//           >
//             The New Standard
//             <br />
//             <span className="text-primary">of Mental</span>
//             <br />
//             Architecture
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.7, duration: 0.8 }}
//             className="text-card/70 font-body text-lg md:text-xl leading-relaxed mb-10 max-w-lg"
//           >
//             Where clinical excellence meets coastal serenity. Integrated therapy and psychiatric care designed for your flourishing.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.9, duration: 0.8 }}
//             className="flex flex-wrap gap-4"
//           >
//             <Link
//               to="/contact"
//               className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-body font-medium text-sm hover:bg-primary/90 transition-all animate-pulse-glow"
//             >
//               Begin Your Journey
//               <ArrowRight className="w-4 h-4" />
//             </Link>
//             <Link
//               to="/services"
//               className="inline-flex items-center gap-2 px-8 py-4 border border-card/30 text-card rounded-full font-body font-medium text-sm hover:bg-card/10 transition-all"
//             >
//               Explore Services
//             </Link>
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5 }}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
//       >
//         <span className="text-card/40 text-xs font-body tracking-widest uppercase">Scroll</span>
//         <motion.div
//           animate={{ y: [0, 8, 0] }}
//           transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
//           className="w-px h-8 bg-gradient-to-b from-card/40 to-transparent"
//         />
//       </motion.div>
//     </section>
//   );
// }


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { ArrowRight } from 'lucide-react';

// const HERO_IMG = 'https://media.base44.com/images/public/6a04a0888946eab0cca07906/3837dd055_generated_c46509ac.png';

// export default function HeroSection() {
//   return (
//     <section className="relative h-screen min-h-[700px] overflow-hidden">
//       {/* Background image with parallax-like effect */}
//       <motion.div
//         initial={{ scale: 1.1 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 1.8, ease: 'easeOut' }}
//         className="absolute inset-0"
//       >
//         <img
//           src={HERO_IMG}
//           alt="Modern therapy office with natural light"
//           className="w-full h-full object-cover"
//         />

//         {/* FIX: Left side blue glow effect container */}
//         <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-foreground/70 to-foreground/20 mix-blend-multiply" />
//         <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-transparent to-transparent opacity-80" />
//         <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
//       </motion.div>

//       {/* Horizon line */}
//       <div className="absolute bottom-0 left-0 right-0 h-px bg-primary/30" />

//       {/* Content */}
//       <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
//         <div className="max-w-2xl">
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-6"
//           >
//             West Palm Beach, Florida
//           </motion.p>

//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//             className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold text-card leading-[1.1] mb-6"
//           >
//             The New Standard
//             <br />
//             <span className="text-primary">of Mental</span>
//             <br />
//             Architecture
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.7, duration: 0.8 }}
//             className="text-card/70 font-body text-lg md:text-xl leading-relaxed mb-10 max-w-lg"
//           >
//             Where clinical excellence meets coastal serenity. Integrated therapy and psychiatric care designed for your flourishing.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.9, duration: 0.8 }}
//             className="flex flex-wrap gap-4"
//           >
//             <Link
//               to="/contact"
//               className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-body font-medium text-sm hover:bg-primary/90 transition-all animate-pulse-glow"
//             >
//               Begin Your Journey
//               <ArrowRight className="w-4 h-4" />
//             </Link>
//             <Link
//               to="/services"
//               className="inline-flex items-center gap-2 px-8 py-4 border border-card/30 text-card rounded-full font-body font-medium text-sm hover:bg-card/10 transition-all"
//             >
//               Explore Services
//             </Link>
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5 }}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
//       >
//         <span className="text-card/40 text-xs font-body tracking-widest uppercase">Scroll</span>
//         <motion.div
//           animate={{ y: [0, 8, 0] }}
//           transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
//           className="w-px h-8 bg-gradient-to-b from-card/40 to-transparent"
//         />
//       </motion.div>
//     </section>
//   );
// }


import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HERO_IMG = 'https://media.base44.com/images/public/6a04a0888946eab0cca07906/3837dd055_generated_c46509ac.png';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden bg-[#051122]">
      {/* Background image with parallax-like effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <img
          src={HERO_IMG}
          alt="Modern therapy office with natural light"
          className="w-full h-full object-cover"
        />

        {/* FIX: Exact deep navy dark blue gradient overlay to match target image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1e36]/50 via-[#0d233e]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07172b]/50 via-transparent to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#051122]/50 via-transparent to-transparent" />
      </motion.div>

      {/* Horizon line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-primary/30" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-6"
          >
            West Palm Beach, Florida
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold text-card leading-[1.1] mb-6"
          >
            The New Standard
            <br />
            <span className="text-primary">of Mental</span>
            <br />
            Architecture
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-card/70 font-body text-lg md:text-xl leading-relaxed mb-10 max-w-lg"
          >
            Where clinical excellence meets coastal serenity. Integrated therapy and psychiatric care designed for your flourishing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-body font-medium text-sm hover:bg-primary/90 transition-all animate-pulse-glow"
            >
              Begin Your Journey
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 border border-card/30 text-card rounded-full font-body font-medium text-sm hover:bg-card/10 transition-all"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-card/40 text-xs font-body tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-card/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
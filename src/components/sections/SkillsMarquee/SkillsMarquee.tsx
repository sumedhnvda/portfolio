import { motion } from 'framer-motion';
import { Container } from '../../ui/Container';
import { MarqueeContent } from './MarqueeContent';

export const SkillsMarquee = () => {
  return (
    <div className="w-full bg-zinc-900/50 py-8 backdrop-blur-sm relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-black before:via-transparent before:to-black before:z-10">
      <Container className="relative z-20">
        <div className="overflow-hidden -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12">
          <motion.div
            className="flex"
            animate={{ x: ["0%", "-150%"] }}
            transition={{
              x: { duration: 20, repeat: Infinity, ease: "linear" },
            }}
          >
            {/* Generate multiple marquee contents dynamically */}
            {Array(2)
              .fill(null)
              .map((_, index) => (
                <div className="flex flex-shrink-0" key={index}>
                  <MarqueeContent />
                </div>
              ))}
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

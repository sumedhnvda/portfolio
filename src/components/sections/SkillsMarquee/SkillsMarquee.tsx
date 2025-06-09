import { motion } from 'framer-motion';
import { Container } from '../../ui/Container';
import { MarqueeContent } from './MarqueeContent';

export const SkillsMarquee = () => {
  return (
    <div className="w-full bg-zinc-900/50 py-8 backdrop-blur-sm relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-black before:via-transparent before:to-black before:z-10">
      <Container className="relative z-20">
        <div className="overflow-hidden -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12">
          <motion.div
            className="flex gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                duration: 25,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              },
            }}
          >
            {/* Using 4 instances to ensure smooth infinite loop */}
            {Array(4)
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

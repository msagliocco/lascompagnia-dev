import { motion, useScroll, useTransform } from 'motion/react';
import { useMemo } from 'react';

type OrnamentShape = {
  id: number;
  left: string;
  top: string;
  width: string;
  height: string;
  rotate: number;
  driftX: number;
  driftY: number;
  driftRotate: number;
  duration: number;
  delay: number;
  parallaxX: number;
  parallaxY: number;
  depth: number;
  fill: string;
  stroke: string;
  shadow: string;
  clipPath: string;
};

const createSeededRandom = (seed: number) => () => {
  seed = (seed * 1664525 + 1013904223) % 4294967296;
  return seed / 4294967296;
};

const BackgroundOrnaments = () => {
  const { scrollYProgress } = useScroll();

  const shapes = useMemo<OrnamentShape[]>(() => {
    const rand = createSeededRandom(93077);
    const clipPaths = [
      'polygon(6% 0%, 100% 5%, 94% 100%, 0% 92%)',
      'polygon(0% 8%, 96% 0%, 100% 86%, 10% 100%)',
      'polygon(4% 0%, 100% 12%, 92% 100%, 0% 88%)',
      'polygon(10% 0%, 100% 6%, 90% 100%, 0% 94%)',
      'polygon(0% 12%, 94% 0%, 100% 88%, 8% 100%)',
      'polygon(8% 0%, 96% 6%, 100% 70%, 86% 100%, 6% 92%)',
      'polygon(0% 14%, 78% 0%, 100% 28%, 96% 100%, 12% 88%)',
      'polygon(6% 0%, 100% 10%, 90% 58%, 100% 100%, 10% 92%, 0% 40%)',
      'polygon(0% 10%, 70% 0%, 100% 22%, 92% 80%, 60% 100%, 6% 84%)',
    ];
    const fills = [
      'rgba(255, 77, 45, 0.12)',
      'rgba(182, 58, 36, 0.1)',
      'rgba(0, 0, 0, 0.06)',
      'rgba(217, 210, 193, 0.14)',
      'rgba(244, 241, 232, 0.18)',
      'rgba(38, 35, 28, 0.08)',
      'rgba(255, 77, 45, 0.08)',
    ];
    const strokes = [
      'rgba(0, 0, 0, 0.16)',
      'rgba(0, 0, 0, 0.12)',
      'rgba(21, 19, 15, 0.18)',
      'rgba(0, 0, 0, 0.1)',
    ];
    const shadows = [
      '8px 8px 0 rgba(0, 0, 0, 0.1)',
      '6px 6px 0 rgba(0, 0, 0, 0.08)',
      '10px 10px 0 rgba(0, 0, 0, 0.1)',
      '5px 5px 0 rgba(0, 0, 0, 0.06)',
    ];

    return Array.from({ length: 7 }, (_, index) => {
      const width = 26 + rand() * 46;
      const height = 18 + rand() * 44;
      const left = -30 + rand() * 160;
      const top = -40 + rand() * 180;
      const rotate = -18 + rand() * 36;
      const driftX = -32 + rand() * 64;
      const driftY = -26 + rand() * 52;
      const driftRotate = -6 + rand() * 12;
      const duration = 26 + rand() * 20;
      const delay = rand() * -12;
      const depth = 0.2 + rand() * 1.6;
      const parallaxX = (-320 + rand() * 640) * depth;
      const parallaxY = (-760 + rand() * 1520) * depth;
      const fill = fills[Math.floor(rand() * fills.length)];
      const stroke = strokes[Math.floor(rand() * strokes.length)];
      const shadow = shadows[Math.floor(rand() * shadows.length)];
      const clipPath = clipPaths[Math.floor(rand() * clipPaths.length)];

      return {
        id: index,
        width: `${width}vw`,
        height: `${height}vh`,
        left: `${left}vw`,
        top: `${top}vh`,
        rotate,
        driftX,
        driftY,
        driftRotate,
        duration,
        delay,
        parallaxX,
        parallaxY,
        depth,
        fill,
        stroke,
        shadow,
        clipPath,
      };
    });
  }, []);

  return (
    <div className="bg-ornaments" aria-hidden="true">
      <ParallaxInitials scrollYProgress={scrollYProgress} />
      <ParallaxStripes scrollYProgress={scrollYProgress} />
      {shapes.map((shape) => (
        <Ornament key={shape.id} shape={shape} scrollYProgress={scrollYProgress} />
      ))}
    </div>
  );
};

const ParallaxInitials = ({
  scrollYProgress,
}: {
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}) => {
  const lX = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const lY = useTransform(scrollYProgress, [0, 1], [0, -260]);
  const lRotate = useTransform(scrollYProgress, [0, 1], [-8, -14]);
  const sX = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const sY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const sRotate = useTransform(scrollYProgress, [0, 1], [-2, 6]);

  return (
    <>
      <motion.div
        className="bg-initials"
        style={{
          x: lX,
          y: lY,
          rotate: lRotate,
          top: '-28vh',
          left: '-30vw',
        }}
      >
        L
      </motion.div>
      <motion.div
        className="bg-initials"
        style={{
          x: sX,
          y: sY,
          rotate: sRotate,
          top: '-8vh',
          left: '28vw',
        }}
      >
        S
      </motion.div>
    </>
  );
};

const ParallaxStripes = ({
  scrollYProgress,
}: {
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}) => {
  const x = useTransform(scrollYProgress, [0, 1], [0, -520]);

  return <motion.div className="bg-stripes" style={{ x }} />;
};

const Ornament = ({
  shape,
  scrollYProgress,
}: {
  shape: OrnamentShape;
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}) => {
  const parallaxX = useTransform(scrollYProgress, [0, 1], [0, shape.parallaxX]);
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, shape.parallaxY]);

  return (
    <motion.div
      className="bg-ornament-wrap"
      style={{
        left: shape.left,
        top: shape.top,
        width: shape.width,
        height: shape.height,
        x: parallaxX,
        y: parallaxY,
      }}
    >
      <motion.div
        className="bg-ornament"
        style={{
          background: shape.fill,
          clipPath: shape.clipPath,
          borderColor: shape.stroke,
          boxShadow: shape.shadow,
        }}
        initial={{ rotate: shape.rotate }}
        animate={{
          x: [0, shape.driftX, -shape.driftX * 0.6, 0],
          y: [0, shape.driftY, -shape.driftY * 0.4, 0],
          rotate: [
            shape.rotate,
            shape.rotate + shape.driftRotate,
            shape.rotate - shape.driftRotate,
            shape.rotate,
          ],
        }}
        transition={{
          duration: shape.duration,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
          delay: shape.delay,
        }}
      />
    </motion.div>
  );
};

export default BackgroundOrnaments;

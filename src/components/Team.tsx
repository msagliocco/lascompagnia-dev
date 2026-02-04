import { motion, useInView, useMotionValue, useSpring } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import ResponsiveImage from './ResponsiveImage';

type TeamMember = {
  id: number;
  name: string;
  role: string;
  imageBase: string;
  width: number;
  height: number;
};

const pendulumTransition = {
  type: 'spring',
  stiffness: 70,
  damping: 8,
  mass: 1.6,
  restSpeed: 0.01,
  restDelta: 0.01,
} as const;
const garziaRestAngle = 9;
const garziaDragSensitivity = 0.25;
const garziaDragLimit = 28;

const nudgeSpring = {
  type: 'spring',
  stiffness: 180,
  damping: 16,
  mass: 0.6,
} as const;
const nudgeRange = { x: 14, y: 10, rot: 3.5 };

const TeamCard = ({ member, offsetClass }: { member: TeamMember; offsetClass: string }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useMotionValue(0);
  const xSpring = useSpring(x, nudgeSpring);
  const ySpring = useSpring(y, nudgeSpring);
  const rotateSpring = useSpring(rotate, nudgeSpring);

  const reset = () => {
    x.set(0);
    y.set(0);
    rotate.set(0);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = (event.clientX - centerX) / (rect.width / 2);
    const dy = (event.clientY - centerY) / (rect.height / 2);
    const clamp = (value: number) => Math.min(1, Math.max(-1, value));
    const nx = clamp(dx);
    const ny = clamp(dy);
    x.set(-nx * nudgeRange.x);
    y.set(-ny * nudgeRange.y);
    rotate.set(-nx * nudgeRange.rot);
  };

  return (
    <div className={`relative ${offsetClass}`}>
      <motion.div
        ref={cardRef}
        className="group bw-hover-group polaroid-card motion-polaroid"
        style={{ x: xSpring, y: ySpring, rotate: rotateSpring }}
        onPointerMove={handlePointerMove}
        onPointerLeave={reset}
        onPointerCancel={reset}
        onBlur={reset}
      >
        <div className="team-photo team-photo--light relative aspect-w-4 aspect-h-5 border-2 border-pitch-black bg-off-white">
          <ResponsiveImage
            srcBase={member.imageBase}
            alt={member.name}
            width={member.width}
            height={member.height}
            widths={[320, 640, 960]}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="w-full h-80 object-cover object-center bw-hover bw-hover-nozoom transition-all duration-300"
            loading="lazy"
          />
        </div>

        <div className="pt-4 px-1">
          <h3 className="text-lg font-black uppercase text-pitch-black group-hover:text-neon-pink transition-colors">
            {member.name}
          </h3>
          <p className="font-mono text-xs text-gray-700 mt-2 uppercase tracking-[0.3em]">
            {member.role}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const Team = () => {
  const members: TeamMember[] = [
    {
      id: 1,
      name: 'Antonella Picarella',
      role: 'Attrice',
      imageBase: 'images/optimized/cast-antonella',
      width: 1719,
      height: 967,
    },
    {
      id: 2,
      name: 'Antonio Santangelo',
      role: 'Regista',
      imageBase: 'images/optimized/cast-antonio',
      width: 386,
      height: 561,
    },
    {
      id: 3,
      name: 'Chiara Cosentino',
      role: 'Attrice - Regista',
      imageBase: 'images/optimized/cast-chiara',
      width: 1710,
      height: 1710,
    },
    {
      id: 4,
      name: 'Daniele Corini',
      role: 'Attore',
      imageBase: 'images/optimized/cast-daniele',
      width: 1971,
      height: 1971,
    },
    {
      id: 5,
      name: 'Giulio Mancini',
      role: 'Attore',
      imageBase: 'images/optimized/cast-giulio',
      width: 1942,
      height: 2346,
    },
    {
      id: 6,
      name: 'Marco Sagliocco',
      role: 'Attore - Musiche',
      imageBase: 'images/optimized/cast-marco',
      width: 1441,
      height: 1922,
    },
    {
      id: 7,
      name: 'Valeria Garzia',
      role: 'Attrice - Jolly',
      imageBase: 'images/optimized/cast-valeria',
      width: 1087,
      height: 1087,
    },
  ];

  const offsets = [
    'md:-translate-y-6 md:rotate-[1.4deg] md:z-10',
    'md:translate-y-4 md:rotate-[-1.2deg] md:z-0',
    'md:-translate-y-3 md:rotate-[0.9deg] md:z-10',
    'md:translate-y-6 md:rotate-[-1.5deg] md:z-0',
    'md:-translate-y-4 md:rotate-[1.1deg] md:z-10',
    'md:translate-y-3 md:rotate-[-1deg] md:z-0',
  ];

  const garziaRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(garziaRef, { once: true, amount: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const rotate = useMotionValue(-14);
  const rotateSpring = useSpring(rotate, pendulumTransition);
  const dragState = useRef({ active: false, startX: 0, startRotate: 0 });
  const settleTimeoutRef = useRef<number | null>(null);
  // Trigger pendulum animation once when in view
  useEffect(() => {
    if (isInView && !hasAnimated) {
      settleTimeoutRef.current = window.setTimeout(() => {
        rotate.set(garziaRestAngle);
        setHasAnimated(true);
      }, 1000);
      return () => {
        if (settleTimeoutRef.current !== null) {
          clearTimeout(settleTimeoutRef.current);
          settleTimeoutRef.current = null;
        }
      };
    }
  }, [isInView, hasAnimated, rotate]);

  const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

  const handlePendulumStart = (event: React.PointerEvent<HTMLDivElement>) => {
    if (settleTimeoutRef.current !== null) {
      clearTimeout(settleTimeoutRef.current);
      settleTimeoutRef.current = null;
    }
    setHasAnimated(true);
    dragState.current.active = true;
    dragState.current.startX = event.clientX;
    dragState.current.startRotate = rotate.get();
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePendulumMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragState.current.active) return;
    const deltaX = event.clientX - dragState.current.startX;
    const nextAngle = clamp(
      dragState.current.startRotate - deltaX * garziaDragSensitivity,
      -garziaDragLimit,
      garziaDragLimit,
    );
    rotate.set(nextAngle);
  };

  const handlePendulumEnd = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragState.current.active) return;
    dragState.current.active = false;
    rotate.set(garziaRestAngle);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <section id="team" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-center uppercase tracking-tight text-pitch-black">
          Il Nostro Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => {
            const isLast = index === members.length - 1;
            const hangingOffset = 'md:-translate-y-2 md:z-20';
            const offsetClass = isLast ? hangingOffset : offsets[index % offsets.length];

            if (isLast) {
              return (
                <div
                  key={member.id}
                  className={`relative flex justify-center sm:col-span-2 lg:col-start-2 lg:col-span-1 ${offsetClass}`}
                >
                  <div className="relative">
                    <span className="stitch-link" aria-hidden="true" />
                    <motion.div
                      ref={garziaRef}
                      className="group bw-hover-group polaroid-card motion-polaroid cursor-grab active:cursor-grabbing select-none"
                      style={{
                        transformOrigin: '26px -6px',
                        rotate: rotateSpring,
                        touchAction: 'pan-y',
                      }}
                      onPointerDown={handlePendulumStart}
                      onPointerMove={handlePendulumMove}
                      onPointerUp={handlePendulumEnd}
                      onPointerCancel={handlePendulumEnd}
                      onLostPointerCapture={handlePendulumEnd}
                    >
                      <div className="team-photo team-photo--light relative aspect-w-4 aspect-h-5 border-2 border-pitch-black bg-off-white">
                        <ResponsiveImage
                          srcBase={member.imageBase}
                          alt={member.name}
                          width={member.width}
                          height={member.height}
                          widths={[320, 640, 960]}
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="w-full h-80 object-cover object-center bw-hover bw-hover-nozoom transition-all duration-300"
                          loading="lazy"
                          draggable={false}
                        />
                      </div>

                      <div className="pt-4 px-1">
                        <h3 className="text-lg font-black uppercase text-pitch-black group-hover:text-neon-pink transition-colors">
                          {member.name}
                        </h3>
                        <p className="font-mono text-xs text-gray-700 mt-2 uppercase tracking-[0.3em]">
                          {member.role}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            }

            return <TeamCard key={member.id} member={member} offsetClass={offsetClass} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Framer = () => {
  return (
    <div className="bg-black">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
         
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Framer;

const cards = [
  {
    url: "https://i.postimg.cc/635sxt95/OIP-1.jpg",
    id: 1,
  },
  {
    url: "https://i.postimg.cc/26hfx28n/OIP-2.jpg",
    id: 2,
  },
  {
    url: "https://i.postimg.cc/pybfNVDm/cin-cin-business-meeting-event-space-singapore-large.jpg",
    id: 3,
  },
  {
    url: "https://i.postimg.cc/Fz3YtyF4/OIP-4.jpg",
    id: 4,
  },
  {
    url: "https://i.postimg.cc/d3Pf6y5X/OIP-5.jpg",
    id: 5,
  },
  {
    url: "https://i.postimg.cc/7YMWwbL1/PWH2-REST-BAR-PENDRY-02-1267.jpg",
    id: 6,
  },
  {
    url: "https://i.postimg.cc/FKRr026q/OIP-6.jpg",
    id: 7,
  },
];
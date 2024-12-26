import { motion } from "framer-motion";
import Hx from "./assets/mS28QhWcSped7JSQ7vltnisa5c8.png";
import Hx2 from "./assets/MJeIlKDeZABMXLwJpB6Bztr0ofE.png";
import Hx3 from "./assets/CoAe1eW9S1x6kWgYfFZw038Bw.png";

function App() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0">
        <div className="bg-black text-[rgba(255,255,255,.6)] text-[14px] font-medium mx-auto flex justify-center items-center h-[46px]">
          This page is included in a free SaaS Website Kit.
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto flex flex-col justify-center h-full">
          <h1 className="text-[84px] font-bold max-w-[540px] bg-gradient-to-b from-black from-[52.8294%] to-[#2240AB] to-[100%] bg-clip-text text-transparent">
            Pathway to productivity
          </h1>
          <p className="max-w-[540px]">
          Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.
          </p>
        </div>
        <div className="absolute right-[174px] bottom-[74px] aspect-square h-[707px] overflow-visible -rotate-[163deg] drop-shadow-[rgba(28,51,128,0.25)_-30px_-90px_26px]">
          <motion.img
            animate={{
              y: [-30, 0, -30],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            src={Hx}
            alt="Hx"
          />
        </div>
        <img
          className="absolute right-[150px] bottom-[0px] translate-y-[74px] aspect-square h-[243px] overflow-visible rotate-[35deg] drop-shadow-[rgba(28,52,130,.15)_-30px_-90px_26px]"
          src={Hx2}
          alt="Hx"
        />
        <img
          className="absolute right-[47%] bottom-[70%] translate-y-[74px] aspect-square h-[243px] overflow-visible drop-shadow-[rgba(28,52,130,.15)_-30px_-90px_26px]"
          src={Hx3}
          alt="Hx"
        />
      </main>
    </>
  );
}

export default App;

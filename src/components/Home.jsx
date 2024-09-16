import { useState, useEffect } from "react";
import { HOME_CONTENT } from "../constants";
import profilePic from "../assets/HemProfile.jpg";
import { motion } from "framer-motion";
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  }
});

const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05, 
    },
  }),
};

const Home = () => {

  const [name, setName] = useState("React Developer");

  useEffect(() => {
    
    const interval = setInterval(() => {
      setName((prevName) =>
        prevName === "React Developer" ? "MERN Developer" : "React Developer"
      );
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap "> 
        <div className="w-full lg:w-1/2">
          <div className=" mx-20 flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-1 lg:text-left lg:text-8xl"
            >
              Hemkumar
            </motion.h1>
            
            <motion.span
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl  tracking-tight text-transparent"
            >
              {[...name].map((letter, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={letterAnimation}
                  style={{ display: 'inline-block', whiteSpace: 'pre' }} 
                >
                  {letter === " " ? "\u00A0" : letter} 
                </motion.span>
              ))}
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HOME_CONTENT}
            </motion.p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="rounded-2xl w-64 h-64 lg:w-auto lg:h-auto"
              src={profilePic}
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

 import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import {  motion } from "framer-motion";

const iconsVariants = (duration) =>({
    initial: {y: -10},
    animate:{
        y:[10, -10],
        transition:{
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technology = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
            whileInView={{ opacity:1, y: 0}}
            initial={{ opacity: 0, y: -100}}
            transition={{duration: 1.5}}
            className="my-20 text-center text-4xl">Technology</motion.h1> 
        <motion.div 
            whileInView={{ opacity:1, x: 0}}
            initial={{ opacity: 0, x: -100}}
            transition={{duration: 1.5}}
            className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
                variants={iconsVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiHtml5 className="text-7xl text-orange-500" />
            </motion.div>
            <motion.div 
                variants={iconsVariants(3)}
                initial="initial"
                animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiCss3 className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div 
                variants={iconsVariants(3.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiJsBadge className="text-7xl text-yellow-500" />
            </motion.div>
                <motion.div
                variants={iconsVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-green-500" />
            </motion.div>
            <motion.div 
                variants={iconsVariants(3.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiExpress className="text-7xl text-yellow-400" />
            </motion.div>
            <motion.div 
                variants={iconsVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaReact className="text-7xl text-cyan-400" />
            </motion.div>
                <motion.div 
                variants={iconsVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-7xl text-green-300" />
            </motion.div>
            <motion.div
                variants={iconsVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJava className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div 
                variants={iconsVariants(3.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPython className="text-7xl text-yellow-400" />
            </motion.div>
            <motion.div 
                variants={iconsVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <GrMysql className="text-7xl text-blue-600" />
            </motion.div>
        </motion.div>   
    </div>
  )
}

export default Technology

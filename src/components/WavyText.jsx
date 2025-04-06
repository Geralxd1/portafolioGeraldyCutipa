import { FC } from "react";
import { motion } from "framer-motion";

const WavyText = ({
    text,
    delay = 0,
    duration = 0.05,
    replay,
    ...props
}) => {
    const letters = Array.from(text);

    const container = {
        hidden: {
            opacity: 0
        },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: duration, delayChildren: i * delay }
        })
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200
            }
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200
            }
        }
    };

    return (
        <motion.h1
            style={{ display: "flex", overflow: "hidden" }}
            variants={container}
            initial="hidden"
            animate={"visible"}
            {...props}
            className="text-7xl font-bold text-yellow-400"
        >
            {letters.map((letter, index) => (
                <motion.span key={index} variants={child}>
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.h1>
    );
};

export default WavyText;

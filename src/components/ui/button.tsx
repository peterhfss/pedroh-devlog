import { motion } from "motion/react"

interface ButtonProps {
    children: React.ReactNode
}

export function Button({children}: ButtonProps){
    return(
       <motion.button
       >
        {children}
       </motion.button>
    )
}
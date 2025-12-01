'use client'

import { motion } from 'framer-motion'

interface LotteryBallProps {
  number: number
  delay?: number
  isSpecial?: boolean
}

const LotteryBall = ({ number, delay = 0, isSpecial = false }: LotteryBallProps) => {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: delay
      }}
      whileHover={{ scale: 1.1, rotate: 10 }}
      className={`
        relative w-14 h-14 rounded-full flex items-center justify-center
        text-lg font-bold shadow-lg cursor-pointer
        ${isSpecial 
          ? 'bg-gradient-to-br from-yellow-500 to-orange-500 text-white' 
          : 'bg-gradient-to-br from-blue-500 to-purple-600 text-white'
        }
      `}
    >
      <span className="relative z-10">{number}</span>
      <div className="absolute inset-0 bg-white/10 rounded-full blur-sm"></div>
      <div className="absolute inset-1 bg-gradient-to-br from-transparent to-black/20 rounded-full"></div>
    </motion.div>
  )
}

export default LotteryBall

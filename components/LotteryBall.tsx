'use client'

import { motion } from 'framer-motion'

interface LotteryBallProps {
  number: number
  delay?: number
  isSpecial?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const LotteryBall = ({ number, delay = 0, isSpecial = false, size = 'md' }: LotteryBallProps) => {
  const sizeClasses = {
    sm: 'w-10 h-10 text-sm',
    md: 'w-14 h-14 text-lg',
    lg: 'w-20 h-20 text-2xl'
  }

  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: delay
      }}
      whileHover={{ scale: 1.1, y: -5 }}
      className={`
        ${sizeClasses[size]}
        ${isSpecial 
          ? 'bg-gradient-to-br from-yellow-500 to-orange-600 shadow-lg shadow-yellow-500/30' 
          : 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
        }
        rounded-full flex items-center justify-center font-bold
        shadow-lg hover:shadow-xl transition-all duration-300
        relative overflow-hidden group
      `}
    >
      {/* Brilho interno */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full"></div>
      
      {/* Efeito de brilho ao passar o mouse */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      
      {/* Número */}
      <span className={`
        relative z-10
        ${isSpecial ? 'text-white' : 'text-gray-100'}
        font-extrabold tracking-tight
      `}>
        {number.toString().padStart(2, '0')}
      </span>
      
      {/* Anel externo */}
      <div className={`
        absolute inset-[-2px] rounded-full
        ${isSpecial 
          ? 'bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 animate-pulse' 
          : 'bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20'
        }
        opacity-0 group-hover:opacity-100 transition-opacity duration-300
      `}></div>
    </motion.div>
  )
}

export default LotteryBall

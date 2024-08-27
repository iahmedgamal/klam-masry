import React from 'react'
import styles from './tooltip.module.css'
interface TooltipProps {
    text: number,
    children: React.ReactNode
}
const Tooltip = ({text,children}: TooltipProps) => {
  return (
   <span className={styles.tooltip}>
    {children}
    <span className={styles.tooltipText}>This word appeared {text} times in the dictionary</span>
   </span>
  )
}

export default Tooltip
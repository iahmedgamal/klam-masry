import React from 'react'
interface TooltipProps {
  text: number,
  children: React.ReactNode
}
const Tooltip = ({ text, children }: TooltipProps) => {
  return (
    <span className="relative inline-block  group">
      {children}
      <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block w-80 bg-slate-400 text-cyan-700 text-center rounded-lg p-2 z-10">
        This word appeared {text} times in the dictionary</span>
    </span>
  )
}

export default Tooltip
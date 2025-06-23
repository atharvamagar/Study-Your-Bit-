interface MarqueeProps {
  text: string
  className?: string
  speed?: number
}

export function Marquee({ text, className = "", speed = 18 }: MarqueeProps) {
  return (
    <div className={`w-full overflow-hidden bg-[#feae7d] ${className}`}>
      <div 
        className="whitespace-nowrap animate-marquee text-white font-semibold py-2 text-lg"
        style={{ 
          animationDuration: `${speed}s`,
          display: 'inline-block',
          minWidth: '100%'
        }}
      >
        {text}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee ${speed}s linear infinite;
        }
      `}</style>
    </div>
  )
} 
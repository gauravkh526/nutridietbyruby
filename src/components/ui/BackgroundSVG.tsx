const BackgroundSVG = () => {
  return (
    <div className="absolute inset-0 pointer-events-none select-none opacity-10 z-0">
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        viewBox="0 0 100 100"
      >
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="10"
          fill="currentColor"
        >
          ⚖️ 
        </text>
      </svg>
    </div>
  )
}

export default BackgroundSVG

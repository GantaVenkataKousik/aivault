import Link from "next/link"

interface LogoProps {
  size?: "sm" | "md" | "lg"
}

export default function Logo({ size = "md" }: LogoProps) {
  const getLogoSize = () => {
    switch (size) {
      case "sm":
        return {
          iconSize: "w-6 h-6",
          textSize: "text-base"
        }
      case "md":
        return {
          iconSize: "w-8 h-8",
          textSize: "text-xl"
        }
      case "lg":
        return {
          iconSize: "w-10 h-10",
          textSize: "text-2xl"
        }
      default:
        return {
          iconSize: "w-8 h-8",
          textSize: "text-xl"
        }
    }
  }

  const { iconSize, textSize } = getLogoSize()

  return (
    <Link href="/" className="flex items-center">
      <div className="flex items-center">
        {/* Circle logo part */}
        <div className={`relative ${iconSize} flex-shrink-0`}>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle 
              cx="14" 
              cy="14" 
              r="12" 
              fill="url(#paint0_radial)" 
            />
            <path
              d="M14 26C20.6274 26 26 20.6274 26 14C26 7.37258 20.6274 2 14 2"
              stroke="url(#paint1_linear)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M14 2C7.37258 2 2 7.37258 2 14C2 20.6274 7.37258 26 14 26"
              stroke="url(#paint2_linear)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="14" cy="14" r="3" fill="white" />
            <defs>
              <radialGradient
                id="paint0_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(14 14) rotate(90) scale(12)"
              >
                <stop stopColor="#1EFCFA" stopOpacity="0.2" />
                <stop offset="1" stopColor="#1E88FC" stopOpacity="0.1" />
              </radialGradient>
              <linearGradient
                id="paint1_linear"
                x1="26"
                y1="14"
                x2="2"
                y2="14"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1EFCFA" />
                <stop offset="1" stopColor="#1E88FC" />
              </linearGradient>
              <linearGradient
                id="paint2_linear"
                x1="2"
                y1="14"
                x2="26"
                y2="14"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1EFCFA" />
                <stop offset="1" stopColor="#1E88FC" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Text part */}
        <div className={`font-bold ${textSize} text-white ml-2.5`}>
          AI<span className="ml-[2px]">Vault</span>
        </div>
      </div>
    </Link>
  )
} 
// StatusBar.jsx
import { MoveRight } from "lucide-react"; // or any icon library

const StatusBar = () => {
  return (
    <>
      <style>{`
        /* Left → Right continuous scroll */
        @keyframes marquee-left-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .custom-marquee {
          animation: marquee-left-right 14s linear infinite;
          will-change: transform;
        }

        /* Shimmer effect */
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .custom-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
          background-size: 200% 100%;
          animation: shimmer 3s ease-in-out infinite;
        }

        /* Subtle pulse on the entire bar */
        @keyframes subtle-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.97; }
        }
        .pulse-bar {
          animation: subtle-pulse 3s ease-in-out infinite;
        }

        /* Glow on text (optional) */
        .glow-text {
          text-shadow: 0 0 10px rgba(255,255,255,0.3), 0 0 20px rgba(255,255,255,0.1);
        }
      `}</style>

      <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#1D87A1]  via-[#30ACBF] to-[#2D89A1] shadow-lg h-12 flex items-center pulse-bar">
        <div className="inline-block whitespace-nowrap custom-marquee text-white font-bold text-md tracking-wider drop-shadow-lg glow-text">
          <span>
            Locate a Loan Officer <MoveRight className="inline-block mx-4" /> (888) 377-1265
            &nbsp;&nbsp;•&nbsp;&nbsp;
            Locate a Loan Officer <MoveRight className="inline-block mx-4" /> (888) 377-1265
            &nbsp;&nbsp;•&nbsp;&nbsp;
            Locate a Loan Officer <MoveRight className="inline-block mx-4" /> (888) 377-1265
            &nbsp;&nbsp;•&nbsp;&nbsp;
            Locate a Loan Officer <MoveRight className="inline-block mx-4" /> (888) 377-1265
          </span>
        </div>
        <div className="absolute inset-0 pointer-events-none custom-shimmer" />

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1 left-1/4 w-1 h-1 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-2 right-1/3 w-1.5 h-1.5 bg-white/20 rounded-full animate-ping" style={{ animationDelay: '1.2s' }} />
          <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-white/25 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
        </div>
      </div>
    </>
  );
};

export default StatusBar;
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over interactive elements
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer") ||
        target.closest(".cursor-pointer")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main cursor glow */}
      <div
        className="pointer-events-none fixed z-50 transition-all duration-200 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* Outer glow ring */}
        <div
          className={`absolute inset-0 rounded-full transition-all duration-300 ${
            isHovering ? "scale-150 opacity-70" : "scale-100 opacity-50"
          }`}
          style={{
            width: "24px",
            height: "24px",
            background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
            filter: "blur(8px)",
            transform: "translate(-50%, -50%)",
          }}
        />
        
        {/* Middle shine */}
        <div
          className={`absolute inset-0 rounded-full transition-all duration-200 ${
            isHovering ? "scale-125 opacity-90" : "scale-100 opacity-70"
          }`}
          style={{
            width: "16px",
            height: "16px",
            background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 60%)",
            filter: "blur(5px)",
            transform: "translate(-50%, -50%)",
          }}
        />
        
        {/* Inner bright spot */}
        <div
          className={`absolute inset-0 rounded-full transition-all duration-150 ${
            isHovering ? "scale-110 opacity-100" : "scale-100 opacity-90"
          }`}
          style={{
            width: "8px",
            height: "8px",
            background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 50%)",
            filter: "blur(2px)",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      {/* Trailing sparkle effect */}
      <div
        className="pointer-events-none fixed z-40 transition-all duration-500 ease-out opacity-20"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className="absolute rounded-full animate-pulse"
          style={{
            width: "32px",
            height: "32px",
            background: "radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 60%)",
            filter: "blur(10px)",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;


import { cn } from "@/lib/utils";

interface ProgressCircleProps {
  value: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
  strokeWidth?: number;
  showValue?: boolean;
  valueLabel?: string;
  color?: "primary" | "green" | "red" | "yellow" | "blue" | "accent";
}

export function ProgressCircle({
  value,
  max = 100,
  size = "md",
  className,
  strokeWidth = 3,
  showValue = true,
  valueLabel,
  color = "primary",
}: ProgressCircleProps) {
  const percentage = (value / max) * 100;
  const normalizedPercentage = Math.min(100, Math.max(0, percentage));
  
  const sizeMap = {
    sm: 40,
    md: 60,
    lg: 100,
  };

  const renderSize = sizeMap[size];
  const radius = (renderSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (normalizedPercentage / 100) * circumference;
  
  const fontSize = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-xl font-bold",
  }[size];
  
  const colorClasses = {
    primary: "stroke-primary",
    green: "stroke-green-600",
    red: "stroke-eco-red",
    yellow: "stroke-yellow-500",
    blue: "stroke-blue-500",
    accent: "stroke-accent",
  };

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <svg
        width={renderSize}
        height={renderSize}
        viewBox={`0 0 ${renderSize} ${renderSize}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx={renderSize / 2}
          cy={renderSize / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeOpacity={0.2}
          fill="none"
        />
        <circle
          cx={renderSize / 2}
          cy={renderSize / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          fill="none"
          strokeLinecap="round"
          className={colorClasses[color]}
          transform={`rotate(-90 ${renderSize / 2} ${renderSize / 2})`}
        />
      </svg>
      {showValue && (
        <div className={cn("absolute inset-0 flex flex-col items-center justify-center", fontSize)}>
          <span className="font-semibold">{valueLabel || `${Math.round(normalizedPercentage)}%`}</span>
        </div>
      )}
    </div>
  );
}

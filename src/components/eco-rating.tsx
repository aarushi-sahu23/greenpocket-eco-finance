
import React from "react";
import { cn } from "@/lib/utils";
import { Leaf, AlertTriangle, Ban } from "lucide-react";

export type EcoRatingType = "green" | "neutral" | "red";

interface EcoRatingProps {
  type: EcoRatingType;
  className?: string;
  showIcon?: boolean;
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
}

export function EcoRating({
  type,
  className,
  showIcon = true,
  showLabel = true,
  size = "md",
}: EcoRatingProps) {
  const getIconAndLabel = () => {
    switch (type) {
      case "green":
        return {
          icon: <Leaf className="h-3.5 w-3.5" />,
          label: "Eco-friendly",
          color: "text-eco-green bg-green-100",
        };
      case "neutral":
        return {
          icon: <AlertTriangle className="h-3.5 w-3.5" />,
          label: "Neutral",
          color: "text-yellow-700 bg-yellow-100",
        };
      case "red":
        return {
          icon: <Ban className="h-3.5 w-3.5" />,
          label: "Carbon-heavy",
          color: "text-eco-red bg-red-100",
        };
    }
  };

  const { icon, label, color } = getIconAndLabel();
  
  const sizeClass = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-2.5 py-1",
    lg: "text-base px-3 py-1.5",
  }[size];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full font-medium",
        color,
        sizeClass,
        className
      )}
    >
      {showIcon && icon}
      {showLabel && <span>{label}</span>}
    </span>
  );
}

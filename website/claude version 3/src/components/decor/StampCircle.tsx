import { cn } from "@/lib/cn";

interface StampCircleProps {
  text: string;
  className?: string;
  color?: string;
}

export function StampCircle({ text, className, color = "var(--color-primary)" }: StampCircleProps) {
  const radius = 36;
  return (
    <svg viewBox="0 0 100 100" className={cn("w-24 h-24", className)} aria-hidden>
      <defs>
        <path id="stamp-arc" d={`M 50 50 m -${radius}, 0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`} />
      </defs>
      <circle cx="50" cy="50" r="42" fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="3 4" />
      <circle cx="50" cy="50" r="32" fill="none" stroke={color} strokeWidth="1" />
      <text fill={color} fontFamily="ui-monospace, monospace" fontSize="9" letterSpacing="2.5" fontWeight="700">
        <textPath href="#stamp-arc" startOffset="2%">
          {text}
        </textPath>
      </text>
    </svg>
  );
}

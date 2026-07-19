import { ChefHat } from "lucide-react";

const LogoMark = ({ className = "h-9 w-9" }) => {
  const gradient = "linear-gradient(135deg, var(--primary), color-mix(in oklch, var(--primary), black 30%))";
  return (
    <div className={`relative shrink-0 ${className}`}>
      <div
        className="absolute inset-0 rounded-xl blur-lg opacity-60"
        style={{ backgroundImage: gradient }}
      />
      <div
        className="relative flex h-full w-full items-center justify-center rounded-xl ring-1 ring-white/15"
        style={{
          backgroundImage: gradient,
          boxShadow: "0 6px 16px -4px color-mix(in oklch, var(--primary), transparent 55%)",
        }}
      >
        <ChefHat className="size-5 text-primary-foreground" strokeWidth={2.25} />
      </div>
    </div>
  );
};

export default LogoMark;

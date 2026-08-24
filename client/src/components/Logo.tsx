interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const getSize = () => {
    switch (size) {
      case "sm": return "h-10 w-10";
      case "lg": return "h-48 w-48";
      default:   return "h-14 w-14";
    }
  };

  return (
    <div className={`flex items-center ${className}`} data-testid="logo-container">
      <img
        src="/logo.png"
        alt="Ted Croft Painting LLC"
        className={`${getSize()} object-cover rounded-full`}
        data-testid="logo-img"
      />
    </div>
  );
}

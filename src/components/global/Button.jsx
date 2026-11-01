export default function Button({ children, isBg, className, leftIcon }) {
  return (
    <button
      className={`px-6 py-3 border border-foreground text-foreground rounded-md hover:bg-primary hover:text-white hover:border-primary transition-colors duration-300 cursor-pointer ${leftIcon && "flex items-center gap-2.5"} ${className} ${isBg && "flex items-center gap-2.5 bg-primary text-white border-none"}`}
    >
      {children}
    </button>
  );
}

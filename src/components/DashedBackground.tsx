const DashedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Grid container matching content width */}
      <div className="h-full max-w-4xl mx-auto px-6 relative">
        {/* Left edge line */}
        <div className="absolute left-6 top-0 h-full border-l border-dashed border-foreground/[0.15]" />
        {/* Right edge line */}
        <div className="absolute right-6 top-0 h-full border-l border-dashed border-foreground/[0.15]" />
        {/* Center line */}
        <div className="absolute left-1/2 top-0 h-full border-l border-dashed border-foreground/[0.15]" />
      </div>
      
      {/* Horizontal dashed lines */}
      <div className="absolute inset-0 flex flex-col justify-between py-20">
        {[...Array(6)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="w-full border-t border-dashed border-foreground/[0.15]"
          />
        ))}
      </div>
    </div>
  );
};

export default DashedBackground;

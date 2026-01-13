const DashedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Grid container matching content width */}
      <div className="h-full max-w-4xl mx-auto px-6 relative">
        {/* Evenly spaced vertical lines */}
        {[0, 25, 50, 75, 100].map((percent) => (
          <div
            key={`v-${percent}`}
            className="absolute top-0 h-full border-l border-dashed border-foreground/[0.08]"
            style={{ left: `calc(${percent}% - ${percent === 100 ? '1px' : '0px'})` }}
          />
        ))}
      </div>
      
      {/* Horizontal dashed lines */}
      <div className="absolute inset-0 flex flex-col justify-between py-20">
        {[...Array(6)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="w-full border-t border-dashed border-foreground/[0.08]"
          />
        ))}
      </div>
    </div>
  );
};

export default DashedBackground;

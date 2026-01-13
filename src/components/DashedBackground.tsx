const DashedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Vertical dashed lines */}
      <div className="absolute inset-0 flex justify-between px-8 md:px-16 lg:px-32">
        {[...Array(5)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="h-full border-l border-dashed border-foreground/[0.15]"
          />
        ))}
      </div>
      {/* Horizontal dashed lines */}
      <div className="absolute inset-0 flex flex-col justify-between py-16">
        {[...Array(8)].map((_, i) => (
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

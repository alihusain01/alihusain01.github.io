const DashedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Vertical lines */}
      <div className="absolute inset-0 flex justify-between px-[20%]">
        {[...Array(3)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="h-full w-px bg-foreground/5"
          />
        ))}
      </div>
      {/* Horizontal lines */}
      <div className="absolute inset-0 flex flex-col justify-between py-[15%]">
        {[...Array(3)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="w-full h-px bg-foreground/5"
          />
        ))}
      </div>
    </div>
  );
};

export default DashedBackground;

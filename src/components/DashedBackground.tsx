const DashedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Minimal vertical dashed lines */}
      <div className="absolute inset-0 max-w-5xl mx-auto flex justify-between px-6">
        <div className="h-full border-l border-dashed border-grid opacity-50" />
        <div className="h-full border-l border-dashed border-grid opacity-50" />
      </div>
    </div>
  );
};

export default DashedBackground;

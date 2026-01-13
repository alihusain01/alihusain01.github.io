const DashedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 max-w-4xl mx-auto flex justify-between px-6">
        <div className="h-full border-l border-grid opacity-30" />
        <div className="h-full border-l border-grid opacity-30" />
      </div>
    </div>
  );
};

export default DashedBackground;

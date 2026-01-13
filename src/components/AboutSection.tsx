const AboutSection = () => {
  return (
    <section id="about" className="py-16 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold text-foreground">Ali Husain</h1>
          <blockquote className="text-xl font-medium italic text-primary/80 mb-6">
            "Sometimes which choice you make is not as important as making a choice and committing to it."
          </blockquote>
          <p className="text-lg text-foreground leading-relaxed max-w-2xl">
            Hey! I'm currently in the Early Career Leadership Development Program at United Airlines. This two year
            program exposes new-grads to different functions in the business including software engineering and product
            management.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

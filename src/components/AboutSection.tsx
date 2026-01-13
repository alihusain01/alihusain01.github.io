const AboutSection = () => {
  return <section id="about" className="py-16 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold text-foreground">Ali Husain</h1>
          <p className="text-lg font-medium italic leading-relaxed max-w-2xl text-green-500">
            "Sometimes which choice you make is not as important as making a choice and committing to it."
          </p>
          <p className="text-lg text-foreground leading-relaxed max-w-2xl">
            I think about this quote, from Matthew McConaughey’s Greenlights, a lot. It reminds me that I may not have
            all the answers right now, but that’s okay. What matters is staying in motion, trusting that clarity comes
            from action, and believing that the road keeps revealing itself one step at a time as long as I keep showing
            up.
          </p>
        </div>
      </div>
    </section>;
};
export default AboutSection;
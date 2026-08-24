import { Sparkles, CheckCircle, Camera, Palette, ImageIcon } from "lucide-react";

export default function AIColorPreview() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const navHeight = 64;
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };

  const bullets = [
    "Preview colors on walls, trim, cabinets, or exterior",
    "Compare 2–4 color options side-by-side",
    "Helps you decide faster and feel confident",
    "Perfect for clients who want a high-end, intentional finish",
  ];

  const steps = [
    {
      icon: Camera,
      title: "Send a Photo",
      description: "Upload a clear photo of your room or exterior.",
    },
    {
      icon: Palette,
      title: "Pick Your Colors",
      description: "Share the paint color name/code or your top options.",
    },
    {
      icon: ImageIcon,
      title: "Get the Preview",
      description: "We'll send a realistic mockup so you can choose confidently.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-[0_4px_40px_rgba(0,0,0,0.08)] p-8 sm:p-12 md:p-16">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 flex items-center justify-center gap-3">
              <Sparkles className="w-7 h-7 text-black flex-shrink-0" />
              AI Color Preview (Real Photo Mockup)
            </h2>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Stop guessing. See the color on your actual home before we paint.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-14">
            <p className="text-gray-600 leading-relaxed text-base md:text-lg text-center mb-10">
              Choosing paint shouldn't feel like a gamble. Send us a photo of your space and the colors
              you're considering—then we'll generate a realistic preview so you can pick with confidence
              (and avoid expensive "I hate it" repaint situations).
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {bullets.map((bullet) => (
                <div key={bullet} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-black mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-center text-sm font-semibold tracking-[0.15em] uppercase text-gray-400 mb-10">
              How It Works
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {steps.map((step, i) => {
                const StepIcon = step.icon;
                return (
                  <div key={i} className="text-center">
                    <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mx-auto mb-5">
                      <StepIcon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-black mb-2">{step.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="text-center text-xs text-gray-400 italic mb-12">
            Pro tip: Natural daylight photos give the most accurate-looking previews.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToContact}
              className="bg-black text-white font-bold text-sm md:text-base px-8 py-3.5 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              Get My Color Preview
            </button>
            <button
              onClick={scrollToContact}
              className="bg-white text-black font-semibold text-sm md:text-base px-8 py-3.5 rounded-lg border-2 border-black hover:bg-gray-100 transition-colors duration-200"
            >
              Request an Estimate
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

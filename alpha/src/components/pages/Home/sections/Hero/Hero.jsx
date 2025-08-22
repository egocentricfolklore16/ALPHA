import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // ============================================
  // CUSTOMIZE YOUR HERO SLIDES HERE
  // ============================================
  const heroSlides = [
    {
      // Slide 1
      title: "Building Dreams, Creating Value",
      subtitle: "Premium Real Estate Development in Lagos",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920",
      primaryButtonText: "Explore Properties",
      primaryButtonAction: () =>
        console.log("Primary button clicked - Slide 1"),
      secondaryButtonText: "Learn More",
      secondaryButtonAction: () =>
        console.log("Secondary button clicked - Slide 1"),
    },
    {
      // Slide 2
      title: "Empowering Communities",
      subtitle: "Financial Solutions for Growth",
      image: "Image_fx (1).jpg",
      primaryButtonText: "Get Started",
      primaryButtonAction: () =>
        console.log("Primary button clicked - Slide 2"),
      secondaryButtonText: "Our Services",
      secondaryButtonAction: () =>
        console.log("Secondary button clicked - Slide 2"),
    },
    {
      // Slide 3
      title: "Sustainable Agriculture",
      subtitle: "Driving Nigeria's Agricultural Excellence",
      image:
        "image2.jpg",
      primaryButtonText: "Our Impact",
      primaryButtonAction: () =>
        console.log("Primary button clicked - Slide 3"),
      secondaryButtonText: "Contact Us",
      secondaryButtonAction: () =>
        console.log("Secondary button clicked - Slide 3"),
    },
  ];

  // ============================================
  // CUSTOMIZE STYLING OPTIONS HERE
  // ============================================
  const styling = {
    // Height of the hero section
    sectionHeight: "h-[80vh]", // Options: "h-screen", "h-[600px]", "h-[700px]", "h-[800px]"

    // Overlay gradient colors
    overlayGradient: "from-blue-900/80 to-orange-500/40", // Customize gradient colors

    // Text colors
    textColor: "text-white",

    // Title size
    titleSize: "text-5xl md:text-6xl", // Adjust font sizes

    // Subtitle size
    subtitleSize: "text-xl md:text-2xl",

    // Primary button colors
    primaryButtonBg: "bg-orange-500",
    primaryButtonHoverBg: "hover:bg-orange-600",
    primaryButtonText: "text-white",

    // Secondary button colors
    secondaryButtonBorder: "border-white",
    secondaryButtonText: "text-white",
    secondaryButtonHoverBg: "hover:bg-white",
    secondaryButtonHoverText: "hover:text-blue-900",

    // Auto-play settings
    autoPlayEnabled: true,
    autoPlayInterval: 5000, // milliseconds

    // Show/hide elements
    showNavigationArrows: true,
    showDots: true,
    showSecondaryButton: true,
  };

  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  // Auto-play functionality
  useEffect(() => {
    if (styling.autoPlayEnabled) {
      const timer = setInterval(nextSlide, styling.autoPlayInterval);
      return () => clearInterval(timer);
    }
  }, [currentSlide, styling.autoPlayEnabled]);

  return (
    
    <section className={`relative ${styling.sectionHeight} overflow-hidden`}>
      {/* Background Image and Overlay */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={slide.title}
            className={`absolute object-top inset-0 w-full h-full object-cover transition-opacity duration-2000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${styling.overlayGradient}`}
        ></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl transition duration-500 ease-in-out">
          {/* Title */}
          <h1
            className={`${styling.titleSize} ${styling.textColor} font-bold mb-4`}
          >
            {heroSlides[currentSlide].title}
          </h1>

          {/* Subtitle */}
          <p className={`${styling.subtitleSize} ${styling.textColor} mb-8`}>
            {heroSlides[currentSlide].subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            {/* Primary Button */}
            <button
              onClick={heroSlides[currentSlide].primaryButtonAction}
              className={`${styling.primaryButtonBg} ${styling.primaryButtonText} cursor-pointer px-8 py-3 rounded-full ${styling.primaryButtonHoverBg} transition transform hover:scale-105`}
            >
              {heroSlides[currentSlide].primaryButtonText}
            </button>

            {/* Secondary Button */}
            {styling.showSecondaryButton && (
              <button
                onClick={heroSlides[currentSlide].secondaryButtonAction}
                className={`border-2 ${styling.secondaryButtonBorder} ${styling.secondaryButtonText} cursor-pointer px-8 py-3 rounded-full ${styling.secondaryButtonHoverBg} ${styling.secondaryButtonHoverText} transition`}
              >
                {heroSlides[currentSlide].secondaryButtonText}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {styling.showNavigationArrows && (
        <>
          <button
            onClick={prevSlide}
            className="absolute  cursor-pointer left-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/30 transition"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/30 transition"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {styling.showDots && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-orange-500 w-8"
                  : "bg-white/50 w-3 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-fade-in-delay {
          animation: fadeIn 0.8s ease-out 0.2s both;
        }
      `}</style>
    </section>
  );
};

// ============================================
// USAGE EXAMPLE
// ============================================
const Hero = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
    </div>
  );
};

export default Hero;

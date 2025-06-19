import React from "react";
import { CheckCircle } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const About: React.FC = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
  });

  return (
    <section
      id="about"
      ref={elementRef}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-1000 ${
              isIntersecting
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Transforming Ideas Into
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {" "}
                Digital Reality
              </span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              With over 5 years of experience in digital innovation, we've
              helped hundreds of businesses achieve their goals through
              thoughtful design and robust technology solutions. Our team of
              experts is passionate about creating experiences that matter.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Custom Web & Mobile Development",
                "UI/UX Design & Prototyping",
                "Cloud Infrastructure & DevOps",
                "Digital Strategy & Consulting",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isIntersecting
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-transparent bg-gradient-to-tr from-blue-400/30 via-purple-400/30 to-pink-400/30 animate-shimmer">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
                alt="Modern creative workspace"
                className="w-full h-96 object-cover scale-105 transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

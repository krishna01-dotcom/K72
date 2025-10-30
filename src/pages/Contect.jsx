import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Contact = () => {
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    // Fade in background container
    tl.from(containerRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    // Animate heading
    tl.from(headingRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    });

    // Animate form fields
    tl.from(formRef.current.querySelectorAll("input, textarea, button"), {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 0.6,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-800 text-white px-4 py-16"
    >
      {/* Heading */}
      <h1
        ref={headingRef}
        className="text-4xl sm:text-5xl font-bold mb-8 text-center uppercase tracking-wide"
      >
        Contact <span className="text-pink-400">Us</span>
      </h1>

      {/* Form */}
      <form
        ref={formRef}
        className="w-full max-w-md bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg space-y-6"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-md bg-white/20 placeholder-gray-200 text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-md bg-white/20 placeholder-gray-200 text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        <textarea
          rows="4"
          placeholder="Your Message"
          className="w-full p-3 rounded-md bg-white/20 placeholder-gray-200 text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-md transition-all duration-300 shadow-md hover:shadow-xl"
        >
          Send Message
        </button>
      </form>

      {/* Footer Text */}
      <p className="mt-10 text-sm text-gray-300">
        © {new Date().getFullYear()} Krishna Gupta — All rights reserved.
      </p>
    </section>
  );
};

export default Contact;

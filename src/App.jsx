
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css"; // includes: html { scroll-behavior: smooth; }

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const isDarkStored = localStorage.theme === "dark";
    document.documentElement.classList.toggle("dark", isDarkStored);
    setIsDark(isDarkStored);
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    const nowDark = !html.classList.contains("dark");
    html.classList.toggle("dark", nowDark);
    localStorage.theme = nowDark ? "dark" : "light";
    setIsDark(nowDark);
  };

  return (
    <div className="font-sans text-gray-800 dark:text-gray-200 dark:bg-gray-900 transition-colors duration-500">
      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-teal-600">Kyara</h1>
          <ul className="flex space-x-6 text-sm font-medium">
            <li><a href="#home" className="text-gray-700 dark:text-gray-200 hover:text-teal-500">Home</a></li>
            <li><a href="#about" className="text-gray-700 dark:text-gray-200 hover:text-teal-500">About</a></li>
            <li><a href="#drinks" className="text-gray-700 dark:text-gray-200 hover:text-teal-500">Drinks</a></li>
            <li><a href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-teal-500">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Dark Mode Toggle */}
      <div className="fixed top-4 right-4 z-50 mt-16">
        <button
          onClick={toggleDarkMode}
          className="bg-teal-600 text-white px-4 py-2 rounded shadow hover:bg-teal-700 transition"
        >
          {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-center px-4 pt-20"
        style={{ backgroundImage: "url('images/bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-0" />
        <div className="z-10 flex flex-col items-center" data-aos="fade-up">
          <img
            src="images/logo.jpg"
            alt="Kyara Logo"
            className="w-28 h-28 mb-6 animate-bounce rounded-full shadow-2xl border-4 border-white"
          />
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)]">
            Kyara Beverages
          </h1>
          <p className="text-lg md:text-2xl mt-4 text-teal-200 italic tracking-wide">
            Refreshment, Reimagined 🍹
          </p>
          <div className="mt-16 animate-bounce text-white text-2xl">↓</div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 px-4 md:px-6 bg-gradient-to-b from-white to-lime-50 dark:from-gray-900 dark:to-gray-800 text-center"
      >
        <h2 className="text-3xl font-bold mb-6 text-teal-800 dark:text-teal-300">About Us</h2>
        <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-gray-300" data-aos="fade-in">
          At Kyara Beverages, we’re reimagining refreshment with millet-based fruit drinks.
          Rooted in tradition and powered by innovation, our mission is to craft beverages that are
          wholesome, vibrant, and refreshingly real. With our first ready-to-drink collection,
          we’re stirring up a new kind of story—one that’s good for you and good for the world.
        </p>
      </section>



{/* Product Teasers */}
<section
  id="drinks"
  className="py-16 px-6 bg-lime-50 dark:bg-gray-800 text-center"
>
  <h2 className="text-3xl font-bold text-teal-800 dark:text-teal-300 mb-10">
    Our Drinks
  </h2>
  <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
    {[
      { img: "images/drink1.jpg", name: "Mint Fizz", desc: "A minty burst of cool refreshment." },
      { img: "images/drink2.jpg", name: "Citrus Splash", desc: "Zesty, tangy, and totally uplifting." },
      { img: "images/drink3.jpg", name: "Berry Breeze", desc: "A fruity twist of nature’s sweetness." },
      { img: "images/drink4.jpg", name: "Tropical Tide", desc: "An exotic wave of sun-kissed fruits, refreshing and vibrant." },
      { img: "images/drink5.jpg", name: "Solar Sip", desc: "A radiant blend of bright flavors, warming you from the inside out." },
      { img: "images/drink6.jpg", name: "Crimson Current", desc: "A deep, rich flow of berry goodness with a hint of tantalizing tartness." }
    ].map((drink, index) => (
      <div
        key={index}
        className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-6 transition duration-300 cursor-pointer"
        data-aos="zoom-in"
      >
        <img
          src={drink.img}
          alt={drink.name}
          className="w-full h-48 object-cover rounded-xl mb-4 transform transition duration-300 hover:scale-105 hover:shadow-xl"
        />
        <h3 className="text-xl font-semibold text-teal-700 dark:text-teal-300">
          {drink.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">{drink.desc}</p>
      </div>
    ))}
  </div>
</section>


      {/* Contact Form */}
      <section
        id="contact"
        className="py-16 px-4 md:px-6 bg-white dark:bg-gray-900 text-center border-t border-lime-200 dark:border-gray-700"
      >
        <h2 className="text-3xl font-bold text-teal-800 dark:text-teal-300 mb-6">Get in Touch</h2>
        <form className="max-w-xl mx-auto grid gap-4 text-left" data-aos="fade-up">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-teal-400 w-full"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-teal-400 w-full"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="p-3 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-teal-400 w-full"
          />
          <button
            type="submit"
            className="bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-md transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800">
        © 2025 Kyara Beverages. All rights reserved.
      </footer>
    </div>
  );
}

export default App;


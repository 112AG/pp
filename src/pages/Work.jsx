import { useEffect } from "react";

export default function Work() {
  useEffect(() => {
    // Enable dark mode toggle
    document.documentElement.classList.remove("dark");
  }, []);

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-body min-h-screen overflow-x-hidden transition-colors duration-300 relative pt-[120px]">
      
      {/* Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40 bg-grid-pattern dark:bg-grid-pattern-dark grid-bg"></div>

      {/* HERO */}
      <main className="relative z-10 w-full max-w-6xl mx-auto px-4 py-12 md:py-20 flex flex-col items-center justify-center min-h-[70vh]">

        {/* Stickers */}
        <div className="absolute top-0 left-[20%] bg-primary text-white font-display font-black px-4 py-1 -rotate-12 border-2 border-black shadow-brutal hidden sm:block">
          UI/UX
        </div>

        <div className="absolute top-4 right-[30%] bg-secondary text-black font-display font-black px-4 py-1 rotate-6 border-2 border-black shadow-brutal hidden sm:block">
          DESIGN
        </div>

        <div className="absolute top-[15%] right-[5%] bg-black text-white font-display font-bold text-sm px-6 py-2 rotate-[25deg] rounded-full border border-white shadow-xl animate-float hidden lg:block">
          NO BORING STUFF
        </div>

        <div className="absolute bottom-[40%] left-[10%] w-16 h-16 bg-accent rounded-full border-2 border-black flex items-center justify-center shadow-brutal rotate-12 hidden md:flex">
          <span className="material-icons text-3xl">star</span>
        </div>

        <div className="absolute bottom-[35%] right-[15%] bg-teal text-black font-handwritten text-base px-5 py-2 rotate-[15deg] rounded-full border-2 border-black shadow-brutal hidden md:block">
          Visual Stories
        </div>

        {/* Heading */}
        <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl leading-[0.9] tracking-tighter uppercase text-center mb-8">
          Work That <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
            Speaks
          </span>{" "}
          Louder <br />
          Than Words
        </h1>

        {/* Subtitle */}
        <p className="text-center text-lg md:text-xl max-w-2xl mb-12 font-medium">
          From{" "}
          <span className="bg-yellow-300 px-1 text-black font-bold -skew-x-12 inline-block">
            branding
          </span>{" "}
          to motion, I design experiences that people remember.
        </p>

        {/* CTA */}
        <a
          href="#"
          className="group inline-flex items-center justify-center bg-[#1A1A1A] text-white px-8 py-4 font-display font-bold text-xl uppercase border-2 border-primary shadow-[8px_8px_0px_0px_#FF4D4D] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#FF4D4D] transition-all"
        >
          Explore Projects
          <span className="material-icons ml-2 group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </a>
      </main>

      {/* MARQUEE */}
      <div className="relative w-full overflow-hidden bg-primary py-3 border-y-4 border-black transform -rotate-1 shadow-lg z-20 mt-12">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2, 3].map((_, i) => (
            <span
              key={i}
              className="mx-4 font-display font-black text-white text-xl md:text-2xl uppercase tracking-widest flex items-center"
            >
              UI/UX ● MOTION ● STRATEGY ● WEB DESIGN ● ART DIRECTION ● BRANDING ●
            </span>
          ))}
        </div>
      </div>

      {/* FOOTER BLOCK */}
      <div className="w-full h-48 bg-black relative z-10 -mt-2"></div>
    </div>
  );
}

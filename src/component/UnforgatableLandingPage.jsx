import something from "../assets/something.png";

export default function UnforgatableLandingPage() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center p-4">
      <div className="text-center flex flex-col items-center justify-center">
        {/* Main Heading */}
        <h1 className="text-white mb-0">
          <span className="text-4xl md:text-5xl font-bold tracking-wider font-presser-bold ">
            Let's build
          </span>
        </h1>

        {/* Something - with border */}
        <div className="w-full max-w-[522px] mx-auto">
          <img
            src={something}
            alt="Project screenshot / description"
            className="w-full h-auto"
            loading="lazy" // ← very good for performance
          />
        </div>

        {/* Unforgettable */}
        <h2 className="text-white text-[20px] min-[434px]:text-[28px] sm:text-[32px] md:text-[48px] xl:text-[72px] 2xl:text-[96px] font-black tracking-wider mb-1 font-presser-bold">
          UNFORGETTABLE
        </h2>

        {/* Red underline */}
        <div className="flex justify-center mb-3 sm:mb-8">
          <div className="w-[176px] md:w-[264px] xl:w-[363px] h-[10px] bg-[#EF4444] rounded-full"></div>
        </div>

        {/* Subtitle */}
        <p className="text-[#7A8A9F] text-[14px] sm:text-[18px] xl:text-[26px] font-maisonneue-demi">
          Ready to turn your brand into a visual rebellion?
        </p>
        <p className="text-[#7A8A9F]  text-[14px] sm:text-[18px] xl:text-[26px] mb-3 font-maisonneue-demi">
          Let's. Break the rules together.
        </p>

        {/* CTA Button */}
        <button
          class="bg-[#EF4444] text-white font-bold rounded-xl px-6 py-3 md:px-8 md:py-4
               border-2 border-white border-b-8 border-r-6
               text-xl sm:text-2xl md:text-3xl lg:text-4xl
               font-['Presser','Helvetica_Neue','Arial',sans-serif]
               tracking-wide hover:opacity-90 
               transition-opacity duration-150
               active:scale-98 active:opacity-85
               shadow-[0_4px_0_0_#991b1b]
               min-w-[180px] sm:min-w-[220px] md:min-w-[260px]
               touch-manipulation"
        >
          Start Project
        </button>
      </div>
    </div>
  );
}

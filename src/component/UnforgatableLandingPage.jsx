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
        <div className="w-[522px]">
            <img src={something} alt="" />
        </div>
        
        {/* Unforgettable */}
        <h2 className="text-white text-5xl md:text-[96px] font-black tracking-wider mb-1 font-presser-bold">
          UNFORGETTABLE
        </h2>
        
        {/* Red underline */}
        <div className="flex justify-center mb-8">
          <div className="w-[363px] h-[10px] bg-[#EF4444] rounded-full"></div>
        </div>
        
        {/* Subtitle */}
        <p className="text-[#7A8A9F] text-[26px] font-maisonneue-demi">
          Ready to turn your brand into a visual rebellion?
        </p>
        <p className="text-[#7A8A9F] text-[26px] mb-3 font-maisonneue-demi">
          Let's. Break the rules together.
        </p>
        
        {/* CTA Button */}
    <button className="bg-[#EF4444] text-white font-bold text-[48px] font-presser-bold
      border-2 border-b-8 border-r-6 border-white rounded-[18px] px-8 py-2 
      hover:opacity-90 tracking-wide">
      Start Project
    </button>
      </div>
    </div>
  );
}
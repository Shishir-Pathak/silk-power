import React from "react";

const Hero = () => {
  return (
    <section className="relative h-[600px] lg:h-[700px] w-full overflow-hidden flex items-center">
      {/* Background Image Placeholder */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 flex justify-between items-center h-full pt-16">
        {/* Left Content */}
        <div className="max-w-2xl text-white">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-semibold tracking-widest text-brand-green uppercase">
              Clean Energy
            </span>
            <span className="w-16 h-px bg-white/50"></span>
            <span className="text-xs font-semibold tracking-widest text-white uppercase">
              For a Brighter Nepal
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight mb-6">
            Powering Nepal with Clean, Reliable Hydropower.
          </h1>

          <p className="text-lg lg:text-xl text-gray-200 mb-10 max-w-xl font-light">
            Developing the 24.8 MW Luja Khola Hydropower Project in Solukhumbu,
            Nepal.
          </p>

          <button className="bg-brand-green text-black font-semibold px-8 py-4 rounded-full flex items-center gap-3 hover:bg-opacity-90 transition-all shadow-lg">
            Learn More
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>

        {/* Right Side Graphics (Hidden on small screens) */}
        <div className="hidden lg:flex flex-col items-end justify-between h-full py-20 text-white relative">
          {/* Vertical Text */}
          <div
            className="flex gap-6 text-sm tracking-widest uppercase font-semibold opacity-80"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            <span>Rivers</span>
            <span>People</span>
            <span>Progress</span>
          </div>

          {/* Faint Leaf Graphic Placeholder */}
          <div className="absolute right-0 top-1/2 translate-x-3/10 translate-y-1/4 opacity-40 pointer-events-none">
            <svg
              width="400"
              height="400"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <path d="M68.80,39.40 C68.93,38.57 68.77,39.02 68.10,39.00 C67.43,38.98 66.18,38.97 64.80,39.30 C63.42,39.63 61.63,40.18 59.80,41.00 C57.97,41.82 55.67,43.00 53.80,44.20 C51.93,45.40 50.03,46.97 48.60,48.20 C47.17,49.43 46.52,50.02 45.20,51.60 C43.88,53.18 41.87,55.83 40.70,57.70 C39.53,59.57 38.85,61.15 38.20,62.80 C37.55,64.45 36.92,66.72 36.80,67.60 C36.68,68.48 36.90,68.08 37.50,68.10 C38.10,68.12 38.95,68.10 40.40,67.70 C41.85,67.30 44.58,66.37 46.20,65.70 C47.82,65.03 48.43,64.78 50.10,63.70 C51.77,62.62 54.52,60.62 56.20,59.20 C57.88,57.78 58.90,56.70 60.20,55.20 C61.50,53.70 62.82,52.07 64.00,50.20 C65.18,48.33 66.50,45.80 67.30,44.00 C68.10,42.20 68.67,40.23 68.80,39.40Z M70.30,39.20 C69.62,39.72 70.30,41.07 70.50,42.20 C70.70,43.33 70.93,44.47 71.50,46.00 C72.07,47.53 72.87,49.55 73.90,51.40 C74.93,53.25 76.23,55.27 77.70,57.10 C79.17,58.93 81.02,60.85 82.70,62.40 C84.38,63.95 86.42,65.43 87.80,66.40 C89.18,67.37 90.42,67.78 91.00,68.20 C91.58,68.62 89.35,68.78 91.30,68.90 C93.25,69.02 101.08,69.80 102.70,68.90 C104.32,68.00 101.78,65.37 101.00,63.50 C100.22,61.63 99.20,59.67 98.00,57.70 C96.80,55.73 95.13,53.38 93.80,51.70 C92.47,50.02 91.58,49.03 90.00,47.60 C88.42,46.17 86.08,44.28 84.30,43.10 C82.52,41.92 80.92,41.17 79.30,40.50 C77.68,39.83 76.10,39.32 74.60,39.10 C73.10,38.88 70.98,38.68 70.30,39.20Z M92.50,17.90 C92.53,17.15 92.22,17.42 91.40,17.50 C90.58,17.58 88.90,17.95 87.60,18.40 C86.30,18.85 84.88,19.48 83.60,20.20 C82.32,20.92 81.07,21.77 79.90,22.70 C78.73,23.63 77.65,24.62 76.60,25.80 C75.55,26.98 74.42,28.47 73.60,29.80 C72.78,31.13 72.15,32.63 71.70,33.80 C71.25,34.97 70.83,36.23 70.90,36.80 C70.97,37.37 71.22,37.27 72.10,37.20 C72.98,37.13 74.83,36.85 76.20,36.40 C77.57,35.95 79.12,35.17 80.30,34.50 C81.48,33.83 81.87,33.78 83.30,32.40 C84.73,31.02 87.58,27.93 88.90,26.20 C90.22,24.47 90.60,23.38 91.20,22.00 C91.80,20.62 92.47,18.65 92.50,17.90Z M35.80,2.50 C35.60,2.73 35.45,2.78 35.60,3.70 C35.75,4.62 36.03,6.07 36.70,8.00 C37.37,9.93 38.55,13.10 39.60,15.30 C40.65,17.50 41.65,19.23 43.00,21.20 C44.35,23.17 45.88,25.23 47.70,27.10 C49.52,28.97 52.18,31.12 53.90,32.40 C55.62,33.68 56.50,34.08 58.00,34.80 C59.50,35.52 61.08,36.28 62.90,36.70 C64.72,37.12 67.83,37.30 68.90,37.30 C69.97,37.30 69.27,37.45 69.30,36.70 C69.33,35.95 69.47,34.62 69.10,32.80 C68.73,30.98 67.97,27.98 67.10,25.80 C66.23,23.62 65.18,21.67 63.90,19.70 C62.62,17.73 60.97,15.68 59.40,14.00 C57.83,12.32 56.22,10.90 54.50,9.60 C52.78,8.30 51.32,7.27 49.10,6.20 C46.88,5.13 43.25,3.85 41.20,3.20 C39.15,2.55 37.70,2.42 36.80,2.30 C35.90,2.18 36.00,2.27 35.80,2.50Z"></path>
              {/* <path d="M100 0 C150 50, 200 100, 200 150 C150 200, 100 150, 100 100 C100 150, 50 200, 0 150 C0 100, 50 50, 100 0 Z" /> */}
            </svg>
          </div>

          {/* Bottom Right Text */}
          <div className="text-right text-xs tracking-widest uppercase font-semibold opacity-80 mt-auto z-10 relative">
            <span className="text-brand-green">A Cleaner</span>
            <br />
            Brighter Nepal
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

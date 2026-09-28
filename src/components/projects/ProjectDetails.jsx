import React from 'react';

// --- Constants for the new Project Overview SVG ---
const NAVY = "#0F2A4A";
const BLUE = "#2E7FC1";
const TEXT = "#3A4656";

// --- Data for the Left Column of the Specifications Table ---
const leftSpecs = [
  { p: 'Type', d: 'Run-of-the-River' },
  { p: 'Location', d: 'Solukhumbu District' },
  { p: 'Installed Capacity', d: '24.824 MW' },
  { p: 'Design Discharge', d: '3.30 m³/s' },
  { p: 'Gross Head', d: '950 m' },
  { p: 'Net Head', d: '920 m' },
];

// --- Data for the Right Column of the Specifications Table ---
const rightSpecs = [
  { p: 'Offtaker', d: 'Nepal Electricity Authority' },
  { p: 'Development Mechanism', d: 'BOOT (Build, Own, Operate, Transfer)' },
  { p: 'Total Project Cost', d: 'NPR 4,400 million (approx.)' },
  { p: 'Transmission', d: '33 km, 132kV line to national grid' },
  { p: 'Construction License', d: 'Granted (January 2023)' },
  { p: 'Generation License', d: '35 years (from January 2023)' },
  { p: 'Target Commercial Operation Date', d: '2026' },
];

const galleryImages = [
  'https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop'
];

// --- Helper Component for Specification Rows ---
const SpecRow = ({ label, value, isEven }) => (
  <div className={`grid grid-cols-2 text-xs border-b border-gray-200 ${isEven ? 'bg-white' : 'bg-gray-50'}`}>
    <div className="p-3 font-semibold text-gray-700 border-r border-gray-200">{label}</div>
    <div className="p-3 text-gray-600">{value}</div>
  </div>
);

// --- Helper Components for the Project Overview SVG ---
const Label = ({ x, y, title, lines }) => (
  <g>
    <circle cx={x} cy={y - 3} r="2.6" fill={NAVY} />
    <text x={x + 7} y={y} fontSize="8.5" fontWeight="700" fill={NAVY}>
      {title}
    </text>
    {lines.map((l, i) => (
      <text key={i} x={x + 7} y={y + 13 + i * 11} fontSize="7.6" fill={TEXT}>
        {l}
      </text>
    ))}
  </g>
);

const Pine = ({ x, y, s = 1 }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`} fill="#B9C6D3" opacity="0.85">
    <polygon points="0,-22 6,-10 -6,-10" />
    <polygon points="0,-15 8,0 -8,0" />
    <rect x="-1" y="0" width="2" height="4" />
  </g>
);

const Tower = ({ x, top, base }) => {
  const h = base - top;
  return (
    <g stroke={NAVY} strokeWidth="1.6" fill="none" strokeLinecap="round">
      <line x1={x - 9} y1={base} x2={x} y2={top} />
      <line x1={x + 9} y1={base} x2={x} y2={top} />
      <line x1={x - 12} y1={top + h * 0.28} x2={x + 12} y2={top + h * 0.28} />
      <line x1={x - 8} y1={top + h * 0.5} x2={x + 8} y2={top + h * 0.5} />
      <line x1={x - 9} y1={base} x2={x + 5} y2={top + h * 0.5} strokeWidth="1" />
      <line x1={x + 9} y1={base} x2={x - 5} y2={top + h * 0.5} strokeWidth="1" />
    </g>
  );
};

// --- New Project Overview Component ---
const ProjectOverview = () => {
  return (
    <section className="w-full bg-white mt-4">
      <h2 className="text-2xl font-serif text-brand-maroon mb-6">Project Overview</h2>

      <div className="w-full overflow-x-auto pb-4">
        <svg
          viewBox="0 0 780 165"
          className="w-full min-w-[720px] h-auto"
          role="img"
          aria-label="Run-of-the-river flow: intake, headrace and penstock, powerhouse, transmission line, national grid"
          fontFamily="Inter, system-ui, sans-serif"
        >
          <defs>
            <linearGradient id="po-mtn" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#DCE6F0" />
              <stop offset="1" stopColor="#F4F7FA" />
            </linearGradient>
            <linearGradient id="po-hill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#EDF2F6" />
              <stop offset="1" stopColor="#FFFFFF" />
            </linearGradient>
          </defs>

          {/* Mountains */}
          <polygon
            fill="url(#po-mtn)"
            points="0,100 20,72 38,50 55,70 70,58 100,88 130,60 150,40 175,70 200,95 330,110 420,100 470,80 500,58 520,72 560,95 600,82 640,60 662,78 700,92 740,72 780,95 780,150 0,150"
          />
          <polygon
            fill="url(#po-hill)"
            points="0,110 60,96 130,80 220,105 330,125 420,118 520,108 620,112 700,105 780,115 780,150 0,150"
          />
          {/* snow caps */}
          <polygon fill="#fff" opacity="0.8" points="150,40 138,55 146,52 152,58 158,52 166,55" />
          <polygon fill="#fff" opacity="0.8" points="38,50 30,62 36,60 41,64 46,59 50,62" />
          <polygon fill="#fff" opacity="0.8" points="500,58 490,70 497,68 502,73 508,68 514,71" />

          {/* Trees */}
          <Pine x={158} y={112} s={1.1} />
          <Pine x={176} y={118} s={0.9} />
          <Pine x={200} y={126} s={0.9} />
          <Pine x={232} y={132} s={1} />
          <Pine x={256} y={140} s={0.9} />
          <Pine x={300} y={130} s={0.8} />
          <Pine x={430} y={120} s={0.9} />
          <Pine x={452} y={128} s={0.8} />
          <Pine x={548} y={134} s={0.9} />
          <Pine x={622} y={130} s={0.8} />

          {/* River pool (intake) */}
          <path d="M0,50 C20,44 45,52 65,50 L65,70 L0,72 Z" fill="#BFDDF3" />
          <path d="M0,60 C20,56 40,62 65,60" stroke="#fff" strokeWidth="1" fill="none" opacity="0.7" />

          {/* Intake dam / weir building + crane */}
          <g>
            <rect x="60" y="48" width="70" height="22" fill="#F2F6FA" stroke={NAVY} strokeWidth="1.4" />
            {[68, 79, 90, 101, 112].map((x) => (
              <rect key={x} x={x} y="53" width="7" height="14" fill="#CFE3F3" stroke={NAVY} strokeWidth="0.8" />
            ))}
            <rect x="56" y="44" width="78" height="5" fill={NAVY} />
            {/* crane */}
            <line x1="64" y1="44" x2="64" y2="22" stroke={NAVY} strokeWidth="1.6" />
            <line x1="64" y1="22" x2="112" y2="22" stroke={NAVY} strokeWidth="1.6" />
            <line x1="112" y1="22" x2="112" y2="30" stroke={NAVY} strokeWidth="1" />
            <line x1="64" y1="22" x2="88" y2="44" stroke={NAVY} strokeWidth="0.8" />
          </g>

          {/* Penstock */}
          <path
            d="M130,66 C170,74 210,98 250,126 C265,135 290,138 365,138"
            fill="none"
            stroke={BLUE}
            strokeWidth="5.5"
            strokeLinecap="round"
          />
          <path
            d="M130,66 C170,74 210,98 250,126 C265,135 290,138 365,138"
            fill="none"
            stroke="#8FC1EA"
            strokeWidth="1.6"
            strokeLinecap="round"
          />

          {/* Powerhouse */}
          <g>
            <rect x="366" y="112" width="60" height="34" fill="#F2F6FA" stroke={NAVY} strokeWidth="1.4" />
            <polygon points="362,112 396,98 430,112" fill="#fff" stroke={NAVY} strokeWidth="1.4" />
            {[372, 384, 396, 408].map((x) => (
              <rect key={x} x={x} y="124" width="8" height="12" fill="#CFE3F3" stroke={NAVY} strokeWidth="0.8" />
            ))}
            <rect x="414" y="128" width="8" height="18" fill="#fff" stroke={NAVY} strokeWidth="0.8" />
          </g>

          {/* Transmission line */}
          <path d="M505,70 Q542,84 580,96" stroke={NAVY} strokeWidth="0.9" fill="none" />
          <path d="M505,84 Q542,98 580,108" stroke={NAVY} strokeWidth="0.9" fill="none" />
          <path d="M580,96 Q620,110 650,118" stroke={NAVY} strokeWidth="0.9" fill="none" />
          <Tower x={505} top={68} base={148} />
          <Tower x={580} top={94} base={148} />

          {/* Village houses */}
          <g stroke={NAVY} strokeWidth="1.2" fill="#fff">
            <rect x="646" y="130" width="12" height="14" />
            <polygon points="644,130 652,122 660,130" fill="#E4EEF7" />
            <rect x="664" y="122" width="24" height="22" />
            <polygon points="661,122 676,108 691,122" fill="#E4EEF7" />
            <rect x="672" y="130" width="7" height="14" fill="#CFE3F3" />
            <rect x="696" y="122" width="34" height="22" />
            <polygon points="693,122 713,110 733,122" fill="#E4EEF7" />
            {[701, 711, 721].map((x) => (
              <rect key={x} x={x} y="130" width="6" height="9" fill="#CFE3F3" strokeWidth="0.8" />
            ))}
          </g>

          {/* Labels */}
          <Label x={18} y={86} title="1. Intake" lines={["Water is diverted", "from Luja Khola"]} />
          <Label
            x={196}
            y={29}
            title="2. Headrace & Penstock"
            lines={["Water is carried through", "underground/tunnelled penstock to the powerhouse"]}
          />
          <Label x={367} y={60} title="3. Powerhouse" lines={["Water drives turbines", "to generate electricity"]} />
          <Label
            x={505}
            y={58}
            title="4. Transmission Line"
            lines={["Electricity is transmitted", "via 132kV line (35 km)"]}
          />
          <Label x={665} y={58} title="5. National Grid" lines={["Clean energy", "for a stronger Nepal"]} />
        </svg>
      </div>
    </section>
  );
};

// --- Main Project Details Component ---
const ProjectDetails = () => {
  return (
    <div className="flex flex-col gap-12">
      
      {/* 1. Project Header */}
      <div>
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-3xl font-serif text-brand-maroon">Luja Khola Hydropower Project</h2>
          <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full border border-amber-200">
            Under Construction
          </span>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1 text-sm text-gray-600 leading-relaxed space-y-4">
            <p>
              The 24.8 MW Luja Khola Hydropower Project is a run-of-the-river scheme located in Solukhumbu District, Koshi Province. The project will harness the clean and renewable energy potential of the Luja Khola and supply electricity to the national grid under a long-term Power Purchase Agreement with the Nepal Electricity Authority. The project is currently under construction and targeted for commercial operation in February 2026.
            </p>
          </div>
          
          <div className="w-full lg:w-80 flex-shrink-0">
            <div className="rounded-lg overflow-hidden relative shadow-sm h-48">
              <img 
                src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=2070&auto=format&fit=crop" 
                alt="Luja Khola Hydropower Project" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 text-white text-[10px] font-semibold bg-black/60 px-2 py-1 rounded">
                Luja Khola Hydropower Project<br/>
                <span className="font-normal text-gray-300">Solukhumbu, Nepal</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Project Specifications Table */}
      <div>
        <h2 className="text-2xl font-serif text-brand-maroon mb-4">Project Specifications</h2>
        
        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          {/* Table Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Left Column */}
            <div className="border-r border-gray-200">
              <div className="grid grid-cols-2 bg-[#0A1929] text-white text-xs font-bold">
                <div className="p-3 border-r border-gray-700">Parameter</div>
                <div className="p-3">Details</div>
              </div>
              {leftSpecs.map((spec, index) => (
                <SpecRow key={index} label={spec.p} value={spec.d} isEven={index % 2 === 0} />
              ))}
            </div>

            {/* Right Column */}
            <div>
              <div className="grid grid-cols-2 bg-[#0A1929] text-white text-xs font-bold">
                <div className="p-3 border-r border-gray-700">Parameter</div>
                <div className="p-3">Details</div>
              </div>
              {rightSpecs.map((spec, index) => (
                <SpecRow key={index} label={spec.p} value={spec.d} isEven={index % 2 === 0} />
              ))}
            </div>
            
          </div>
        </div>
      </div>

      {/* 3. Project Overview Diagram (Using the new component) */}
      <ProjectOverview />

      {/* 4. Project Gallery */}
      <div>
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-2xl font-serif text-brand-maroon">Project Gallery</h2>
          <a href="#" className="text-brand-olive font-semibold text-sm flex items-center gap-1 hover:text-brand-maroon transition-colors">
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {galleryImages.map((img, index) => (
            <div key={index} className="rounded-lg overflow-hidden h-32 shadow-sm group">
              <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProjectDetails;
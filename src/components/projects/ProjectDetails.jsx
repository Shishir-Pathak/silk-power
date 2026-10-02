import React, { useEffect, useState } from 'react';

// --- Constants for the Project Overview SVG ---
const NAVY = "#0F2A4A";
const BLUE = "#2E7FC1";
const TEXT = "#3A4656";

// --- Helper Component for Specification Rows ---
const SpecRow = ({ label, value, isEven }) => (
  <div
    className={`grid grid-cols-2 text-xs border-b border-gray-200 ${
      isEven ? 'bg-white' : 'bg-gray-50'
    }`}
  >
    <div className="p-3 font-semibold text-gray-700 border-r border-gray-200">
      {label}
    </div>
    <div className="p-3 text-gray-600">{value}</div>
  </div>
);

// --- Helper Components for Project Overview SVG ---
const Label = ({ x, y, title, lines }) => (
  <g>
    <circle cx={x} cy={y - 3} r="2.6" fill={NAVY} />

    <text
      x={x + 7}
      y={y}
      fontSize="8.5"
      fontWeight="700"
      fill={NAVY}
    >
      {title}
    </text>

    {lines.map((line, index) => (
      <text
        key={index}
        x={x + 7}
        y={y + 13 + index * 11}
        fontSize="7.6"
        fill={TEXT}
      >
        {line}
      </text>
    ))}
  </g>
);

const Pine = ({ x, y, s = 1 }) => (
  <g
    transform={`translate(${x} ${y}) scale(${s})`}
    fill="#B9C6D3"
    opacity="0.85"
  >
    <polygon points="0,-22 6,-10 -6,-10" />
    <polygon points="0,-15 8,0 -8,0" />
    <rect x="-1" y="0" width="2" height="4" />
  </g>
);

const Tower = ({ x, top, base }) => {
  const h = base - top;

  return (
    <g
      stroke={NAVY}
      strokeWidth="1.6"
      fill="none"
      strokeLinecap="round"
    >
      <line x1={x - 9} y1={base} x2={x} y2={top} />
      <line x1={x + 9} y1={base} x2={x} y2={top} />

      <line
        x1={x - 12}
        y1={top + h * 0.28}
        x2={x + 12}
        y2={top + h * 0.28}
      />

      <line
        x1={x - 8}
        y1={top + h * 0.5}
        x2={x + 8}
        y2={top + h * 0.5}
      />

      <line
        x1={x - 9}
        y1={base}
        x2={x + 5}
        y2={top + h * 0.5}
        strokeWidth="1"
      />

      <line
        x1={x + 9}
        y1={base}
        x2={x - 5}
        y2={top + h * 0.5}
        strokeWidth="1"
      />
    </g>
  );
};

// --- Project Overview Diagram ---
const ProjectOverview = () => {
  return (
    <section className="w-full bg-white mt-4">
      <h2 className="text-2xl font-serif text-brand-maroon mb-6">
        Project Overview
      </h2>

      <div className="w-full overflow-x-auto pb-4">
        <svg
          viewBox="0 0 780 165"
          className="w-full min-w-[720px] h-auto"
          role="img"
          aria-label="Run-of-the-river flow: intake, headrace and penstock, powerhouse, transmission line, national grid"
          fontFamily="Inter, system-ui, sans-serif"
        >
          <defs>
            <linearGradient
              id="po-mtn"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0" stopColor="#DCE6F0" />
              <stop offset="1" stopColor="#F4F7FA" />
            </linearGradient>

            <linearGradient
              id="po-hill"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
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

          {/* Snow caps */}
          <polygon
            fill="#fff"
            opacity="0.8"
            points="150,40 138,55 146,52 152,58 158,52 166,55"
          />

          <polygon
            fill="#fff"
            opacity="0.8"
            points="38,50 30,62 36,60 41,64 46,59 50,62"
          />

          <polygon
            fill="#fff"
            opacity="0.8"
            points="500,58 490,70 497,68 502,73 508,68 514,71"
          />

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

          {/* River pool */}
          <path
            d="M0,50 C20,44 45,52 65,50 L65,70 L0,72 Z"
            fill="#BFDDF3"
          />

          <path
            d="M0,60 C20,56 40,62 65,60"
            stroke="#fff"
            strokeWidth="1"
            fill="none"
            opacity="0.7"
          />

          {/* Intake dam / weir building + crane */}
          <g>
            <rect
              x="60"
              y="48"
              width="70"
              height="22"
              fill="#F2F6FA"
              stroke={NAVY}
              strokeWidth="1.4"
            />

            {[68, 79, 90, 101, 112].map((x) => (
              <rect
                key={x}
                x={x}
                y="53"
                width="7"
                height="14"
                fill="#CFE3F3"
                stroke={NAVY}
                strokeWidth="0.8"
              />
            ))}

            <rect
              x="56"
              y="44"
              width="78"
              height="5"
              fill={NAVY}
            />

            {/* Crane */}
            <line
              x1="64"
              y1="44"
              x2="64"
              y2="22"
              stroke={NAVY}
              strokeWidth="1.6"
            />

            <line
              x1="64"
              y1="22"
              x2="112"
              y2="22"
              stroke={NAVY}
              strokeWidth="1.6"
            />

            <line
              x1="112"
              y1="22"
              x2="112"
              y2="30"
              stroke={NAVY}
              strokeWidth="1"
            />

            <line
              x1="64"
              y1="22"
              x2="88"
              y2="44"
              stroke={NAVY}
              strokeWidth="0.8"
            />
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
            <rect
              x="366"
              y="112"
              width="60"
              height="34"
              fill="#F2F6FA"
              stroke={NAVY}
              strokeWidth="1.4"
            />

            <polygon
              points="362,112 396,98 430,112"
              fill="#fff"
              stroke={NAVY}
              strokeWidth="1.4"
            />

            {[372, 384, 396, 408].map((x) => (
              <rect
                key={x}
                x={x}
                y="124"
                width="8"
                height="12"
                fill="#CFE3F3"
                stroke={NAVY}
                strokeWidth="0.8"
              />
            ))}

            <rect
              x="414"
              y="128"
              width="8"
              height="18"
              fill="#fff"
              stroke={NAVY}
              strokeWidth="0.8"
            />
          </g>

          {/* Transmission line */}
          <path
            d="M505,70 Q542,84 580,96"
            stroke={NAVY}
            strokeWidth="0.9"
            fill="none"
          />

          <path
            d="M505,84 Q542,98 580,108"
            stroke={NAVY}
            strokeWidth="0.9"
            fill="none"
          />

          <path
            d="M580,96 Q620,110 650,118"
            stroke={NAVY}
            strokeWidth="0.9"
            fill="none"
          />

          <Tower x={505} top={68} base={148} />
          <Tower x={580} top={94} base={148} />

          {/* Village houses */}
          <g
            stroke={NAVY}
            strokeWidth="1.2"
            fill="#fff"
          >
            <rect
              x="646"
              y="130"
              width="12"
              height="14"
            />

            <polygon
              points="644,130 652,122 660,130"
              fill="#E4EEF7"
            />

            <rect
              x="664"
              y="122"
              width="24"
              height="22"
            />

            <polygon
              points="661,122 676,108 691,122"
              fill="#E4EEF7"
            />

            <rect
              x="672"
              y="130"
              width="7"
              height="14"
              fill="#CFE3F3"
            />

            <rect
              x="696"
              y="122"
              width="34"
              height="22"
            />

            <polygon
              points="693,122 713,110 733,122"
              fill="#E4EEF7"
            />

            {[701, 711, 721].map((x) => (
              <rect
                key={x}
                x={x}
                y="130"
                width="6"
                height="9"
                fill="#CFE3F3"
                strokeWidth="0.8"
              />
            ))}
          </g>

          {/* Labels */}
          <Label
            x={18}
            y={86}
            title="1. Intake"
            lines={[
              "Water is diverted",
              "from Luja Khola",
            ]}
          />

          <Label
            x={196}
            y={29}
            title="2. Headrace & Penstock"
            lines={[
              "Water is carried through",
              "underground/tunnelled penstock to the powerhouse",
            ]}
          />

          <Label
            x={367}
            y={60}
            title="3. Powerhouse"
            lines={[
              "Water drives turbines",
              "to generate electricity",
            ]}
          />

          <Label
            x={505}
            y={58}
            title="4. Transmission Line"
            lines={[
              "Electricity is transmitted",
              "via 132kV line (35 km)",
            ]}
          />

          <Label
            x={665}
            y={58}
            title="5. National Grid"
            lines={[
              "Clean energy",
              "for a stronger Nepal",
            ]}
          />
        </svg>
      </div>
    </section>
  );
};

// --- Main Project Details Component ---
const ProjectDetails = () => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(
          'http://127.0.0.1:8000/api/projects/luja-khola-hydropower-project/'
        );

        if (!response.ok) {
          throw new Error('Failed to load project.');
        }

        const data = await response.json();
        setProject(data);
      } catch (err) {
        console.error('Project API error:', err);
        setError('Unable to load project information.');
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, []);

  if (loading) {
    return (
      <div className="py-12 text-center text-gray-500">
        Loading project information...
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="py-12 text-center text-red-600">
        {error || 'Project not found.'}
      </div>
    );
  }

  const leftSpecs = (project.specifications || []).filter(
    (spec) => spec.column === 'left'
  );

  const rightSpecs = (project.specifications || []).filter(
    (spec) => spec.column === 'right'
  );

  const galleryImages = project.gallery || [];
  return (
    <div className="flex flex-col gap-12">

      {/* Project Header */}
      <div>
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-3xl font-serif text-brand-maroon">
            {project.name}
          </h2>

          <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full border border-amber-200">
            {project.status}
          </span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1 text-sm text-gray-600 leading-relaxed space-y-4">
            <p>{project.description}</p>
          </div>

          {project.featured_image && (
            <div className="w-full lg:w-80 flex-shrink-0">
              <div className="rounded-lg overflow-hidden relative shadow-sm h-48">
                <img
                  src={project.featured_image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />

                <div className="absolute bottom-2 left-2 text-white text-[10px] font-semibold bg-black/60 px-2 py-1 rounded">
                  {project.name}
                  <br />
                  <span className="font-normal text-gray-300">
                    {project.image_caption || project.location}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Project Specifications */}
      <div>
        <h2 className="text-2xl font-serif text-brand-maroon mb-4">
          Project Specifications
        </h2>

        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Left Column */}
            <div className="border-r border-gray-200">
              <div className="grid grid-cols-2 bg-[#0A1929] text-white text-xs font-bold">
                <div className="p-3 border-r border-gray-700">
                  Parameter
                </div>
                <div className="p-3">Details</div>
              </div>

              {leftSpecs.map((spec, index) => (
                <SpecRow
                  key={spec.id}
                  label={spec.parameter}
                  value={spec.details}
                  isEven={index % 2 === 0}
                />
              ))}
            </div>

            {/* Right Column */}
            <div>
              <div className="grid grid-cols-2 bg-[#0A1929] text-white text-xs font-bold">
                <div className="p-3 border-r border-gray-700">
                  Parameter
                </div>
                <div className="p-3">Details</div>
              </div>

              {rightSpecs.map((spec, index) => (
                <SpecRow
                  key={spec.id}
                  label={spec.parameter}
                  value={spec.details}
                  isEven={index % 2 === 0}
                />
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Keep existing SVG overview */}
      <ProjectOverview />

      {/* Project Gallery */}
      <div>
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-2xl font-serif text-brand-maroon">
            Project Gallery
          </h2>

          <a
            href="#project-gallery"
            className="text-brand-olive font-semibold text-sm flex items-center gap-1 hover:text-brand-maroon transition-colors"
          >
            View All
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

        <div
          id="project-gallery"
          className="grid grid-cols-2 md:grid-cols-5 gap-4"
        >
          {galleryImages.map((img, index) => (
            <div
              key={img.id}
              className="rounded-lg overflow-hidden h-32 shadow-sm group"
            >
              <img
                src={img.src}
                alt={img.caption || `Gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
export default ProjectDetails;
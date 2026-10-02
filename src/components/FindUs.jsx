import React, { useEffect, useState } from "react";
import NepalMap from "./NepalMap";

const FindUs = () => {
  const [siteSettings, setSiteSettings] = useState(null);

  useEffect(() => {
    const fetchSiteSettings = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/site-settings/"
        );

        if (!response.ok) {
          throw new Error("Failed to load site settings");
        }

        const data = await response.json();
        setSiteSettings(data);
      } catch (error) {
        console.error("Find Us error:", error);
      }
    };

    fetchSiteSettings();
  }, []);

  return (
    <section className="bg-[#F5F7F2] py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT SIDE */}
          <div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-olive">
              Find Us
            </span>

            <h2 className="text-3xl lg:text-4xl font-serif text-brand-maroon mt-3 mb-8">
              Where We Work
            </h2>

            <div className="space-y-8">

              {/* Registered Office */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-olive flex-shrink-0">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="text-brand-maroon font-bold mb-1">
                    Registered Office
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {siteSettings?.registered_office ||
                      "Madhyapur Thimi Municipality, Ward No. 3, Bhaktapur, Nepal"}
                  </p>
                </div>
              </div>

              {/* Project Site */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-olive flex-shrink-0">
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="text-brand-maroon font-bold mb-1">
                    Project Site
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {siteSettings?.project_site ||
                      "Khumbu-Pasang Lhamu Rural Municipality, Solukhumbu District, Nepal"}
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-10 flex flex-col gap-1 text-xs tracking-widest uppercase font-semibold text-brand-olive">
              <span>Cleaner Energy</span>
              <span>Stronger Nepal</span>
            </div>
          </div>

          {/* RIGHT SIDE - KEEP EXISTING MAP */}
          <div className="relative">
            <NepalMap />
          </div>

        </div>
      </div>
    </section>
  );
};

export default FindUs;
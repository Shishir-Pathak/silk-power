import React, { useEffect, useState } from 'react';

const DefaultAvatar = () => (
  <svg
    className="w-full h-full text-gray-300"
    viewBox="0 0 100 100"
    fill="currentColor"
  >
    <circle cx="50" cy="35" r="20" />
    <path d="M15 95c2-25 15-38 35-38s33 13 35 38H15z" />
  </svg>
);

const BoardOfDirectors = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBoardMembers = async () => {
      try {
        const response = await fetch(
          'http://127.0.0.1:8000/api/about/board/'
        );

        if (!response.ok) {
          throw new Error('Failed to load board members');
        }

        const data = await response.json();
        setMembers(data);
      } catch (error) {
        console.error('Board members error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBoardMembers();
  }, []);

  return (
    <section id="board-of-directors" className="scroll-mt-24">
      <h2 className="text-3xl font-serif text-brand-maroon mb-8 inline-block border-b-2 border-brand-green pb-1">
        Board of Directors
      </h2>

      {loading ? (
        <p className="text-sm text-gray-500">
          Loading board members...
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm"
            >
              <div className="h-56 bg-gray-100 flex items-end justify-center overflow-hidden">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-32 h-32">
                    <DefaultAvatar />
                  </div>
                )}
              </div>

              <div className="p-5 text-center">
                <h3 className="text-base font-semibold text-gray-800">
                  {member.name}
                </h3>

                <p className="text-xs text-brand-olive mt-1 uppercase tracking-wide">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && members.length === 0 && (
        <p className="text-sm text-gray-500">
          No board members available.
        </p>
      )}
    </section>
  );
};

export default BoardOfDirectors;
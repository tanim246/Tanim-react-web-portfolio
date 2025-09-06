import React from "react";

const Advantage = () => {
  const skills = [
    { name: "Html", percent: "89%", color: "text-yellow-400 to-yellow-600" },
    { name: "Css", percent: "92%", color: "from-green-400 to-green-600" },
    { name: "Tailwind Css", percent: "88%", color: "from-red-400 to-red-600" },
    {
      name: "JavaScript",
      percent: "42%",
      color: "from-orange-400 to-orange-600",
    },
    { name: "ReactJS", percent: "30%", color: "from-blue-400 to-blue-600" },
    { name: "Art Logo", percent: "100%", color: "from-purple-400 to-purple-600" },
  ];

  return (
    <section className="advantage   text-white py-16 px-6 sm:px-12 lg:px-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Image */}
        <div className=" w-full lg:w-1/2 flex justify-center">
          <div className=" rounded-xl bg-white  shadow-lg">
            <img
              src="assets/img/tanim.jpg"
              alt="Profile"
              className="w-80 sm:w-96 md:w-[400px] rounded-xl object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Advantage</h2>
          <p className="text-gray-300 mb-8 max-w-lg">
            Must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account the system and expound the actual and praising pain was
            born.
          </p>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`bg-black/60 border-t border-l border-r border-gray-700 rounded-xl p-6 text-center shadow-md transition`}
              >
                <p
                  className={`text-3xl font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}
                >
                  {skill.percent}
                </p>
                <p className="mt-2  text-white">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;

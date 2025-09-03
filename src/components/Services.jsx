import React from "react";

const Services = () => {
  const servicesData = [
    {
      title: "Graphic Design",
      desc: "Explain to you how all this mistaken idea of denouncing pleasure born and give you complete account the system.",
      color: "bg-red-500",
    },
    {
      title: "Web Development",
      desc: "Building responsive and modern websites with latest technologies to enhance user experience.",
      color: "bg-blue-500",
    },
    {
      title: "UI/UX Design",
      desc: "Creating intuitive user interfaces and seamless experiences for digital products.",
      color: "bg-green-500",
    },
    {
      title: "Digital Marketing",
      desc: "Helping you grow your business online with SEO, social media, and paid campaigns.",
      color: "bg-yellow-500",
    },
    {
      title: "Video Editing",
      desc: "Professional video editing services to create engaging and impactful visual stories.",
      color: "bg-purple-500",
    },
    {
      title: "Content Writing",
      desc: "Providing high-quality content that engages, informs, and converts readers.",
      color: "bg-pink-500",
    },
  ];

  return (
    <div>
      <section className="bg-black p-5">
        <div className="text-center text-white space-y-2 mb-10">
          <h1 className="text-3xl font-bold">My Services</h1>
          <p className="text-gray-400">
            Must explain to you how all this mistaken idea of denouncing <br />
            pleasure born and give you a complete account the system
          </p>
        </div>

        {/* cards parent */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center border-2 rounded-xl border-[#383838] space-y-5 bg-[#232221] text-white p-6 hover:shadow-lg hover:shadow-[#59c279]/30 transition-all duration-300"
            >
              <div
                className={`${service.color} w-20 h-20 rounded-full hover:bg-[#59c279]`}
              ></div>
              <p className="font-bold text-xl">{service.title}</p>
              <p className="text-center text-gray-300">{service.desc}</p>
              <a
                href="#"
                className="font-semibold hover:text-yellow-400 transition-colors"
              >
                Learn More...
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;

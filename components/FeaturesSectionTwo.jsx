import Image from "next/image";

export default function FeaturesSectionTwo() {
  const features = [
    {
      image: "/icon1.png",
      title: "Instant Download",
      desc: "Instantly download the files.",
    },
    {
      image: "/icon2.png",
      title: "24/7 Support",
      desc: "Have a question? Reach out to me for help.",
    },
    {
      image: "/icon3.png",
      title: "100% Satisfaction Guarantee",
      desc: "Having issues? Reach out to me for help!",
    },
  ];

  return (
    <section className="bg-[#f3f3f6] py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-6 text-center">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center max-w-sm mx-auto"
            >
              {/* Image */}
              <div className="mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={55}
                  height={55}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-2xl font-bold text-black">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-gray-600 text-sm md:text-lg leading-6 md:leading-7 px-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
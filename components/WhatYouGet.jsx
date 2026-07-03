import Image from "next/image";

const features = [
  "Excel Routine Tracker (Easy to Use)",
  "Daily, Weekly & Monthly Planning",
  "Habit Tracker + Progress Dashboard (Excel File)",
  "Goal Planner + Analytics (Excel File)",
  "Weight gain/loss Tracker (Excel File)",
  "PDF guide to use the Tracker & Planner",
  "Works on Any Device with Excel",
];

export default function WhatYouGet() {
  return (
    <section className="bg-[#F8F8FC] py-12 md:py-10">
      <div className="mx-auto max-w-7xl px-2">
        <div className="rounded-3xl bg-white shadow-lg border border-gray-100 overflow-hidden">
          <div className="grid lg:grid-cols-2 items-center gap-4 p-6 sm:p-10 lg:p-16">
            {/* Left Side */}
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 md:mb-8">
                Here's what you'll get:
              </h2>

              <div className=" space-y-1 md:space-y-3">
                {features.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2"
                  >
                    {/* Custom Check */}
                    <div className="mt-1 flex h-6 w-6 min-w-[22px] items-center justify-center rounded-full bg-[#F3ECFF]">
                      <div className="h-4 w-2 rotate-45 border-b-[3px] border-r-[3px] border-[#7C3AED]" />
                    </div>

                    <p className="text-[13px] md:text-[15px] sm:text-base lg:text-lg font-medium text-gray-700 leading-7">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side */}
            <div className="order-1 lg:order-2 flex justify-center">
              <Image
                src="/excel.png"
                alt="Excel Routine Tracker"
                width={330}
                height={400}
                priority
                className="w-[170px] sm:w-[300px] md:w-[360px] lg:w-[420px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import React, { useEffect, useRef, useState } from "react";
import { Award, Briefcase, Users, ClipboardList } from "lucide-react";

function useCountUp(target, inView, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const startTime = performance.now();

    const step = (timestamp) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return count;
}

export default function StatsSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

  }, []);

  const stats = [
    {
      icon: <Award className="w-8 h-8 text-orange-500" />,
      value: 6,
      suffix: "+",
      label: "Years of Excellence",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-orange-500" />,
      value: 6,
      label: "Business Sectors",
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      value: 50,
      suffix: "+",
      label: "Happy Clients",
    },
    {
      icon: <ClipboardList className="w-8 h-8 text-orange-500" />,
      value: 50,
      suffix: "+",
      label: "Completed Projects",
    },
  ];

  // Call hooks at the top level, before any conditionals/loops
  const count1 = useCountUp(stats[0].value, inView);
  const count2 = useCountUp(stats[1].value, inView);
  const count3 = useCountUp(stats[2].value, inView);
  const count4 = useCountUp(stats[3].value, inView);
  const counts = [count1, count2, count3, count4];

  return (
    <>
      <div className="flex justify-center align-center">
        <h1 className="text-4xl font-bold border-b-2 border-orange-400">
          Overview
        </h1>
      </div>
      <div className="bg-orange-400 lg:h-200 w-200 lg:-ml-100 -mt-[700px] absolute lg:rotate-50 z-[-1]"></div>
      <div
        ref={sectionRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto py-12 px-4"
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-8 flex flex-col  border-b-4  border-r-4 border-orange-400 items-center justify-center border-radius: 14px; background: #e0e0e0; box-shadow: 6px 6px 21px #949494, -6px -6px 21px"
          >
            {stat.icon}
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              {counts[index]}
              {stat.suffix || ""}
            </h2>
            <p className="text-gray-600 mt-1 text-center">{stat.label}</p>
          </div>
        ))}
      </div>
    </>
  );
}

import React, { useEffect, useRef, useState } from "react";
import { Award, Briefcase, Users, ClipboardList } from "lucide-react";

function useCountUp(target, inView, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
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

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const stats = [
    {
      icon: <Award className="w-8 h-8 text-orange-500" />,
      value: 15,
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
      value: 500,
      suffix: "+",
      label: "Employees",
    },
    {
      icon: <ClipboardList className="w-8 h-8 text-orange-500" />,
      value: 50,
      suffix: "+",
      label: "Completed Projects",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto py-12 px-4"
    >
      {stats.map((stat, index) => {
        const count = useCountUp(stat.value, inView);
        return (
          <div
            key={index}
            className="bg-white shadow-md p-8 flex flex-col items-center justify-center rounded-none"
          >
            {stat.icon}
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              {count}
              {stat.suffix || ""}
            </h2>
            <p className="text-gray-600 mt-1 text-center">{stat.label}</p>
          </div>
        );
      })}
    </div>
  );
}

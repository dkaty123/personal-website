
import React from 'react';

const SkillsCarousel = () => {
  const skills = [
    { 
      name: "React", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
    },
    { 
      name: "TypeScript", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" 
    },
    { 
      name: "Next.js", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" 
    },
    { 
      name: "Node.js", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
    },
    { 
      name: "Python", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
    },
    { 
      name: "Django", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" 
    },
    { 
      name: "MongoDB", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" 
    },
    { 
      name: "PostgreSQL", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" 
    },
    { 
      name: "Kotlin", 
      logo: "/lovable-uploads/a65e0497-fb47-454a-840c-51e404742ac0.png" 
    },
    { 
      name: "NumPy", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" 
    },
    { 
      name: "OpenAI", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" 
    },
    { 
      name: "Tailwind CSS", 
      logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" 
    },
    { 
      name: "Docker", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" 
    },
    { 
      name: "TensorFlow", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" 
    },
    { 
      name: "PyTorch", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" 
    },
    { 
      name: "OpenCV", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" 
    },
    { 
      name: "Supabase", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" 
    },
    { 
      name: "MySQL", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" 
    },
    { 
      name: "JavaScript", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
    },
    { 
      name: "Java", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" 
    },
    { 
      name: "C++", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" 
    },
    { 
      name: "Git", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" 
    },
    { 
      name: "AWS", 
      logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" 
    },
    { 
      name: "GraphQL", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" 
    },
    { 
      name: "Redis", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" 
    },
  ];

  return (
    <div className="w-screen overflow-hidden py-8 -mx-6 md:-mx-8 lg:-mx-12">
      {/* First row - seamless infinite scroll */}
      <div className="flex animate-[scroll-left_60s_linear_infinite] mb-4">
        {/* Use 6 copies for truly seamless loop */}
        {Array.from({ length: 6 }, (_, copyIndex) => 
          skills.map((skill, index) => (
            <div
              key={`row1-${copyIndex}-${index}`}
              className="flex items-center gap-3 mx-4 px-5 py-3 bg-black/40 border border-white/10 rounded-full whitespace-nowrap backdrop-blur-sm hover:border-purple-400/30 transition-all duration-300 hover:bg-black/60 flex-shrink-0"
            >
              <img 
                src={skill.logo} 
                alt={skill.name}
                className="w-6 h-6 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="text-white font-light text-sm">{skill.name}</span>
            </div>
          ))
        )}
      </div>

      {/* Second row - seamless infinite scroll in reverse */}
      <div className="flex animate-[scroll-right_45s_linear_infinite]">
        {/* Use 6 copies for truly seamless loop */}
        {Array.from({ length: 6 }, (_, copyIndex) => 
          skills.slice().reverse().map((skill, index) => (
            <div
              key={`row2-${copyIndex}-${index}`}
              className="flex items-center gap-3 mx-4 px-5 py-3 bg-black/40 border border-white/10 rounded-full whitespace-nowrap backdrop-blur-sm hover:border-purple-400/30 transition-all duration-300 hover:bg-black/60 flex-shrink-0"
            >
              <img 
                src={skill.logo} 
                alt={skill.name}
                className="w-6 h-6 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="text-white font-light text-sm">{skill.name}</span>
            </div>
          ))
        )}
      </div>

      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-16.666%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-16.666%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default SkillsCarousel;

import React, { useState } from "react";

function BlurImage({ src, alt, isDark }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`rounded-xl overflow-hidden h-56 md:h-64 lg:h-80 ${
        isDark ? "bg-slate-900/40" : "bg-gradient-to-br from-indigo-50 to-white"
      }`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 ease-out ${
          loaded ? "scale-100 blur-0" : "scale-105 blur-md"
        } group-hover:scale-105`}
      />
    </div>
  );
}

export default BlurImage;


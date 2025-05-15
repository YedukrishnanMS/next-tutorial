import Link from "next/link";
import Image from "next/image";
const posters = [
  "/posters/poster1.jpeg",
  "/posters/poster2.jpeg",
  "/posters/poster3.jpeg",
  "/posters/poster4.jpeg",
  "/posters/poster5.jpeg",
  "/posters/poster6.jpeg",
];

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 p-8 sm:p-20 text-white font-sans overflow-hidden">
      
      {/* Background Posters with <Image /> */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="w-full h-full flex flex-wrap justify-center items-center gap-8">
          {posters.map((src, index) => (
            <div
              key={index}
              className={`w-48 h-73 relative rounded-lg shadow-md transform 
                ${index % 2 === 0 ? "rotate-[-8deg]" : "rotate-[5deg]"} 
                ${index % 3 === 0 ? "translate-y-4" : ""}
              `}
              style={{
                animation: `floatPoster ${5 + index}s ease-in-out infinite`,
              }}
            >
              <Image
                src={src}
                alt={`poster-${index}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-extrabold mb-12 drop-shadow-lg">
          Movie Review Website
        </h1>
        <Link
          href="/movies"
          className="px-8 py-4 bg-white text-indigo-700 font-semibold rounded-lg shadow-lg hover:bg-indigo-50 transition"
        >
          Browse Movies
        </Link>
      </div>

      {/* Optional subtle blur overlay */}
      {/* <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-0" /> */}
    </div>
  );
}

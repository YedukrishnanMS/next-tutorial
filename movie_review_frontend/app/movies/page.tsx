// pages or app/movies/page.tsx (or wherever your page is)
import Movies from "../components/movies";

export default function MoviesPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 p-8 sm:p-20 text-white font-sans overflow-hidden">
    <div className="max-w-3xl mx-auto space-y-12">
      <Movies />
    </div>
    </div>
  );
}

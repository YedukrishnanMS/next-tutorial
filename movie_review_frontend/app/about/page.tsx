export default function AboutPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 p-8 sm:p-20 text-white font-sans overflow-hidden">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Page Header */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">About</h1>
          <p className="text-lg sm:text-xl text-indigo-100">
            A minimal movie review website built with love for films and modern web development.
          </p>
        </div>

        {/* Section: Mission */}
        <section className="bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-md">
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="text-indigo-100">
            To create a simple, distraction-free space for users to find honest movie reviews and ratings. No clutter, just quality content from people who care about storytelling.
          </p>
        </section>

        {/* Section: Developer */}
        <section className="bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-md text-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-white/30 flex items-center justify-center text-3xl font-bold text-white">
              Y
            </div>
            <div>
              <h3 className="text-xl font-semibold">Yedukrishnan M S</h3>
              <p className="text-indigo-100">Full Stack Developer & Movie Buff</p>
              <p className="mt-2 text-sm text-indigo-200">
                Built using Next.js, Tailwind CSS, and GraphQL. This site is a side project combining tech skills and a passion for cinema.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

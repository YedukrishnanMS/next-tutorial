// MoviesPage component
// import ReviewForm from "@/app/components/addReview";
import Movie from "@/app/components/movie";
import Reviews from "@/app/components/reviews";

export default function MoviesPage({ params }: { params: { id: string } }) {
  return (
    <div className="relative min-h-screen  bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 p-8 sm:p-20 text-white font-sans overflow-hidden">
    <main className="max-w-3xl mx-auto p-6 sm:p-12 space-y-12">
      <Movie id={params.id} />

      <section>
        <h2 className="text-2xl font-semibold border-b-2 border-indigo-500 pb-2 mb-6">
          Reviews
        </h2>
        <Reviews id={params.id} />
      </section>

      {/* Uncomment when ready to add review form */}
      
      {/* <section>
        <h2 className="text-2xl font-semibold border-b-2 border-indigo-500 pb-2 mb-6">
          Leave a Review
        </h2>
        <ReviewForm movieId={params.id} />
      </section>  */}
     
    </main>
    </div>
  );
}

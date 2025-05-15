// Movie component
'use client';

import client from '@/app/lib/client';
import { gql, useQuery } from '@apollo/client';

const GET_MOVIE = gql`
  query GetMovie($id: ID!) {
    getMovie(id: $id) {
      id
      title
      rating
    }
  }
`;

export default function Movie({ id }: { id: string }) {
  const { loading, error, data } = useQuery(GET_MOVIE, {
    client,
    variables: { id },
  });

  if (loading)
    return <p className="text-center text-gray-500 mt-12">Loading movie details...</p>;
  if (error)
    return (
      <p className="text-center text-red-600 mt-12">
        Error loading movie: {error.message}
      </p>
    );

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h1 className="text-4xl font-extrabold mb-4 text-indigo-700">
        {data.getMovie.title}
      </h1>
      <p className="text-lg font-medium text-gray-700">
        IMDB Rating: <span className="font-bold">{data.getMovie.rating.toFixed(1)}</span>
      </p>
    </div>
  );
}

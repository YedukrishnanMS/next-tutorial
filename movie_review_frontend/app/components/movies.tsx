// components/movies.tsx
'use client'

import { gql, useQuery } from '@apollo/client'
import client from '../lib/client'
import Link from 'next/link'

const GET_MOVIES = gql`
  query {
    getAllMovies {
      id
      title
      rating
    }
  }
`

type Movie = {
  id: string
  title: string
  rating: number
}

export default function Movies() {
  const { loading, error, data } = useQuery(GET_MOVIES, { client })

  if (loading) return <p className="text-center text-gray-500">Loading movies...</p>
  if (error) return <p className="text-center text-red-600">Error: {error.message}</p>

  return (
    <ul className="space-y-4">
      {data.getAllMovies.map((movie: Movie) => (
        <li
          key={movie.id}
          className="flex justify-between items-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition cursor-pointer"
        >
          <Link
            href={`/movies/${movie.id}`}
            className="text-indigo-600 text-xl font-semibold hover:underline"
          >
            {movie.title}
          </Link>
          <span className="text-gray-700 font-medium">⭐ {movie.rating.toFixed(1)}</span>
        </li>
      ))}
    </ul>
  )
}

'use client'

import client from '@/app/lib/client'
import { gql, useQuery } from '@apollo/client'

const GET_REVIEWS = gql`
  query GetReviews($id: ID!) {
    getReviewsByMovie(id: $id) {
      id
      rating
      content
    }
  }
`
type Review = {
  id: string
  rating: number
  content: string
}

export default function Reviews({ id }: { id: string }) {
  const { loading, error, data } = useQuery(GET_REVIEWS, {
    client,
    variables: { id },
  })

  if (loading)
    return (
      <p className="text-center text-gray-500 mt-4">Loading reviews...</p>
    )
  if (error)
    return (
      <p className="text-center text-red-500 mt-4">
        Error: {error.message}
      </p>
    )
  if (!data.getReviewsByMovie[0])
    return (
        <p>No Reviews.</p>
    )
  return (
    <div className="max-w-2xl mx-auto mt-6 ">
      <ul className="space-y-6">
        {data.getReviewsByMovie.map((review: Review) => (
          <li
            key={review.id}
            className="p-4 border bg-gray-50 border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              {review.content}
            </h3>
            <p className="text-sm text-yellow-600 font-medium">
              ⭐ Rating: {review.rating} / 5
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

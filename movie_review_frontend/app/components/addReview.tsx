'use client'

import { gql, useMutation } from '@apollo/client'
import { useState } from 'react'
import client from '@/app/lib/client'

const ADD_REVIEW = gql`
  mutation AddReview($input: ReviewInput!) {
    addReview(input: $input) {
      movie_id
      author_id
      rating
      content
    }
  }
`

export default function ReviewForm({ movieId }: { movieId: string }) {
  const [form, setForm] = useState({
    rating: '',
    content: '',
  })

  const [addReview, { loading, error, data }] = useMutation(ADD_REVIEW, {
    client,

  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await addReview({
      variables: {
        input: {
          movieId,
          author_id: "68260ab043cfb75be93bd041",
          rating: parseFloat(form.rating),
          content: form.content,
        },
      },
    })
    setForm({ rating: '', content: '' })
    
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">

      <div>
        <label>Rating (0–5):</label>
        <input
          type="number"
          step="0.1"
          min="0"
          max="5"
          value={form.rating}
          onChange={(e) => setForm({ ...form, rating: e.target.value })}
          required
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label>Content:</label>
        <textarea
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          className="w-full border p-2 rounded"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? 'Submitting...' : 'Submit Review'}
      </button>

      {error && <p className="text-red-600">Error: {error.message}</p>}
      {data && <p className="text-green-600">Review submitted!</p>}
    </form>
  )
}
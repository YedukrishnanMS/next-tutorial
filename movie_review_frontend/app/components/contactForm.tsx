'use client'

import { useState } from 'react'

export default function ContactForm() {

    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    // TODO: Connect to your backend/email service
    }
    return (
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-md space-y-6"
        >
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              rows={5}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              placeholder="What's on your mind?"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg font-semibold transition"
          >
            Send Message
          </button>

          {submitted && (
            <p className="text-sm text-green-200 text-center mt-2">Thanks for reaching out!</p>
          )}
        </form>
    )
}
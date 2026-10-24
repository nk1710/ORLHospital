"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function CreateFaq() {
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null) // success | error
  const [message, setMessage] = useState("")
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!question || !answer) {
      setStatus("error")
      setMessage("Please fill in both fields.")
      return
    }

    setLoading(true)
    setStatus(null)

    try {
      const res = await fetch("/api/faq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question, answer }),
      })

      setStatus("success")
      setMessage("FAQ saved successfully!")

      // OPTION A: Clear form
      setQuestion("")
      setAnswer("")

      // OPTION B: Redirect after short delay
      setTimeout(() => {
        router.push("/dashboard/faq") // change route if needed
      }, 1200)

    } catch (error) {
      console.error(error)
      setStatus("error")
      setMessage("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 space-y-4 border rounded-lg shadow">

      {/* Question */}
      <input
        type="text"
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
      />

      {/* Answer */}
      <textarea
        placeholder="Answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
        rows={5}
      />

      {/* Status Message */}
      {message && (
        <p
          className={`text-sm ${
            status === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="bg-teal-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {loading ? "Saving..." : "Save FAQ"}
      </button>
    </form>
  )
}
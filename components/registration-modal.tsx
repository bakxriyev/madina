"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"

interface RegistrationModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: { full_name: string; phone_number: string; tg_user: string }) => void
}

export default function RegistrationModal({ isOpen, onClose, onSubmit }: RegistrationModalProps) {
  const [formData, setFormData] = useState({
    full_name: "",
    phone_number: "+998",
    tg_user: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const phoneInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) {
      setFormData({
        full_name: "",
        phone_number: "+998",
        tg_user: "",
      })
      setError(null)
    }
  }, [isOpen])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setError(null)

    if (name === "phone_number") {
      const numericValue = value.replace(/[^\d+]/g, "")
      if (!numericValue.startsWith("+998")) {
        setFormData((prev) => ({ ...prev, [name]: "+998" + numericValue.replace("+998", "") }))
      } else {
        setFormData((prev) => ({ ...prev, [name]: numericValue }))
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, prefix: string) => {
    const input = e.currentTarget
    const selectionStart = input.selectionStart || 0

    if (e.key === "Backspace" && selectionStart <= prefix.length) {
      e.preventDefault()
      return
    }

    const allowedKeys = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "Tab",
      "Enter",
      "Home",
      "End",
    ]

    if (!allowedKeys.includes(e.key) && !e.ctrlKey && !e.metaKey) {
      e.preventDefault()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    onSubmit(formData)

    const sendToBackend = async () => {
      try {
        const backendUrl = "https://backend.buyuk-zamon.uz"

        const response = await fetch(`${backendUrl}/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            full_name: formData.full_name,
            phone_number: formData.phone_number,
            tg_user: formData.tg_user || "",
          }),
        })

        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`)
        }
      } catch (err) {
        console.error("Background registration error:", err)
      }
    }

    sendToBackend()
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const input = e.target
    setTimeout(() => {
      input.selectionStart = input.selectionEnd = input.value.length
    }, 0)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative bg-[#041a2e] rounded-2xl p-8 max-w-md w-full mx-4 border border-[#4db5ff]/20 mt-10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="absolute -top-16 left-0 right-0 bg-gradient-to-r from-[#041a2e] to-[#0a4a8c] text-white py-3 px-4 rounded-t-xl text-center font-bold text-lg shadow-lg">
          Davom etish uchun ma'lumotlaringizni kiriting
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <label htmlFor="full_name" className="text-white/80 text-sm flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2 text-[#4db5ff]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              Ismingiz:
            </label>
            <input
              id="full_name"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#0a2a4a]/60 border border-[#4db5ff]/20 rounded-lg focus:ring-2 focus:ring-[#4db5ff]/50 text-white placeholder-white/50"
              placeholder="Ismingizni kiriting"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone_number" className="text-white/80 text-sm flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2 text-[#4db5ff]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Telefon raqamingiz:
            </label>
            <input
              id="phone_number"
              name="phone_number"
              ref={phoneInputRef}
              type="tel"
              value={formData.phone_number}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyDown(e, "+998")}
              onFocus={handleFocus}
              required
              className="w-full px-4 py-3 bg-[#0a2a4a]/60 border border-[#4db5ff]/20 rounded-lg focus:ring-2 focus:ring-[#4db5ff]/50 text-white placeholder-white/50"
              placeholder="+998 XX XXX XX XX"
            />
          </div>

          <button type="submit" disabled={loading} className="relative w-full">
            <div className="relative bg-[#4db5ff] rounded-lg py-3 px-6 flex items-center justify-center">
              {loading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#041a2e]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span className="text-[#041a2e] font-bold">Yuborilmoqda...</span>
                </>
              ) : (
                <span className="text-[#041a2e] font-bold">YOPIQ KANALGA QOSHILISH</span>
              )}
            </div>
          </button>
        </form>
      </div>
    </div>
  )
}

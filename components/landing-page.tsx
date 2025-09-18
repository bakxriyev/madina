"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import RegistrationModal from "./registration-modal"

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 2, seconds: 0 })
  const router = useRouter()

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleRegister = () => {
    setIsModalOpen(true)
  }

  const handleModalSubmit = (data: { full_name: string; phone_number: string }) => {
    setIsModalOpen(false)
    router.push("/thank-you")
  }

  const benefits = [
    "Muammolarning ustki qismi bilan emas, ularning ildizi bilan ishlashni",
    "Bu muammolarning ildizini qanday aniqlash mumkinligini",
    "Asl ildizni topgach, berilayotgan vaziyatlarni qabul qilishni o'rganasiz",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white relative overflow-hidden">
      <div className="max-w-md mx-auto px-4 py-2 relative z-10">
        {/* Status Badge */}
        <div className="flex justify-center mb-4">
          <div className="bg-black/60 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2 border border-blue-500/30 shadow-lg">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <div className="text-white text-sm font-medium">
              <div>4-5 oktabr | soat 20:00 da</div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center">
          <p className="text-gray-300 text-sm mb-4">Madina Fayzullayevnadan 2 kunlik Bepul Dars</p>

          <h1 className="text-white text-2xl font-bold mb-6 leading-tight uppercase">
            Ruhiy Og'riqlarning
            <br />
            Asl Ildizi
          </h1>

          <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl px-4 py-4 mb-6 shadow-xl shadow-blue-600/40 transform hover:scale-105 transition-all duration-300 border border-blue-400/50">
            <p className="text-white text-sm font-medium">
              Muammolaringiz ildizini aniqlab, yechim topgan holda, qayta-qayta kurslarda o'qishga nuqta qo'yasiz
            </p>
          </div>
        </div>

        {/* Speaker Section with Timer */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="relative">
              <div className="w-80 h-96 relative">
                <Image
                  src="/madinaaa.png"
                  alt="Madina Fayzullayeva"
                  width={320}
                  height={384}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
            </div>

            <div className="absolute left-[-20px] top-20 transform -translate-y-1/2">
              <div className="bg-blue-900/90 backdrop-blur-sm rounded-lg px-4 py-3 border border-blue-500/50 shadow-xl shadow-blue-600/40">
                <div className="text-white text-xl font-bold font-mono">
                  {String(timeLeft.hours).padStart(2, "0")}:{String(timeLeft.minutes).padStart(2, "0")}:
                  {String(timeLeft.seconds).padStart(2, "0")}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Button */}
        <div className="px-6">
          <button
            onClick={handleRegister}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold text-lg py-4 px-6 rounded-full mb-2 flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-600/40 animate-pulse hover:animate-none border border-blue-400/50"
          >
            BEPUL QATNASHISH
            <span className="text-white text-xl transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>

        {/* Benefits Section */}
        <div className="mb-8">
          <h2 className="text-white font-bold text-xl mb-6 text-center">Bepul Darsda siz:</h2>

          <div className="space-y-4 text-left">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-black/30 border border-gray-700/40 hover:border-blue-500/60 transition-all duration-300"
              >
                <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg shadow-blue-600/30">
                  <span className="text-white text-xs">✓</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Second Registration Button */}
        <div className="px-6">
          <button
            onClick={handleRegister}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold text-lg py-4 px-6 rounded-full mb-2 flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-600/40 animate-pulse hover:animate-none border border-blue-400/50"
          >
            BEPUL QATNASHISH
            <span className="text-white text-xl transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-6 mt-6 relative z-10">
        <div className="flex items-center justify-center gap-3">
          <p className="text-gray-400 text-sm">Created by</p>
          <a
            href="https://t.me/it_zoneuz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity duration-300 transform hover:scale-105"
          >
            <Image src="/itzone.png" alt="IT Zone Telegram" width={90} height={90} className="cursor-pointer" />
          </a>
        </div>
      </footer>

      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleModalSubmit} />
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import RegistrationModal from "./register"

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 2, seconds: 0 })

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
  }

  const benefits = [
    "Muammolarning ustki qismi bilan emas, ularning ildizi bilan ishlashni",
    "Bu muammolarning ildizini qanday aniqlash mumkinligini",
    "Asl ildizni topgach, berilayotgan vaziyatlarni qabul qilishni o'rganasiz.",
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 left-8 w-24 h-24 bg-red-600/8 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-6 w-20 h-20 bg-red-500/12 rounded-full blur-lg animate-bounce delay-1000"></div>
        <div className="absolute bottom-32 left-4 w-32 h-32 bg-red-700/6 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute bottom-16 right-10 w-24 h-24 bg-red-600/10 rounded-full blur-xl animate-bounce delay-2000"></div>
      </div>

      <div className="max-w-md mx-auto px-4 py-1 relative z-10">
        <div className="flex justify-center mb-1">
          <div className="bg-black rounded-full px-6 py-3 flex items-center gap-2 border border-gray-700 shadow-lg">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <div className="text-white text-sm font-medium">4-5 oktaybr | 20:00</div>
          </div>
        </div>

        <div className="text-center mb-1">
          <p className="text-gray-300 text-sm">Madina Fayzullayevnadan 2 kunlik Online Bepul Dars</p>
        </div>

        <div className="text-center">
          <h1 className="text-white text-2xl font-bold leading-tight uppercase tracking-wide px-4">
            Barcha Muammolarning Asl Ildizi va Yechimi
          </h1>
        </div>

        <div className="text-center text-[16px] rounded-lg px-4 py-4 mb-2 mx-2 shadow-xl ">
          <p className="text-white leading-relaxed">
            <span className="text-white font-semibold uppercase text-center">
              2 kunda hayotingizdagi muammolaringiz sababini aniqlab, yechim topasiz
            </span>
          </p>
        </div>

        <div className="relative flex justify-center items-center mb-0 px-2">
          {/* Background Image - Centered */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/40 via-red-600/30 to-red-700/35 rounded-full blur-3xl scale-150"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-red-400/25 via-transparent to-red-800/20 rounded-full blur-2xl scale-125"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/15 to-transparent rounded-full blur-xl scale-110"></div>

            <Image
              src="/madinaaa.png"
              alt="Madina Fayzullayeva"
              width={300}
              height={360}
              className="w-75 h-90 object-cover rounded-lg relative z-10 shadow-2xl mx-auto"
              priority
            />

            {/* Name and credentials overlay */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-red-500/30">
              <h3 className="text-white font-bold text-lg text-center">Madina Fayzullayeva</h3>
              <p className="text-red-300 text-sm text-center">Psixolog • 10+ yillik tajriba</p>
            </div>

            {/* Timer positioned on top-right of image */}
            <div className="absolute -top-4 -right-4 z-20">
              <div
                className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-xl px-4 py-3 shadow-2xl border border-red-500/50 relative overflow-hidden transform hover:scale-105 transition-all duration-300"
                style={{
                  boxShadow:
                    "0 15px 35px rgba(239, 68, 68, 0.4), 0 8px 15px rgba(0, 0, 0, 0.5), inset 0 2px 0 rgba(255, 255, 255, 0.2), inset 0 -2px 0 rgba(0, 0, 0, 0.3)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-transparent rounded-xl animate-pulse delay-1000"></div>
                <div className="text-center relative z-10">
                  <div className="text-gray-200 text-xs font-medium mb-1 animate-pulse">Qolgan vaqt:</div>
                  <div className="text-white text-2xl font-bold font-mono drop-shadow-lg animate-pulse">
                    {String(timeLeft.minutes).padStart(2, "0")}:{String(timeLeft.seconds).padStart(2, "0")}
                  </div>
                </div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-0 mb-1">
          <button
            onClick={handleRegister}
            className="w-full bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white font-bold text-lg py-6 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 active:scale-95 active:translate-y-0 flex items-center justify-center gap-2 relative overflow-hidden border-2 border-red-400/60"
            style={{
              boxShadow: `
                0 20px 40px rgba(239, 68, 68, 0.4),
                0 15px 25px rgba(0, 0, 0, 0.5),
                0 8px 15px rgba(239, 68, 68, 0.3),
                inset 0 3px 0 rgba(255, 255, 255, 0.3),
                inset 0 -3px 0 rgba(0, 0, 0, 0.4),
                inset 0 0 20px rgba(255, 255, 255, 0.1)
              `,
              background: `
                linear-gradient(135deg, #ef4444 0%, #dc2626 50%, #b91c1c 100%),
                linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)
              `,
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.8)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-transparent rounded-2xl animate-pulse delay-1000"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-red-800/60 via-transparent to-red-400/40 rounded-2xl"></div>
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-t-2xl"></div>
            <span className="relative z-10 drop-shadow-lg font-extrabold tracking-wide">BEPUL DARSGA QATNASHISH</span>
            <div
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center relative z-10 animate-bounce delay-300 border-2 border-red-200"
              style={{
                boxShadow: `
                  0 8px 16px rgba(0, 0, 0, 0.4), 
                  0 4px 8px rgba(0, 0, 0, 0.3),
                  inset 0 2px 0 rgba(255, 255, 255, 0.9),
                  inset 0 -2px 0 rgba(0, 0, 0, 0.1)
                `,
              }}
            >
              <span className="text-red-600 text-lg font-bold drop-shadow-sm"> ← </span>
            </div>
          </button>
        </div>

        <div className="text-center mb-2 px-2">
          <p className="text-gray-400 text-sm">Bepul qatnashish uchun bosing</p>
        </div>

        <div className="mb-2 px-2">
          <h2 className="text-white font-bold text-xl mb-2 text-left">Online Darsda Siz:</h2>

          <div className="space-y-2 text-left">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg border border-gray-600">
                  <div className="w-4 h-4 bg-white rounded-full shadow-inner"></div>
                </div>
                <p className="text-white text-sm leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="px-2 mb-3">
          <button
            onClick={handleRegister}
            className="w-full bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white font-bold text-lg py-6 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 active:scale-95 active:translate-y-0 flex items-center justify-center gap-3 relative overflow-hidden border-2 border-red-400/60"
            style={{
              boxShadow: `
                0 20px 40px rgba(239, 68, 68, 0.4),
                0 15px 25px rgba(0, 0, 0, 0.5),
                0 8px 15px rgba(239, 68, 68, 0.3),
                inset 0 3px 0 rgba(255, 255, 255, 0.3),
                inset 0 -3px 0 rgba(0, 0, 0, 0.4),
                inset 0 0 20px rgba(255, 255, 255, 0.1)
              `,
              background: `
                linear-gradient(135deg, #ef4444 0%, #dc2626 50%, #b91c1c 100%),
                linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)
              `,
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.8)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-pulse delay-500"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-transparent rounded-2xl animate-pulse delay-1500"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-red-800/60 via-transparent to-red-400/40 rounded-2xl"></div>
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-t-2xl"></div>
            <span className="relative z-10 drop-shadow-lg font-extrabold tracking-wide">BEPUL DARSGA QATNASHISH</span>
            <div
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center relative z-10 animate-bounce delay-300 border-2 border-red-200"
              style={{
                boxShadow: `
                  0 8px 16px rgba(0, 0, 0, 0.4), 
                  0 4px 8px rgba(0, 0, 0, 0.3),
                  inset 0 2px 0 rgba(255, 255, 255, 0.9),
                  inset 0 -2px 0 rgba(0, 0, 0, 0.1)
                `,
              }}
            >
              <span className="text-red-600 text-lg font-bold drop-shadow-sm">←</span>
            </div>
          </button>
        </div>
      </div>

      <footer className="w-full py-6 mt-6 relative z-10">
        <div className="flex items-center justify-center gap-3">
          <p className="text-gray-500 text-sm">Created by</p>
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

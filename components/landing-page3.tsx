"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function LandingPage3() {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 1, seconds: 59 })

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

  const telegramChannelLink = "https://t.me/+Zm2I2OOL22QxZTdi" // Replace with your actual Telegram channel link

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

        <div className="text-center mb-2">
          <h1 className="text-white text-2xl font-bold leading-tight uppercase tracking-wide px-2">
            Barcha Muammolarning Asl Ildizi va Yechimi
          </h1>
        </div>

        <div className="bg-red-600 rounded-lg px-4 py-4 mb-2 mx-2 shadow-xl border border-red-500/30">
          <p className="text-white text-sm leading-relaxed">
            <span className="text-white font-semibold">
              Hayotingizda ro'y berayotgan ayni damdagi muammoyingiz ildizini aniqlab,
            </span>{" "}
            yechim topgan holda, hayotingizni eng Baxtli tomonga o'zgartiring va Qalb Halovatini toping!{" "}
          </p>
        </div>

        <div className="flex items-center px-2">
          <div className="flex-1 flex justify-center relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/40 via-red-600/30 to-red-700/35 rounded-full blur-3xl scale-150"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-red-400/25 via-transparent to-red-800/20 rounded-full blur-2xl scale-125"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/15 to-transparent rounded-full blur-xl scale-110"></div>

              <Image
                src="/madinaaa.png"
                alt="Madina Fayzullayeva"
                width={220}
                height={280}
                className="w-56 h-72 object-cover rounded-lg relative z-10 shadow-2xl"
                priority
              />
            </div>
          </div>

          <div className="w-24">
            <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-lg px-2 py-2 shadow-xl border border-red-500/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-transparent rounded-xl animate-pulse delay-1000"></div>
              <div className="text-center relative z-10">
                <div className="text-gray-200 text-xs font-medium mb-1 animate-pulse">Qolgan vaqt:</div>
                <div className="text-white text-xl font-bold font-mono drop-shadow-lg animate-pulse">
                  {String(timeLeft.minutes).padStart(2, "0")}:{String(timeLeft.seconds).padStart(2, "0")}
                </div>
              </div>
              <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>

        <div className="px-2 mb-1">
          <a
            href={telegramChannelLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white font-bold text-lg py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-red-500/25 flex items-center justify-center gap-2 relative overflow-hidden border border-red-400/50"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-transparent rounded-xl animate-pulse delay-1000"></div>
            <span className="relative z-10 drop-shadow-lg">BEPUL DARSGA QATNASHISH</span>
            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center relative z-10 shadow-lg animate-bounce">
              <span className="text-red-600 text-sm font-bold">←</span>
            </div>
          </a>
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
          <a
            href={telegramChannelLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white font-bold text-lg py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-red-500/25 flex items-center justify-center gap-2 relative overflow-hidden border border-red-400/50"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-pulse delay-500"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-transparent rounded-xl animate-pulse delay-1500"></div>
            <span className="relative z-10 drop-shadow-lg">BEPUL DARSGA QATNASHISH</span>
            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center relative z-10 shadow-lg animate-bounce delay-300">
              <span className="text-red-600 text-sm font-bold">←</span>
            </div>
          </a>
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
    </div>
  )
}

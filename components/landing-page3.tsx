"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function LandingPage() {
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

  const telegramChannelLink = "https://t.me/+Zm2I2OOL22QxZTdi" // Replace with your actual Telegram channel link

  const benefits = [
    "Muammolarning ustki qismi bilan emas, ularning ildizi bilan ishlashni",
    "Bu muammolarning ildizini qanday aniqlash mumkinligini",
    "Asl ildizni topgach, berilayotgan vaziyatlarni qabul qilishni o'rganasiz.",
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 left-8 w-24 h-24 bg-red-600/6 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 left-4 w-32 h-32 bg-red-700/4 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-md mx-auto px-4 py-1 relative z-10">
        <div className="flex justify-center mb-1">
          <div className="bg-black rounded-full px-6 py-3 flex items-center gap-2 border border-gray-700 shadow-lg">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <div className="text-white text-sm font-medium">4-5 oktaybr | 20:00 | JONLI EFIR</div>
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

        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg px-4 py-4 mb-2 mx-2 shadow-xl border border-red-500/30">
          <p className="text-white text-sm leading-relaxed">
            <span className="text-yellow-300 font-semibold">⚡ DIQQAT: Faqat 2 daqiqa ichida ro'yxatdan o'ting!</span>
            <br />
            <span className="text-white font-semibold">
              Hayotingizda ro'y berayotgan ayni damdagi muammoyingiz ildizini aniqlab,
            </span>{" "}
            yechim topgan holda, hayotingizni eng Baxtli tomonga o'zgartiring va Qalb Halovatini toping!{" "}
          </p>
        </div>

        <div className="flex items-center px-2">
          <div className="flex-1 flex justify-center relative">
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/20 rounded-full blur-2xl scale-125"></div>

              <Image
                src="/madinaaa.png"
                alt="Madina Fayzullayeva"
                width={220}
                height={280}
                className="w-56 h-72 object-cover rounded-lg relative z-10 shadow-2xl"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Rw="
              />
            </div>
          </div>

          <div className="w-24">
            <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-lg px-2 py-2 shadow-xl border border-red-500/50 relative overflow-hidden">
              <div className="text-center relative z-10">
                <div className="text-gray-200 text-xs font-medium mb-1">Qolgan vaqt:</div>
                <div className="text-white text-lg font-bold font-mono drop-shadow-lg">
                  {String(timeLeft.hours).padStart(2, "0")}:{String(timeLeft.minutes).padStart(2, "0")}:
                  {String(timeLeft.seconds).padStart(2, "0")}
                </div>
                <div className="text-yellow-300 text-xs font-semibold mt-1">SHOSHILING!</div>
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
            className="w-full bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white font-bold text-lg py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-red-500/25 flex items-center justify-center gap-2 relative overflow-hidden border border-red-400/50 animate-pulse"
          >
            <span className="relative z-10 drop-shadow-lg">🔥 HOZIROQ RO'YXATDAN O'TING</span>
            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center relative z-10 shadow-lg">
              <span className="text-red-600 text-sm font-bold">→</span>
            </div>
          </a>
        </div>

        <div className="text-center mb-2 px-2">
        
          <p className="text-gray-400 text-xs">Bepul qatnashish uchun bosing</p>
        </div>

        <div className="mb-2 px-2">
          <h2 className="text-white font-bold text-xl mb-2 text-left">Online Darsda Siz:</h2>

          <div className="space-y-2 text-left">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg border border-green-400">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <p className="text-white text-sm leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="px-2 mb-1">
          <a
            href={telegramChannelLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white font-bold text-lg py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-red-500/25 flex items-center justify-center gap-2 relative overflow-hidden border border-red-400/50 animate-pulse"
          >
            <span className="relative z-10 drop-shadow-lg">🔥 HOZIROQ RO'YXATDAN O'TING</span>
            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center relative z-10 shadow-lg">
              <span className="text-red-600 text-sm font-bold">→</span>
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

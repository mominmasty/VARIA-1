"use client"
import { useState } from "react"
import { BarChart3, Image as ImageIcon, Keyboard } from "lucide-react"
import Image from "next/image"
import { DayPicker } from "react-day-picker"
import "react-day-picker/dist/style.css"
import SignIn from "../auth/signin/page"
import signup from "../auth/signup/page"
import { useSession } from "next-auth/react"


function CalendarWidget() {
  const [selected, setSelected] = useState<Date | undefined>(new Date(2025, 4, 17))
  const [savedName, setSavedName] = useState("");
  const [savedEmail, setSavedEmail] = useState("");
    return (
    <div className="bg-black/90 backdrop-blur-sm rounded-xl p-3 w-[360px] text-white shadow-xl border border-white/10">
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        defaultMonth={new Date(2025, 4, 1)}
        classNames={{
          months: "flex flex-col",
          month: "space-y-4",
          caption: "flex justify-between items-center mb-4 px-2",
          caption_label: "font-semibold text-white text-lg",
          nav: "flex gap-2",
          nav_button: "text-gray-400 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded-lg transition-colors",
          table: "w-full border-collapse space-y-2",
          head_row: "flex justify-between",
          head_cell: "text-gray-400 text-sm font-medium p-2 text-center",
          row: "flex justify-between mt-2",
          cell: "text-center p-1",
          day: "rounded-full w-9 h-9 flex items-center justify-center cursor-pointer transition-all hover:bg-white/10 text-white hover:text-white",
          day_selected: "bg-gradient-to-r from-[#4f46e5] to-[#6d28d9] text-white font-bold hover:opacity-90",
          day_today: "border-2 border-[#4f46e5]",
          day_outside: "text-gray-600 hover:text-gray-400",
        }}
        styles={{
          months: { color: "white" },
          caption_label: { color: "white" },
        }}
      />
    </div>
  )
}

export default function Dashboard() {
  const { data: session } = useSession();
  
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#18132a] to-[#1a0066] p-6">
      <div className="flex justify-between items-start">
        <div className="flex flex-row items-center gap-8">
          <div className="text-4xl font-bold tracking-widest" style={{ letterSpacing: '0.2em' }}>
            <span className="bg-gradient-to-r from-green-400 via-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">VARIA</span>
          </div>
          <div className="flex justify-center items-center gap-8 bg-black/80 rounded-full px-6 py-2 w-[240px]">
            <button className="p-2 hover:bg-gray-800 rounded-full"><Keyboard className="w-5 h-5 text-gray-200" /></button>
            <button
              className="p-2 hover:bg-gray-800 rounded-full"
              onClick={() => window.location.href = '/analyses'}
            >
              <BarChart3 className="w-5 h-5 text-gray-200" />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-full"><ImageIcon className="w-5 h-5 text-gray-200" /></button>
          </div>
        </div>
        <div className="flex flex-col items-end gap-6 mr-8 mt-2">
          <div className="flex items-center gap-3 bg-black/90 rounded-xl px-6 py-3 shadow-lg">
            <Image
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User Avatar"
              width={48}
              height={48}
              className="rounded-full border-2 border-white"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-white">{session?.user?.name || 'Guest'}</span>
              <span className="text-xs text-gray-300">{session?.user?.email || 'Not signed in'}</span>
            </div>
          </div>
          <button
            className="w-[360px] py-3 rounded-full bg-gradient-to-r from-[#221c4a] to-[#6d28d9] text-white font-semibold text-lg shadow-lg transition
    hover:bg-gradient-to-r hover:from-[#7b3fa0] hover:to-[#221c4a]"
          >
            IMPORT FILE
          </button>       
          <CalendarWidget />
        </div>

        
      </div>
    </div>
  )
} 
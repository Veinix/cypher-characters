"use client"
import { useState } from "react"

interface StatBoxProps {
    stat: "Tier" | "Effort" | "XP",
    statValue: number,
}

export default function StatBox({ stat, statValue }: StatBoxProps) {
    const [pointValue, setPointValue] = useState(statValue)

    const increase = () => {
        setPointValue(pointValue + 1)
    }
    const decrease = () => {
        if (pointValue >= 1) setPointValue(pointValue - 1)
    }

    return (
        <div className="flex gap-2 flex-row tabular-nums">
            <div className="flex flex-col sm:flex-row sm:gap-3">
                <p className="font-bold text-md sm:text-lg sm:inline"> {stat} </p>
                <span className="font-bold  text-xl sm:text-3xl text-center self-center p-2 w-14 m-0 border rounded-lg">{pointValue}</span>
            </div>
            <div className="flex justify-center items-center flex-col gap-2">
                <p onClick={increase} className="font-bold text-xl hover:cursor-pointer">+</p>
                <p onClick={decrease} className={`${pointValue < 1 && `invisible`} hover:cursor-pointer font-bold text-xl`}>-</p>
            </div>
        </div>
    )
}

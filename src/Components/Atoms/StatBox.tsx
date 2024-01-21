"use client"
import { useState } from "react"

interface StatBoxProps {
    stat: "Tier" | "Effort" | "XP",
    statValue: number,
    editable?: boolean
}

export default function StatBox({ stat, statValue, editable }: StatBoxProps) {
    const [pointValue, setPointValue] = useState(statValue)
    const increase = () => {
        setPointValue(pointValue + 1)
    }
    const decrease = () => {
        if (pointValue >= 1) setPointValue(pointValue - 1)
    }
    return (
        <div className="flex flex-col justify-center items-center rounded-lg border p-2 min-w-32">
            <p className={"font-bold"}>{stat}</p>
            <div className="flex justify-center items-center gap-2">
                {stat === "XP" && <>
                    <button onClick={decrease} className={`${pointValue < 1 && "invisible"}`}> {`<`} </button>
                    <p> {pointValue} </p>
                    <button onClick={increase}> {`>`} </button>
                </>}
                {!(stat === "XP") && <p> {pointValue} </p>}
            </div>
        </div>
    )
}

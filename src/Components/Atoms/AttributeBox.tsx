
interface AttributeBoxProps {
    attribute: "Might" | "Intellect" | "Speed",
    pool: number,
    edge: number
}

export default function AttributeBox({ attribute, pool, edge }: AttributeBoxProps) {
    let textColor = ""
    switch (attribute) {
        case "Might":
            textColor = "text-red-700"
            break;
        case "Intellect":
            textColor = "text-blue-700"
            break;
        case "Speed":
            textColor = "text-green-700"
    }
    return (
        <div className="flex flex-col sm:flex-row justify-center items-center rounded-lg border p-1">
            <p className={`${textColor} font-bold sm:pr-2`}>{attribute}</p>
            <div className="flex justify-center items-center gap-2 text-sm sm:text-lg sm:flex-col">
                <div className="flex items-center justify-center sm:gap-1 flex-col sm:flex-row">
                    <p className="font-bold "> Pool </p>
                    {pool}
                </div>
                <div className="flex items-center justify-center sm:gap-1 flex-col sm:flex-row">
                    <p className="font-bold"> Edge </p>
                    {edge}
                </div>
            </div>
        </div>
    )
}

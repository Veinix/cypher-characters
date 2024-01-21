
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
        <div className="flex flex-col justify-center items-center rounded-lg border p-2">
            <div className="flex justify-center items-center gap-2">
                <div className="flex justify-center items-center flex-col">
                    {pool}
                    <p className="font-bold"> Pool </p>
                </div>
                <p className={`${textColor} font-bold`}>{attribute}</p>
                <div className="flex justify-center items-center flex-col">
                    {edge}
                    <p className="font-bold"> Edge </p>
                </div>
            </div>
        </div>
    )
}

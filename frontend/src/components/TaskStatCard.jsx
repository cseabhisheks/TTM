import { GoTasklist } from "react-icons/go";
export default function TaskStatCard({ data }) {
    const { count, title, Icon, color } = data;
    const colorStyles = {
        brown: "bg-amber-500 text-white",
        gray: "bg-gray-500 text-white",
        red: "bg-green-500 text-white",
        green: "bg-blue-500 text-white",
        gold: "bg-purple-500 text-white",
        blue: "bg-blue-500 text-white",
    };
    return (<>
        <div className={`flex items-center gap-4 border rounded-xl px-2 md:px-4 py-2 capitalize" ${colorStyles[color]}`} >
            <span>
                <Icon className="text-xl" />
            </span>
            <span >
                <div className="text-xs">{title}</div>
                <div className="font-bold text-xs "
                >{count}</div>
            </span>
        </div>
    </>)
}
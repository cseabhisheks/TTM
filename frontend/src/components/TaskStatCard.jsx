import { GoTasklist } from "react-icons/go";
export default function TaskStatCard({ data }) {
    const { count, title, Icon, color } = data;
    const colorStyles = {
        brown: "bg-amber-100 text-amber-700",
        gray: "bg-gray-100 text-gray-700",
        red: "bg-green-500 text-white",
        green: "bg-blue-500 text-white",
        gold: "bg-purple-500 text-white",
        blue: "bg-blue-100 text-blue-700",
    };
    return (<>
        <div className={`flex items-center gap-4 border rounded-xl px-4 py-2 capitalize" ${colorStyles[color]}`} >
            <span>
                <Icon className="text-xl" />
            </span>
            <span >
                <div className="font-bold "
                >{count}</div>
                <div className="text-xs">{title}</div>
            </span>
        </div>
    </>)
}
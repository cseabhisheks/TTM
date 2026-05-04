import { GoTasklist } from "react-icons/go";
export default function TaskStatCard({ data }) {
    const { count, title,Icon,color } = data;
    return (<>
        <div className="flex items-center gap-4 border rounded-xl px-4 py-2 capitalize" >
            <span>
                <Icon className="text-xl" style={{color:color}}/>
            </span>
            <span style={{color:color}}>
                <div className="font-bold "
                >{count}</div>
                <div >{title}</div>
            </span>
        </div>
    </>)
}
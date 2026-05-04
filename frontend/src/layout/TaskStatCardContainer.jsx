import TaskStatCard from "../components/TaskStatCard"
import { GoTasklist } from "react-icons/go";
import { FaRegWindowRestore } from "react-icons/fa";
import { RiProgress1Line } from "react-icons/ri";
import { GiFrozenOrb } from "react-icons/gi";
import { IoCheckmarkDone } from "react-icons/io5";
export default function TaskStatCardContainer() {
    const taskStatData = [
        {
            count: 6,
            title: 'total tasks',
            Icon:GoTasklist,
            color:'gray'
        },
        {
            count: 6,
            title: 'to Do',
            Icon:FaRegWindowRestore,
            color:'red'
        },
        {
            count: 6,
            title: 'In Progress',
            Icon:RiProgress1Line,
            color:'green'
        },
        {
            count: 6,
            title: 'Frozen',
            Icon: GiFrozenOrb,
            color:'gold'
        },
        {
            count: 6,
            title: 'Done',
            Icon:IoCheckmarkDone,
            color:'blue'
        },
    ]

    return (<>
    {/* rendering data using taskstatcard */}
        <div className="grid sm:grid-cols-3 md:grid-cols-5 gap-4">
            {taskStatData.map((item, idx) => (
                <span key='idx' > <TaskStatCard data={item} /></span>
            ))}
        </div>
    </>)
}
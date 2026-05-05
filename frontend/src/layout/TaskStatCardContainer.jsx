import TaskStatCard from "../components/TaskStatCard"
import { GoTasklist } from "react-icons/go";
import { FaRegWindowRestore } from "react-icons/fa";
import { RiProgress1Line } from "react-icons/ri";
import { GiFrozenOrb } from "react-icons/gi";
import { IoCheckmarkDone } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { GoProjectRoadmap } from "react-icons/go";
export default function TaskStatCardContainer() {
    const taskStatData = [
        {
            count: 6,
            title: 'Total Projects',
            Icon: GoProjectRoadmap ,
            color: 'brown'
        },
        {
            count: 6,
            title: 'total tasks',
            Icon: GoTasklist,
            color: 'gray'
        },
        {
            count: 6,
            title: 'to Do',
            Icon: FaRegWindowRestore,
            color: 'red'
        },
        {
            count: 6,
            title: 'In Progress',
            Icon: RiProgress1Line,
            color: 'green'
        },
        {
            count: 6,
            title: 'Frozen',
            Icon: GiFrozenOrb,
            color: 'gold'
        },
        {
            count: 6,
            title: 'Done',
            Icon: IoCheckmarkDone,
            color: 'blue'
        },
    ]

    return (<>
        <div className="p-5">
            <div className="capitalize mb-4">
                <div className="flex items-center gap-4">
                    <IoIosPeople className="text-5xl md:text-7xl" />
                    <span className="text-xl md:text-2xl font-bold">team task manager</span>
                </div>
                <div className="text-sm text-gray-500">
                    organize and track your team's tasks efficiently
                </div>
            </div>
            {/* rendering data using taskstatcard */}
            <div className="grid sm:grid-cols-3 md:grid-cols-5 gap-4">
                {taskStatData.map((item, idx) => (
                    <span key={idx} > <TaskStatCard data={item} /></span>
                ))}
            </div>
        </div>
    </>)
}
import TaskStatCard from "../components/TaskStatCard"
import { GoTasklist } from "react-icons/go";
import { FaRegWindowRestore } from "react-icons/fa";
import { RiProgress1Line } from "react-icons/ri";
import { GiFrozenOrb } from "react-icons/gi";
import { IoCheckmarkDone } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { GoProjectRoadmap } from "react-icons/go";
import { useTasks } from "../context/TaskContext";
export default function TaskStatCardContainer() {
    const { taskData } = useTasks();

    const stats = {
        totalProjects: taskData.projects.length,
        totalTasks: taskData.tasks.length,
        todo: taskData.tasks.filter(t => t.status === "todo").length,
        inprogress: taskData.tasks.filter(t => t.status === "inprogress").length,
        freeze: taskData.tasks.filter(t => t.status === "freeze").length,
        done: taskData.tasks.filter(t => t.status === "done").length,
    };

    const taskStatData = [
        {
            count: stats.totalProjects,
            title: 'Total Projects',
            Icon: GoProjectRoadmap,
            color: 'brown'
        },
        {
            count: stats.totalTasks,
            title: 'Total Tasks',
            Icon: GoTasklist,
            color: 'gray'
        },
        {
            count: stats.todo,
            title: 'To Do',
            Icon: FaRegWindowRestore,
            color: 'red'
        },
        {
            count: stats.inprogress,
            title: 'In Progress',
            Icon: RiProgress1Line,
            color: 'green'
        },
        {
            count: stats.freeze,
            title: 'Frozen',
            Icon: GiFrozenOrb,
            color: 'gold'
        },
        {
            count: stats.done,
            title: 'Done',
            Icon: IoCheckmarkDone,
            color: 'blue'
        },
    ];

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
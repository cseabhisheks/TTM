import { FaUser } from "react-icons/fa";
import { GoTasklist } from "react-icons/go";
import { FaRegWindowRestore } from "react-icons/fa";
import { RiProgress1Line } from "react-icons/ri";
import { GiFrozenOrb } from "react-icons/gi";
import { IoCheckmarkDone } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { GoProjectRoadmap } from "react-icons/go";
import { MdDateRange } from "react-icons/md";
import { MdDelete } from "react-icons/md";
export default function FilterCard({ filteredTask, taskData }) {
    const priorityColor = {
        low: "bg-green-100",
        medium: "bg-yellow-100",
        high: "bg-red-100"
    }
    const taskStatus = {
        todo: FaRegWindowRestore,
        inprogress: RiProgress1Line,
        freeze: GiFrozenOrb,
        done: IoCheckmarkDone
    }
    const statusColor = {
        todo: "bg-gray-500 text-white",
        inprogress: "bg-blue-500 text-white",
        freeze: "bg-purple-500 text-white",
        done: "bg-green-500 text-white",
    };
    return (<>
        <div className="mt-5 p-4 rounded-xl text-sm grid md:grid-cols-3 gap-5">
            {filteredTask.length === 0 ? (
                <div className="col-span-full text-center text-gray-500 py-10">
                    No tasks found 🥲
                </div>
            ) : filteredTask.map((task) => {
                const StatusIcon = taskStatus[task.status];
                return (
                    <div key={task.id} className="border p-4 rounded-xl mb-5  ">
                        <div className="mb-2">
                            <div className="flex gap-5 items-center">
                                <div className="font-bold">{task.title}</div>
                                <div>{taskData.projects.find(p => p.id === task.projectId)?.name}</div>
                                <div className={`border rounded-xl px-4 ${priorityColor[task.priority]}`} >{task.priority}</div>
                                <MdDelete className="text-red-500 rounded-[100%] hover:text-white hover:bg-gray-500 text-xl ml-auto cursor-pointer" />
                            </div>
                            <p>{task.description}</p>
                        </div>

                        <div className="flex items-center justify-between">

                            <div className="flex items-center gap-2 border rounded-xl px-4 py-1">
                                <FaUser className="text-sm" />
                                <div>{task.assignee}</div>
                            </div>
                            <div className={`flex items-center gap-2 border rounded-xl px-4 py-1 ${statusColor[task.status]}`}>
                                <StatusIcon className={`text-lg`} />
                                <div>{task.status}</div>
                            </div>

                            <div className="flex items-center gap-2 border rounded-xl px-4 py-1 text-white bg-red-400">
                                <MdDateRange className="text-xl" />
                                <div> {task.deadline} </div>
                            </div>
                        </div>

                    </div>
                )
            })}
        </div>
    </>)
}
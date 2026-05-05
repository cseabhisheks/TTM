import { FaUser } from "react-icons/fa";
export default function FilterCard({ filteredTask, taskData }) {
    return (<>
        <div className="mt-5 p-4 rounded-xl text-sm grid grid-cols-3 gap-5">
            {filteredTask.map((task) => (
                <div key={task.id} className="border p-4 rounded-xl mb-5  ">
                    <div className="mb-2">
                        <div className="flex gap-5">
                            <div className="font-bold">{task.title}</div>
                            <div>{taskData.projects.find(p => p.id === task.projectId)?.name}</div>
                            <div className="border rounded-xl px-4 ">{task.priority}</div>
                        </div>
                        <p>{task.description}</p>
                    </div>

                    <div className="flex items-center justify-between">

                        <div className="flex items-center gap-2 border rounded-xl px-4 py-1">
                            <FaUser className="text-sm" />
                            <div>{task.assignee}</div>
                        </div>
                        <div className="border rounded-xl px-4 py-1">{task.status}</div>

                        <div className="border rounded-xl px-4 py-1 text-white bg-red-400">{task.deadline}</div>
                    </div>

                </div>
            ))}
        </div>
    </>)
}
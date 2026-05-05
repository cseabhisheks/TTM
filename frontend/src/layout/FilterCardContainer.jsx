import { CiFilter } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { useState,useContext } from "react";
import { applyFilters } from "../utilities/filterService";
import FilterCard from "../components/FilterCard";
import { useTasks } from "../context/TaskContext";
export default function FilterCardContainer() {
    const filterButton = ["all", "to do", "in progress", "done", "freeze"]
    // code to fetch 
    const {taskData}=useTasks();

    // filter data
    const [filters, setFilters] = useState({
        projects: 'all',
        assignee: "all",
        status: "all"
    })

    // handle filter data
    const handleChnage = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({
            ...prev, [name]: value
        }))
    }

    const filteredTask = applyFilters(taskData.tasks, filters)
    return (<>
        <div className="capitalize m-4 p-4 border-2 rounded-xl bg-orange-300">
            {/* title and logo */}
            <div className="mb-4 flex gap-2 items-center">
                <CiFilter className="text-2xl" />
                <div className=" font-bold text-xl">filters</div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">

                {/* assignee and project sections */}
                <div className="grid md:grid-cols-2">
                    {/* projects */}
                    <div className="rounded-xl p-4">
                        <div className="mb-2">Projects</div>
                        <select className="border-2 bg-gray-300 w-full rounded-xl px-4 py-1" name="projects" id="" value={filters.projects} onChange={handleChnage}>
                            <option value="all">All</option>
                            {taskData.projects.map((items, idx) => (
                                <option key={items.id} value={items.id}>{items.name}</option>
                            ))}
                        </select>
                    </div>
                    {/* assignee */}
                    <div className="rounded-xl p-4">
                        <div className="mb-2">Assignee</div>
                        <select className="border-2 bg-gray-300 w-full rounded-xl px-4 py-1" name="assignee" id="" value={filters.assignee} onChange={handleChnage}>
                            <option value="all">All</option>
                            {taskData.assignees.map((items, idx) => (
                                <option key={items.id} value={items.name}>{items.name}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* status */}
                <div className=" rounded-xl p-4">
                    <div className="mb-2">status</div>
                    <div className="flex gap-4 flex-wrap">
                        {filterButton.map((items, idx) => (
                            <button key={idx} onClick={() =>
                                setFilters({ ...filters, status: items === "all" ? "all" : items.replace(" ", "") })
                            } className="capitalize text-sm bg-gray-200 border px-4 py-1 rounded-xl">{items}</button>
                        ))}
                    </div>
                </div>

            </div>
        </div>
        {/* display task */}
        <FilterCard filteredTask={filteredTask} taskData={taskData} />
    </>)
}
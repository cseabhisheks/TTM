import { CiFilter } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { applyFilters } from "./filterService";
import FilterCard from "../components/FilterCard";
export default function Filter() {
    const filterButton = ["all", "to do", "in progress", "done", "freeze"]

    // actual data
    const taskData = {
        projects: [
            { id: 1, name: "Project Alpha" },
            { id: 2, name: "Project Beta" },
            { id: 3, name: "Project Gamma" }
        ],

        assignees: [
            { id: 1, name: "Rahul" },
            { id: 2, name: "Amit" },
            { id: 3, name: "Priya" }
        ],

        tasks: [
            // Project Alpha
            {
                id: 1,
                title: "UI Design",
                description: "Design dashboard UI and components",
                projectId: 1,
                assignee: "Rahul",
                priority: 'low',
                status: "todo",
                deadline: "2026-05-10"
            },
            {
                id: 2,
                title: "Setup Backend",
                description: "Initialize server and database",
                projectId: 1,
                assignee: "Amit",
                priority: 'low',
                status: "inprogress",
                deadline: "2026-05-12"
            },
            {
                id: 3,
                title: "Testing",
                description: "Perform unit and integration testing",
                projectId: 1,
                assignee: "Priya",
                priority: 'low',
                status: "done",
                deadline: "2026-05-08"
            },
            {
                id: 4,
                title: "Deploy",
                description: "Deploy app to production",
                projectId: 1,
                assignee: "Rahul",
                status: "freeze",
                priority: 'low',
                deadline: "2026-05-15"
            },

            // Project Beta
            {
                id: 5,
                title: "Landing Page",
                description: "Create responsive landing page",
                projectId: 2,
                assignee: "Amit",
                status: "todo",
                priority: 'low',
                deadline: "2026-05-11"
            },
            {
                id: 6,
                title: "Auth system",
                description: "Implement login & signup",
                projectId: 2,
                assignee: "Rahul",
                priority: 'low',
                status: "inprogress",
                deadline: "2026-05-14"
            },
            {
                id: 7,
                title: "Bug Fixing",
                description: "Resolve reported issues",
                projectId: 2,
                assignee: "Priya",
                status: "done",
                priority: 'low',
                deadline: "2026-05-09"
            },
            {
                id: 8,
                title: "Client Review",
                description: "Prepare demo for client",
                projectId: 2,
                assignee: "Amit",
                status: "freeze",
                priority: 'low',
                deadline: "2026-05-18"
            },

            // Project Gamma
            {
                id: 9,
                title: "Database Design",
                description: "Design schema and relations",
                projectId: 3,
                assignee: "Priya",
                status: "todo",
                priority: 'low',
                deadline: "2026-05-13"
            },
            {
                id: 10,
                title: "API Development",
                description: "Build REST APIs",
                projectId: 3,
                assignee: "Rahul",
                status: "inprogress",
                deadline: "2026-05-16",
                priority: 'low',
            },
            {
                id: 11,
                title: "Optimization",
                description: "Improve performance",
                projectId: 3,
                assignee: "Amit",
                status: "done",
                priority: 'low',
                deadline: "2026-05-07"
            },
            {
                id: 12,
                title: "Final Testing",
                description: "Final QA before release",
                projectId: 3,
                assignee: "Priya",
                status: "freeze",
                priority: 'high',
                deadline: "2026-05-20"
            }
        ]
    };
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
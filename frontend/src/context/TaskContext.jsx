import { createContext, useContext, useState, useEffect } from "react"

const TaskContext = createContext();
export const useTasks = () => useContext(TaskContext)

export default function TaskProvider({ children }) {
    // actual data
    const data = {
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
                status: "todo",
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
                status: "done",
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

    const [taskData, setTaskData] = useState(data);
    return (<>
        <TaskContext.Provider value={{ taskData,setTaskData }}>
            {children}
        </TaskContext.Provider>

    </>)
}

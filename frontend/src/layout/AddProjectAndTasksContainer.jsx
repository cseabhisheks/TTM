import { IoAddSharp } from "react-icons/io5";
import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { useTasks } from "../context/TaskContext";
import TaskForce from "../utilities/form/TaskForm";
import Projects from "../utilities/form/Projects";
import Assignee from "../utilities/form/Assignee";
export default function AddProjectAndTasksContainer() {
    const addButton = ["projects", "tasks", "assignee"]
    const [form, setForm] = useState();
    const [formOpen, setFormOpen] = useState(false);

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        assignee: "",
        projects: "",
        priority: "low",
        deadline: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        setFormOpen(false)
    };
    const { taskData } = useTasks();
    return (<>
        <hr className="border-dotted border-black" />
        <div className="grid grid-cols-2 md:grid-cols-3 p-4">
            {addButton.map((item, idx) => (
                <div key={idx} onClick={() => {
                    setForm(item)
                    setFormOpen(true)
                }} className="capitalize flex justify-center items-center gap-2 border-2 border-black border-dotted rounded-xl hover:bg-gray-300 cursor-pointer m-2 md:m-4 p-2  text-xs md:text-lg ">
                    <IoAddSharp className="text-xl" />
                    <div>{item}</div>
                </div>
            ))}
        </div>
        <hr className="border-dotted border-black" />
        {/* project page */}
        {formOpen
            &&

            <div className="w-[100vw] h-[100vh] fixed top-0 bottom-0 bg-black/70 flex items-center justify-center">
                {form == "tasks" &&<TaskForce setFormOpen={setFormOpen} handleChange={handleChange} handleSubmit={handleSubmit} taskData={taskData} />}
                {form == "projects" &&<Projects setFormOpen={setFormOpen} handleChange={handleChange} handleSubmit={handleSubmit} taskData={taskData} />}
                {form == "assignee" &&<Assignee setFormOpen={setFormOpen} handleChange={handleChange} handleSubmit={handleSubmit} taskData={taskData} />}

            </div>
        }
    </>)
}
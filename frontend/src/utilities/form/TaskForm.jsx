import { IoIosCloseCircle } from "react-icons/io";
export default function TaskForce({taskData,setFormOpen,handleChange,handleSubmit}) {
    return (<>
            <form onSubmit={handleSubmit} className="border-2 absolute scale-90 md:scale-1 bg-gray-200 w-[90vw] md:w-[50vw]   capitalize p-4 mb-4 rounded-xl">

                <div className="flex justify-end">
                    <IoIosCloseCircle onClick={() => setFormOpen(false)} className="text-xl text-red-500 cursor-pointer" />
                </div>

                <legend className="font-bold text-xl text-center">new task</legend>

                <fieldset className="flex flex-col gap-4" >
                    <div className="">
                        <label htmlFor="title">title</label>
                        <br />
                        <input onChange={handleChange} className="border-2 capitalize w-[stretch] px-4 py-1 mx-2 md:mx-4 rounded-xl" name="title" type="text" id="title" placeholder="enter task title" />
                    </div>

                    <hr className="border-gray-500" />

                    <div>
                        <label htmlFor="description">description</label>
                        <br />
                        <textarea onChange={handleChange} className="border-2 w-[stretch] h-[100px] md:h-[200px] capitalize px-4 py-1 mx-2 md:mx-4 rounded-xl" name="description" type="text" id="title" placeholder="enter task title" name="description" placeholder="enter task description" id="description" ></textarea>
                    </div>

                    <hr className="border-gray-500" />

                    <div className="flex flex-col md:flex-row justify-between md:mb-4 ">

                        {/* assignee */}
                        <label htmlFor="assignee">
                            <span> assignee</span>
                            <br />
                            <select onChange={handleChange} name="assignee" className="w-[stretch] rounded-xl px-4 py-1" id="assignee">
                                <option value="">select assignee</option>
                                {taskData.assignees.map((item, idx) => (
                                    <option key={idx} value={item.name}>{item.name}</option>
                                ))}
                            </select>
                        </label>

                        {/* projects */}
                        <label htmlFor="aprojects">
                            <span> projects</span>
                            <br />
                            <select onChange={handleChange} name="projects" className="w-[stretch] rounded-xl px-4 py-1" id="projects">
                                <option value="">select projects</option>
                                {taskData.projects.map((item, idx) => (
                                    <option key={idx} value={item.name}>{item.name}</option>
                                ))}
                            </select>
                        </label>

                        {/* priority */}
                        <label htmlFor="priority">
                            <span> asignee</span>
                            <br />
                            <select onChange={handleChange} name="priority" className="w-[stretch] rounded-xl px-4 py-1" id="priority">
                                <option value="low">low</option>
                                <option value="medium">medium</option>
                                <option value="high">high</option>
                            </select>
                        </label>
                    </div>

                    <hr className="border-gray-500 " />

                    <label htmlFor="deadline">
                        <span>deadline</span>
                        <input onChange={handleChange} type="date" className="w-[stretch] rounded-xl px-4 py-1" name="deadline" id="deadline" />
                    </label>

                </fieldset>

                <hr className="border-gray-500 my-2 md:my-4" />

                <div className="flex  justify-center border-2">
                    <button type="submit"  className="bg-blue-500  px-4 py-2 w-full rounded-3xl capitalize ">create task</button>
                </div>
            </form>
      
    </>)
}
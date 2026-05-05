import { IoAddSharp } from "react-icons/io5";
export default function AddProjectAndTasksContainer() {
    return (<>
        <div className="grid md:grid-cols-2">
            <div className=" flex justify-center items-center gap-2 border-2 border-black border-dotted rounded-xl hover:bg-gray-300 cursor-pointer m-4 p-4 ">
                <IoAddSharp className="text-xl" />
                <div>Add Projects</div>
            </div>
            <div className=" flex items-center justify-center rounded-xl border-black border-dotted gap-2 border-2 m-4 p-4 cursor-pointer hover:bg-gray-300">
                <IoAddSharp className="text-xl" />
                <div>Add Tasks</div>
            </div>
        </div>
    </>)
}
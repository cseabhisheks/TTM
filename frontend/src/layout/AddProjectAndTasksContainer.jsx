import { IoAddSharp } from "react-icons/io5";
export default function AddProjectAndTasksContainer() {
    return (<>
        <div className="grid grid-cols-2">
            <div className=" flex justify-center items-center gap-2 border-2 border-black border-dotted rounded-xl hover:bg-gray-300 cursor-pointer m-4 p-4 text-xs ">
                <IoAddSharp className="text-xl" />
                <div>Projects</div>
            </div>
            <div className=" flex items-center justify-center rounded-xl border-black border-dotted gap-2 border-2 m-4 p-4 cursor-pointer hover:bg-gray-300 text-xs">
                <IoAddSharp className="text-xl" />
                <div>Tasks</div>
            </div>
        </div>
    </>)
}
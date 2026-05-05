export default function Navbar() {
    return (
        <nav className="capitalize p-4 flex items-center gap-4 bg-gray-400">
            <div className="text-xl font-bold">team task manager</div>
            <div className="hidden md:flex flex-[3] gap-5">
                <a href="">dashboard</a>
                <a href="">project</a>
                <a href="">tasks</a>
                <a href="">team member</a>
            </div>

            <div className="text-sm bg-gray-400 font-bold flex items-center justify-center border w-8 h-8 rounded-[100%]" >A</div>
        </nav>
    );
}
import { IoIosCloseCircle } from "react-icons/io";

export default function Projects({
  taskData,
  setFormOpen,
  handleChange,
  handleSubmit
}) {
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="border-2 absolute scale-90 md:scale-1 bg-gray-200 w-[90vw] md:w-[50vw] capitalize p-4 mb-4 rounded-xl"
      >
        {/* close button */}
        <div className="flex justify-end">
          <IoIosCloseCircle
            onClick={() => setFormOpen(false)}
            className="text-xl text-red-500 cursor-pointer"
          />
        </div>

        {/* title */}
        <legend className="font-bold text-xl text-center">
          new project
        </legend>

        <fieldset className="flex flex-col gap-4">
          {/* project name */}
          <div>
            <label htmlFor="name">project name</label>
            <br />
            <input
              onChange={handleChange}
              className="border-2 capitalize w-[stretch] px-4 py-1 mx-2 md:mx-4 rounded-xl"
              name="name"
              type="text"
              id="name"
              placeholder="enter project name"
            />
          </div>

          <hr className="border-gray-500" />

          {/* description */}
          <div>
            <label htmlFor="description">description</label>
            <br />
            <textarea
              onChange={handleChange}
              className="border-2 w-[stretch] h-[120px] md:h-[180px] px-4 py-1 mx-2 md:mx-4 rounded-xl"
              name="description"
              id="description"
              placeholder="enter project description"
            />
          </div>

          <hr className="border-gray-500" />

          {/* deadline */}
          <div>
            <label htmlFor="deadline">deadline</label>
            <br />
            <input
              onChange={handleChange}
              type="date"
              className="border-2 w-[stretch] px-4 py-1 mx-2 md:mx-4 rounded-xl"
              name="deadline"
              id="deadline"
            />
          </div>

          <hr className="border-gray-500" />

          {/* status */}
          <div>
            <label htmlFor="status">status</label>
            <br />
            <select
              onChange={handleChange}
              name="status"
              id="status"
              className="w-[stretch] rounded-xl px-4 py-1 mx-2 md:mx-4"
            >
              <option value="">select status</option>
              <option value="active">active</option>
              <option value="planning">planning</option>
              <option value="completed">completed</option>
              <option value="paused">paused</option>
            </select>
          </div>
        </fieldset>

        <hr className="border-gray-500 my-2 md:my-4" />

        {/* submit */}
        <div className="flex justify-center border-2">
          <button
            type="submit"
            className="bg-blue-500 px-4 py-2 w-full rounded-3xl capitalize"
          >
            create project
          </button>
        </div>
      </form>
    </>
  );
}
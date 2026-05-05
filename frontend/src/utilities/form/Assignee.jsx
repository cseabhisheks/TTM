import { IoIosCloseCircle } from "react-icons/io";

export default function Assignee({
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
          new assignee
        </legend>

        <fieldset className="flex flex-col gap-4">
          {/* name */}
          <div>
            <label htmlFor="name">name</label>
            <br />
            <input
              onChange={handleChange}
              className="border-2 capitalize w-[stretch] px-4 py-1 mx-2 md:mx-4 rounded-xl"
              name="name"
              type="text"
              id="name"
              placeholder="enter assignee name"
            />
          </div>

          <hr className="border-gray-500" />

          {/* email */}
          <div>
            <label htmlFor="email">email</label>
            <br />
            <input
              onChange={handleChange}
              className="border-2 w-[stretch] px-4 py-1 mx-2 md:mx-4 rounded-xl"
              name="email"
              type="email"
              id="email"
              placeholder="enter email"
            />
          </div>

          <hr className="border-gray-500" />

          {/* role */}
          <div>
            <label htmlFor="role">role</label>
            <br />
            <select
              onChange={handleChange}
              name="role"
              id="role"
              className="w-[stretch] rounded-xl px-4 py-1 mx-2 md:mx-4"
            >
              <option value="">select role</option>
              <option value="developer">developer</option>
              <option value="designer">designer</option>
              <option value="manager">manager</option>
              <option value="tester">tester</option>
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
            create assignee
          </button>
        </div>
      </form>
    </>
  );
}
import Navbar from "../components/Navbar";

function CreateBook() {
  return (
    <>
      <Navbar />

      <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
        <div className="mt-10 text-center font-bold">Wanna create book?</div>
        <div className="mt-3 text-center text-4xl font-bold">create book</div>
        <div className="p-8">
          <div className="">
            <input
              type="text"
              name="title"
              className="mb-10 h-10 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-600"
              placeholder="Title"
            />
          </div>
          <div className="flex gap-4">
            <input
              type="number"
              name="oldPrice"
              className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Old Price"
            />
            <input
              type="number"
              name="newPrice"
              className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="New Price"
            />
          </div>
          <div className="my-6 flex gap-4">
            <select
              name="category"
              id="select"
              class="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            >
              <option class="font-semibold text-slate-300">Story</option>
              <option class="font-semibold text-slate-300">Motivational</option>
            </select>
            <input
              type="file"
              name="coverImage"
              className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Cover Image"
            />
          </div>

          <div className="">
            <textarea
              name="description"
              id="text"
              cols="30"
              rows="10"
              className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-300"
              placeholder="Description"
            ></textarea>
          </div>
          <div className="text-center">
            <a className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white">
              Create Book
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default CreateBook;

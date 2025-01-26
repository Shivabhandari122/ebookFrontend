import { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateBook() {
  const navigate = useNavigate({});
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "",
    coverImage: "",
    oldPrice: "",
    newPrice: "",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({
      ...data,
      [name]: name == "coverImage" ? e.target.files[0] : value,
    });
  };
  const createBook = async (e) => {
    e.preventDefault();

    const response = await axios.post("http://localhost:3000/books", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("data inserted successfully");
    if (response.status === 200) {
      navigate("/");
    } else {
      alert("something went wrong");
    }
  };
  return (
    <>
      <Navbar />

      <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
        <div className="mt-10 text-center font-bold">Wanna create book?</div>
        <div className="mt-3 text-center text-4xl font-bold">create book</div>
        <form onSubmit={createBook}>
          <div className="p-8">
            <div className="">
              <input
                type="text"
                name="title"
                className="mb-10 h-10 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-600"
                placeholder="Book Name"
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-4">
              <input
                type="number"
                name="oldPrice"
                className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Old Price"
                onChange={handleChange}
              />
              <input
                type="number"
                name="newPrice"
                className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="New Price"
                onChange={handleChange}
              />
            </div>
            <div className="my-6 flex gap-4">
              <select
                name="category"
                id="select"
                class="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                onChange={handleChange}
              >
                <option class="font-semibold text-slate-300">Story</option>
                <option class="font-semibold text-slate-300">
                  Motivational
                </option>
              </select>
              <input
                type="file"
                name="coverImage"
                className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Cover Image"
                onChange={handleChange}
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
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="text-center">
              <button className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white">
                Create Book
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default CreateBook;

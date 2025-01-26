import { Link } from "react-router-dom";

function Card({ book }) {
  return (
    <>
      <Link to={`/books/${book._id}`}>
        {/* Uncomment this block to use the first design */}
        {/* <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40 max-w-sm">
                    <div className="relative">
                        <img className="w-full" src={`http://localhost:3000/${book.coverImage}`} alt="Product Image" />
                        <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
                            SALE
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-medium mb-2">{book.category}</h3>
                        <p className="text-gray-600 text-sm mb-4">{book.description}</p>
                        <div className="flex items-center justify-between">
                            <span className="font-bold text-lg">{book.newPrice}</span>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div> */}

        {/* source: https://github.com/mfg888/Responsive-Tailwind-CSS-Grid/blob/main/index.html */}

        {/* ✅ Grid Section - Starts Here 👇 */}
        <section>
          {/*   ✅ Product card 1 - Starts Here 👇 */}
          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img src={book.coverImage} />
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                  Brand
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  {book.title}
                </p>
                <p className="text-gray-600 text-sm mb-4">{book.description}</p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    {"$" + book.newPrice}
                  </p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">
                      {"$" + book.oldPrice}
                    </p>
                  </del>
                  <div className="ml-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-bag-plus"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
          {/*   🛑 Product card 1 - Ends Here  */}
        </section>
      </Link>
    </>
  );
}

export default Card;

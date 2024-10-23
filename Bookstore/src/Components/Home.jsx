import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <>
      <h1
        className="text-center  mt-4"
        style={{
          fontSize: "100px",
          color: "lightblue",
        }}
      >
        BookSearch
      </h1>
      <label
        className="p-2 rounded-lg fs-2  justify-content-center d-flex m-3 bg-primary text-white"
        htmlFor="searchInput"
      >
        👀 What books are you looking for?
      </label>
      <div className="container d-flex justify-content-center">
        <div className="search  d-flex w-50 justify-content-center align-items-center">
          <input
            className="m-2 p-1 fs-2 rounded-lg form-control"
            placeholder="Search..."
            id="searchInput"
            type="text"
          />
          <button
            className="p-1  rounded col-2  m-3 bg-success text-white"
            type="submit"
          >
            Search 📕
          </button>
        </div>
      </div>
      <button className="text-success" type="button">
        Suggest random book
      </button>
      <button className="text-success" type="button">
        Favorites
      </button>
      <nav>
        <ul>
          <li>Categories</li>
          <li>Author&apos;s</li>
          <li>Year</li>
        </ul>
      </nav>
    </>
  );
}

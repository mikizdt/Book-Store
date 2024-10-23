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
      <div className="p-2 fs-2  justify-content-center d-flex m-3  text-white">
        👀 What books are you looking for?
      </div>

      <nav className="bg-primary fs-5 justify-content-center">
        <ul className="d-flex list-unstyled justify-content-around text-white">
          <li>Categories</li>
          <li>Author&apos;s</li>
          <li>Date</li>
          <li>Watch List</li>
          <li>Suggest random book</li>
        </ul>
      </nav>
      <div className="container  d-flex justify-content-center">
        <div className="search d-flex w-100 justify-content-center align-items-center">
          <input
            className="m-2 w-50 p-1 rounded-lg form-control"
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
    </>
  );
}

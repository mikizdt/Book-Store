import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";

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

      <div className="container  d-flex justify-content-center">
        <div className="search d-flex w-100 justify-content-center align-items-center">
          <input
            className="m-2 w-50 p-1 rounded-lg form-control"
            placeholder="Search For Book's..."
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
      <div className="container text-primary fs-1 d-flex justify-content-center bg-white ">
        Book
      </div>
    </>
  );
}

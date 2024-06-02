import React from "react";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light justify-content-between p-2">
        <a className="navbar-brand ">Booking Bioscope</a>
        <div className="d-flex justify-content-between">
          <button className="border-0" href="/contact">Contact</button>
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </nav>
    </>
  );
};

export default Header;

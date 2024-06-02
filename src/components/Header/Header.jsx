import React from "react";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light justify-content-between p-3 rounded m-auto">
        <a className="navbar-brand ">Booking Bioscope</a>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </nav>
    </>
  );
};

export default Header;

import React, { useEffect, useState } from "react";

const SideCart = ({ watchTime }) => {
  

  return (
    <div>
      <h1>My Cart</h1>

      <div className="mt-5 text-center">
        <p>total watch time</p>
        <input type="text" value="something" disabled />
      </div>
      <h5 className="mt-5">Add Break time</h5>
      
    </div>
  );
};

export default SideCart;

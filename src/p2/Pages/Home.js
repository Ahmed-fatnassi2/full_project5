import React from "react";
import logo from "../../p3/menu/logo.JPG"
const Home = () => {
  return (
    <>
      {/* <h1>Hu:kj:kju:ome</h1> */}
      <div className="title">
                  <img src={logo} alt="logo" className="logo" />
                  <h2>Menu List</h2>
                  <div className="underline"></div>
              </div>
    </>
  );
};

export default Home;

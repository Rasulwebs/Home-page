import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/Home";


const index = () => {
  return (
    <>
      <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
      </main>
    </>
  );
};

export default index;
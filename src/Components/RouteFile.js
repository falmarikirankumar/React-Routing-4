import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./ContactUs";
import Home from "./Home";
import Students from "./Students";
import AddStudent from "./AddStudent";
import EditStudent from "./EditStudent";
import DataContext from "./DataContext";
import PageNotFound from "./PageNotFound";

const RouteFile = () => {
  const [data, setData] = useState([
    { Name: "Kiran", Age: 22, Course: "MERN", Batch: "EA17" },
    { Name: "Kumar", Age: 22, Course: "MERN", Batch: "EA17" },
    { Name: "Shubham", Age: 22, Course: "MERN", Batch: "EA17" },
    { Name: "Vaibhav", Age: 22, Course: "MERN", Batch: "EA17" },
    { Name: "Bhuna", Age: 22, Course: "MERN", Batch: "EA17" },
  ]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/students"
          element={
            <DataContext.Provider value={{ data: data, setData: setData }}>
              <Students />
            </DataContext.Provider>
          }
        />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route
          path="/students/addStudent"
          element={
            <DataContext.Provider value={{ data: data, setData: setData }}>
              <AddStudent />
            </DataContext.Provider>
          }
        />
        <Route
          path="/students/editStudent"
          element={
            <DataContext.Provider value={{ data: data, setData: setData }}>
              <EditStudent />
            </DataContext.Provider>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default RouteFile;

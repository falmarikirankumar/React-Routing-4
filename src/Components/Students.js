import React from "react";
import "./Students.css";
import DataContext from "./DataContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import Buttons from "../Icons/Buttons";
const Students = () => {
  const data = useContext(DataContext);
  // console.log(data.data[0]);
  let navigate = useNavigate();
  let AddStudentBtn = () => {
    navigate("/students/addStudent");
  };

  return (
    <>
      <div className="main">
        <div className="divStudent">
          <h1>Students Details</h1>
          <div style={{ alignSelf: "center" }}>
            <button className="btn" onClick={AddStudentBtn}>
              <h2>Add new Student</h2>
            </button>
            {/* <Buttons value={"Add new Student"} onClick={AddStudentBtn} /> */}
          </div>
        </div>
        <div className="divTable">
          <table className="tables" border={"1px solid"}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Batch</th>
                <th>Change</th>
              </tr>
            </thead>
            <tbody>
              {data.data.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{data.Name}</td>
                    <td>{data.Age}</td>
                    <td>{data.Course}</td>
                    <td>{data.Batch}</td>
                    <td>
                      {
                        <Link
                          to={"/students/editStudent"}
                          state={{ data: index }}
                        >
                          Edit
                        </Link>
                      }
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Students;

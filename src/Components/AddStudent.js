import React from "react";
import "./AddStudent.css";
import TextField from "@mui/material/TextField";

const AddStudent = () => {
  return (
    <div className="main">
      <div className="divAddStudent">
        <div>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            style={{ width: "150%" }}
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Age"
            variant="outlined"
            style={{ width: "150%" }}
          />
        </div>
      </div>
      <div className="divAddStudent">
        <div>
          <TextField
            id="outlined-basic"
            label="Course"
            variant="outlined"
            style={{ width: "150%" }}
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Batch"
            variant="outlined"
            style={{ width: "150%" }}
          />
        </div>
      </div>
      <div className="divAddStudentbtn">
        <div style={{ alignSelf: "center" }}>
          <button className="btn2">
            <h2>Cancel</h2>
          </button>
        </div>
        <div
          style={{ alignSelf: "center", marginRight: "3%", marginLeft: "3%" }}
        >
          <button className="btn1">
            <h2>Submit</h2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;

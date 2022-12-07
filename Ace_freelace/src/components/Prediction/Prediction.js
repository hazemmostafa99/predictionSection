import React, { useState } from "react";
import "./prediction.css";
const Prediction = () => {
  const [file, setFile] = useState(null);
  const handelChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div className="prediction">
      <div className="container">
        <div className="predictionLeft">
          <div className="circle"></div>
          <p className="desc">
            In Collaboration Universiti Teknologi Malaysia with Saudi German
            Hospital Cairo for <span>Diseases Prediction</span>
          </p>
          <ul className="icons">
            <li>
              <img src="assets/image3.png" alt="" />
            </li>
            <li>
              <img src="assets/image4.png" alt="" />
            </li>
            <li>
              <img src="assets/CATEGORY IVF.svg" alt="" />
            </li>
          </ul>
          <div className="select">
            <select id="select">
              <option selected disabled>
                choose disease
              </option>
              <option value="1">Disease 1</option>
              <option value="2">Disease 2</option>
              <option value="3">Disease 3</option>
            </select>
            <span className="focus"></span>
          </div>
          <div className="inputWraper">
            <input className="file" type="file" onChange={handelChange} />
          </div>
          <button>AI Prediction</button>

          <div className="predictionBottom">
            <p>Name: </p>
            <p>Prediction: </p>
            <p>Accuracy: </p>
          </div>
        </div>
        <div className="predictionRight">
          <div className="gradient-1"></div>
          <div className="gradient-2"></div>
          <div className="imageBox">
            {file ? (
              <img src={file} alt="" className="uploadedImg" />
            ) : (
              <h3 style={{fontSize : "50px"}}>No image</h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prediction;

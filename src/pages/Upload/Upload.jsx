import React, { useState } from "react";
import UploadedItem from "./uploaded-item";
import "./upload.css";
import fileIcon from "../../assets/images/excel.svg";
import { AiOutlineUpload } from "react-icons/ai";
import Papa from "papaparse";

function Upload() {
  const [dataProcess, setDataProcess] = useState(false);
  const [data, setData] = useState({});

  const handleFileUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    Papa.parse(file, {
      header: true,
      complete: (result) => {
        setData(result.data);
        setDataProcess(true);
      },
    });
  };

  return (
    <>
      <h2 className="upload-title">Upload CSV</h2>
      <div className="upload-container">
        <form className="dropzone-box">
          <div className="dropzone-area">
            <div className="file-upload-icon"></div>
            <img className="file-icon" src={fileIcon} />
            <p className="file-info">Upload your excel sheet here</p>
            <input type="file" name="uploaded-file" required accept=".csv" onChange={handleFileUpload}/>
            {dataProcess && <a href="#">Remove</a>}
          </div>

          <button className="upload-button" style={dataProcess ? { backgroundColor: "#645cfcc5", cursor: "default" } : {}}>
            <AiOutlineUpload style={{ width: "22px", height: "22px" }} /> Upload
          </button>
        </form>
      </div>
      {dataProcess ? <UploadedItem data={data} />
      : <p className="no-file">There is no file to display.</p>  
    }
    </>
  );
}

export default Upload;

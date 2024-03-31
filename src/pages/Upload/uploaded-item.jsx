import React, { useState } from "react";

const UploadedItem = ({ data }) => {
  const [selectedTags, setSelectedTags] = useState([]);

  return (
    <div className="table-content">
      <h2>Uploads</h2>
      <div className="table-content-container">
        <table>
          <thead>
            <th>Sl No.</th>
            <th>Links</th>
            <th>Prefix</th>
            <th>Add Tags</th>
            <th>Selected Tags</th>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>
                  <a href="#">{item.links}</a>
                </td>
                <td>{item.prefix}</td>
                <td>
                  <select className="select-tag">
                    {item["select tags"]?.split(", ").map((tag, index) => (
                      <option key={index} value={tag}>
                        {tag}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <span className="pill"></span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UploadedItem;

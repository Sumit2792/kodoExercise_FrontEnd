import React from "react";

const TableDataList = (props) => {
    return (
    <div className='row'>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Index</th>
                <th scope="col">Name </th>
                <th scope="col">Description</th>
                <th scope="col">Image</th>
                <th scope="col">Last Modified</th>
                </tr>
            </thead>
            <tbody>
      {
        props.rowsData.map((rowData, index) => (
            <tr key={index + 1 }>
                <th>{index + 1 }</th>
                <th>{rowData.name}</th>
                <th>{rowData.description}</th>
                <th><img src={rowData.image} alt ={rowData.name} className="img-responsive img-thumbnail"/></th>
                <th>{rowData.dateLastEdited}</th>
            </tr>
        ))
      }
      </tbody>
      </table>
      </div>
  );
    }

  export default TableDataList;
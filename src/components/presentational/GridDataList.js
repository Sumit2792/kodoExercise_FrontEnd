import React from "react";

const GridDataList = (props) => {
    if(props.loading){
        return <h2>Loading....</h2>;
    }

    return (
    <div className='row'>
      {
        props.rowsData.map((rowData, index) => (
            <div className= 'col-sm-12 col-md-6 col-lg-4' key={index}>
                <img src={rowData.image} alt ={rowData.name} className="img-responsive img-thumbnail"/>
                <hr></hr>
                <h3>{rowData.name}</h3>
                <p>{rowData.description}</p>
                <p>{rowData.dateLastEdited}</p>
            </div>
        ))
      }
    </div>
  );
    }

  export default GridDataList;
import React from 'react';
import { GridData, TableData } from './components/container';

class App extends React.Component {
  render (){
     return(
      <div className="container">
        <div className="row">
            {/* <SearchBar />
            <SortBar /> */}
          <hr></hr>
            <GridData />
          <hr></hr>
            <TableData />
        </div>
      </div>
    );
  }
}

export default App;
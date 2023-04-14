import React, { useState } from 'react'
import Spreadsheet from './components/Spreadsheet'
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from './Datasheet';


const rows = []
const positions = []

for (let i = 0; i < 10; i++) {
  rows.push({
    id: i,
    firstName: 'First name ' + i,
    secondName: 'Second name ' + i,
    positionId: 3,
    age: i,
  })
}

for (let i = 1; i < 6; i++) {
  positions.push({
    id: i,
    name: 'Long Position Name ' + i,
  })
}
const App = () => {
  return (<>
    <Spreadsheet />
    <DataTable rows={rows} focusOnSingleClick={true} isScrollable />
    </>
  );
}

export default App;

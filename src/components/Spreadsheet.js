import React, { useState ,useEffect} from 'react';
import Table from 'react-bootstrap/Table'
import Header from './Header'
import Cell from './Cell'

const Spreadsheet = () => {
    function generateArray(number) {
  const array = [];

  for (let i = 1; i <= number; i++) {
    array.push(i);
  }

  return array;
}
    const [column,setColumn] = useState([])
    useEffect(()=>{
        let a =generateArray(6);
        if(a!=null){
        console.log(a);
        setColumn(a);}
    },[])

    return (
        <Table bordered >
            <Header />
            <tbody >
                {column.map((number, idx) => (
                    <Cell
                        number={number}
                        idx={idx}
                        column={column} />
                )
                )}
            </tbody>
        </Table >
    )
}

export default Spreadsheet;
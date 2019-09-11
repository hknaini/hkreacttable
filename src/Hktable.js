import React, { Component } from 'react';


const TableRow = (props) =>{
   return props.keys.map((key, index)=>{
     return <td key={props.data[key]}>{props.data[key]}</td>
   // return <td key={props.data[key]}><input value={props.data[key]}></input></td>
   })
 }

class Hktable extends Component {
   constructor(props) {
      super(props) 
   }
 renderTableHeader() {
    let tableColName =  this.props.tableColumns;
    return tableColName.map((colName, index) => {
       return <th key={index}>{colName}</th>
    })
 }

 renderTableRows (){
   var items = this.props.tableData;
   var keys = this.getKeys();
   return items.map((row, index)=>{
     return <tr key={index}><TableRow key={index} data={row} keys={keys}/></tr>
   })
 }

 getKeys(){
   return Object.keys(this.props.tableData[0]);
 }

 

 render() {
   return (
     <div>
       <table className="hkreacttable">
       <thead>
         <tr>{this.renderTableHeader()}</tr>
       </thead>
       <tbody>
       {this.renderTableRows()}
       </tbody>
       </table>
     </div>
     
   );
}

 
}

export default Hktable
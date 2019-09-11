import React, { Component } from 'react';


const TableRow = (props) =>{
  
   return props.keys.map((key, index)=>{
     if (props.colTypes[index] == 'ip')
     {
      return <td key={props.data[key]}><input value={props.data[key]}></input></td>
     } else  if (props.colTypes[index] == 'txt'){
      return <td key={props.data[key]}>{props.data[key]}</td>
     }
     else  if (props.colTypes[index] == 'btn'){
      return <td key={props.data[key]}><button>{props.data[key]}</button></td>
     }else{
      return <td key={props.data[key]}>{props.data[key]}</td>
     }
   
   // 
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
   console.log(this.props)
   var items = this.props.tableData;
   var keys = this.getKeys();
   var colTypes = this.props.tableColumnTypes ;
   return items.map((row, index)=>{
     return <tr key={index}><TableRow key={index} data={row} keys={keys} colTypes={colTypes}/></tr>
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
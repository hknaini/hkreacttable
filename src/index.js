import Hktable from './hktable';
import React, { Component } from 'react';
class Hkreacttable extends Component {
    constructor(props) {
        super(props);
}
    
    render () {
       
        return (
            <div>
            <Hktable  
            tableData={this.props.tableData}
            tableColumns={this.props.tableColumns}
            tableColumnTypes={this.props.tableColumnTypes}
            ></Hktable>
            </div>
        );
    }
}

//export default Hktable2 ;
  module.exports={
    Hkreacttable
  } 
 

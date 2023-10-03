import React from "react";

const House = (props) => {

    if(!props.houseInfo){
        return <>Loding...</> 
    }

    //console.log(props.houseInfo);

    return ( 
        <React.Fragment>
            <div className="p-2">    
            <div className="row">
                <div className="col-6">
                    <p>{props.houseInfo.county}</p>
                </div>
                <div className="col-6">
                    <p>{props.houseInfo.price}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <img className='img-fluid' src={'/imgs/'+props.houseInfo.photo} alt="house"/>
                </div>
                <div className="col-6">
                    <p>{props.houseInfo.description}</p>
                </div>
            </div>
            </div>
        </React.Fragment>
     );
}
 
export default House;
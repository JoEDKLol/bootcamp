import React from "react";
import { useParams } from "react-router-dom";
import House from "./House";
const SearchedHouse = (props) => {

    let parmsObj = useParams();
    console.log(parmsObj.id);

    let house = props.houseinfo.filter((elem)=>{
        return elem._id == parmsObj.id
    })

    let searchedHousedObj = props.houseinfo.find((elem)=>{
        return elem._id == parmsObj.id
    })

    if(!searchedHousedObj){
        return <h1>loding...</h1>
    }else{
        //console.log(searchedHousedObj._id);
    }

    

    return ( 
        <React.Fragment>
            <div>
                <House houseinfo={house[0]}/>
            </div>
        </React.Fragment>
     );
}
 
export default SearchedHouse;
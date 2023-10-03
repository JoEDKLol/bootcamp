import { useParams } from "react-router-dom";
import House from "./House";

const  SearchHouse = (props) => {

    let parmsObj = useParams();

    //console.log("/SearchHouse:", parmsObj.id);

    let findHouse = props.houses.find((elem)=>{
        return elem._id = parmsObj.id;
    });

    console.log(typeof findHouse);

    if(typeof findHouse != 'undefined'){
         console.log(findHouse._id);
    }

    return ( 
        <>
            <House houseInfo={findHouse}/>
        </>
     );
}
 
export default  SearchHouse;
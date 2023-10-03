import React from "react";
import { useNavigate } from "react-router-dom";
const SearchRow = (props) => {

    let navigate = useNavigate();

    const tableClickHandler = (id) => {

        navigate('/searchHouse/' + id);


    }

    return ( 
        <React.Fragment>
            <tr key={props.elem._id} onClick={()=>tableClickHandler(props.elem._id)}>
            <td>{props.elem.address}</td>
            <td>{props.elem.price}</td>
            </tr>
        </React.Fragment>
     );
}
 
export default SearchRow;
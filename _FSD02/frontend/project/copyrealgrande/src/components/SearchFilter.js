import React from "react";
import { useNavigate } from "react-router-dom";
const SearchFilter = (props) => {

    const navigate = useNavigate();
   
    if(!props.houses[0]){
        return <>Loding...</>
    }

    //const dic = new Set([...props.houses.county]);

    const arr = props.houses.map((elem)=>{
        return elem.county

    })

    //console.log(dic);
    const dic = Array.from(new Set([...arr]));

    const onChangeHandler = (e) => {
        console.log(e.target.value);
        if(e.target.value !== 'Select'){
            navigate('/searchResult/'+e.target.value);      
        }else{
            navigate('/');
        }
        
    }



    return ( 
        <React.Fragment>
            <div className="text-center">
                
                <select onChange={(e) => onChangeHandler(e)}>
                <option>Select</option>
                {
                    dic.map((e)=>{    
                        return <option key={e} value={e}>{e}</option>
                    })
                }
                    
                
                </select>
            </div>
        </React.Fragment>
     );
}
 
export default SearchFilter;
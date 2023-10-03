import React from "react";
import { useParams } from "react-router-dom";
import SearchRow from "./SearchRow";
const SearchResult = (props) => {

    const paramObj = useParams('county');

    //console.log("county : " + paramObj.county );
    //console.log(props.houses);

    const resFilter = props.houses.filter(
        (elem)=>{
            return elem.county == paramObj.county;
        }
    );

    console.log(resFilter);


    return ( 
        <React.Fragment>
            <div className="table-responsive">
                <table className="table table-primary table-hover">
                    <thead>
                        <tr>
                            <th scope="col">address</th>
                            <th scope="col">price</th>
                      
                        </tr>
                    </thead>
                    <tbody>

                        {
                            resFilter.map((elem)=>{
                                return <SearchRow key={elem._id} elem={elem}/>         
                            })
                        }
                        
                        

                        
                        
                    </tbody>
                </table>
            </div>
            



        </React.Fragment>
     );
}
 
export default SearchResult;
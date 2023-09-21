import Card from "./Card";
import Data from "./data.json"

const Cards = () => {
    return ( 
        <div className="container">
            <h1>Hello from Mycards App!</h1>
            <div className="row">
            
            {
                Data.data.map(
                    (e,index)=>{
                        return(
                            <Card key={index} name={e.name} des={e.des} age={e.age}/>
                        )
                    }
                )
            }
        
            </div>
        </div>

     );
}
 
export default Cards;
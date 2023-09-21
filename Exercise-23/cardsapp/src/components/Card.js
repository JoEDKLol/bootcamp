const Card = (props) => {
    return ( 

        <div className="col-md-4 col-sm-6">
            <div className="card text-bg-primary mb-3" style={{maxWidth: 18 + 'rem'}}>
                <div className="card-header bg-info">{props.name}</div>
                <div className="card-body ">
                    <h5 className="card-title">{props.des}</h5>
                    <p className="card-text">{props.age}</p>
                </div>
            </div>
        </div>
     );
}
 
export default Card;


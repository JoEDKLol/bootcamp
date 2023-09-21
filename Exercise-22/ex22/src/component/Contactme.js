const Contactme = () => {
    return ( 

        <div className="div" style={{float: "left"}}>
            <form className="form" id="ctme" action="" method="">
                <p className="fw-bold pt-3 mb-1 fs-5">Submit the form below to contect me</p>

                <div className="mb-3 mt-4">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
                </div>
                <div className="div text-end">
                    <input className="btn btn-outline-primary " type="submit" value="submit"/>
                </div>

                
            </form>
        </div>

     );
}
 
export default Contactme;
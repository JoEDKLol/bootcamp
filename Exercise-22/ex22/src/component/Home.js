const Home = () => {
    return ( 

        <>
            <div className="bg-warining" style={{width: "70%",  float: 'left'}}>
                <p className="fs-1 pt-2 mb-1" style={{textAlign:"left"}}>DaeHee Kim</p>
                <p className="fs-5 mb-4" style={{textAlign:"left"}}>wibterflower@gmail.com</p>

                <hr className="my-2" style={{marginRight: "20px"}}/>

                <p className="fw-bold pt-3 mb-1 fs-5" style={{textAlign:"left"}}>Career Object</p>
                <p className="" style={{textAlign:"left"}}>Lorem  Quam tenetur necessitatibus amet minus nemo, quo nisi aliquid suscipit quisquam temporibus laudantium, qui error neque quaerat nam iusto ut. Molestiae, tenetur.</p>
            </div >

            <div  className="p-2" style={{width: "20%", float: "left"}} >
                  <img src="img/img2.jpg"  alt="..." className="rounded-circle" style={{border:"4px solid #541705", width:"220px" ,height:"220px"}}/><br/>
            </div>
        </>

     );
}
 
export default Home;
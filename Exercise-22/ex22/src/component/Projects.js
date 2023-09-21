const Projects = () => {
    return ( 

        <div  className="" style={{width: "100%", float: "left"}} >
            <hr className="my-2"/>
            <p className="fw-bold pt-3 mb-1 fs-5" id="pro" style={{textAlign:"left"}}>Projects</p>
            <div className="div m-3">
                <table className="table table-bordered " style={{textAlign:"left"}}>
                    <tbody>
                    <tr>
                        <th style={{width: "60%", backgroundColor: "rgb(128, 172, 158)"}}>Role</th>
                        <th style={{backgroundColor: "rgb(128, 172, 158)"}}>Duration</th>
                    </tr>
                    <tr>
                        <td style={{backgroundColor: "rgb(239, 233, 209)"}}>Software Developer</td>
                        <td style={{backgroundColor: "rgb(239, 233, 209)"}}>2009 to 2022</td>
                    </tr>
                    <tr>
                        <td style={{backgroundColor: "rgb(239, 233, 209)"}}>...</td>
                        <td style={{backgroundColor: "rgb(239, 233, 209)"}}>...</td>
                    </tr>
                    <tr>
                        <td style={{backgroundColor: "rgb(239, 233, 209)"}}>...</td>
                        <td style={{backgroundColor: "rgb(239, 233, 209)"}}>...</td>
                    </tr>
                    <tr>
                        <td style={{backgroundColor: "rgb(239, 233, 209)"}} colSpan="2">...</td>
                    </tr>
                    </tbody>
                </table>

                
            </div>
        </div>

     );
}
 
export default Projects;
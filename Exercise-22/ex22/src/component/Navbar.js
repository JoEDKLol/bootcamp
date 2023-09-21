let Navbar = () => {

    return(


        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: 'rgb(198, 100, 54)', color: 'aliceblue'}} >
          <div className="container">
            <a className="navbar-brand" href="#" style={{color: "aliceblue", fontSize: "medium"}} >
                <i className="bi-house-fill"> </i>
                About
            </a>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId" >
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item dropdown">
                        <a className="nav-link data-bs-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "rgb(194, 176, 176)"}}>
                            <i className="bi bi-list-task" style={{fontStyle: "normal"}}>Academics</i>
                        </a>


                        <ul className="dropdown-menu " aria-labelledby="navbarScrollingDropdown" style={{backgroundColor: "rgb(198, 100, 54)", color: "rgb(194, 176, 176)"}}>
                            <li><a className="dropdown-item fs-6 text-reset" href="#aca1">Academics1</a></li>
                            <li><a className="dropdown-item fs-6 text-reset" href="#aca2">Academics2</a></li>
                            <li><a className="dropdown-item fs-6 text-reset" href="#aca3">Academics3</a></li>
                        </ul>
                    </li>


                    <li className="nav-item dropdown">
                        <a className="nav-link data-bs-toggle" href="#" id="navbarScrollingDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "rgb(194, 176, 176)"}}>    
                            <i className="bi bi-list-task" style={{fontStyle: "normal"}}>Technical skills</i>
                        </a>

                        <ul className="dropdown-menu " aria-labelledby="navbarScrollingDropdown3" style={{backgroundColor: "rgb(198, 100, 54)", color: "rgb(194, 176, 176)"}}>
                            <li><a className="dropdown-item fs-6 text-reset" href="#tec1">Technical skills1</a></li>
                            <li><a className="dropdown-item fs-6 text-reset" href="#tec2">Technical skills2</a></li>
                            <li><a className="dropdown-item fs-6 text-reset" href="#tec3">Technical skills3</a></li>
                        </ul>

                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#pro" style={{color: "rgb(194, 176, 176)"}}>
                            <i className="bi bi-info-lg" style={{fontStyle: "normal"}}>Projects</i>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#ach" style={{color: "rgb(194, 176, 176)"}}>
                            <i className="bi bi-info-lg" style={{fontStyle: "normal"}}>Achievements</i>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#ctme" style={{color: "rgb(194, 176, 176)"}}>
                            <i className="bi bi-person-vcard-fill" style={{fontStyle: "normal"}}>Contact Me</i>
                        </a>
                    </li>

                </ul>
            </div>
      </div>
    </nav>



    );

}


export default Navbar
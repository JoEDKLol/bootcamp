import { useEffect, useState } from "react";

const Hsn = () => {

    const [hsnData, setHsnData] = useState([]);
    const [searchData, setSearchData] = useState({orderId:"", orderName:"", Products:[]});     //
    const [orderId, setOrderId] = useState("");

    const [starters, setStarters] = useState([]);
    const [mainCourses, setMainCourses] = useState([]);
    const [chooseData, setChooseData] = useState({productId:"", starters:"", mainCourses:""});
    
    const [showData, setShowData] = useState({});

    useEffect(()=>{    
        searchOrderId();
    },[hsnData])

    useEffect(()=>{    
        
        setShowData(chooseData);
        console.log(chooseData);

    },[chooseData])
    
    const searchOrderId = () => { 
        // console.log(orderId)
        // console.log(hsnData)
        const search = hsnData.find((elem)=>{
            return elem.orderId == orderId;
        });

        setSearchData(search);
    }
    
    const searchClickHandler = (e) => {

        setSearchData({orderId:"", orderName:"", Products:[]})
        setStarters([])
        setMainCourses([])
        setChooseData({productId:"", starters:"", mainCourses:""});
        const fetchData = async () => {
            const resp = await fetch('/hsn.json');
            const data = await resp.json();
            setHsnData(data);  
            
        };

        fetchData();
        
    }

    const inputOnChangeHandler = (e) => { 
        setOrderId(e.target.value);
    }

    const radioOnChangeHandler = (e) => {
        // setChooseData({productId:"", starters:"", mainCourses:""});
        let searchProduct = searchData.Products.find(elem=>{
            return elem.productId == e.target.value
        })
        setChooseData({productId:e.target.value, starters:"", mainCourses:""})
        setStarters(searchProduct.starters);
        setMainCourses(searchProduct.mainCourses);
    }

    const radioStartersChangeHandler = (e) => {
        setChooseData({...chooseData, starters:e.target.value})
    }

    const radioMainCourseChangeHandler = (e) => {
        setChooseData({...chooseData, mainCourses:e.target.value})
    }
    

    return ( 
        <> 
            <div className="m-5 d-flex">
                <input type="text" className="me-2" name="orderId" onChange={(e)=>inputOnChangeHandler(e)} list="orderList"/> <button type="button" className="btn btn-primary btn-sm" onClick={e => searchClickHandler(e)}>Primary</button>
                <datalist id="orderList">
                    <option value="11029019"></option>
                    <option value="11029021"></option>
                    <option value="11029022"></option>
                    <option value="11029024"></option>
                    <option value="11029025"></option>
                    <option value="11029026"></option>
            </datalist>
            </div>
            <div className="m-5">
                <p>{(typeof searchData != "undefined")?searchData.orderName:""}</p>
                <div>
                {(typeof searchData != "undefined")?
                    <div className="row">
                        <hr/>  
                        <div className="col-2">productId</div>
                    </div>:""
                }
                {
                    (typeof searchData != "undefined")?
                        // (searchData.Products.length > 0)?
                        // searchData.Products[0].productId
                        
                        searchData.Products.map((elem, index) => {
                            return (
                            <div key={index} className="row">
                                <div className="col-2">
                                    <input type="radio" onChange={e=>radioOnChangeHandler(e)} name="productId" value={elem.productId}/>{` `+ elem.productId}
                                </div>
                            </div>
                            )
                        }
                        )
                        
                    :''
                }
                {(starters.length > 0)?
                
                <div className="row">
                    <hr/>
                    <div className="col-6">starters</div>
                </div>:""
                }
                {
                    starters.map((elem, index)=>{
                        return (
                            <div key={index} className="row">
                                <div className="col-12">
                                    <input type="radio" onChange={e=>radioStartersChangeHandler(e)}  name="starters" value={elem}/>{` `+ elem}
                                </div>
                            </div>
                        )
                    })
                    
                }
                {(starters.length > 0)?
                <div className="row">
                    <hr/>
                    <div className="col-6">mainCourses</div>
                </div>:""
                }
                {
                    mainCourses.map((elem, index)=>{
                        return (
                            <div key={index} className="row">
                                <div className="col-12">
                                    <input type="radio" onChange={e=>radioMainCourseChangeHandler(e)} name="mainCourses" value={elem}/>{` `+ elem}
                                </div>
                            </div>
                        )
                    })
                    
                }
                {
                    (chooseData.productId && chooseData.starters && chooseData.mainCourses)?
                    <>
                        <hr/>
                        <div className="row">
                            <span className="">
                            productId:{chooseData.productId}
                            </span>
                            <span>
                            starters:{chooseData.starters}
                            </span>
                            <span>
                            mainCourses:{chooseData.mainCourses}
                            </span>
                        </div>
                    </>
                    :""

                }
                </div>
            </div>

        </>
     );
}
 
export default Hsn;
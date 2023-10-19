import { useState, useEffect } from 'react';
import './CompanySelector.css'


const CompanySelector = (props) => {
    const [userData, setUserData] = useState(null);
    const USERID = '65266a37ccc5e2fe0e1063b9'

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Load the inventoryQuantity data from the json file to the responseData Object
                const response = await fetch('/jsontest/user.json');
                const responseData = await response.json();
                console.log('responsedata:', responseData)

                // Write the data to the state
                setUserData(responseData);
            } catch (err) {
                console.log(err)
            }
        };

        fetchData();
    }, [])


    if (!userData) {
        return <p>Loading...</p>
    }

    // Get the companys of the given user
    const user = userData.find(data => data._id === USERID);
    console.log('compay', user)

    return <div className='company-select-box text-start mb-3'><select className='company-select font-weight-bold' onChange={props.onChange}>
        {user.companies_operator.map(data => <option key={data} defaultValue={data === props.selected ? 'selected' : ''} value={data}>{data}</option>)}
    </select></div>

}

export default CompanySelector;
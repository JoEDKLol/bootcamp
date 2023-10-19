import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Table from "../../Share/Table";
import Button from "../../Share/Button";

import './InventorySalesDetails.css'
import CompanySelector from "../../Share/CompanySeLector";

const InventorySalesDetails = () => {
    const tableHead = ['DATE', 'SKU', 'NAME', 'QUANTITY', 'INCOME']
    const [inventoryData, setInventoryData] = useState();
    const [SearchMode, setSearchMode] = useState(false);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [salesDataInPeriod, setSalesDataInPeriod] = useState();

    const navigate = useNavigate();

    // Get access to the company ID that's encoded in the URL
    const companyDataId = useParams().companyId;
    console.log('companyId', companyDataId)

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Load the inventoryQuantity data from the json file to the responseData Object
                const response = await fetch('/jsontest/inventoryQuantity.json');
                const responseData = await response.json();
                console.log('responsedata:', responseData)

                // Write the data to the state
                setInventoryData(responseData);
            } catch (err) {
                console.log(err)
            }
        };

        fetchData();
    }, [companyDataId])

    if (!inventoryData) {
        return <p>is Loading...</p>
    }



    // Get the data for a specify company
    const companySalesData = inventoryData.filter(data => data.company_id === companyDataId)
    console.log(companySalesData)

    // Get all the purchase data
    const salesData = companySalesData.filter(data => data.action === 'Reduce')

    // set the start date to the date input value
    const StartDateHandler = e => {
        e.preventDefault();
        setStartDate(e.target.value);
    }

    // set the end date to the date input value 
    const EndDateHandler = e => {
        e.preventDefault();
        setEndDate(e.target.value);
    }

    const clickHandler = (e) => {
        e.preventDefault();
        // Search mode will display the search data base on the period selected
        setSearchMode(true);

        // Handle situation when start date or end date is not selected
        // Need to use a local variable because the start date and end date will not re-render immediately
        let newStartDate = startDate;
        let newEndDate = endDate;

        // When the start date is not selected, set start date = end date
        if (!startDate && endDate) {
            newStartDate = endDate;

            // When the end date is not selected, set end date = start date
        } else if (!endDate && startDate) {
            newEndDate = startDate;

            // When start day and end date is not selected, set start day = end date = today
        } else if (!startDate && !endDate) {
            const today = new Date();
            newStartDate = today.toISOString().split('T')[0];
            newEndDate = today.toISOString().split('T')[0];

        }

        setStartDate(newStartDate);
        setEndDate(newEndDate);

        // ---------Needs modify ---------------
        // If endDate is smaller than the startDate,will show some err
        if (newStartDate > newEndDate) {
            alert('The end date should not earler than the start day')
        }


        // Get the data within the seleted period
        const salesDataPeriod = companySalesData.filter(data => {
            return data.action === 'Reduce' && data.date.slice(0, 10) >= newStartDate && data.date.slice(0, 10) <= newEndDate
        });
        setSalesDataInPeriod(salesDataPeriod);

    }

    const selectHandler = e => {
        // Navigate to another company
        console.log('selectworking')
        navigate(`/salesDetail/${e.target.value}`)
        setSearchMode(false);
        setStartDate(null);
        setEndDate(null);

    }


    return (
        <div>
            <CompanySelector onChange={e => selectHandler(e)} selected={companyDataId} />

            <div className="content-box period-box mb-5">
                <h2 className="report-title text-start">Sales Details</h2>
                <p className="text-start mb-1 mx-3">Search Period</p>
                <form className="period-search text-start pb-3">
                    <input type='date' className="start-date date-select mx-3" value={startDate || ''} onChange={e => StartDateHandler(e)}></input>
                    to
                    <input type='date' className="end-date date-select mx-3" value={endDate || ''} onChange={e => EndDateHandler(e)}></input>
                    <Button type='submit' buttonName='Search' onClick={e => clickHandler(e)}></Button>
                </form>
            </div>

            <div className='content-box table-box'>
                {!SearchMode && <Table tableHead={tableHead} tableData={salesData} />}
                {SearchMode && <Table tableHead={tableHead} tableData={salesDataInPeriod} />}
            </div>
        </div >
    )


}


export default InventorySalesDetails;
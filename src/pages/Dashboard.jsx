import React, { useEffect, useState } from 'react'
import Sidebar from '../component/Sidebar'
import Cards from '../component/Cards'
import axios from 'axios'
import BarGraph from '../component/BarGraph'

const Dashboard = () => {
    const API_URL="https://data.covid19india.org/v4/min/data.min.json";
   
    const [stateData, setStateData] = useState(null);
   
    
    const fetchData=async()=>{
        try {
             const {data}=await axios(API_URL);
            
           setStateData(data);
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(()=>{
        fetchData();
    },[])

  

  return (
    <div className='flex justify-between'>
        <Sidebar/>
        <div className='flex flex-col '>
            <Cards stateData={stateData}></Cards>
            <BarGraph/>
        </div>
        <div className='h-screen bg-gray-200 rounded-lg p-3 w-[300px] right-10 absolute'>
            <p>Live Update</p>
           
        </div>

    </div>
  )
}

export default Dashboard
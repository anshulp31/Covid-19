import React from 'react'

const Cards = ({stateData}) => {
    function getSum(total, num) {
        return total + Math.round(num);
    }
    let totalRecovered = 0;
    let totalConfirmed=0;
    let totalDeceased=0;

// Iterate over the outer object (states)
for (const state in stateData) {
  if (Object.hasOwnProperty.call(stateData, state)) {
    const stateRes = stateData[state];
    // Check if the state data contains the 'total' object
    if (stateRes.total && stateRes.total.recovered) {
      // Add the recovered value of the state to the totalRecovered variable
      totalRecovered += stateRes.total.recovered;
    }
    if (stateRes.total && stateRes.total.confirmed) {
        // Add the recovered value of the state to the totalRecovered variable
        totalConfirmed += stateRes.total.confirmed;
      }
      if (stateRes.total && stateRes.total.deceased) {
        // Add the recovered value of the state to the totalRecovered variable
        totalDeceased+= stateRes.total.deceased;
      }
  }
}
const options = {  maximumFractionDigits: 2   }   
const formattedRecovered = Intl.NumberFormat("en-US",options).format(totalRecovered);
const formattedConfirmed = Intl.NumberFormat("en-US",options).format(totalConfirmed);
const formattedDeceased = Intl.NumberFormat("en-US",options).format(totalDeceased);




      
        return (
          <div className="flex  gap-10 left-28 absolute">
            <div className="bg-gray-200 w-64 h-44 p-4 rounded-md shadow-md ">

              <h1 className='text-2xl mt-24 font-bold text-blue-500'>{formattedConfirmed}</h1>
              <p className='font-bold text-lg text-gray-700'  >Cases</p>
            </div>
            <div className="bg-gray-200 w-64 h-44 p-4 rounded-md shadow-md  ">
              <h1 className='text-2xl mt-24 font-bold text-red-500'>{formattedDeceased}</h1>
              <p className='font-bold text-lg text-gray-700'>Death</p>
            </div>
            <div className="bg-gray-200 w-64 h-44 p-4 rounded-md shadow-md  ">
              <h1 className='text-2xl mt-24 font-bold text-green-500'>{formattedRecovered}</h1>
              <p className='font-bold text-lg text-gray-700'>Recovered</p>
            </div>
          </div>
        );

      
     
}

export default Cards
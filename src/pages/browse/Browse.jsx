import React from 'react'
import "./browse.css"
import { useEffect, useState } from "react"

export const Browse = () => {

    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        fetch("./../../components/customerOrders/ordersData.json")
            .then((response) => response.json())
            .then((data) => setJsonData(data))
            .catch((error) => console.error("Error fetching data : " + error), []);

    })

    return (
        <div className='browse-container'>
            {jsonData.map((item, index) => (
                <productCard key={index} data={item} />
            ))}

        </div>
    )
}

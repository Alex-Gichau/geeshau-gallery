import React, { useEffect, useState } from 'react'
import "./orders.css"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import data from "./ordersData.json"

export const Orders = () => {
  // const [ordersData, setOrdersData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('./ordersData.json');
  //     const data = await response.json();
  //     setOrdersData(data);
  //   };

  //   fetchData();
  // }, []);

  const ordersData = data.data;

  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseonHover: true,
    centerPadding: "60px"
  };

  return (
    <div className="order-container">
      <Slider {...settings}>
        {ordersData.map((order, id) => (
        <div className="client-order" key={id}>
          <img src={order.image} alt="" className="client-logo" />
          <div className="order-details">
            <h1 className="client-name">{order.name}</h1>
            <p className="client-desc">{order.request}</p>
            <span className="order-date">{order.orderDate}</span>
          </div>
        </div>
        ))}
      </Slider>
    </div>
  )
};
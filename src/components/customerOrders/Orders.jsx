import React from 'react'
import "./orders.css"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export const Orders = () => {

  const settings = {
    className:"center",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseonHover:true,
    centerPadding:"60px"
  };

  return (
    <div className="order-container">
      <Slider {...settings}>
        <div className="client-order">
          <img src="https://www.salesforce.com/content/dam/web/en_us/www/images/resource-center/article-what-Is-customer-service.jpg" alt="" className="client-logo" />
          <div className="order-details">
            <h1 className="client-name">Just In Faith</h1>
            <p className="client-desc">
              I need 100 business cards and a social media poster for an event taking place this weekend at PCEA Juja Township Church. When can you deliver and how much does it cost?
            </p>
            <span className="order-date">2 months ago</span>
          </div>
        </div>

        <div className="client-order">
          <img src="https://www.salesforce.com/content/dam/web/en_us/www/images/resource-center/article-what-Is-customer-service.jpg" alt="" className="client-logo" />
          <div className="order-details">
            <h1 className="client-name">Just In Faith</h1>
            <p className="client-desc">
              I need 100 business cards and a social media poster for an event taking place this weekend at PCEA Juja Township Church. When can you deliver and how much does it cost?
            </p>
            <span className="order-date">2 months ago</span>
          </div>
        </div>

        <div className="client-order">
          <img src="https://www.salesforce.com/content/dam/web/en_us/www/images/resource-center/article-what-Is-customer-service.jpg" alt="" className="client-logo" />
          <div className="order-details">
            <h1 className="client-name">Just In Faith</h1>
            <p className="client-desc">
              I need 100 business cards and a social media poster for an event taking place this weekend at PCEA Juja Township Church. When can you deliver and how much does it cost?
            </p>
            <span className="order-date">2 months ago</span>
          </div>
        </div>

        <div className="client-order">
          <img src="https://www.salesforce.com/content/dam/web/en_us/www/images/resource-center/article-what-Is-customer-service.jpg" alt="" className="client-logo" />
          <div className="order-details">
            <h1 className="client-name">Just In Faith</h1>
            <p className="client-desc">
              I need 100 business cards and a social media poster for an event taking place this weekend at PCEA Juja Township Church. When can you deliver and how much does it cost?
            </p>
            <span className="order-date">2 months ago</span>
          </div>
        </div>

        <div className="client-order">
          <img src="https://www.salesforce.com/content/dam/web/en_us/www/images/resource-center/article-what-Is-customer-service.jpg" alt="" className="client-logo" />
          <div className="order-details">
            <h1 className="client-name">Just In Faith</h1>
            <p className="client-desc">
              I need 100 business cards and a social media poster for an event taking place this weekend at PCEA Juja Township Church. When can you deliver and how much does it cost?
            </p>
            <span className="order-date">2 months ago</span>
          </div>
        </div>

        <div className="client-order">
          <img src="https://www.salesforce.com/content/dam/web/en_us/www/images/resource-center/article-what-Is-customer-service.jpg" alt="" className="client-logo" />
          <div className="order-details">
            <h1 className="client-name">Just In Faith</h1>
            <p className="client-desc">
              I need 100 business cards and a social media poster for an event taking place this weekend at PCEA Juja Township Church. When can you deliver and how much does it cost?
            </p>
            <span className="order-date">2 months ago</span>
          </div>
        </div>

        <div className="client-order">
          <img src="https://www.salesforce.com/content/dam/web/en_us/www/images/resource-center/article-what-Is-customer-service.jpg" alt="" className="client-logo" />
          <div className="order-details">
            <h1 className="client-name">Just In Faith</h1>
            <p className="client-desc">
              I need 100 business cards and a social media poster for an event taking place this weekend at PCEA Juja Township Church. When can you deliver and how much does it cost?
            </p>
            <span className="order-date">2 months ago</span>
          </div>
        </div>

        <div className="client-order">
          <img src="https://www.salesforce.com/content/dam/web/en_us/www/images/resource-center/article-what-Is-customer-service.jpg" alt="" className="client-logo" />
          <div className="order-details">
            <h1 className="client-name">Just In Faith</h1>
            <p className="client-desc">
              I need 100 business cards and a social media poster for an event taking place this weekend at PCEA Juja Township Church. When can you deliver and how much does it cost?
            </p>
            <span className="order-date">2 months ago</span>
          </div>
        </div>

        <div className="client-order">
          <img src="https://www.salesforce.com/content/dam/web/en_us/www/images/resource-center/article-what-Is-customer-service.jpg" alt="" className="client-logo" />
          <div className="order-details">
            <h1 className="client-name">Just In Faith</h1>
            <p className="client-desc">
              I need 100 business cards and a social media poster for an event taking place this weekend at PCEA Juja Township Church. When can you deliver and how much does it cost?
            </p>
            <span className="order-date">2 months ago</span>
          </div>
        </div>

      </Slider>
    </div>
  )
}

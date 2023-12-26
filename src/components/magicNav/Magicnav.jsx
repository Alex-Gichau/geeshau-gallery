import React, { useState } from 'react'
import "./magicnav.css"

export const Magicnav = () => {
  const Menus = [
    {name:"Home", icon:"home"},
    {name:"Gallery", icon:"albums-outline"},
    {name:"Downloads", icon:"download-outline"},
    {name:"WhatsApp", icon:"logo-whatsapp"},
    {name:"Links", icon:"share-outline"}
  ]

  const [active, setActive] = useState(0)
  return (
    <div className='nav-container'>
      <ul>
        {
          Menus.map((menu,i) => (
            <li key={i}>{active}
              <a onClick={() => setActive(i)}>
                <span className={`${i === active && "-mt-6"}`}>
                  <ion-icon name={menu.icon}></ion-icon>
                </span>
                <span className={`${active === i}`}>{menu.name}</span>
              </a>
            </li>
          ))
        }
        
      </ul>
    </div>
  )
} 
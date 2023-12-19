import React from 'react'
import "./magicnav.css"

export const Magicnav = () => {
  return (
    <div className='navigation'>
      <ul>
        <li className="listActive">
          <a href="#"><span className='materials-symbolics-outlined'>person</span></a>
        </li>
        <li className="listActive">
          <a href="#"><span className='materials-symbolics-outlined'>person</span></a>
        </li>
        <li className="listActive">
          <a href="#"><span className='materials-symbolics-outlined'>person</span></a>
        </li>
        <li className="listActive">
          <a href="#"><span className='materials-symbolics-outlined'>person</span></a>
        </li>
        <li className="listActive">
          <a href="#"><span className='materials-symbolics-outlined'>person</span></a>
        </li>
        <li className="listActive">
          <a href="#"><span className='materials-symbolics-outlined'>person</span></a>
        </li>
        <div className="indicator"></div>
      </ul>
    </div>
  )
}

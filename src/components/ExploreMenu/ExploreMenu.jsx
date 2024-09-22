import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      {/* <p className='explore-menu-text'>From savory snacks to indulgent desserts, we have something to satisfy every craving. Whether you're in the mood for a quick bite or a full meal, our diverse selection of dishes is crafted to please every palate.</p> */}
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            // what this line means
            <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className="explore-menu-list-item">
              <img className={category===item.menu_name ? "active": ""} src= {item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu

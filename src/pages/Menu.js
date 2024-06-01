import React from 'react'
import {MenuList} from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css"
import Multiple from "../assets/vertical-shot-sea-with-cliffs-background.jpg";
function Menu() {
  return (
    <div className='menu' style={{ backgroundImage: `url(${Multiple})` }}>
      <h1 className='menuTitle'>Discover our most beautiful places</h1>
      <div className='menuList'>
      {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
            key={key}
            image={menuItem.image}
            name={menuItem.name}
            price={menuItem.price}
          />
        );
      })}
      </div>
      </div>
  )
}

export default Menu;
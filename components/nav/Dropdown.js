import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
// import '../../styles/Dropdown.css';
import { Link } from 'react-router-dom';
import { useRouter } from 'next/router'


function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const router = useRouter()

  const viewCoinDetails = () => {
    router.push(
      '/currencies/Safemoon',
    )
  }

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => {
          if(item.title.match("SafeMoon_1996")){
            return (
              <li key={index}>
                <a
                  className={item.cName}
                  to={item.path}
                  onClick={viewCoinDetails}
                >
                  SafeMoon 1996
                </a>
              </li>
            );
          }
          else{
            return (
              <li key={index}>
                <a
                  className={item.cName}
                  to={item.path}
                  onClick={() => setClick(false)}
                >
                  {item.title}
                </a>
              </li>
            );
          }
         
        })}
      </ul>
    </>
  );
}

export default Dropdown;

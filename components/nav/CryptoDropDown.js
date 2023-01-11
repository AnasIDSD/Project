import React, { useState } from 'react';
import { CryptoCurrencyitems } from './CryptoCurrencyitems';
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
        {CryptoCurrencyitems.map((item, index) => {
          if(item.title.match("SafeMoon_1996")){
            return (
              <li key={index}>
                <a
                  className={item.cName}
                  to={item.path}
                  onClick={viewCoinDetails}
                >
                  SafeMoon_1996
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

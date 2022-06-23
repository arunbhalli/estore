import React from 'react';
import '../componenets/_topMenu.scss';
const Menu = ['Home', 'Men', 'Women', 'Kids', 'Best Seller'];
const TopMenu = () => {
  return (
    <>
      <header className='menuHeader'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xl-12 col-lg-12'>
              <nav className='menu'>
                <ul>
                  {Menu.map((item, index) => (
                    <li key={index}>
                      <a href='#'>{item}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default TopMenu;

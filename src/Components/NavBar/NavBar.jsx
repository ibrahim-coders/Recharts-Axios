import { useState } from 'react';
import Links from '../Links/Links';
import { IoMdMenu } from 'react-icons/io';
import { LuPlus } from 'react-icons/lu';

const NavBar = () => {
  const apiRoutes = [
    { id: 1, name: 'Home', path: '/home' },
    { id: 2, name: 'Products', path: '/products' },
    { id: 3, name: 'Product Details', path: '/product/:id' },
    { id: 4, name: 'Cart', path: '/cart' },
    { id: 5, name: 'Checkout', path: '/checkout' },
  ];

  const [open, setOpen] = useState(false);

  return (
    <nav className="">
      <div className="text-2xl md:hidden " onClick={() => setOpen(!open)}>
        {open === true ? <LuPlus /> : <IoMdMenu></IoMdMenu>}
      </div>
      <ul
        className={`md:flex absolute gap-4 duration-1000  ${
          open ? 'top-25 duration-5000' : ' top-[-100%] '
        } bg-red-500 mt-8 flex-col py-8`}
      >
        {apiRoutes.map(routes => (
          <Links key={routes.id} routes={routes}></Links>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

"use client"
import React, { useState } from 'react';

const SideNavbar = () => {
  const [dropdowns, setDropdowns] = useState<any>({
    product: false,
    job: false,
  });

  const toggleDropdown = (dropdown:any) => {
    setDropdowns((prevState:any):any => ({
      ...prevState,
      [dropdown]: !prevState[dropdown]
    }));
  };
      
  return (
    <div className="h-screen bg-[#eff1f4] text-black w-full  hidden md:hidden lg:flex lg:flex-col justify-between">
    <div className="h-full bg-[#eff1f4] text-black w-full flex flex-col justify-between">
      <div className="p-4">
        <ul className="mt-4">
          <li className="py-2 hover:bg-gray-200 cursor-pointer">
            Dashboard
          </li>
          <li className="py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => toggleDropdown('product')}
          >
            Product Management
            {dropdowns.product && (
              <ul className="ml-4 bg-slate-300"  >
                <li className="py-2 hover:bg-sky-300 cursor-pointer">
                  Add Products
                </li>
                <li className="py-2 hover:bg-sky-300 cursor-pointer">
                  View Products
                </li>
              </ul>
            )}
          </li>
          <li className="py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => toggleDropdown('job')}
          >
            Job Management
            {dropdowns.job && (
              <ul className="ml-4  bg-slate-300">
                <li className="py-2 hover:bg-sky-300 cursor-pointer">
                  Add Job
                </li>
                <li className="py-2 hover:bg-sky-300 cursor-pointer">
                  View Job
                </li>
              </ul>
            )}
          </li>
          {/* Removed dropdown for Personal Management */}
          <li className="py-2 hover:bg-gray-200 cursor-pointer">
            Personal Management
          </li>
        </ul>
      </div>
      <div className="p-4">
        {/* Additional content if needed */}
      </div>
    </div>
    </div>
<<<<<<< HEAD

=======
>>>>>>> e13a69ded1f16bdf4fe772aa9e8133564f1e1d88
  );
};

export default SideNavbar;

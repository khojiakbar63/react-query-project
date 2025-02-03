import React, { useState } from "react";
import { NavLink, Outlet } from "react-router";

const App = () => {

  const [active, setActive] = useState(false)
  
  return (
    <div className="">
      <div className="px-5 bg-orange-300 h-[80px] flex items-center justify-between">
        <h1 className="text-2xl font-bold text-indigo-600">Logo</h1>
        <ul className="flex gap-[20px] font-bold text-white text-2xl">
          <NavLink className='border-b-2 border-transparent' to={"/"}>Home</NavLink>
          <NavLink className='border-b-2 border-transparent' to={"/users"}>Users</NavLink>
          <NavLink className='border-b-2 border-transparent' to={"/posts"}>Posts</NavLink>
        </ul>

      </div>

        <div className="bg-slate-200 min-h-screen mx-auto">{<Outlet />}</div>
    </div>
  );
};

export default App;

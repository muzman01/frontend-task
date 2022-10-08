import React, { useState } from 'react'
import {HiMenuAlt2} from "react-icons/hi"
import { Link, useNavigate } from 'react-router-dom'
import { SideBarDataDark } from './SideBarData';
import {BiLogOutCircle } from "react-icons/bi"
import { useDispatch } from "react-redux";
import Cookies from 'js-cookie';

function SideBar() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [open,setOpen] = useState(false)
	const handleLogOut = () => {
		dispatch({ type: "LOGOUT", payload: "" });
		Cookies.set("user", JSON.stringify(""));

		navigate("/");
	}
  return (
    <section className='flex gap-6'>
		<div className={`bg-white min-h-screen ${open ? "w-64":"w-16"} duration-500 text-blue-800 px-4`}>
			<div className={`py-4 flex  justify-start ${open ? "px-9":""} duration-500`}>
				<HiMenuAlt2 size={26} className="cursor-pointer" onClick={()=>setOpen(!open)} />
			</div>
			<div className='text-black mt-9 flex flex-col gap-4 relative px-9'>
			{SideBarDataDark.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      <Link href={item.path}>
                        <a>
                        
                          <span style={{transitionDelay:`${index+3}0ms`}} className={`${open ? "":"hidden"}`}>{item.title}</span>
						  {item.altItem && open ? (<>
							<li className='flex flex-col ml-5 mt-4'>
								<span className=' text-blue-900  duration-500 font-semibold '>{item.altItem.item1}</span>
								<span className=' text-blue-400  duration-500 font-light mt-2'>{item.altItem.item2}</span>
							</li>
						  </>):(<></>)}
                        </a>
                      </Link>
                    </li>
                  );
                })}
			</div>
			<div className={`py-4 flex ${open ? "px-9":""} duration-500 justify-start bottom-0 fixed text-red-600`} onClick={handleLogOut}>
				<BiLogOutCircle size={26} className="cursor-pointer" />
				<span className={`${open ? "ml-4":"opacity-0"}`}>Log Out</span>
			</div>
		</div>
    </section>
  )
}

export default SideBar
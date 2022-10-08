import React,{useContext} from 'react'
import SideBar from '../components/sidebar/SideBar'
import HomeMidle from '../components/middle/HomeMidle'
import RigthBar from '../components/rigthbar/RigthBar'
import { DataContext } from '../reducers/GlobalState';

function Home() {
  const { state, dispatch } = useContext(DataContext);
  const { data } = state;
  console.log(data.title);
  return (
    <div className='w-full flex justify-between h-full'>
      <SideBar />
      <HomeMidle />
     {data.title ? <RigthBar /> :""}
    </div>
  )
}

export default Home
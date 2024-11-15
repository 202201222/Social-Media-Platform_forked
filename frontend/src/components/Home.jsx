import React from 'react';
import Feed from './feed'; 
import { Outlet } from 'react-router-dom';
import RightSidebar from './RightSidebar';
import useGetAllPost from 'src/hooks/useGetAllPost';
import useGetSuggestedUsers from 'src/hooks/useGetSuggestedUsers';

const Home = () =>{
    useGetAllPost();
    useGetSuggestedUsers();
    return(
        <div className='flex'>
            <div className='flex-grow'>
                <Feed />
                <Outlet />
            </div>
         <RightSidebar/>  
        </div>
    )
}

export default Home;
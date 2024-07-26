import Chat from '@/components/chat'
import ChatList from '@/components/chatList'
import Jobform from '@/components/jobForm'
import React from 'react'

const Page = () => {
  return (
    <>
     <div className="w-full p-3 h-screen  grid grid-cols-4 grid-rows-[auto_1fr_1fr] gap-1">
   <div className="w-full max-h-[542px]  row-span-2 overflow-y-hidden"><ChatList/></div>
  <div className=" w-full h-screen  font-bold col-span-3 row-span-2"> <Chat/></div>
    </div>
 
    </>
  )
}

export default Page

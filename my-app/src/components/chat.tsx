import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"


function XIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
function UserIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}


const Chat = () => {
  return (
    <>
       <div className=" w-full h-full  dark:bg-gray-800  dark:border-gray-700">
        <Card className="w-full h-auto rounded-none">
          <CardContent className="   min-h-[480px] overflow-y-auto">
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="grid gap-1 items-start text-sm">
                  <div className="flex items-center gap-2">
                    <div className="font-bold">Customer</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">2:39pm</div>
                  </div>
                  <div>
                    <p>Hi, I have a question about one of the products.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row-reverse items-start gap-4">
                <div className="grid gap-1 items-start text-sm">
                  <div className="flex items-center gap-2">
                    <div className="font-bold">Admin</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">2:40pm</div>
                  </div>
                  <div>
                    <p>Sure, how can I assist you?</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="  ">
            <form className="flex items-center gap-2 w-full">
              <Input type="text" placeholder="Type your message..." className="flex-1" />
              <Button type="submit">Send</Button>
            </form>
          </CardFooter>
        </Card>
        </div>
    </>
  )
}

export default Chat
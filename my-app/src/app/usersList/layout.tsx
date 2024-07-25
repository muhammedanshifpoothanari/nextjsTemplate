import SideNavbar from "@/components/SideNavbar";
import Topnav from "@/components/topnav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body > 
      <>
      
            <div className="w-full h-auto  grid grid-cols-4 grid-rows-[auto_1fr_1fr] gap-0">
                <div className="col-span-4"><Topnav/></div>
                <div className="row-span-2"><SideNavbar/></div>
<<<<<<< HEAD:my-app/src/app/dashboard/layout.tsx
                <div className=" col-span-3 row-span-2">{children}</div>
=======
                <div className=" text-black font-bold  col-span-3 row-span-2">{children}</div>
>>>>>>> 9851073131612ebe393ff7e3656fdbf3c5ee96f1:my-app/src/app/usersList/layout.tsx
            </div>
        </></body>
    </html>
  );
}


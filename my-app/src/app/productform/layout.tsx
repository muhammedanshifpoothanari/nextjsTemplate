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
      
<<<<<<<< HEAD:my-app/src/app/jobsList/layout.tsx
            <div className="w-full h-auto  grid grid-cols-4 grid-rows-[auto_1fr_1fr] gap-0">
                <div className="col-span-4"><Topnav/></div>
                <div className="row-span-2"><SideNavbar/></div>
                <div className=" text-black font-bold  col-span-3 row-span-2">{children}</div>
========
            <div className="w-full h-350px bg-white grid grid-cols-4 grid-rows-[auto_1fr_1fr] gap-0">
                <div className="col-span-4"><Topnav/></div>
                <div className="row-span-2"><SideNavbar/></div>
                <div className=" col-span-3 row-span-2">{children}</div>
>>>>>>>> f866ab56562dae590cce4a70e4a60ccbf909e3ec:my-app/src/app/productform/layout.tsx
            </div>
        </></body>
    </html>
  );
}

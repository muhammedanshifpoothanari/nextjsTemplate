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
      
            <div className="w-full h-350px bg-white grid grid-cols-4 grid-rows-[auto_1fr_1fr] gap-0">
                <div className="col-span-4"><Topnav/></div>
                <div className="row-span-2"><SideNavbar/></div>
                <div className=" col-span-3 row-span-2">{children}</div>
            </div>
        </></body>
    </html>
  );
}




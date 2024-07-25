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
            <div className="w-full h-screen bg-gray-400 grid grid-cols-4 grid-rows-[auto_1fr_1fr] gap-0">
                <div className=" text-white font-bold  col-span-4"><Topnav/></div>
                <div className="bg-red-500 text-white font-bold p-5 row-span-2">side</div>
                <div className="bg-yellow-500 text-white font-bold p-5 col-span-3 row-span-2">{children}</div>
            </div>
        </></body>
    </html>
  );
}


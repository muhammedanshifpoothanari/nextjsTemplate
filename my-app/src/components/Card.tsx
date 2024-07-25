"use client"
import React from 'react';
import { BarChart, Bar, CartesianGrid, LineChart, Line, XAxis, Tooltip } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from './ui/chart';
import { Label } from './ui/label';

const Card = ({ title }: any) => {
  return (
    <div className='w-40 h-20 bg-blue-600 flex items-center justify-center rounded-lg shadow-xl transform hover:scale-105 transition duration-300 max-h-[900px] h- overflow-y-auto'>
      <span className="text-white text-center text-sm">{title}</span>
    </div>
  );
};

const CardList = () => {
  // Example data array
  const cardsData = [
    { id: 1, title: 'Student Count' },
    { id: 2, title: 'Corporate Count' },
    { id: 3, title: 'Mentor Count' },
    { id: 4, title: 'Employees Count' },
    { id: 5, title: 'Intern Count' },
  ];

  return (
    <>
      <div className="flex justify-between mx-4 mt-4">
        {cardsData.map(card => (
          <Card key={card.id} title={card.title} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-4 mt-4">
        <div className="grid gap-2">
          <Label htmlFor="user-metrics">User Metrics</Label>
          <BarchartChart className="w-full md:w-auto aspect-[4/3]" />
        </div>
        <div className='grid gap-2'>
        <div className=' max-h-[360px]' style={{display:'flex' ,flexDirection:'column',justifyContent:'space-between', alignItems:'space-between', gap: '10px'}}>
          <div>
          <Label htmlFor="user-activity">User Activity 1</Label>
          </div>
          <LinechartChart1 className="w-full md:w-auto aspect-[4/3]" />
          <div>
          <Label htmlFor="user-activity">User Activity 2</Label>
          </div>
          <LinechartChart2 className="w-full md:w-auto aspect-[4/3]" />

        </div>
        </div>
       
      </div>
    </>
  );
};

const BarchartChart = (props: any) => {
  return (
    <div {...props} className="bg-white rounded-lg shadow-md p-4 flex align-center justify-center" style={{ paddingRight: '10px' }}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
        className='h-[350px] w-[300px]'
      >
        <BarChart
         
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

const LinechartChart1 = (props: any) => {
  return (
    <div {...props} className="bg-white rounded-lg shadow-md p-4 flex align-center justify-center h-[155px] w-[440px]" style={{ paddingRight: '10px' }}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}        
        className="max-h-[200px] w-[300px]"

      >
        <LineChart
          width={30} 
          height={30}
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Line dataKey="desktop" type="natural" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
        </LineChart>
      </ChartContainer>
    </div>
  );
};


const LinechartChart2 = (props: any) => {
    return (
      <div {...props} className="bg-white rounded-lg shadow-md p-4 flex align-center justify-center max-h-[170px] w-[440px]" style={{ paddingRight: '10px' }}>
        <ChartContainer
          config={{
            desktop: {
              label: "Desktop",
              color: "hsl(var(--chart-1))",
            },
          }}        
          className="max-h-[155px] w-[300px]"
  
        >
          <LineChart
            width={30} 
            height={30}
            data={[
              { month: "January", desktop: 186 },
              { month: "February", desktop: 305 },
              { month: "March", desktop: 237 },
              { month: "April", desktop: 73 },
              { month: "May", desktop: 209 },
              { month: "June", desktop: 214 },
            ]}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Line dataKey="desktop" type="natural" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
          </LineChart>
        </ChartContainer>
      </div>
    );
  };
export default CardList;

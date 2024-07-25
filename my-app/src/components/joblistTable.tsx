import React from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Image from 'next/image';
import { jobList } from './userData';
import { ScrollArea, ScrollBar } from './ui/scroll-area';

const JoblistTable = () => {
    return (
        <ScrollArea
            className='p-5 h-[480px] '
            style={{
                scrollbarWidth: 'none',  // Firefox
                msOverflowStyle: 'none'  // IE and Edge
            }}
        >
                            <ScrollBar orientation="horizontal" /> 

            <Table>
                <TableCaption>A list of job positions.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Type</TableHead>
                        <TableHead className="w-[100px]">Field of Study</TableHead>
                        <TableHead>Job Title</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Activities</TableHead>
                        <TableHead>Skills</TableHead>
                        <TableHead>Soft Skills</TableHead>
                        <TableHead>Core Values</TableHead>
                        <TableHead>Personality</TableHead>
                        <TableHead>EQ</TableHead>
                        <TableHead>IQ</TableHead>
                        <TableHead>Salary Range</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {jobList.map((job, index) => (
                        <TableRow key={index}>
                            <TableCell>{job.type}</TableCell>
                            <TableCell>{job.fieldOfStudy}</TableCell>
                            <TableCell>{job.jobTitle}</TableCell>
                            <TableCell>{job.description}</TableCell>
                            <TableCell>{job.Activities}</TableCell>
                            <TableCell>{job.skills}</TableCell>
                            <TableCell>{job.softSkills}</TableCell>
                            <TableCell>{job.coreValues}</TableCell>
                            <TableCell>{job.personality}</TableCell>
                            <TableCell>{job.eQ}</TableCell>
                            <TableCell>{job.iQ}</TableCell>
                            <TableCell>{job.salaryRange}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    {/* You can add footer content here */}
                </TableFooter>
            </Table>
        </ScrollArea>
    );
}

export default JoblistTable;

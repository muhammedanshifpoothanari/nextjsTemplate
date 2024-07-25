import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Image from 'next/image'
import { users } from './userData'




const UsersTable = () => {
    return (
        <>
            <div className='p-5 h-[500px] overflow-y-auto   '
                style={{
                    scrollbarWidth: 'none',  // Firefox
                    msOverflowStyle: 'none'  // IE and Edge
                }}
            >
                <Table >
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Avatar</TableHead>
                            <TableHead className="w-[100px]">Name</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Phone</TableHead>
                            <TableHead className="">Email</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.map((user, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <Image
                                        alt='avatar'
                                        src={user.avatarSrc}
                                        width={50}
                                        height={50}
                                    />
                                </TableCell>
                                <TableCell className="font-medium">{user.name}</TableCell>
                                <TableCell>{user.role}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell className="">{user.email}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                    </TableFooter>
                </Table>
            </div>
        </>
    )
}

export default UsersTable

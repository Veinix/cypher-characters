import { UserModel, guestUser } from "@/Models/UserModel"
import React from 'react'
import Link from "next/link"

interface UserInfoProps {
    user?: UserModel
}

function UserInfo({ user }: UserInfoProps) {
    return (
        <>
            <div className="flex justify-center items-center">
                {user ?
                    <span> {user.username} </span>
                    :
                    <span> {guestUser.username} </span>}
            </div>
        </>
    )
}

function Navbar() {
    return (
        <ul className="flex gap-5">
            <Link href="/">
                <li className="p-2 hover:bg-indigo-300 rounded">
                    {/* <img src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/home.svg" className="w-7 sm:mx-2 mx-4 inline" /> */}
                    <span className="hidden sm:inline">Home</span>
                </li>
            </Link>

            <Link href="/editor">
                <li className="p-2 hover:bg-indigo-300 rounded">
                    {/* <img src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/home.svg" className="w-7 sm:mx-2 mx-4 inline" /> */}
                    <span className="hidden sm:inline">Character Creator</span>
                </li>
            </Link>

            <Link href="/sheet">
                <li className="p-2 hover:bg-indigo-300 rounded">
                    {/* <img src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/home.svg" className="w-7 sm:mx-2 mx-4 inline" /> */}
                    <span className="hidden sm:inline">Character Sheet</span>
                </li>
            </Link>
        </ul>
    )
}

function Header() {
    return (
        <div className="flex bg-indigo-800 text-white py-2 px-3">
            <div className="flex flex-grow-[2]">
                <Navbar />
            </div>
            <div className="flex flex-end px-5">
                <UserInfo />
            </div>
        </div>
    )
}

export default Header
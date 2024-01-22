import { UserModel, guestUser } from "@/Models/UserModel"
import React from 'react'
import Link from "next/link"
import Image from "next/image"
import homeIcon from "@/Assets/Icons/home-icon.webp"
import characterSheetIcon from "@/Assets/Icons/charactersheet-icon.webp"
import characterCreatorIcon from "@/Assets/Icons/charactercreator-icon.webp"

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
                    <Image src={homeIcon} className="w-7 sm:mx-2 mx-4 inline" alt="Home" />
                    <span className="hidden sm:inline">Home</span>
                </li>
            </Link>

            <Link href="/">
                <li className="p-2 hover:bg-indigo-300 rounded">
                    <Image src={characterCreatorIcon} className="w-7 sm:mx-2 mx-4 inline" alt="Character Creator" />
                    <span className="hidden sm:inline">Character Creator</span>
                </li>
            </Link>

            <Link href="/sheet">
                <li className="p-2 hover:bg-indigo-300 rounded">
                    <Image src={characterSheetIcon} className="w-7 sm:mx-2 mx-4 inline" alt="Character Sheet" />
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
'use client'

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { LogoutAlert } from "./LogoutAlert";

const Navbar = () => {

    const { data: season, isPending } = authClient.useSession();
    // console.log(season?.user)
    const user = season?.user;


    return (

        // <div className="navbar bg-base-100 text-black shadow-sm">
        //     <div className="navbar-start">
        //         <div className="dropdown">
        //             <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        //                 <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
        //             </div>
        //             <ul
        //                 tabIndex={-1}
        //                 className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        //                 <li><Link href={'/'}>Home</Link></li>
        //                 <li><Link href={'/destinatios'}>Destinations</Link></li>
        //                 <li><Link href={'/add-destination'}>Add Destination</Link></li>
        //                 <li><Link href={'/my-bookings'}>My Bookings</Link></li>
        //             </ul>
        //         </div>
        //     </div>
        //     <div className="navbar-center">
        //         <a className="btn btn-ghost text-xl">daisyUI</a>
        //     </div>
        //     <div className="navbar-end">
        //         <button className="btn btn-ghost btn-circle">
        //             <svg aria-label="Search" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
        //         </button>
        //         <button className="btn btn-ghost btn-circle">
        //             <div className="indicator">
        //                 <svg aria-label="Notifications" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
        //                 <span className="badge badge-xs badge-primary indicator-item"></span>
        //             </div>
        //         </button>
        //     </div>
        // </div>

        <div className="flex justify-between m-3">



            <div className="dropdown lg:hidden">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                </div>
                <ul
                    tabIndex={-1}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/destinatios'}>Destinations</Link></li>
                    <li><Link href={'/add-destination'}>Add Destination</Link></li>
                    <li><Link href={'/my-bookings'}>My Bookings</Link></li>
                </ul>
            </div>

            <ul
                className="lg:flex gap-2 p-2 hidden lg:block">
                <li><Link className="btn p-1 h-5 font-normal hover:text-blue-300 border-none"  href={'/'}>Home</Link></li>
                <li><Link className="btn p-1 h-5 font-normal hover:text-blue-300 border-none" href={'/destinatios'}>Destinations</Link></li>
                <li><Link className="btn p-1 h-5 font-normal hover:text-blue-300 border-none" href={'/add-destination'}>Add Destination</Link></li>
                <li><Link className="btn p-1 h-5 font-normal hover:text-blue-300 border-none" href={'/my-bookings'}>My Bookings</Link></li>
            </ul>

            <div className="">
                <Image className="h-auto w-auto"
                    src={'/assets/Wanderlast.png'}
                    height={50}
                    width={200}
                    alt="logo"
                ></Image>
            </div>

            <ul className="flex items-center gap-3">

                {/* <li><Link href={'/profile'}>Profile</Link></li> */}

                {isPending ? <h1>Loading...</h1>
                    : season ?
                        <>
                            <li>
                                <Avatar>
                                    <Avatar.Image
                                        referrerPolicy="no-referrer"
                                        alt="Blue"
                                        src={user?.image}
                                    />
                                    <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                                </Avatar>
                            </li>
                            <li>
                                <LogoutAlert />
                            </li>
                        </> :
                        <>
                            <li><Link className="btn rounded-none bg-blue-400 text-white" href={'/login'}>Login</Link></li>
                            <li><Link className="btn rounded-none" href={'/signin'}>Signup</Link></li>
                        </>
                }
            </ul>

        </div>
    );
};

export default Navbar;
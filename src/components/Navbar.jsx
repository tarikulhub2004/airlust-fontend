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
        <div className="flex justify-between m-3">
            <ul className="flex gap-3">
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/destinatios'}>Destinations</Link></li>
                <li><Link href={'/add-destination'}>Add Destination</Link></li>
                <li><Link href={'/my-bookings'}>My Bookings</Link></li>
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
                            <li><Link href={'/login'}>Login</Link></li>
                            <li><Link href={'/signin'}>Signup</Link></li>
                        </>
                }
            </ul>

        </div>
    );
};

export default Navbar;
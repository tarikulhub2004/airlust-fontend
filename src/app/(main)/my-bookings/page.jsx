
export const instant = false;


import { AlertDeleteBooking } from "@/components/AlertDeleteBooking";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { LuEye } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";

const MyBookingSPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    // console.log(session?.user)

    const { token } = auth.api.getToken({
        headers: await headers()
    })

    const { id } = session.user;

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    const data = await res.json();
    // console.log(data)

    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl">My Booking</h1>
            {
                data.length === 0 ?
                    <div className="my-5">
                        <div className="flex flex-col items-center justify-center py-20 px-6 text-center bg-base-100 rounded-2xl border border-dashed border-gray-300">

                            <div className="text-6xl mb-4">🌍</div>

                            <h2 className="text-2xl md:text-3xl font-bold">
                                No Bookings Yet!
                            </h2>

                            <p className="text-gray-500 mt-3 max-w-md">
                                You haven't booked any destinations yet.
                                Explore amazing places and start your next adventure!
                            </p>

                            <Link href="/destinatios" className="btn btn-primary mt-6 rounded-none">
                                Explore Destinations
                            </Link>

                        </div>
                    </div> :
                    <div className="">
                        {
                            data.map(booking => <div key={booking._id}>
                                <div className="p-5 my-5 shadow md:flex">
                                    <Image className="w-90 h-auto" src={booking?.imageUrl} width={400} height={200} alt="Image"></Image>
                                    <div className="ml-5 w-full">
                                        <div className=" pt-3 flex flex-col gap-3 ">
                                            <h1 className="text-3xl font-bold">{booking?.country}</h1>
                                            <h4> Departure: {new Date(booking?.departureDate).toLocaleDateString(
                                                "en-US", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric"
                                            }
                                            )}</h4>
                                            <h4>Booking ID: {booking?.userId}</h4>

                                        </div>
                                        <div className="md:flex justify-between items-center">
                                            <h1 className="text-3xl text-[#15A1BF] mt-5">${booking?.price}</h1>
                                            <div className="flex gap-3">

                                                <AlertDeleteBooking bookingId={booking._id}></AlertDeleteBooking>

                                                <Button variant="outline" className={'rounded-none bg-[#15a1bf] text-white'}><LuEye /> View</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
            }
        </div>
    );
};

export default MyBookingSPage;
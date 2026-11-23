"use client"
import { authClient } from "@/lib/auth-client";
import { Card, DateField, Label } from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";

const BuyNowCard = ({ destination }) => {

    const { data: season } = authClient.useSession();
    const user = season?.user;
    // console.log(user)

    const [departureDate, setDepartureDate] = useState(null)
    // console.log(new Date(departureDate))

    const { _id, destinationName, country, category, price, duration, imageUrl, description } = destination;

    const handleBooking = async () => {

        if (!user) {
            toast.error("You are not a user")
            return;
        }

        const bookingData = {
            userId: user?.id,
            userImage: user?.image,
            destinationId: _id,
            userName: user?.name,
            price,
            imageUrl,
            country,
            departureDate: new Date(departureDate)
        }
        // console.log(bookingData)

        const { data: tokenData }= await authClient.token()
        console.log(tokenData)

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization:`Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(bookingData)
        })
        const data = await res.json();
        // console.log(data)
        toast.success(`${destinationName} booking is Success`)
    }

    return (
        <div>
            <Card className="col-span-1 rounded-none">
                <div className="">
                    <div className="">
                        <p>Starting from</p>
                        <p className="text-2xl text-cyan-500">${price}</p>
                        <p>per person</p>
                    </div>
                    <hr className="my-3 text-gray-200" />
                    {/* <div > */}
                    <DateField onChange={setDepartureDate} className="" name="date">
                        <Label>Date</Label>
                        <DateField.Group className={'gap-1 bg-[#F8FAFC] p-2 border rounded-none'}>
                            <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                        </DateField.Group>
                    </DateField>
                    {/* </div> */}

                    <div className="">
                        <button onClick={handleBooking} className="text-2xl cursor-pointer bg-cyan-500 hover:bg-cyan-700 active:bg-cyan-950 w-full my-5 p-2 text-white">Buy Now</button>
                    </div>
                    <div className="text-zinc-500">
                        <p>Free cancellation up to 7 days</p>
                        <p>Travel insurance included</p>
                        <p>24/7 customer support</p>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default BuyNowCard;
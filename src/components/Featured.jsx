

import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendar } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import FeaturedCard from "./FeaturedCard";
import { ArrowRight } from "@gravity-ui/icons";



const Featured = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`)
    const data = await res.json()
    // console.log(data)

    // const { _id, destinationName, country, category, price, duration, departureDate, imageUrl, description } = data;


    return (
        <div className="max-w-7xl mx-auto mt-10">
            <div className="flex justify-between items-center">
                <div className="">
                    <h1 className="text-5xl">Featured Destinations</h1>
                    <p className="text-gray-700">Handpicked travel experiences for the adventure seekers</p>
                </div>

                <Link href={'/destinatios'}><Button variant="outline" className="rounded-none text-blue-500">ALL  DESTINATIONS <ArrowRight className="mb-2" /></Button></Link>

            </div>
            <div className="grid md:grid-cols-4 gap-5 ">
                {
                    data.map(cardData => <FeaturedCard data={cardData} key={cardData._id} />)
                }
            </div>
            <div className="my-10 flex mx-auto">
                <div className="join flex mx-auto join-vertical bg-base-100">
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title font-semibold">How do I create an account?</div>
                        <div className="collapse-content text-sm">This Feature is coming soon.</div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
                         <div className="collapse-content text-sm">This Feature is coming soon.</div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title font-semibold">How do I update my profile information?</div>
                         <div className="collapse-content text-sm">This Feature is coming soon.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
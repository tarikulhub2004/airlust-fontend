export const instant = false;
import BuyNowCard from "@/components/BuyNowCard";
import { DeleteAlert } from "@/components/DeleteAlert";
import { EditModal } from "@/components/EditModal";
import { auth } from "@/lib/auth";
import { Card } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";
import { LuMapPin } from "react-icons/lu";

const DestinationDetailsPage = async ({ params }) => {
    const { id } = await params;
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    // console.log(token)

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })

    if (!res.ok) {
        notFound()
    }
    const destination = await res.json()

    const { _id, destinationName, country, category, price, duration, departureDate, imageUrl, description } = destination;



    return (
        <div className="max-w-7xl mx-auto my-5">
            <div className="flex justify-between">
                <Link href={'/destinations'}><div className="flex items-center text-zinc-500"><BiArrowBack />Back to Destinations</div></Link>
                <div className="flex gap-2">
                    <EditModal destination={destination}></EditModal>
                    <DeleteAlert destination={destination} />
                </div>
            </div>

            <Image className="w-full h-120 object-cover my-3"
                alt={destinationName}
                src={imageUrl}
                width={800}
                height={400}
            />

            <hr className="text-gray-50 my-5" />

            <div className="grid md:grid-cols-3 gap-5">
                <div className="col-span-2">
                    <div className="flex items-center gap-1"> <LuMapPin /><span>{country}</span></div>
                    <h1 className="mt-5 text-2xl font-bold">Overview</h1>
                    <p className="text-zinc-500">{description}</p>
                    <h1 className="mt-5 text-2xl font-bold">Highlights</h1>
                    <p className="text-zinc-500">{description}</p>
                </div>

                <BuyNowCard destination={destination}></BuyNowCard>

            </div>

        </div>
    );
};

export default DestinationDetailsPage;
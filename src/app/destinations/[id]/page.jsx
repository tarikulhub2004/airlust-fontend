export const instant = false;
import { DeleteAlert } from "@/components/DeleteAlert";
import { EditModal } from "@/components/EditModal";
import { Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";
import { LuMapPin } from "react-icons/lu";

const DestinationDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(`http://localhost:5000/destination/${id}`)

    if(!res.ok){
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

            <div className="grid grid-cols-3 gap-5">
                <div className="col-span-2">
                    <div className="flex items-center gap-1"> <LuMapPin /><span>{country}</span></div>
                    <h1 className="mt-5 text-2xl font-bold">Overview</h1>
                    <p className="text-zinc-500">{description}</p>
                    <h1 className="mt-5 text-2xl font-bold">Highlights</h1>
                    <p className="text-zinc-500">{description}</p>
                </div>

                <Card className="col-span-1">
                    <div className="">
                        <div className="">
                            <p>Starting from</p>
                            <p className="text-2xl text-cyan-500">${price}</p>
                            <p>per person</p>
                        </div>
                        <hr className="my-3 text-gray-200" />
                        <div className="flex items-center gap-1 bg-[#F8FAFC] p-2 border">{departureDate}</div>

                        <div className="">
                            <button className="text-2xl cursor-pointer bg-cyan-500 hover:bg-cyan-700 active:bg-cyan-950 w-full my-5 p-2 text-white">Buy Now</button>
                        </div>
                        <div className="text-zinc-500">
                            <p>Free cancellation up to 7 days</p>
                            <p>Travel insurance included</p>
                            <p>24/7 customer support</p>
                        </div>
                    </div>
                </Card>
            </div>

        </div>
    );
};

export default DestinationDetailsPage;
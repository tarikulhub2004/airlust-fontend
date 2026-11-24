import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendar } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { LuMapPin } from "react-icons/lu";

const FeaturedCard = ({ data }) => {
    const { _id, destinationName, country, category, price, duration, departureDate, imageUrl, description } = data;

    return (
        <div className="my-3">

                <div>
                    <Image className="h-40 object-cover"
                        alt={destinationName}
                        src={imageUrl}
                        width={400}
                        height={400}
                    />
                    <div className="">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1"> <LuMapPin /><span>{country}</span></div> <p className="text-2xl font-bold">${price}</p>
                        </div>
                        <div className="">
                            <h2 className="text-xl font-semibold">{destinationName}</h2>
                        </div>
                        <div className="flex items-center gap-1"><FaRegCalendar /> {departureDate}</div>
                    </div>
                    <Link href={`/destinatios/${_id}`}><Button variant="ghost" className='text-cyan-500 flex items-center'>Book Now <FiExternalLink /></Button></Link>
                </div>
            
        </div>
    );
};

export default FeaturedCard;
export const instant = false;
import DestinationCard from "@/components/DestinationCard";
import { Suspense } from "react";

const DestinationsPage = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`)
    const destinations = await res.json()

    // console.log(destinations)

    return (
        <div className="max-w-7xl mx-auto my-3">
            <h1>All Destinations</h1>
            <div className="grid md:grid-cols-4 gap-5">
                <Suspense fallback={<p className="text-2xl">Loading...</p>}>
                    {
                        destinations.map(destination =>
                            <DestinationCard key={destination._id} destination={destination}></DestinationCard>
                        )
                    }
                </Suspense>
            </div>
        </div>
    );
};

export default DestinationsPage;
'use client';

import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Card } from "@heroui/react";
import toast from "react-hot-toast";


const ProfilePage = () => {

    const {
        data: session,
        isPending,
        error,
    } = authClient.useSession()

    console.log(session?.user)
    const user = session?.user;

    const handleBtn = () => {
        toast("This function is not now available")
    }

    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl">My Profile</h1>
            <div className="p-5 flex justify-center items-center text-center">
                <Card className="w-100 rounded-none">
                    {
                        isPending ?
                            <span className="loading loading-spinner loading-xs mx-auto h-15"></span>
                            :
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-center">
                                    <Avatar>
                                        <Avatar.Image alt={user?.name} src={user?.image} />
                                        <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                                    </Avatar>
                                </div>
                                <h1 className="text-xl">{user?.name}</h1>
                                <h1>{user?.email}</h1>
                                <hr className="text-gray-300 my-5" />
                                <Button onClick={handleBtn} variant="outline" className="w-full h-10 rounded-none bg-cyan-500 mt-3 text-white">Edit Profile</Button>
                            </div>
                    }
                </Card>
            </div>
        </div >
    );
};

export default ProfilePage;
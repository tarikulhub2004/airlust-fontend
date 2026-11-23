"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { RiDeleteBin6Line } from "react-icons/ri";

export function AlertDeleteBooking({ bookingId }) {


    const handleCancelBooking = async () => {
        const { data: tokenData } = await authClient.token()
        
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${bookingId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                // authorization:`Bearer ${tokenData}`
            }
        })
        const data = await res.json();
        // console.log(data);
        toast.success("Cancel this Booking")
        redirect("/my-bookings")
    }

    return (
        <AlertDialog>
            <Button variant="outline" className={'rounded-none text-red-600'}><RiDeleteBin6Line /> Cancel</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Sure! Are you Cancel your Booking?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>

                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                No
                            </Button>
                            <Button onClick={handleCancelBooking} slot="close" variant="danger">
                                Yes
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}
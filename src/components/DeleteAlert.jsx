"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from "react-toastify";

export function DeleteAlert({ destination }) {
    const { destinationName, _id } = destination;

    const handleDelete = async () => {

        const { data: tokenData } = await authClient.token();
        // console.log(tokenData)

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${_id}`,
            {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${tokenData?.token}`
                }
            }
        )
        const data = await res.json()
        toast.success(`Delete ${destinationName} Destination Successfully`)
        redirect('/destinatios')
    }

    return (
        <AlertDialog>
            <Button className="border bg-white rounded-none border-red-600 active:bg-red-950 px-3 text-red-600 py-1 flex cursor-pointer hover:bg-red-600 hover:text-white items-center gap-1" variant="danger"><RiDeleteBinLine className="mb-2" /> Delete</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        ,
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>{destinationName}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button className='rounded-none' slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} className='rounded-none' slot="close" variant="danger"><RiDeleteBinLine className="mb-2" />
                                Delete Destination
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}
"use client";

import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { RiDeleteBinLine } from "react-icons/ri";

export function DeleteAlert({ destination }) {
    const { destinationName, _id } = destination;

    const handleDelete = async () => {
        const res = await fetch(`http://localhost:5000/destination/${_id}`,
            {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            }
        )
        const data = await res.json()
        redirect('/destinations')
        console.log(data)
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
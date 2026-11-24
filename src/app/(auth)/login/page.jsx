"use client";


import { authClient } from "@/lib/auth-client";
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const LoginPage = () => {

    const loginAccount = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        console.log(formData)

        const user = Object.fromEntries(formData.entries());
        // console.log(user)

        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password
        })
        // console.log(data, error)
        if (data) {
            toast.success("Login Successfully")
            redirect('/')
        }
        else {
            // toast.error(error?.message)
        }
    }
    const handleGoogleSignin = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    }

    return (
        <div className="max-w-7xl mx-auto h-[50vh] my-auto">
            <div className="text-center">
                <h1 className="text-4xl">Login Account</h1>
                <h4 className="text-xl text-gray-500">Start your adventure with Wanderlust</h4>
            </div>
            <Card className="rounded-none mt-5">
                <Form onSubmit={loginAccount} className="flex w-96 flex-col gap-4">


                    {/* Email */}
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input className='rounded-none' placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    {/* Password */}
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                    // validate={(value) => {
                    //     if (value.length < 8) {
                    //         return "Password must be at least 8 characters";
                    //     }
                    //     if (!/[A-Z]/.test(value)) {
                    //         return "Password must contain at least one uppercase letter";
                    //     }
                    //     if (!/[0-9]/.test(value)) {
                    //         return "Password must contain at least one number";
                    //     }
                    //     return null;
                    // }}
                    >
                        <Label>Password</Label>
                        <Input className='rounded-none' placeholder="Enter your password" />
                        {/* <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description> */}
                        <FieldError />
                    </TextField>
                    <div className="gap-2">
                        <Button className='w-full rounded-none bg-[#15A1BF]' type="submit">
                            Login
                        </Button>
                    </div>
                </Form>
                <p>I have don't any account? <span className="text-red-500"><Link href={'signin'}>Register</Link></span></p>
                <div className="flex justify-center gap-1 items-center">
                    <hr className="w-full" />
                    <h1 className="w-full"> Or Sign Up with</h1>
                    <hr className="w-full" />
                </div>
                <Button onClick={handleGoogleSignin} className={'w-full rounded-none'} variant="outline"><FcGoogle className="mb-1" /> Sign in with Google</Button>
            </Card>

        </div>
    );
};

export default LoginPage;
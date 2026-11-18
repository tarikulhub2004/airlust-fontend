import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="flex justify-between m-3">
            <ul className="flex gap-3">
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/destinations'}>Destinations</Link></li>
                <li><Link href={'/add-destination'}>Add Destination</Link></li>
                <li><Link href={'/my-bookings'}>My Bookings</Link></li>
            </ul>

            <div className="">
                <Image
                    src={'/assets/Wanderlast.png'}
                    height={50}
                    width={200}
                    alt="logo"
                ></Image>
            </div>

            <ul className="flex gap-3">
                <li><Link href={'/profile'}>Profile</Link></li>
                <li><Link href={'/login'}>Log in</Link></li>
                <li><Link href={'/signin'}>Sign Up</Link></li>
            </ul>

        </div>
    );
};

export default Navbar;
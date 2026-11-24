export const instant = false


import Banner from "@/components/Banner";
import Featured from "@/components/Featured";


export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      {/* <h1 className="text-3xl text-center">Home page</h1> */}
      <Featured></Featured>
    </div>
  );
}

import Image from "next/image";
import Navbar from "../components/Navbar";
import Notification from "../components/Notification";
import Showcase from "../components/Showcase";

function HomePage() {
  return (
    <>
      <Navbar />
      <Notification />
      <Showcase />
      {/* <div className="underline text-4xl">Welcome From Tailwind Css Test </div> */}
    </>
  );
}

export default HomePage;

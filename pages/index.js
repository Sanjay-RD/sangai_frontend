import Image from "next/image";
import Navbar from "../components/Navbar";
import Notification from "../components/Notification";

function HomePage() {
  return (
    <>
      <Navbar />
      <Notification />
      <div className="underline text-4xl">Welcome From Tailwind Css Test </div>
    </>
  );
}

export default HomePage;

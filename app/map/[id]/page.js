import Image from "next/image";
import Home from "@/public/home.png";
export default function Page({ params }) {
  return (
    <section className="flex flex-col items-center justify-center w-full">
      <Image
        src={Home}
        alt="map"
        width="1920"
        height="1080"
        className="object-cover w-full h-full overflow-scroll"
      />
    </section>
  );
}

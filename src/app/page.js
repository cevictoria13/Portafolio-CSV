import Card from "./components/Card";
import { Image } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="grid grid-cols-2 justify-center items-center h-screen sm:px-20 xl:px-80">
      <div className="flex justify-center">
        <Image
          
          width={300}
          alt="NextUI hero Image"
          src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
        />
      </div>
      <Card />
    </div>
  );
}



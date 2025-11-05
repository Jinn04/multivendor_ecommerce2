import ThemToggle from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-5">
      <div className="w-100 flex justify-end"></div>
      <ThemToggle/>
      <h1 className="fon-bold text-blue-500 font-barlow">
        Welcome In GoShop
        </h1>
        <Button variant="destructive">Click here</Button>
    </div>
  );
}

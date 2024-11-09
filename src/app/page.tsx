import GJCLeftSideBar from "@/components/gjc/gjcLeftSideBar";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <GJCLeftSideBar />
    <main className="pt-36 pl-72">
      <Link className="border border-green-500 p-3 rounded-lg hover:bg-gray-200/50" href="/settings">Go to Settings Now...</Link>
    </main>
    </>
  );
}

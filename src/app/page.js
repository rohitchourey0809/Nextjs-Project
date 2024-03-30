import Image from "next/image";
import About from "./about/page";
import Dashboard from "./dashboard/page";
import Link from "next/link";
import DataTable from "@/component/Datatable";

export default function Home() {
  return (
    <main className="Home bg-red-500 border-white w-100 border">
      <nav className="Nav bg-light nav p-6 flex justify-between">
        <Link href="/about">
          <About />
        </Link>
        <Link href="/dashboard">
          <Dashboard />
        </Link>

        {/* <Link></Link>
        <Link></Link> */}
      </nav>
      <section className="bg-light p-2 flex justify-between">
        <DataTable />
      </section>
    </main>
  );
}

import Header from "@/components/layout/header";
import Sidebar from "./sidebar";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

interface Props {
  children: React.ReactNode;
}
export default function AppLayout(props: Props) {
  return (
    <div
      style={montserrat.style}
      className="h-screen overflow-hidden bg-primary-800 flex text-white"
    >
      <div className="w-300 h-screen">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Header />
        <main className="overflow-auto px-24">{props.children}</main>
      </div>
    </div>
  );
}

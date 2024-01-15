import Sidebar from "@/components/sidebar"
import Link from "next/link"


export default function Page2() {
    return (
        <div>
   <Sidebar pageStyle2="!text-black bg-lightBlue border-none" />
    <Link href="/"> retour vers page 1 </Link>
    </div>
    )
  }




import Link from "next/link"




export default function BtnFooter ({btnTextBack,btnTextNext,linkBack,linkNext}) { 
    return (
        <div className="flex justify-between mt-4 mr-4">
            <Link href={linkBack}>{btnTextBack}</Link>
            <Link href={linkNext} className="rounded p-3 text-white bg-marineBlue md:mt-[4em] ">{btnTextNext}</Link>
        </div>
    )
}
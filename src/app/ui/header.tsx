import Image from "next/image";
import Link from "next/link";
import React from "react";
import DesktopHeader from "./desktopheader";
import MobileHeader from "./mobileheader";

export default function Header() {
    return (
        <header className="text-white bg-blue-700 text-center py-[10px] mb-[10px] lg:flex flex-row">
            <div className="flex flex-row">
                <Image
                    src="/images/logoSMK2.png"
                    width={75}
                    height={75}
                    alt="Logo SMK Negeri 2 Tabanan"
                    className="m-2"
                />
                <Link href="/" className="text-xl my-auto m-2">
                    <h1>Duta Cafetaria</h1>
                </Link>
                <MobileHeader/>
            </div>
            <DesktopHeader/>
        </header>
    )
}
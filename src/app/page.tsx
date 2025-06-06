"use client";

import { Button } from "@mui/material";
import MenuCarousel from "./ui/carousel";
import Link from "next/link";
import { useEffect } from "react";

const useRegisterServiceWorker = () => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/firebase-messaging-sw.js")
        .then((registration) => {
          console.log("Service Worker registered:", registration);
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
    }
  }, []);
};

export default function Home() {

useRegisterServiceWorker();

  return (
      <main className="text-center">
      <p className="mb-4">
        Selamat datang di website resmi 
        <br/> 
        Unit Produksi SMK Negeri 2 Tabanan,
      </p>
      <p className="mb-4">
        Dimana makanan, minuman, dan peralatan sekolah dijual oleh siswa, untuk siswa! Kami juga menyediakan jasa print dokumen.
      </p>
      <p>
        Berikut adalah menu tetap di Duta Cafetaria;
      </p>
      <MenuCarousel />
      <div>
        <p className="mb-4">Ingin</p>
        <p className="mb-4">Cek <Link href="/menuhariini"><Button variant="contained">menu hari ini</Button></Link>, atau <Link href="/pesan"><Button variant="contained">Memesan</Button></Link>?</p>
        <p className="mb-4">Kami buka dari jam 7:30 sampai 15:00, Senin - Jumat.</p>
      </div>
      </main>
  );
}

import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Layout from "./Layout";
import Gallery from "./gallery";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const router = useRouter();
  const session = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/signin");
    },
  });

  return (
    <div className="p-8">
      <Layout>
        <Gallery />
      </Layout>
      {/* <button className="text-black" onClick={() => signOut()}>
        Logout
      </button> */}
    </div>
  );
}

Home.requireAuth = true;

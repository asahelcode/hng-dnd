import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import {onAuthStateChanged} from "firebase/auth";
import {useEffect} from 'react'
import {auth} from "../firebase";
import Layout from "./Layout";
import Gallery from "./gallery";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/signin");
      }
    })
  }, [router])

  return (
    <div className="p-8">
      <Layout>
        <Gallery />
      </Layout>
    </div>
  );
}

Home.requireAuth = true;

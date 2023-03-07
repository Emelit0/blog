import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>
              <Link href="/posts">Posts</Link>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

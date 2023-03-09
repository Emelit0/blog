import { Inter } from "next/font/google";
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
            <td>side</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

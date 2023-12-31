import GetData1 from "./components/GetData1";
import PostData1 from "./components/PostData1";
import GetData2 from "./components/GetData2";
import PostData2 from "./components/PostData2";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <PostData1 /> */}
      {/* <GetData1 /> */}
      {/* <GetData2 /> */}
      <PostData2 />
    </main>
  )
}

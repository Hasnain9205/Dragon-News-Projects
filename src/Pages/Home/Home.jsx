
import Head from "../Shared/Head/Head";
import Header from "../Shared/Header/Header";
import LeftSideVar from "../Shared/LeftSideVar/LeftSideVar";
import Navbar from "../Shared/Navbar/Navbar";
import RightSidevar from "../Shared/RightSidevar/RightSidevar";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

export default function Home() {
    const news =useLoaderData();
    return(
    <div>

        <Head></Head>
      <Header></Header>
      <Navbar></Navbar>

      <div className="grid md:grid-cols-4 gap-6 text-center mt-10">
        <div>
            <LeftSideVar></LeftSideVar>
        </div>
        <div className="md:col-span-2 space-y-6">
        <h1 className="text-2xl font-semibold text-start">Dragon News Home</h1>
            {
                news.map(aNews=><NewsCard key={aNews._id} news={aNews}></NewsCard>)
            }
        </div>
        <div>
          <RightSidevar></RightSidevar>
        </div>
      </div>
    </div>
  )
}

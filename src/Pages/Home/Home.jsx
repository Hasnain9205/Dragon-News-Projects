import Head from "../Shared/Head/Head";
import Header from "../Shared/Header/Header";
import LeftSideVar from "../Shared/LeftSideVar/LeftSideVar";
import MainSideVar from "../Shared/MainSideVar/MainSideVar";
import Navbar from "../Shared/Navbar/Navbar";
import RightSidevar from "../Shared/RightSidevar/RightSidevar";

export default function Home() {
  return (
    <div>

        <Head></Head>
      <Header></Header>
      <Navbar></Navbar>

      <div className="grid md:grid-cols-4 gap-6 text-center mt-10">
        <div>
            <LeftSideVar></LeftSideVar>
        </div>
        <div className="md:col-span-2 border-2">
            <MainSideVar></MainSideVar>
        </div>
        <div>
          <RightSidevar></RightSidevar>
        </div>
      </div>
    </div>
  )
}

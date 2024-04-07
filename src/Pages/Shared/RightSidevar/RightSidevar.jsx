import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

export default function RightSidevar() {
  return (
    <div>
      <div className="space-y-4">
        <h1 className="text-xl font-semibold text-start">Login With</h1>
        <button className="btn bg-white text-sm font-medium border-2 px-14">
        <FaGoogle />
  Login With Google
</button>
        <button className="btn bg-white text-sm font-medium border-2 px-14">
        <FaGithub />
  Login With Github
</button>
      </div>

      <div className="mt-8">
        <h1 className="text-xl font-semibold">Find Us On</h1>

        <a className="flex p-4 items-center border rounded-t-xl" href="">
            <FaFacebook className="text-[#3B599C]"></FaFacebook>
            <span className="text-lg font-medium ml-2 text-[#706F6F]">Facebook</span>
        </a>
        <a className="flex p-4 items-center border-x"  href="">
            <FaTwitter className="text-[#3B599C]"></FaTwitter>
            <span className="text-lg font-medium ml-2 text-[#706F6F]">Twitter</span>
        </a>
        <a className="flex p-4 items-center border rounded-b-xl"  href="">
            <FaInstagram className="text-[#D82D7E]"></FaInstagram>
            <span className="text-lg font-medium ml-2 text-[#706F6F]">Instagram</span>
        </a>
      </div>

      <div className="bg-[#F3F3F3] mt-6 rounded-xl">
        <h1 className="text-xl font-semibold text-left p-4">Q-Zone</h1>
        <img className="border-2 border-dashed" src={qZone1} alt="" />
        <img className="border-2 border-dashed" src={qZone2} alt="" />
        <img className="border-2 border-dashed" src={qZone3} alt="" />
      </div>

    </div>
  )
}

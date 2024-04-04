import Marquee from "react-fast-marquee";
export default function Header() {
  return (
    <div className="bg-[#F3F3F3] mt-10 p-4 flex items-center">
        <h1 className="text-xl font-medium text-white bg-[#D72050] p-2">Latest</h1>
      <Marquee pauseOnHover={true} speed={100}  className ="text-[18px] font-semibold text-[#403F3F]" >
      Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
     </Marquee>
    </div>
  )
}

import logo from '../../../assets/logo.png'
import moment from 'moment';
export default function Head() {
  return (
    <div className="text-center mt-10 space-y-4">
    <img className='md:ml-96' src={logo} alt="" />
      <p className="text-sm font-normal text-[#706F6F]">Journalism Without Fear or Favour</p>
      <p className="text-xl font-medium text-[#403F3F]">{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  )
}


import React from "react";
import { BiDotsHorizontalRounded, BiEditAlt } from "react-icons/bi";

export default function ReviewSection({
}: {
  name: string;
  time: string;
  message: string;
}) {

  return (
    <div className="px-10 py-5 bg-white w-full border border-gray-300 rounded-lg">
       <section className="flex items-center justify-between p-1"><div className="flex items-center gap-3">
                <span className="" style={{borderRadius:'50%'}}><img
                        height={50}
                        width={50}
                        src="/Dashboard/admin/admin.png"
                      /></span>
                <span className="flex flex-col"><span className="font-bold">Jon Smith</span> <span className="font-bold">Madrid</span></span>
                </div><div className="text-normal">Complete demolition of buildings and structures</div><div className="font-bold">Dated : 12/May/24</div></section>
 <div className="flex justify-between "><span className="font-bold">Review</span> <span className="flex items-center gap-2"><BiDotsHorizontalRounded/> <BiEditAlt/></span></div>
<div className="my-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
the industry&apos;s standard dummy text.</div>
<div className="flex gap-3 justify-end"><button className="bg-[#FA4017] p-3 rounded font-bold text-white">Deactivate</button><button className="bg-orange p-3 rounded font-bold text-white">Submit</button></div>
    </div>
  );
}

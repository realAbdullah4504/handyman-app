import { ServiceCard } from "@/components/ServiceCard";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SliderCrouserl from "react-slick";
import ServicePopUpPage from "./ServicePopUP";

export default function AllServices() {
  const slider = useRef<SliderCrouserl>(null);
  const [servicePopUp, setServicePopUP] = useState<boolean>(false);
  const [serviceCardData, setServiceCardData] = useState<string[]>([]);
  useEffect(() => {
    if (!servicePopUp) {
      document.body.style.overflowY = "scroll";
    } else {
      document.body.style.overflowY = "hidden";
    }
  }, [servicePopUp]);
  // console.log(serviceCardData, "serviceCard data");
  return (
    <div className="main-padding-box w-full xl:px-[150px] md:px-10 px-4">
      <div className="relative">
        <div className="mt-3  py-3 px-10">
          <ServiceCard
            slider={slider}
            slidesToShowCustom={5}
            setServicePopUP={setServicePopUP}
            setServiceCardData={setServiceCardData}
            
          />
          <div
            className="main-card-slide-arrow w-full text-3xl  flex justify-between items-center top-[45%] absolute    left-0 right-0  "
            aria-hidden="true"
          >
            <button
              className="cursor-pointer bg-orange rounded-full text-white left-slide-arrow"
              onClick={() => slider.current?.slickPrev()}
              aria-label="Left shift"
              aria-hidden="true"
            >
              <IoIosArrowBack className="text-[48px] sm:text-[30px]" />
            </button>
            <button
              className="cursor-pointer bg-orange rounded-full text-white right-slide-arrow "
              onClick={() => slider.current?.slickNext()}
              aria-label="right shift"
              aria-hidden="true"
            >
              <IoIosArrowForward className="text-[48px] sm:text-[30px]" />
            </button>
          </div>
        </div>
      </div>
      {servicePopUp && (
        <div className="fixed inset-0 bg-[rgba(189,189,189,0.6)] z-50">
          <div className="max-h-full overflow-y-auto">
            <ServicePopUpPage
              setServicePopUP={setServicePopUP}
              servicePopUp={servicePopUp}
              serviceCardData={serviceCardData}
            />
          </div>
        </div>
      )}
    </div>
  );
}

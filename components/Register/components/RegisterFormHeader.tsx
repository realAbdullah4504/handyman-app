import { ServiceCard } from "@/components/ServiceCard";
import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SliderCrouserl from "react-slick";

export default function RegisterForms({
	setSelectCard,
	selectCardError,
	selectCard,
	setSelectCardError,
}: {
	setSelectCard: React.Dispatch<React.SetStateAction<string[]>>;
	selectCardError: string;
	selectCard: string[];
	setSelectCardError: React.Dispatch<React.SetStateAction<string>>;
}) {
	const slider = useRef<SliderCrouserl>(null);
	return (
		<div className="register-card-box">



			
			<div className="relative rounded-2xl sm:px-3 sm:mx-5 my-3 mb-5">
				<ServiceCard
					slider={slider}
					slidesToShowCustom={7}
					setSelectCard={setSelectCard}
					selectCard={selectCard}
					setSelectCardError={setSelectCardError}
				/>
				{selectCardError && (
					<p className="absolute text-sm text-red-500 left-0 mt-1">
						{selectCardError}
					</p>
				)}
				<div
					className="main-card-slide-arrow w-full text-3xl  flex justify-between items-center top-[45%] absolute    left-0 right-0 "
					aria-hidden="true">
					<button
						className="cursor-pointer bg-orange rounded-full text-white !relative !right-5"
						onClick={() => slider.current?.slickPrev()}
						aria-label="Desplazarse a la izquierda"
						aria-hidden="true">
						<IoIosArrowBack className="text-[48px] sm:text-[30px]" />
					</button>
					<button
						className="cursor-pointer bg-orange rounded-full text-white !relative !left-5"
						onClick={() => slider.current?.slickNext()}
						aria-label="Desplazarse a la derecha"
						aria-hidden="true">
						<IoIosArrowForward className="text-[48px] sm:text-[30px]" />
					</button>
				</div>
			</div>




		</div>
	);
}

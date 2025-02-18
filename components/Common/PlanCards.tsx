import usePlanRequest from "@/ApiRequests/plan";
import paymentImages from "@/components/Dashboard/handyman/PaymentSetting/payments.png";
import { useAuth } from "@/context/AuthContext";
import useApiCaller from "@/hooks/useApiCaller";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import BankTransferForm from "../Dashboard/handyman/SubscriptionManagment/components/pymentForm";
import ModalStruc from "./ModalStruc";

interface Plan {
  _id: string;
  name: string;
  duration_in_days: number;
  price: number;
}

interface ActivePlan {
  plan: string;
  end_date: string;
}

interface PendingSubscription {
  plan: Plan;
}

const PlanCards: React.FC = () => {
  const { userData } = useAuth();
  const user: any = userData[0];
  const { GetPlans } = usePlanRequest();
  const { data: Plans } = GetPlans({ pageSize: 1 }, {});
  const active_plan: any = user?.craftsman?.current_subscription;
  const { GetSubscription } = usePlanRequest();

  const {
    data: subscription,
    isRefetching,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = GetSubscription({ pageSize: 10 }, {});

  function calculateRemainingDays(endDate: string): number {
    const currentDate = new Date(); // Get the current date
    // Calculate remaining milliseconds
    const remainingMs = new Date(endDate).getTime() - currentDate.getTime();
    // Convert remaining milliseconds to days
    const remainingDays = Math.ceil(remainingMs / (1000 * 60 * 60 * 24));
    if (remainingDays < 0) {
      return 0;
    }
    // console.log("remain",remainingDays)
    return remainingDays;
  }
  const [pendingSubscription, setPendingSubscription] = useState<any>(null);

  const apiCaller = useApiCaller();

  const [initiatPayment, setInitiatPayment] = useState(null);

  useEffect(() => {
    apiCaller.get("/subscription/get_pending_subs").then((res: any) => {
      setPendingSubscription(res.data);
    });
  }, [apiCaller, initiatPayment]);
  const [isUserActivated, setIsUserActivated] = useState(false);
  return (
    <div className="main-item-box-dev grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1   gap-4">
      {Plans?.sort(
        (a: any, b: any) => a.duration_in_days - b.duration_in_days
      ).map((item: any, idx: any) => (
        console.log(item),
        <div
          key={idx}
          className="flex bg-white items-center pb-0 flex-col justify-between p-4 border border-gray-300 rounded-lg h-[20rem] shadow-md mb-4"
        >
          <div className="flex items-center justify-between flex-col h-full relative">
            <span className="font-semibold text-center text-2xl">
              {item?.name}
            </span>
            <div className="text-center relative ">
              <div className="flex items-center gap-1 justify-center mb-2">

                {active_plan?.plan === item._id
                  ? calculateRemainingDays(active_plan?.end_date)
                    .toString()
                    .split("")
                    .map((i, ind) => (
                      <span
                        key={ind}
                        className="font-semibold shadow text-white text-[25px] bg-gradient-to-b from-[#3A3A3A] to-[#121212] rounded px-3"
                      >
                        {i}
                      </span>
                    ))
                  : (item.duration_in_days)
                    .toString()
                    .split("")
                    .map((i: string, ind: number) => (
                      <span
                        key={ind}
                        className="font-semibold shadow text-white text-[25px] bg-gradient-to-b from-[#3A3A3A] to-[#121212] rounded px-3"
                      >
                        {i}
                      </span>
                    ))}
              </div>
              <p>
                {item._id !== active_plan?.plan
                  ? item.duration_in_days
                  : calculateRemainingDays(active_plan.end_date)}{" "}
                días restantes
              </p>
            </div>
            <span className="mr-2 text-3xl ">€{item.price}</span>

            

            {/* Active plan logic */}
            {(item._id === pendingSubscription?.plan?._id ||
              item._id === active_plan?.plan) && calculateRemainingDays(active_plan?.end_date) > 0 && (
                <button
                  disabled={pendingSubscription || active_plan}
                  onClick={() => setInitiatPayment(item)}
                  className={`py-1 px-4 rounded-xl absolute top-[163px] ${active_plan.status === "active" && item?._id === active_plan?.plan
                    ? "bg-[#FF6A18] text-[#ffffff]"
                    : "border border-black bg-white text-black"
                    }`}
                >
                  {active_plan.status === "active"
                    ? item?._id === active_plan?.plan && "Activo"
                    : "Expirado"}
                  {item?._id === pendingSubscription?.plan?._id && "Pendiente"}
                </button>
              )}

            {/* Other logic */}
            {!pendingSubscription && active_plan?.status !== "active" && (
              <button
                onClick={() => {
                  if (user?.craftsman?.status === "unverified") {
                    setIsUserActivated(true);
                  } else {
                    setInitiatPayment(item);
                  }
                }}
                className="py-1 px-4 rounded-xl border border-black bg-white text-black "
              >
                Pedir
              </button>
            )}

            {calculateRemainingDays(active_plan?.end_date) === 30 && (
              <button
                disabled={pendingSubscription && true}
                onClick={() => setInitiatPayment(item)}
                className="py-1 px-4 rounded-xl border border-black bg-white text-black  "
              >
                Mejorar
              </button>
            )}

            {calculateRemainingDays(active_plan?.end_date) === 0 && (
              <button
                disabled={pendingSubscription && true}
                onClick={() => setInitiatPayment(item)}
                className="py-1 px-4 rounded-xl border border-black bg-white text-black  "
              >
                Pedir
              </button>
            )}
            {!calculateRemainingDays(active_plan?.end_date) && subscription?.pages?.[0]?.data[0]?.plan?._id === item?._id && (
              <button
                disabled={true}
                className="py-1 px-4 rounded-xl border border-black bg-white text-black "
              >
                {subscription?.pages[0].data[0].payment_status}
              </button>
            )}
          </div>
          <div className="mt-4 pb-2">
            <Image width={386} src={paymentImages} alt="" />
          </div>
        </div>
      ))}
      <ModalStruc
        isOpen={initiatPayment ? true : false}
        closeModal={() => setInitiatPayment(null)}
      >
        <BankTransferForm
          subscription={initiatPayment}
          closeModal={() => setInitiatPayment(null)}
        />
      </ModalStruc>
      <ModalStruc
        isOpen={isUserActivated}
        closeModal={() => setIsUserActivated(false)}
      >
        <div>
          <p className="mb-4 text-[20px] max-w-[300px] text-center bg-orange text-white rounded p-4 shadow">
            Tu perfil aún no está activado. Puedes usar esta función tan pronto como tu perfil haya sido activado
          </p>
        </div>
      </ModalStruc>
    </div>

  );
};

export default PlanCards;

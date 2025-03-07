import { Footer, Header, Search } from "@/components";
import { changeServiceFormat } from "@/helper/changeServiceFormat";
import useApiCaller from "@/hooks/useApiCaller";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { ImArrowLeft2 } from "react-icons/im";
import { queryClient } from "@/lib/queryClient";

export const getServerSideProps = async ({ req, params, query }: any) => {
  const protocol = req.headers["x-forwarded-proto"] || "http"; // Detect HTTPS in Vercel
  const host = req.headers.host; // e.g., example.com or localhost:3000
  const baseURL = `${protocol}://${host}`;

  try {
    await queryClient.prefetchInfiniteQuery({
      queryKey: [
        "searchHandyman",
        query.handyman,
        query.city,
        query.rating || "",
      ],
      queryFn: async ({ pageParam = 1 }) => {
        const response = await axios.get(
          `${baseURL}/api/find_handymans/?service=${
            query.handyman || ""
          }&rating=${query.rating || ""}&city=${
            query.city
          }&distance=50&pageSize=10&pageNumber=${pageParam}`
        );
        return response.data;
      },
      initialPageParam: 1,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      params: { ...params, city: query.city, search: query.search || "" },
    },
  };
};

const LoadingState = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
    </div>
  );
};

export default function Handyman({ params, dehydratedState }: any) {
  const router = useRouter();
  // const { handyman, city,search} = params;
  const { handyman, city } = params;
  // console.log(handyman, city);
  return (
    <HydrationBoundary state={dehydratedState}>
      <div className="w-full">
        <Head>
          <title className="capitalize">
            {`Encuentra ${changeServiceFormat(
              handyman
            )} Verificados en ${changeServiceFormat(
              city
            )} - Compara Reseñas y Contrata
        al Profesional Adecuado`}
          </title>
          <meta
            name="description"
            content={`¿Estás buscando un ${changeServiceFormat(
              handyman
            )} en ${changeServiceFormat(
              city
            )}? Nuestro servicio te permite descubrir fácilmente ${changeServiceFormat(
              handyman
            )} verificados en tu área. Compara reseñas de clientes y selecciona al profesional ideal para tus necesidades de ${changeServiceFormat(
              handyman
            )}. Obtén servicios de ${changeServiceFormat(
              handyman
            )} confiables y de alta calidad con facilidad.`}
          />{" "}
          {/*Short description more effective for SEO*/}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="index, follow" />
          <link
            rel="canonical"
            href={`${process.env.NEXT_PUBLIC_BASE_URL}/findhandyman/${handyman}?city=${city}`}
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className="flex justify-between items-center bg-white shadow-lg px-5 py-6 w-full fixed z-50 left-0 right-0 top-0">
          <div className="Container">
            <div className="flex items-center gap-3">
              <ImArrowLeft2
                className="text-2xl cursor-pointer"
                onClick={() => router.push("/")}
              />
              <span className="font-bold text-xl">Encontrar Manitas</span>
            </div>
          </div>
          <div />
        </header>
        <header className="Container">
          <Header />
        </header>
        <div className="pt-32 bg-mainBackground">
          <section className="Container space-y-10 text-center mb-10">
            <h1 className="text-3xl capitalize md:text-4xl font-bold">
              Encuentra {changeServiceFormat(handyman)} en{" "}
              <span className="text-orange">{changeServiceFormat(city)}</span>
            </h1>
            <p className="w-full lg:w-1/2 text-gray-600 text-left font-medium mx-auto">
              ¿Estás buscando un {changeServiceFormat(handyman)} en{" "}
              {changeServiceFormat(city)}? Nuestro servicio te permite descubrir
              fácilmente {changeServiceFormat(handyman)} verificados en tu área
            </p>
          </section>
          <Search params={params} />
        </div>
        <Footer />
      </div>
    </HydrationBoundary>
  );
}

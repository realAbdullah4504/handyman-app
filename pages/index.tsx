import {
  Craftsman,
  Footer,
  Header,
  Hero,
  NewListedOrder,
  RegisterNowForFree,
  Services,
  Steps,
} from "@/components";
import Head from "next/head";
import React from "react";
export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Encuentra Manitas Profesionales para Todos Tus Proyectos en el Hogar</title>
        <meta
          name="description"
          content="Encuentra manitas profesionales para reparaciones, renovaciones y más. Contacta artesanos locales y transforma tu hogar con resultados de calidad."
        />{" "}
        {/*Short description more effective for SEO*/}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_BASE_URL}`} />
        
      </Head>
      <main>
        <div className="Container space-y-20">
          <Header />
          <Hero />
        </div>
        <div className="bg-mainBackground">
          <div className="py-3 mt-10 xl:px-[150px]">
            <Services />
            <Steps isShowHeadingText={true} />
            <NewListedOrder />
          </div>
          <RegisterNowForFree />
          <Craftsman />
        </div>
        <Footer />
      </main>
    </React.Fragment>
  );
}

import React from "react";
import Head from "next/head";
import { NavBarRegistrationForm, RegisterPage } from "@/components";
import {Header} from '@/components';
export default function index() {
  return (
    <React.Fragment>
      <Head>
        <title>Encontrar encargos para profesionales - Regístrate ahora</title>
        <meta name="description" content="Regístrate para encontrar encargos y proyectos para profesionales. Amplía tus oportunidades de negocio y conecta con clientes locales. ¡Únete hoy!"/>
        {/*Short description more effective for SEO*/}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_BASE_URL}/register`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="Container">
        {/* <NavBarRegistrationForm/> */}
        <Header/>
      </header>
      <main>
        <div>
            <RegisterPage/>
        </div>
      </main>
    </React.Fragment>
  );
}

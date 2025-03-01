import {Footer,Steps,Craftsman,HowItsWork,Header} from '@/components';
import React from 'react';
import Head from 'next/head';
export default function How__its_work() {
  return (
    <React.Fragment>
      <Head>
        <title>Cómo Funciona | Encuentra y Contrata Manitas Calificados en Simples PasosProject</title>
        <meta name="description" content="Descubre cómo funciona nuestra plataforma para ayudarte a encontrar y contratar manitas calificados. Sigue pasos sencillos: crea una oferta, recibe propuestas y elige al profesional adecuado. Comienza tu proyecto de forma eficiente hoy mismo." /> {/*Short description more effective for SEO*/}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_BASE_URL}/howitworks`} />
        
      </Head>
      <main>
        <div className='Container space-y-20'>
            <Header/>
        </div>
        <div className='bg-mainBackground'>
          <div className='Container px-5 py-3 pt-10'>
            <Steps isShowHeadingText={false}/>
            <HowItsWork/>
          </div>
          <Craftsman/>
        </div>
        <Footer/>
      </main>
    </React.Fragment>
  )
}

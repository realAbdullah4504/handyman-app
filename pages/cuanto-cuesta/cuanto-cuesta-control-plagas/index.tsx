import Head from 'next/head';

const CuantoCuestaControlPlagas = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta el control de plagas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con el control de plagas y cómo gestionar eficazmente la erradicación de insectos y roedores."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-control-plagas`}
        />
        {/* <link rel="canonical" href="https://www.tusitio.com/cuanto-cuesta-control-plagas" /> */}
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta el control de plagas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Control básico: €100 - €300</p>
            <p>Para problemas de plagas menores o tratamiento preventivo.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Control avanzado: €300 - €1000+</p>
            <p>Para infestaciones graves o tratamientos especializados.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de plaga: Insectos, roedores, termitas, etc.</li>
          <li>Gravedad de la infestación: Extensión y ubicación dentro del edificio.</li>
          <li>Métodos de tratamiento: Uso de productos químicos, trampas, sellado de entradas, etc.</li>
          <li>Ubicación geográfica: Costos pueden variar según la región y disponibilidad de servicios.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Presupuesto y planificación</h2>
        <p>1. <strong>Inspección inicial</strong>: Identificar el tipo y gravedad de la plaga.</p>
        <p>2. <strong>Solicitar evaluación</strong>: Obtener presupuestos detallados de empresas de control de plagas.</p>
        <p>3. <strong>Implementación de medidas</strong>: Programar el tratamiento y seguimiento según las recomendaciones del experto.</p>
        <p>4. <strong>Prevención a largo plazo</strong>: Considerar planes de mantenimiento para evitar futuras infestaciones.</p>
      </section>

      <section>
        <p className="text-lg">
          El control efectivo de plagas no solo protege tu hogar o negocio, sino que también promueve un entorno seguro y saludable.
        </p>
      </section>
    </div>
  );
};

export default CuantoCuestaControlPlagas;
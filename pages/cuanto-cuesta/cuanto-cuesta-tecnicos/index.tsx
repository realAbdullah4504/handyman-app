import Head from 'next/head';

const CuantoCuestaTecnicos = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta el servicio técnico? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con los servicios técnicos y cómo planificar tu presupuesto para reparaciones y mantenimiento."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-tecnicos`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta el servicio técnico?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Servicio técnico general: €50 - €100 por hora</p>
            <p>Depende de la complejidad del trabajo y la experiencia del técnico.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Servicio técnico especializado: €80 - €150 por hora</p>
            <p>Incluye reparaciones y mantenimiento de equipos específicos como HVAC, electrodomésticos, etc.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de servicio técnico requerido: General vs. especializado.</li>
          <li>Complejidad del trabajo: Reparaciones simples vs. mantenimiento complejo.</li>
          <li>Experiencia del técnico: Técnicos más experimentados pueden cobrar más.</li>
          <li>Ubicación: Precios pueden variar según la región geográfica y la demanda local.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Presupuesto y planificación</h2>
        <p>1. <strong>Evaluación de necesidades</strong>: Determina qué tipo de servicio técnico necesitas.</p>
        <p>2. <strong>Comparación de costos</strong>: Solicita presupuestos de varios técnicos para comparar precios y servicios.</p>
        <p>3. <strong>Consideración de calidad</strong>: Equilibra costo con experiencia y calidad del servicio ofrecido.</p>
        <p>4. <strong>Programación de mantenimiento</strong>: Planifica el mantenimiento regular para prevenir problemas y costos mayores.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar adecuadamente y presupuestar el servicio técnico, puedes asegurar el buen funcionamiento de tus equipos y sistemas.
        </p>
      </section>
    </div>
  );
};

export default CuantoCuestaTecnicos;
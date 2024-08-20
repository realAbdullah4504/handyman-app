import Head from 'next/head';

const RedactarProyectoDerriboCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta redactar un proyecto de derribo? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la redacción de proyectos de derribo y cómo planificar tu presupuesto para este tipo de servicio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-redactar-proyecto-derribo`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta redactar un proyecto de derribo?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Coste Básico: 1.000€ - 3.000€</p>
            <p>Incluye redacción estándar de proyectos de derribo para estructuras simples.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Coste Avanzado: 3.000€ - 10.000€</p>
            <p>Incluye redacción de proyectos para derribos complejos o con estructuras especiales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Complejidad del Proyecto: Dimensiones y tipo de estructura a derribar.</li>
          <li>Normativas y Requisitos Locales: Cumplimiento de regulaciones y necesidad de estudios adicionales.</li>
          <li>Consultoría Especializada: Contratación de profesionales especializados en redacción de proyectos de derribo.</li>
          <li>Plazos y Entrega: Urgencia y tiempo necesario para la redacción del proyecto.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Redacción de Proyecto de Derribo</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Coste Básico</strong>: 1.000€ - 3.000€, incluyendo redacción estándar de proyectos de derribo para estructuras simples.
          </li>
          <li>
            <strong>Coste Avanzado</strong>: 3.000€ - 10.000€, incluyendo redacción de proyectos para derribos complejos o con estructuras especiales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación del Proyecto</strong>: Determinar alcance y requisitos específicos del derribo.</p>
        <p>2. <strong>Consulta con Profesionales</strong>: Obtener presupuestos y asesoramiento de expertos en redacción de proyectos.</p>
        <p>3. <strong>Comparación de Costos</strong>: Evaluar propuestas considerando calidad y cumplimiento de normativas.</p>
        <p>4. <strong>Programación y Plazos</strong>: Establecer calendario y fechas límite para la redacción del proyecto.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente y presupuestar la redacción de un proyecto de derribo, puedes garantizar que se realice de manera efectiva y dentro de tus medios financieros.
        </p>
      </section>
    </div>
  );
};

export default RedactarProyectoDerriboCoste;
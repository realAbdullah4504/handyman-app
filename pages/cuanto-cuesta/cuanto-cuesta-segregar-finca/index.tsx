import Head from 'next/head';

const SegregarFincaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta segregar una finca? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la segregación de una finca y cómo planificar tu presupuesto para esta tarea."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-segregar-finca`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta segregar una finca?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Segregación Básica: 1,000€ - 3,000€</p>
            <p>Incluye trámites legales básicos y honorarios de notario.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Segregación Compleja: 3,000€ - 7,000€</p>
            <p>Incluye trámites legales complejos y honorarios adicionales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño de la Finca: Extensión total de terreno a segregar.</li>
          <li>Complejidad Legal: Requisitos específicos y complicaciones legales.</li>
          <li>Ubicación: Precios pueden variar según la ubicación geográfica y la oferta de servicios.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Segregar una Finca</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Segregación Básica</strong>: 1,000€ - 3,000€, incluyendo trámites legales básicos y honorarios de notario.
          </li>
          <li>
            <strong>Segregación Compleja</strong>: 3,000€ - 7,000€, incluyendo trámites legales complejos y honorarios adicionales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de Requisitos Legales</strong>: Determina los trámites y documentos necesarios para la segregación.</p>
        <p>2. <strong>Consultas y Cotizaciones</strong>: Obtén varios presupuestos de profesionales y notarías especializadas en segregaciones.</p>
        <p>3. <strong>Consideraciones Adicionales</strong>: Incluye costos de permisos municipales y honorarios legales.</p>
        <p>4. <strong>Selección de Profesionales</strong>: Elige especialistas con experiencia en segregaciones de fincas y buenas referencias.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente la segregación de una finca, puedes asegurar el cumplimiento legal y administrativo, dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default SegregarFincaCoste;
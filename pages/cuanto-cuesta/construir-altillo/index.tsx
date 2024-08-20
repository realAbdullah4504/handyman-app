import Head from 'next/head';

const ConstruirAltillo = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta construir un altillo? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la construcción de un altillo en tu vivienda y cómo planificar tu presupuesto para esta tarea."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/construir-altillo`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta construir un altillo?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Altillo Estándar: 3,000€ - 8,000€</p>
            <p>Incluye diseño y construcción básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Altillo Personalizado: 8,000€ - 15,000€</p>
            <p>Incluye características especiales y personalización.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño del altillo y área de construcción.</li>
          <li>Materiales utilizados, como madera, metal u otros.</li>
          <li>Complejidad del diseño y personalización.</li>
          <li>Costes de permisos y regulaciones locales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Consultar con un Arquitecto</strong>: Asegúrate de tener un diseño detallado y planos.</p>
        <p>2. <strong>Obtención de Permisos</strong>: Verifica los requisitos locales y obtén los permisos necesarios.</p>
        <p>3. <strong>Selección de Contratistas</strong>: Solicita propuestas de varios contratistas especializados en construcción de altillos.</p>
        <p>4. <strong>Costos Adicionales</strong>: Considera otros gastos como mano de obra, materiales y acabados.</p>
      </section>

      <section>
        <p className="text-lg">
          Con una planificación adecuada, construir un altillo puede ser una excelente manera de aprovechar el espacio vertical en tu vivienda.
        </p>
      </section>
    </div>
  );
};

export default ConstruirAltillo;
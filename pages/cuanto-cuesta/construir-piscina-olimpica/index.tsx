import Head from 'next/head';

const ConstruirPiscinaOlimpica = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta construir una piscina olímpica? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la construcción de una piscina olímpica y cómo planificar tu presupuesto para esta tarea."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/construir-piscina-olimpica`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta construir una piscina olímpica?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Piscina Estándar: 500,000€ - 1,000,000€</p>
            <p>Incluye diseño y construcción básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Piscina Premium: 1,000,000€ - 2,000,000€</p>
            <p>Incluye características especiales y tecnología avanzada.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y profundidad de la piscina.</li>
          <li>Materiales utilizados, como hormigón armado o fibra de vidrio.</li>
          <li>Instalaciones adicionales como sistemas de filtración y climatización.</li>
          <li>Costes de permisos y regulaciones locales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Diseño y Consulta</strong>: Trabaja con arquitectos y consultores para crear un diseño detallado.</p>
        <p>2. <strong>Obtención de Permisos</strong>: Asegúrate de cumplir con todas las normativas locales y obtén los permisos necesarios.</p>
        <p>3. <strong>Selección de Contratistas</strong>: Solicita propuestas de varios contratistas especializados en construcción de piscinas.</p>
        <p>4. <strong>Costos Ocultos</strong>: Considera costos adicionales como excavación, terraplenado y acabados.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente la construcción de una piscina olímpica, puedes asegurarte de que el proyecto se realice eficientemente y dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default ConstruirPiscinaOlimpica;
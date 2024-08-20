import Head from 'next/head';

const InteriorismoCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta el interiorismo? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el servicio de interiorismo y cómo planificar tu presupuesto para este tipo de proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-interiorismo`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta el interiorismo?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Proyecto Básico: 1,000€ - 5,000€</p>
            <p>Incluye consultoría básica, diseño y planificación de espacios.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Proyecto Completo: 5,000€ - 20,000€ o más</p>
            <p>Incluye diseño detallado, selección de materiales, gestión de obras y decoración.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Complejidad del Proyecto: Costos pueden variar según la escala y los requisitos específicos del proyecto.</li>
          <li>Nivel de Personalización: Proyectos personalizados pueden implicar costos adicionales por diseño y materiales exclusivos.</li>
          <li>Ubicación y Mercado Local: Precios pueden variar según la ubicación geográfica y las condiciones del mercado.</li>
          <li>Servicios Incluidos: Incluye desde consultoría básica hasta gestión completa de proyectos y decoración.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Interiorismo</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Proyecto Básico</strong>: 1,000€ - 5,000€, incluyendo consultoría básica, diseño y planificación de espacios.
          </li>
          <li>
            <strong>Proyecto Completo</strong>: 5,000€ - 20,000€ o más, incluyendo diseño detallado, selección de materiales, gestión de obras y decoración.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de las Necesidades del Proyecto</strong>: Define claramente los objetivos y requisitos del proyecto de interiorismo.</p>
        <p>2. <strong>Definición del Alcance</strong>: Decide si necesitas un servicio básico de consultoría o un proyecto completo de diseño y gestión de obras.</p>
        <p>3. <strong>Comparación de Presupuestos</strong>: Obtén cotizaciones detalladas de varios diseñadores de interiores para comparar costos y servicios.</p>
        <p>4. <strong>Selección del Profesional Adecuado</strong>: Elige un diseñador de interiores con experiencia y estilo que se alinee con tus preferencias estéticas.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente el presupuesto para el interiorismo, puedes transformar tus espacios según tus gustos y necesidades mientras te mantienes dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default InteriorismoCoste;
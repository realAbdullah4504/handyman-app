import Head from 'next/head';

const ProyectoDeDivisionCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta un proyecto de división? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la realización de un proyecto de división y cómo planificar tu presupuesto para esta tarea."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-proyecto-de-division`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta un proyecto de división?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Proyecto Básico: 500€ - 1000€</p>
            <p>Incluye diseño básico y planos de la división.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Proyecto Detallado: 1000€ - 3000€</p>
            <p>Incluye diseño detallado, planos técnicos y especificaciones adicionales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Complejidad: El tamaño del espacio a dividir y la complejidad del diseño.</li>
          <li>Materiales y Acabados: Costos adicionales para materiales específicos y acabados detallados.</li>
          <li>Normativas Locales: Requisitos legales y permisos necesarios para la división del espacio.</li>
          <li>Profesionales Involucrados: Honorarios de arquitectos, ingenieros u otros especialistas.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Proyectos de División</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Proyecto Básico</strong>: 500€ - 1000€, incluyendo diseño básico y planos.
          </li>
          <li>
            <strong>Proyecto Detallado</strong>: 1000€ - 3000€, incluyendo diseño detallado, planos técnicos y especificaciones adicionales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluar Necesidades y Requisitos</strong>: Determinar el tipo de división necesaria y los requisitos específicos.</p>
        <p>2. <strong>Obtener Cotizaciones</strong>: Solicitar presupuestos detallados de varios profesionales para comparar costos y servicios.</p>
        <p>3. <strong>Considerar Factores Adicionales</strong>: Incluir costos de materiales, permisos y honorarios profesionales en la planificación.</p>
        <p>4. <strong>Planificación Logística</strong>: Establecer un cronograma de trabajo y coordinar la ejecución del proyecto.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente un proyecto de división, puedes asegurar una ejecución eficiente y dentro del presupuesto previsto.
        </p>
      </section>
    </div>
  );
};

export default ProyectoDeDivisionCoste;
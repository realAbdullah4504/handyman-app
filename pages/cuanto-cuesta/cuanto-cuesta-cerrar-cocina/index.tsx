import Head from 'next/head';

const CerrarCocinaCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta cerrar una cocina? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos típicos asociados con el cierre de una cocina y cómo presupuestar para esta tarea."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-cerrar-cocina`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta cerrar una cocina?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Cierre básico: €500 - €2,000</p>
            <p>Incluye demolición de estructuras y cierre de instalaciones básicas.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Cierre completo: €2,000 - €5,000+</p>
            <p>Incluye remoción completa, reparaciones de paredes y pisos, y acabados.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y diseño de la cocina a cerrar.</li>
          <li>Necesidad de eliminar instalaciones eléctricas, fontanería y gas.</li>
          <li>Complejidad de las reparaciones estructurales requeridas.</li>
          <li>Acabados y materiales seleccionados para cerrar la cocina.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Pasos para presupuestar</h2>
        <p>1. <strong>Evaluación inicial</strong>: Inspecciona la cocina y determina los trabajos necesarios.</p>
        <p>2. <strong>Obtención de cotizaciones</strong>: Solicita presupuestos detallados a contratistas y profesionales.</p>
        <p>3. <strong>Planificación de demolición</strong>: Coordina la demolición y el retiro de materiales.</p>
        <p>4. <strong>Finalización de acabados</strong>: Planifica la instalación de nuevos acabados según sea necesario.</p>
      </section>

      <section>
        <p className="text-lg">
          Con una planificación adecuada y la selección de profesionales calificados, puedes cerrar tu cocina de manera eficiente y dentro del presupuesto establecido.
        </p>
      </section>
    </div>
  );
};

export default CerrarCocinaCosto;
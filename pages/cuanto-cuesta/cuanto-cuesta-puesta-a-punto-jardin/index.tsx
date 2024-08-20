import Head from 'next/head';

const PuestaPuntoJardinCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta hacer una puesta a punto de jardín? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con hacer una puesta a punto de jardín y cómo planificar tu presupuesto para esta tarea."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-puesta-a-punto-jardin`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta hacer una puesta a punto de jardín?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Mantenimiento Básico: 500€ - 1,500€</p>
            <p>Incluye poda, deshierbado y limpieza general.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Rehabilitación Completa: 1,500€ - 5,000€</p>
            <p>Incluye rediseño, plantación y renovación de elementos estructurales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño del Jardín: Superficie total y cantidad de plantas y árboles.</li>
          <li>Estado Actual: Necesidades específicas de rehabilitación y mantenimiento.</li>
          <li>Elementos Adicionales: Inclusión de elementos como sistemas de riego o iluminación.</li>
          <li>Ubicación: Los precios pueden variar según la ubicación geográfica y las condiciones del mercado local.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Hacer una Puesta a Punto de Jardín</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Mantenimiento Básico</strong>: 500€ - 1,500€, incluyendo poda, deshierbado y limpieza general.
          </li>
          <li>
            <strong>Rehabilitación Completa</strong>: 1,500€ - 5,000€, incluyendo rediseño, plantación y renovación de elementos estructurales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de las Necesidades del Jardín</strong>: Determinar el estado actual y las necesidades de mantenimiento y rehabilitación.</p>
        <p>2. <strong>Consultar con Profesionales</strong>: Obtener presupuestos detallados de jardineros y paisajistas.</p>
        <p>3. <strong>Considerar Elementos Adicionales</strong>: Decidir sobre la inclusión de sistemas de riego, iluminación u otros elementos estructurales.</p>
        <p>4. <strong>Planificación a Largo Plazo</strong>: Contemplar un plan de mantenimiento continuo para mantener la salud y belleza del jardín.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar cuidadosamente la puesta a punto de su jardín, puede mantener su espacio verde en óptimas condiciones mientras se mantiene dentro de sus posibilidades financieras.
        </p>
      </section>
    </div>
  );
};

export default PuestaPuntoJardinCoste;
import Head from 'next/head';

const DeshollinarChimeneaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta deshollinar una chimenea? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con deshollinar una chimenea y cómo planificar tu presupuesto para esta tarea."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-deshollinar-chimenea`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta deshollinar una chimenea?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Servicio Básico: 80€ - 150€</p>
            <p>Incluye limpieza estándar de chimenea y conductos.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Servicio Completo: 150€ - 300€</p>
            <p>Incluye inspección detallada, limpieza profunda y prueba de funcionamiento.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Chimenea: Estándar, insertable, de leña, etc.</li>
          <li>Estado de la Chimenea: Nivel de acumulación de hollín y suciedad.</li>
          <li>Accesibilidad: Facilidad o dificultad para acceder a la chimenea y conductos.</li>
          <li>Ubicación: Precios pueden variar según la región o área geográfica.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Deshollinar una Chimenea</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Servicio Básico</strong>: 80€ - 150€, incluyendo limpieza estándar de chimenea y conductos.
          </li>
          <li>
            <strong>Servicio Completo</strong>: 150€ - 300€, incluyendo inspección detallada y limpieza profunda.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de la Chimenea</strong>: Determina el tipo de chimenea y su estado actual.</p>
        <p>2. <strong>Comparación de Precios</strong>: Obtén varios presupuestos de profesionales para comparar servicios y costos.</p>
        <p>3. <strong>Consideraciones Adicionales</strong>: Factores como la frecuencia de uso y recomendaciones de mantenimiento.</p>
        <p>4. <strong>Profesionales Calificados</strong>: Contrata solo a técnicos calificados y con experiencia en deshollinado de chimeneas.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar cuidadosamente el deshollinado de tu chimenea, puedes asegurar un funcionamiento seguro y eficiente de tu sistema de calefacción.
        </p>
      </section>
    </div>
  );
};

export default DeshollinarChimeneaCoste;
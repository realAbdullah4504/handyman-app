import Head from 'next/head';

const FontanerosCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta contratar a fontaneros? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con contratar a fontaneros y cómo presupuestar para proyectos de instalación y reparación de fontanería."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta-contratar-fontaneros`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta contratar a fontaneros?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparaciones Básicas: €50 - €100 por hora</p>
            <p>Incluye reparaciones simples como fugas o cambios de grifería.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalaciones Complejas: €100 - €200+ por hora</p>
            <p>Incluye instalaciones complejas como sistemas de calefacción o renovaciones completas de baños.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de trabajo: El costo varía según si son reparaciones simples o instalaciones complejas.</li>
          <li>Materiales utilizados: Utilizar materiales estándar o premium afectará el costo total del proyecto.</li>
          <li>Escala del proyecto: Proyectos más grandes o que requieren múltiples trabajadores pueden ser más costosos.</li>
          <li>Ubicación del proyecto: Los costos pueden variar según la ubicación geográfica y la disponibilidad de fontaneros locales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para contratar a fontaneros</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Reparaciones Básicas</strong>: €50 - €100 por hora, incluyendo reparaciones simples como fugas o cambios de grifería.
          </li>
          <li>
            <strong>Instalaciones Complejas</strong>: €100 - €200+ por hora, incluyendo instalaciones complejas como sistemas de calefacción o renovaciones completas de baños.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación del proyecto</strong>: Determinar el alcance y los requisitos específicos del trabajo de fontanería.</p>
        <p>2. <strong>Solicitar cotizaciones</strong>: Obtener presupuestos detallados de varios fontaneros o empresas de fontanería.</p>
        <p>3. <strong>Gestión de materiales y tiempos</strong>: Planificar la entrega de materiales y la duración del proyecto de fontanería.</p>
        <p>4. <strong>Consideraciones adicionales</strong>: Incluir costos extras como la limpieza posterior o posibles ajustes después de la instalación.</p>
      </section>

      <section>
        <p className="text-lg">
          Al contratar fontaneros, considera estos factores para garantizar que el proyecto se realice dentro del presupuesto y cumpla con tus expectativas funcionales y de calidad.
        </p>
      </section>
    </div>
  );
};

export default FontanerosCoste;
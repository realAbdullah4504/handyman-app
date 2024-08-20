import Head from 'next/head';

const AlbanilesCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta contratar a albañiles? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con contratar a albañiles y cómo presupuestar para proyectos de construcción y renovación."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-contratar-albaniles`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta contratar a albañiles?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reformas Básicas: €20 - €50 por hora</p>
            <p>Incluye trabajos como albañilería general y reparaciones simples.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reformas Complejas: €50 - €100+ por hora</p>
            <p>Incluye trabajos complejos como instalaciones o reformas estructurales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de trabajo: El costo varía según si son trabajos básicos de albañilería o proyectos más complejos.</li>
          <li>Experiencia y especialización: Costos pueden aumentar para albañiles con experiencia en trabajos especializados.</li>
          <li>Materiales utilizados: Utilizar materiales estándar o premium afectará el costo total del proyecto.</li>
          <li>Escala del proyecto: Proyectos más grandes o que requieren múltiples trabajadores pueden ser más costosos.</li>
          <li>Ubicación del proyecto: Los costos pueden variar según la ubicación geográfica y la disponibilidad de albañiles locales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para contratar a albañiles</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Reformas Básicas</strong>: €20 - €50 por hora, incluyendo trabajos simples de albañilería general.
          </li>
          <li>
            <strong>Reformas Complejas</strong>: €50 - €100+ por hora, incluyendo trabajos complejos como instalaciones o reformas estructurales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación del proyecto</strong>: Determinar el alcance y los requisitos específicos de la obra.</p>
        <p>2. <strong>Solicitar cotizaciones</strong>: Obtener presupuestos detallados de varios albañiles o empresas de construcción.</p>
        <p>3. <strong>Gestión de materiales y tiempos</strong>: Planificar la entrega de materiales y la duración del proyecto de construcción o renovación.</p>
        <p>4. <strong>Consideraciones adicionales</strong>: Incluir costos extras como la limpieza posterior o posibles modificaciones durante el proyecto.</p>
      </section>

      <section>
        <p className="text-lg">
          Al contratar albañiles, considera estos factores para garantizar que el proyecto se realice dentro del presupuesto y cumpla con tus expectativas estéticas y funcionales.
        </p>
      </section>
    </div>
  );
};

export default AlbanilesCoste;

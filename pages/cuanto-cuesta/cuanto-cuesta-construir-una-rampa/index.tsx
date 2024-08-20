import Head from 'next/head';

const ConstruirRampaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta construir una rampa? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la construcción de una rampa y cómo planificar tu presupuesto para este proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-construir-una-rampa`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta construir una rampa?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Construcción Básica: 500€ - 1500€</p>
            <p>Incluye materiales estándar y construcción básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Construcción Avanzada: 1500€ - 3000€</p>
            <p>Incluye materiales de alta calidad y técnicas avanzadas de construcción.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo y Calidad de los Materiales: Materiales estándar vs. materiales de alta calidad con diferentes propiedades de durabilidad y seguridad.</li>
          <li>Tamaño de la Rampa: Longitud y anchura de la rampa.</li>
          <li>Complejidad de la Construcción: Costos adicionales para diseños complejos o requisitos específicos de accesibilidad.</li>
          <li>Ubicación: Los precios pueden variar según la ubicación geográfica y las condiciones del mercado local.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Construir una Rampa</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Construcción Básica</strong>: 500€ - 1500€, incluyendo materiales estándar y construcción básica.
          </li>
          <li>
            <strong>Construcción Avanzada</strong>: 1500€ - 3000€, incluyendo materiales de alta calidad y técnicas avanzadas de construcción.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de las Necesidades del Proyecto</strong>: Determina el tamaño y los requisitos específicos para construir tu rampa.</p>
        <p>2. <strong>Investigación y Comparación</strong>: Obtén cotizaciones de varios constructores para comparar precios, tipos de materiales ofrecidos y métodos de construcción.</p>
        <p>3. <strong>Considerar Beneficios a Largo Plazo</strong>: Aunque el costo es importante, considera la durabilidad y el mantenimiento a largo plazo de los materiales para un valor sostenible.</p>
        <p>4. <strong>Calidad y Fiabilidad</strong>: Elige un constructor de confianza con experiencia en la construcción de rampas para asegurar una instalación adecuada y una larga duración.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar cuidadosamente la construcción de tu rampa, puedes mejorar la accesibilidad y la funcionalidad de tu espacio, manteniéndote dentro de tus posibilidades financieras.
        </p>
      </section>
    </div>
  );
};

export default ConstruirRampaCoste;
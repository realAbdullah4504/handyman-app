import Head from 'next/head';

const JuntasDilatacionCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta la instalación de juntas de dilatación? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con la instalación de juntas de dilatación y cómo presupuestar para tus proyectos de construcción o reforma."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-juntas-dilatacion`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta la instalación de juntas de dilatación?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Básica: €20 - €30 por metro lineal</p>
            <p>Incluye juntas estándar y mano de obra básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Avanzada: €30 - €50 por metro lineal</p>
            <p>Incluye juntas premium y técnicas avanzadas de instalación.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de junta: Juntas estándar vs. premium con diferentes materiales y capacidades de dilatación.</li>
          <li>Longitud total: Cantidad de metros lineales a cubrir con juntas de dilatación.</li>
          <li>Complejidad de la instalación: Costos adicionales para instalaciones en áreas complicadas o con diseños especiales.</li>
          <li>Ubicación: Los precios pueden variar según la ubicación geográfica y condiciones del mercado local.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para la instalación de juntas de dilatación</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Instalación Básica</strong>: €20 - €30 por metro lineal, incluyendo juntas estándar y mano de obra básica.
          </li>
          <li>
            <strong>Instalación Avanzada</strong>: €30 - €50 por metro lineal, incluyendo juntas premium y técnicas avanzadas de instalación.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluar necesidades de instalación</strong>: Determinar la cantidad y tipo de juntas de dilatación requeridas para el proyecto.</p>
        <p>2. <strong>Obtener múltiples presupuestos</strong>: Comparar estimaciones de diferentes contratistas para evaluar costos y servicios ofrecidos.</p>
        <p>3. <strong>Considerar calidad y durabilidad</strong>: Optar por juntas de dilatación que ofrezcan la mejor relación calidad-precio y durabilidad.</p>
        <p>4. <strong>Programar la instalación</strong>: Establecer un calendario para completar la instalación dentro del presupuesto y plazos establecidos.</p>
      </section>

      <section>
        <p className="text-lg">
          Al entender los factores que afectan los costos de instalación de juntas de dilatación y planificar adecuadamente, puedes realizar tu proyecto de construcción o reforma de manera efectiva y dentro del presupuesto.
        </p>
      </section>
    </div>
  );
};

export default JuntasDilatacionCoste;

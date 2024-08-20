import Head from 'next/head';

const ApuntalamientoCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta el apuntalamiento de una estructura? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con el apuntalamiento de estructuras y cómo presupuestar para proyectos de refuerzo y soporte de edificaciones."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-apuntalamiento`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta el apuntalamiento de una estructura?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Apuntalamiento Básico: €5,000 - €10,000</p>
            <p>Incluye soportes básicos y refuerzos estructurales.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Apuntalamiento Completo: €10,000 - €20,000</p>
            <p>Incluye un refuerzo integral con materiales especializados y ingeniería estructural.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Estado actual de la estructura: Necesidades de refuerzo y estabilidad según la condición de la edificación.</li>
          <li>Tamaño y complejidad: Dimensiones del edificio y grado de intervención necesario para el apuntalamiento.</li>
          <li>Materiales y tecnología: Uso de materiales estándar vs. avanzados para el refuerzo estructural.</li>
          <li>Regulaciones locales: Cumplimiento de normativas de seguridad y permisos para trabajos de apuntalamiento.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para apuntalamiento de estructuras</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Apuntalamiento Básico</strong>: €5,000 - €10,000, incluyendo soportes básicos y refuerzos estructurales.
          </li>
          <li>
            <strong>Apuntalamiento Completo</strong>: €10,000 - €20,000, incluyendo un refuerzo integral con materiales especializados y ingeniería estructural.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación estructural</strong>: Realizar un análisis detallado del estado actual y necesidades de la estructura a apuntalar.</p>
        <p>2. <strong>Consulta con profesionales</strong>: Obtener evaluaciones y recomendaciones de ingenieros estructurales y contratistas especializados.</p>
        <p>3. <strong>Selección de métodos y materiales</strong>: Elegir técnicas de apuntalamiento y materiales adecuados que garanticen la estabilidad a largo plazo.</p>
        <p>4. <strong>Implementación y seguimiento</strong>: Supervisar el proceso de apuntalamiento para asegurar la calidad y seguridad de la estructura.</p>
      </section>

      <section>
        <p className="text-lg">
          Al entender los factores que afectan los costos de apuntalar una estructura y planificar adecuadamente, puedes llevar a cabo proyectos de refuerzo y soporte de edificaciones de manera efectiva y dentro del presupuesto establecido.
        </p>
      </section>
    </div>
  );
};

export default ApuntalamientoCoste;

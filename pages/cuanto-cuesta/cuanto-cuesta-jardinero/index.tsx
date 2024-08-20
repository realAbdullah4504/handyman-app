import Head from 'next/head';

const JardineroCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta contratar a un jardinero? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con contratar a un jardinero y cómo presupuestar para mantener tu jardín en buen estado durante todo el año."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-jardinero`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta contratar a un jardinero?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Mantenimiento básico mensual: €100 - €300</p>
            <p>Incluye corte de césped, poda básica y mantenimiento de plantas.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Diseño y paisajismo: €300 - €1000+</p>
            <p>Puede incluir diseño de jardín, plantación de flores y árboles, y proyectos de paisajismo.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño del jardín: Área de césped y cantidad de plantas.</li>
          <li>Servicios requeridos: Mantenimiento básico vs. proyectos de diseño.</li>
          <li>Frecuencia de servicio: Semanal, mensual o estacional.</li>
          <li>Ubicación: Precios pueden variar según la región.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Presupuesto y planificación</h2>
        <p>1. <strong>Evaluar necesidades de jardinería</strong>: Determinar tipo y frecuencia de servicios requeridos.</p>
        <p>2. <strong>Solicitar cotizaciones</strong>: Obtener varios presupuestos de empresas de jardinería.</p>
        <p>3. <strong>Comparar servicios</strong>: Considerar experiencia y reputación de los jardineros.</p>
        <p>4. <strong>Programar mantenimiento</strong>: Establecer un calendario para mantener el jardín en óptimas condiciones.</p>
      </section>

      <section>
        <p className="text-lg">
          Planificar el mantenimiento regular y considerar proyectos de diseño puede ayudarte a mantener tu jardín hermoso y saludable.
        </p>
      </section>
    </div>
  );
};

export default JardineroCoste;

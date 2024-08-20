import Head from 'next/head';

const LimpiezaToldosCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta la limpieza de toldos? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con la limpieza de toldos y cómo presupuestar para mantener tus toldos en óptimas condiciones."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-limpieza-toldos`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta la limpieza de toldos?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Limpieza Básica: €50 - €100</p>
            <p>Incluye limpieza estándar de toldos.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Limpieza Avanzada: €100 - €200</p>
            <p>Incluye limpieza profunda con tratamiento especial.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y tipo de toldo: Dimensiones y material del toldo.</li>
          <li>Estado del toldo: Nivel de suciedad y necesidad de tratamiento especial.</li>
          <li>Accesibilidad: Dificultad para acceder al toldo.</li>
          <li>Ubicación: Precios pueden variar según factores regionales y condiciones del mercado local.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para limpieza de toldos</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Limpieza Básica</strong>: €50 - €100, incluyendo limpieza estándar de toldos.
          </li>
          <li>
            <strong>Limpieza Avanzada</strong>: €100 - €200, incluyendo limpieza profunda con tratamiento especial.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación de necesidades de limpieza</strong>: Determinar el estado actual del toldo y requerimientos de limpieza.</p>
        <p>2. <strong>Obtener múltiples presupuestos</strong>: Comparar estimaciones de diferentes servicios de limpieza de toldos.</p>
        <p>3. <strong>Considerar la frecuencia de limpieza</strong>: Planificar mantenimientos regulares para mantener la apariencia y durabilidad del toldo.</p>
        <p>4. <strong>Verificar servicios adicionales</strong>: Preguntar sobre tratamientos protectores y garantías ofrecidas por los proveedores de servicios.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar tu presupuesto y comprender los factores que afectan los costos de limpieza de toldos, puedes mantener tus toldos en óptimas condiciones dentro de tus posibilidades financieras.
        </p>
      </section>
    </div>
  );
};

export default LimpiezaToldosCoste;
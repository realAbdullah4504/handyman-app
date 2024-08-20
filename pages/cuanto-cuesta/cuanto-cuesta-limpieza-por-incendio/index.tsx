import Head from 'next/head';

const LimpiezaPorIncendioCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta la limpieza por incendio? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la limpieza después de un incendio y cómo restaurar espacios afectados por el humo, hollín y daños estructurales."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-limpieza-por-incendio`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta la limpieza por incendio?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Limpieza Básica: 1000€ - 3000€</p>
            <p>Incluye limpieza superficial y eliminación de residuos menores.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Limpieza Completa: 5000€ - 10000€</p>
            <p>Incluye limpieza profunda, restauración de daños y eliminación de olores persistentes.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Gravedad del Incendio: Extensión de los daños causados por el fuego.</li>
          <li>Tipo de Superficie: Material de construcción y muebles afectados.</li>
          <li>Presencia de Humo y Hollín: Necesidad de limpieza profunda y eliminación de olores.</li>
          <li>Restauración Estructural: Reparación de daños en paredes, techos y pisos.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precio Promedio para la Limpieza por Incendio</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Limpieza Básica</strong>: 1000€ - 3000€, incluyendo limpieza superficial y eliminación de residuos menores.
          </li>
          <li>
            <strong>Limpieza Completa</strong>: 5000€ - 10000€, incluyendo limpieza profunda y restauración de daños estructurales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación Inicial</strong>: Inspeccionar el alcance de los daños por el incendio.</p>
        <p>2. <strong>Obtención de Presupuestos</strong>: Consultar con empresas especializadas en limpieza por incendio.</p>
        <p>3. <strong>Restauración y Reparación</strong>: Priorizar la reparación de daños estructurales y eliminación de olores.</p>
        <p>4. <strong>Seguridad y Salud</strong>: Garantizar que el espacio esté seguro para la ocupación después de la limpieza completa.</p>
      </section>

      <section>
        <p className="text-lg">
          La limpieza por incendio es crucial para restaurar espacios afectados, eliminar olores y asegurar la seguridad de los ocupantes después del incidente.
        </p>
      </section>
    </div>
  );
};

export default LimpiezaPorIncendioCoste;

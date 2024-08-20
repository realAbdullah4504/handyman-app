import Head from 'next/head';

const DerribarEdificioCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta derribar un edificio? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el derribo de un edificio y cómo planificar tu presupuesto para este tipo de proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-derribar-edificio`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta derribar un edificio?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Coste Básico: 20.000€ - 50.000€</p>
            <p>Incluye derribo estándar de un edificio de tamaño medio.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Coste Avanzado: 50.000€ - 100.000€</p>
            <p>Incluye derribo con consideraciones especiales como seguridad y gestión de residuos.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Altura del Edificio: Dimensiones del edificio a derribar.</li>
          <li>Material de Construcción: Tipo de materiales usados en la estructura.</li>
          <li>Accesibilidad y Ubicación: Impacto del acceso al sitio y condiciones urbanas.</li>
          <li>Normativas Locales: Cumplimiento de regulaciones locales para derribos.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Derribar un Edificio</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Coste Básico</strong>: 20.000€ - 50.000€, incluyendo derribo estándar de un edificio de tamaño medio.
          </li>
          <li>
            <strong>Coste Avanzado</strong>: 50.000€ - 100.000€, incluyendo derribo con consideraciones especiales como seguridad y gestión de residuos.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de la Estructura</strong>: Realizar una evaluación detallada de la estructura a derribar.</p>
        <p>2. <strong>Obtención de Permisos</strong>: Asegurarse de obtener todos los permisos necesarios antes de iniciar el derribo.</p>
        <p>3. <strong>Selección de Contratistas</strong>: Comparar presupuestos y experiencia de contratistas especializados en derribos.</p>
        <p>4. <strong>Gestión de Residuos</strong>: Planificar la eliminación segura de residuos de demolición según las normativas ambientales.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente y presupuestar el derribo de un edificio, puedes asegurar que el proyecto se lleve a cabo de manera segura y eficiente dentro de tus medios financieros.
        </p>
      </section>
    </div>
  );
};

export default DerribarEdificioCoste;

import Head from 'next/head';

const DerribarCasaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta derribar una casa? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el derribo de una casa y cómo planificar tu presupuesto para este tipo de proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-derribar-casa`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta derribar una casa?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Coste Básico: 20.000€ - 50.000€</p>
            <p>Incluye derribo estándar de una casa de tamaño medio.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Coste Avanzado: 50.000€ - 100.000€</p>
            <p>Incluye derribo con consideraciones especiales como materiales peligrosos o protección de estructuras adyacentes.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Diseño de la Casa: Dimensiones y complejidad de la estructura a derribar.</li>
          <li>Materiales de Construcción: Tipo de materiales usados en la casa.</li>
          <li>Accesibilidad y Ubicación: Dificultad de acceso al sitio y condiciones locales.</li>
          <li>Normativas Locales: Cumplimiento de regulaciones para derribos.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Derribar una Casa</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Coste Básico</strong>: 20.000€ - 50.000€, incluyendo derribo estándar de una casa de tamaño medio.
          </li>
          <li>
            <strong>Coste Avanzado</strong>: 50.000€ - 100.000€, incluyendo derribo con consideraciones especiales como materiales peligrosos o protección de estructuras adyacentes.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Inspección del Sitio</strong>: Evaluar la estructura y los materiales de la casa a derribar.</p>
        <p>2. <strong>Solicitud de Permisos</strong>: Obtener todos los permisos y autorizaciones necesarias.</p>
        <p>3. <strong>Selección de Contratistas</strong>: Comparar presupuestos de contratistas especializados en derribos.</p>
        <p>4. <strong>Disposición de Residuos</strong>: Planificar la eliminación segura y legal de los residuos de la demolición.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente y presupuestar el derribo de una casa, puedes asegurar que el proyecto se lleve a cabo de manera segura y eficiente dentro de tus medios financieros.
        </p>
      </section>
    </div>
  );
};

export default DerribarCasaCoste;
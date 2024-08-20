import Head from 'next/head';

const DemolicionCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta la demolición? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la demolición de edificios y cómo planificar tu presupuesto para este tipo de proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-demolicion`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta la demolición?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Coste Básico: 10.000€ - 30.000€</p>
            <p>Incluye demolición estándar de edificios pequeños a medianos.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Coste Avanzado: 30.000€ - 100.000€</p>
            <p>Incluye demolición de estructuras complejas o con materiales peligrosos.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Tipo de Edificio: Dimensiones y materiales de construcción.</li>
          <li>Accesibilidad y Ubicación: Dificultad de acceso al sitio y condiciones locales.</li>
          <li>Materiales de Construcción: Tipo de materiales usados en la construcción.</li>
          <li>Normativas Locales: Cumplimiento de regulaciones para demolición y gestión de residuos.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Demolición</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Coste Básico</strong>: 10.000€ - 30.000€, incluyendo demolición estándar de edificios pequeños a medianos.
          </li>
          <li>
            <strong>Coste Avanzado</strong>: 30.000€ - 100.000€, incluyendo demolición de estructuras complejas o con materiales peligrosos.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación del Edificio</strong>: Determinar el tamaño y los materiales de construcción.</p>
        <p>2. <strong>Obtención de Permisos</strong>: Obtener permisos y autorizaciones necesarias.</p>
        <p>3. <strong>Selección de Contratistas</strong>: Comparar presupuestos de empresas de demolición con experiencia.</p>
        <p>4. <strong>Gestión de Residuos</strong>: Planificar la eliminación segura y legal de residuos de demolición.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente y presupuestar la demolición, puedes asegurar que el proyecto se realice de manera efectiva y dentro de tus medios financieros.
        </p>
      </section>
    </div>
  );
};

export default DemolicionCoste;
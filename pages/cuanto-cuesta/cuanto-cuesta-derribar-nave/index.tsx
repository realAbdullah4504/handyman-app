import Head from 'next/head';

const DerribarNaveCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta derribar una nave? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el derribo de naves industriales y cómo planificar tu presupuesto para este tipo de proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-derribar-nave`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta derribar una nave?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Coste Básico: 20.000€ - 50.000€</p>
            <p>Incluye derribo estándar de naves industriales de tamaño pequeño a mediano.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Coste Avanzado: 50.000€ - 200.000€</p>
            <p>Incluye derribo de naves con estructuras complejas o materiales peligrosos.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Tipo de Nave: Dimensiones y materiales utilizados en la construcción.</li>
          <li>Condición Estructural: Estado del edificio y necesidad de medidas especiales de seguridad.</li>
          <li>Accesibilidad y Ubicación: Dificultad de acceso al sitio y condiciones locales.</li>
          <li>Eliminación de Escombros: Costos asociados con la eliminación de residuos de demolición.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Derribo de Nave</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Coste Básico</strong>: 20.000€ - 50.000€, incluyendo derribo estándar de naves industriales de tamaño pequeño a mediano.
          </li>
          <li>
            <strong>Coste Avanzado</strong>: 50.000€ - 200.000€, incluyendo derribo de naves con estructuras complejas o materiales peligrosos.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de la Nave</strong>: Determinar dimensiones, materiales y condición estructural.</p>
        <p>2. <strong>Obtención de Permisos</strong>: Asegurarse de cumplir con todas las normativas locales y obtener los permisos necesarios.</p>
        <p>3. <strong>Comparación de Costos</strong>: Solicitar varios presupuestos de empresas de demolición con experiencia en derribo de naves.</p>
        <p>4. <strong>Gestión de Residuos</strong>: Planificar la eliminación segura y legal de los escombros generados por el derribo.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente y presupuestar el derribo de una nave, puedes garantizar que el proyecto se realice de manera efectiva y dentro de tus medios financieros.
        </p>
      </section>
    </div>
  );
};

export default DerribarNaveCoste;

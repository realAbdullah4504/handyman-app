import Head from 'next/head';

const DerribarMuroCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta derribar un muro? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el derribo de muros y cómo planificar tu presupuesto para este tipo de proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-derribar-muro`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta derribar un muro?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Coste Básico: 500€ - 1.500€</p>
            <p>Incluye derribo estándar de muros de tamaño pequeño a mediano.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Coste Avanzado: 1.500€ - 5.000€</p>
            <p>Incluye derribo de muros estructurales o con materiales complejos.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Grosor del Muro: Dimensiones y materiales utilizados en la construcción.</li>
          <li>Condición Estructural: Estado del muro y necesidad de medidas especiales de seguridad.</li>
          <li>Accesibilidad y Ubicación: Dificultad de acceso al sitio y condiciones locales.</li>
          <li>Eliminación de Escombros: Costos asociados con la eliminación de residuos de demolición.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Derribo de Muro</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Coste Básico</strong>: 500€ - 1.500€, incluyendo derribo estándar de muros de tamaño pequeño a mediano.
          </li>
          <li>
            <strong>Coste Avanzado</strong>: 1.500€ - 5.000€, incluyendo derribo de muros estructurales o con materiales complejos.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación del Muro</strong>: Determinar dimensiones, materiales y condición estructural.</p>
        <p>2. <strong>Obtención de Permisos</strong>: Asegurarse de cumplir con todas las normativas locales y obtener los permisos necesarios.</p>
        <p>3. <strong>Comparación de Costos</strong>: Solicitar varios presupuestos de empresas de demolición con experiencia en derribo de muros.</p>
        <p>4. <strong>Gestión de Residuos</strong>: Planificar la eliminación segura y legal de los escombros generados por el derribo.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente y presupuestar el derribo de un muro, puedes garantizar que el proyecto se realice de manera efectiva y dentro de tus medios financieros.
        </p>
      </section>
    </div>
  );
};

export default DerribarMuroCoste;

import Head from 'next/head';

const GestionResiduosCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta la gestión especial de residuos? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la gestión especial de residuos y cómo planificar tu presupuesto para este tipo de proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-gestion-residuos`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta la gestión especial de residuos?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Coste Básico: 500€ - 1.500€</p>
            <p>Incluye gestión de residuos estándar para proyectos pequeños a medianos.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Coste Avanzado: 1.500€ - 5.000€</p>
            <p>Incluye gestión de residuos compleja o para proyectos grandes.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Residuos: Naturaleza y cantidad de residuos a gestionar.</li>
          <li>Métodos de Eliminación: Costos asociados con la eliminación segura y legal de residuos peligrosos.</li>
          <li>Regulaciones Ambientales: Cumplimiento de normativas locales y regionales.</li>
          <li>Ubicación y Accesibilidad: Dificultad de acceso al sitio y condiciones locales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Gestión de Residuos</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Coste Básico</strong>: 500€ - 1.500€, incluyendo gestión de residuos estándar para proyectos pequeños a medianos.
          </li>
          <li>
            <strong>Coste Avanzado</strong>: 1.500€ - 5.000€, incluyendo gestión de residuos compleja o para proyectos grandes.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de Residuos</strong>: Identificar y clasificar los tipos de residuos presentes.</p>
        <p>2. <strong>Consultar Especialistas</strong>: Obtener asesoramiento de expertos en gestión de residuos.</p>
        <p>3. <strong>Comparación de Costos</strong>: Solicitar múltiples presupuestos de empresas de gestión de residuos.</p>
        <p>4. <strong>Normativas Locales</strong>: Asegurarse de cumplir con todas las normativas ambientales y de residuos.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente y presupuestar la gestión especial de residuos, puedes garantizar que el proyecto se realice de manera efectiva y dentro de tus medios financieros.
        </p>
      </section>
    </div>
  );
};

export default GestionResiduosCoste;
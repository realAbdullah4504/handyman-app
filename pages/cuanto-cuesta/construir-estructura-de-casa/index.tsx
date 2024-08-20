import Head from 'next/head';

const ConstruirEstructuraDeCasa = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta construir la estructura de una casa? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la construcción de la estructura de una casa y cómo planificar tu presupuesto para este proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/construir-estructura-de-casa`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta construir la estructura de una casa?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Estructura Básica: 50,000€ - 100,000€</p>
            <p>Incluye cimientos, paredes y techo estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Estructura Avanzada: 100,000€ - 300,000€</p>
            <p>Incluye materiales de alta calidad y diseño personalizado.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Complejidad de la Casa: El tamaño y la complejidad del diseño influyen en el costo.</li>
          <li>Materiales Utilizados: Materiales estándar vs. materiales de alta gama afectan el precio.</li>
          <li>Ubicación y Accesibilidad: Costos pueden variar dependiendo de la ubicación y accesibilidad del sitio.</li>
          <li>Normativas Locales: Cumplir con los códigos de construcción locales puede agregar costos adicionales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Construir la Estructura de una Casa</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Estructura Básica</strong>: 50,000€ - 100,000€, incluyendo cimientos, paredes y techo estándar.
          </li>
          <li>
            <strong>Estructura Avanzada</strong>: 100,000€ - 300,000€, incluyendo materiales de alta calidad y diseño personalizado.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Definir Requisitos</strong>: Determina tus necesidades y preferencias para la estructura de la casa.</p>
        <p>2. <strong>Solicitar Presupuestos</strong>: Obtén múltiples presupuestos de contratistas especializados en construcción de casas.</p>
        <p>3. <strong>Considerar Longevidad y Mantenimiento</strong>: Elige materiales duraderos y adecuados para tu clima local.</p>
        <p>4. <strong>Reservar un Margen</strong>: Asegúrate de incluir un margen adicional en el presupuesto para imprevistos.</p>
      </section>

      <section>
        <p className="text-lg">
          La construcción de la estructura de una casa es fundamental para su durabilidad y estabilidad. Planifica cuidadosamente y considera todos los factores para asegurar que tu proyecto se ajuste a tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default ConstruirEstructuraDeCasa;
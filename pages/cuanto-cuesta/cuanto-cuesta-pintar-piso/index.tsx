import Head from 'next/head';

const PintarPisoCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta pintar un piso? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con pintar un piso y cómo planificar tu presupuesto para este tipo de proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-pintar-piso`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta pintar un piso?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Coste Básico: 500€ - 1000€</p>
            <p>Incluye pintura estándar y mano de obra para un piso de tamaño medio.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Coste Avanzado: 1000€ - 3000€</p>
            <p>Incluye pintura de alta calidad, preparación de superficies y áreas extensas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño del Piso: Número de habitaciones y metros cuadrados.</li>
          <li>Estado de las Paredes: Necesidad de reparaciones, lijado o preparación especial.</li>
          <li>Calidad de la Pintura: Tipo de pintura y acabados especiales.</li>
          <li>Ubicación y Accesibilidad: Impacto en costos de logística y transporte.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Pintar un Piso</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Coste Básico</strong>: 500€ - 1000€, incluyendo pintura estándar y mano de obra.
          </li>
          <li>
            <strong>Coste Avanzado</strong>: 1000€ - 3000€, incluyendo pintura de alta calidad y preparación extensiva.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación Inicial</strong>: Determinar el estado de las paredes y el tipo de pintura requerido.</p>
        <p>2. <strong>Obtención de Presupuestos</strong>: Comparar cotizaciones de varios pintores profesionales.</p>
        <p>3. <strong>Preparación de Superficies</strong>: Considerar costos adicionales para reparaciones y preparación adecuada.</p>
        <p>4. <strong>Selección de Pintura</strong>: Elegir pinturas de calidad adecuada según las necesidades y preferencias estéticas.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente y presupuestar la pintura de un piso, puedes asegurar que el proyecto se realice de manera efectiva y dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default PintarPisoCoste;
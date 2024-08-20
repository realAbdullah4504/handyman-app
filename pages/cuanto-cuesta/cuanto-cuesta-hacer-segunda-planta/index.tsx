import Head from 'next/head';

const SegundaPlantaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta hacer una segunda planta en una vivienda? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con hacer una segunda planta en una vivienda y cómo planificar tu presupuesto para esta obra."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-hacer-segunda-planta`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta hacer una segunda planta en una vivienda?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Proyecto Básico: 20,000€ - 50,000€</p>
            <p>Incluye diseño básico, estructura y materiales estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Proyecto Complejo: 50,000€ - 100,000€</p>
            <p>Incluye diseño personalizado, materiales de alta gama y acabados especiales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Complejidad: Dimensiones y diseño de la segunda planta.</li>
          <li>Materiales Utilizados: Calidad y tipo de materiales seleccionados para la construcción.</li>
          <li>Acabados y Personalización: Nivel de personalización y acabados especiales.</li>
          <li>Normativas Locales: Cumplimiento de regulaciones y requisitos del municipio o región.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Hacer una Segunda Planta</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Proyecto Básico</strong>: 20,000€ - 50,000€, incluyendo diseño básico, estructura y materiales estándar.
          </li>
          <li>
            <strong>Proyecto Complejo</strong>: 50,000€ - 100,000€, incluyendo diseño personalizado, materiales de alta gama y acabados especiales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluar la Viabilidad</strong>: Determinar la viabilidad estructural y legal de añadir una segunda planta.</p>
        <p>2. <strong>Consultar con Profesionales</strong>: Obtener presupuestos detallados de arquitectos y contratistas.</p>
        <p>3. <strong>Considerar Diseño y Acabados</strong>: Definir el nivel de personalización y los materiales a utilizar.</p>
        <p>4. <strong>Prever Contingencias</strong>: Contemplar un margen para imprevistos durante la construcción.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar cuidadosamente la construcción de una segunda planta, puedes asegurar que el proyecto se realice dentro de tus posibilidades financieras mientras se cumplen tus expectativas de diseño y funcionalidad.
        </p>
      </section>
    </div>
  );
};

export default SegundaPlantaCoste;
import Head from 'next/head';

const ConstruirAljibeCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta construir un aljibe? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la construcción de aljibes para almacenamiento de agua y cómo presupuestar para este tipo de proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-construir-aljibe`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta construir un aljibe?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Aljibe básico: €1,000 - €3,000</p>
            <p>Aljibe de capacidad estándar para uso doméstico.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Aljibe grande: €3,000 - €8,000</p>
            <p>Aljibe con mayor capacidad para uso comercial o agrícola.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño del aljibe: Capacidad de almacenamiento de agua.</li>
          <li>Material del aljibe: Hormigón, plástico, fibra de vidrio, etc.</li>
          <li>Accesorios adicionales: Filtros, bombas, sistemas de recolección de agua de lluvia, etc.</li>
          <li>Instalación: Costos de mano de obra y excavación del terreno.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para la construcción de aljibes</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Aljibe básico</strong>: €1,000 - €3,000, aljibe de capacidad estándar para uso doméstico.
          </li>
          <li>
            <strong>Aljibe grande</strong>: €3,000 - €8,000, aljibe con mayor capacidad para uso comercial o agrícola.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Selección de tamaño y material</strong>: Determinar las necesidades de almacenamiento y las condiciones del terreno.</p>
        <p>2. <strong>Costos adicionales</strong>: Incluir accesorios y preparación del sitio.</p>
        <p>3. <strong>Profesionalismo en la instalación</strong>: Contratar a expertos en construcción de aljibes para asegurar una instalación segura y eficiente.</p>
      </section>

      <section>
        <p className="text-lg">
          Planifica tu presupuesto considerando los factores que afectan los costos y elige un aljibe que se adapte a tus necesidades de almacenamiento de agua.
        </p>
      </section>
    </div>
  );
};

export default ConstruirAljibeCoste;

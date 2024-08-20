import Head from 'next/head';

const InstalarSaunaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar una sauna? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de saunas en casa y cómo presupuestar para este tipo de proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-instalar-sauna`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar una sauna?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Sauna básica: €2,000 - €5,000</p>
            <p>Sauna prefabricada o construida básica para uso doméstico.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Sauna de lujo: €5,000 - €15,000</p>
            <p>Sauna personalizada con características avanzadas como control digital, iluminación especial, etc.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de sauna: Prefabricada o construida a medida.</li>
          <li>Material y tamaño: Madera, vidrio, tamaño de la sauna.</li>
          <li>Accesorios: Iluminación, control digital, sistema de vapor.</li>
          <li>Instalación: Costos de mano de obra y preparación del sitio.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para la instalación de saunas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Sauna básica</strong>: €2,000 - €5,000, sauna prefabricada o construida básica para uso doméstico.
          </li>
          <li>
            <strong>Sauna de lujo</strong>: €5,000 - €15,000, sauna personalizada con características avanzadas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Selección de sauna</strong>: Decidir entre una sauna prefabricada estándar o una personalizada.</p>
        <p>2. <strong>Costos adicionales</strong>: Considerar accesorios, instalación eléctrica y requerimientos especiales.</p>
        <p>3. <strong>Instalación profesional</strong>: Contratar instaladores con experiencia para asegurar una instalación segura y eficiente.</p>
      </section>

      <section>
        <p className="text-lg">
          Planifica tu presupuesto considerando los factores que afectan los costos y elige una sauna que se adapte a tus necesidades y espacio disponible.
        </p>
      </section>
    </div>
  );
};

export default InstalarSaunaCoste;
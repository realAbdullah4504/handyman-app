import Head from 'next/head';

const ConstruirEstanqueCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta construir un estanque? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la construcción de estanques y cómo presupuestar para este tipo de proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-construir-estanque`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta construir un estanque?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Estanque básico: €500 - €1,500</p>
            <p>Estanque pequeño con capacidad estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Estanque grande: €1,500 - €5,000</p>
            <p>Estanque con mayor capacidad y características adicionales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño del estanque: Volumen de agua que puede contener.</li>
          <li>Material del estanque: Plástico, PVC, concreto, etc.</li>
          <li>Características adicionales: Fuentes, iluminación, sistemas de filtrado, etc.</li>
          <li>Excavación: Costos asociados con la preparación del sitio.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para la construcción de estanques</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Estanque básico</strong>: €500 - €1,500, estanque pequeño con capacidad estándar.
          </li>
          <li>
            <strong>Estanque grande</strong>: €1,500 - €5,000, estanque con mayor capacidad y características adicionales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Selección de tamaño y material</strong>: Determinar el propósito del estanque y las necesidades de diseño.</p>
        <p>2. <strong>Costos adicionales</strong>: Considerar accesorios y mantenimiento a largo plazo.</p>
        <p>3. <strong>Profesionalismo en la instalación</strong>: Contratar a expertos en construcción de estanques para una instalación adecuada y duradera.</p>
      </section>

      <section>
        <p className="text-lg">
          Planifica tu presupuesto teniendo en cuenta los factores que afectan los costos y selecciona un estanque que se ajuste a tus necesidades y presupuesto.
        </p>
      </section>
    </div>
  );
};

export default ConstruirEstanqueCoste;

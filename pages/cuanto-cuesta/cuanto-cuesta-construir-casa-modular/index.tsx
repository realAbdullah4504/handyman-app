import Head from 'next/head';

const ConstruirCasaModularCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta construir una casa modular? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la construcción de casas modulares y cómo presupuestar para este tipo de proyecto de vivienda."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-construir-casa-modular`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta construir una casa modular?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo base: €50,000 - €100,000</p>
            <p>Costo promedio para la construcción de una casa modular estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo personalizado: €100,000 - €200,000</p>
            <p>Costo más alto para una casa modular con características personalizadas o diseño complejo.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y diseño: Área total y complejidad del diseño de la casa modular.</li>
          <li>Materiales utilizados: Calidad de los materiales y especificaciones técnicas.</li>
          <li>Ubicación del proyecto: Costos adicionales según la ubicación y accesibilidad del sitio.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para construcción de casa modular</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Costo base</strong>: €50,000 - €100,000, para una casa modular estándar.
          </li>
          <li>
            <strong>Costo personalizado</strong>: €100,000 - €200,000, para una casa modular con características personalizadas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Definir requisitos</strong>: Determinar el tamaño, diseño y especificaciones requeridas.</p>
        <p>2. <strong>Solicitar cotizaciones</strong>: Obtener presupuestos detallados de empresas de construcción de casas modulares.</p>
        <p>3. <strong>Considerar calidad y diseño</strong>: Evaluar la calidad de los materiales y el diseño de la casa modular.</p>
      </section>

      <section>
        <p className="text-lg">
          Planifica tu presupuesto considerando los factores que afectan los costos y selecciona una empresa de construcción de casas modulares que se ajuste a tus necesidades y presupuesto.
        </p>
      </section>
    </div>
  );
};

export default ConstruirCasaModularCoste;
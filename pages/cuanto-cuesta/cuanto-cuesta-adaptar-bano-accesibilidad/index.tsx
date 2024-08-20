import Head from 'next/head';

const AdaptarBanoAccesibilidadCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta adaptar un baño para accesibilidad? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la adaptación de baños para accesibilidad y cómo presupuestar para esta remodelación en tu hogar."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-adaptar-bano-accesibilidad`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta adaptar un baño para accesibilidad?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Adaptación Básica: €1,000 - €3,000 por baño</p>
            <p>Incluye instalación de barras de apoyo y ajustes básicos de accesibilidad.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Adaptación Completa: €3,000 - €10,000 por baño</p>
            <p>Incluye remodelación estructural y equipamiento avanzado para accesibilidad.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Nivel de accesibilidad deseado (básico vs. completo).</li>
          <li>Necesidad de remodelación estructural.</li>
          <li>Selección y costo de equipamiento especializado.</li>
          <li>Mano de obra y experiencia de los contratistas.</li>
          <li>Ubicación geográfica y accesibilidad del lugar de trabajo.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Componentes de la Adaptación</h2>
        <ul className="list-disc list-inside">
          <li>Instalación de barras de apoyo y asideros.</li>
          <li>Modificación de la altura de lavabos y sanitarios.</li>
          <li>Instalación de duchas accesibles y grifería especializada.</li>
          <li>Accesibilidad para sillas de ruedas y otras ayudas de movilidad.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación inicial</strong>: Determinar el nivel de accesibilidad necesario y las modificaciones requeridas.</p>
        <p>2. <strong>Selección de equipamiento</strong>: Comparar precios y características de productos para accesibilidad.</p>
        <p>3. <strong>Presupuesto de materiales y mano de obra</strong>: Incluir costos de materiales de construcción y servicios profesionales.</p>
        <p>4. <strong>Contratación de contratistas</strong>: Asegurarse de contar con profesionales con experiencia en accesibilidad.</p>
      </section>

      <section>
        <p className="text-lg">
          Al entender los factores que afectan los costos y planificar adecuadamente, puedes gestionar eficazmente la adaptación de baños para accesibilidad dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default AdaptarBanoAccesibilidadCosto;

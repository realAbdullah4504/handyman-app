import Head from 'next/head';

const InstalarSanitariosCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar o cambiar sanitarios? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación o cambio de sanitarios en tu hogar y cómo presupuestar para esta reforma."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-instalar-sanitarios`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar o cambiar sanitarios?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Básica: €200 - €500 por sanitario</p>
            <p>Incluye sanitarios estándar y mano de obra básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Completa: €500 - €1,000 por sanitario</p>
            <p>Incluye sanitarios de alta gama y trabajo detallado de instalación.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo y calidad de los sanitarios seleccionados.</li>
          <li>Número de sanitarios a instalar o reemplazar.</li>
          <li>Necesidad de modificaciones en las tuberías existentes.</li>
          <li>Mano de obra y experiencia del profesional.</li>
          <li>Ubicación geográfica y accesibilidad del lugar de trabajo.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Componentes de la Instalación</h2>
        <ul className="list-disc list-inside">
          <li>Selección y compra de sanitarios.</li>
          <li>Preparación de las tuberías y desmontaje de los sanitarios antiguos.</li>
          <li>Instalación de nuevos sanitarios y conexiones.</li>
          <li>Acabados y comprobación de fugas.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación inicial</strong>: Determinar el tipo de sanitarios necesarios y las modificaciones requeridas.</p>
        <p>2. <strong>Selección de sanitarios</strong>: Comparar precios y características de diferentes tipos de sanitarios.</p>
        <p>3. <strong>Presupuesto de materiales y mano de obra</strong>: Incluir costos de sanitarios, materiales de instalación y servicios profesionales.</p>
        <p>4. <strong>Contratación de profesionales</strong>: Asegurarse de contar con instaladores con experiencia para un trabajo seguro y eficiente.</p>
      </section>

      <section>
        <p className="text-lg">
          Al entender los factores que afectan los costos y planificar adecuadamente, puedes gestionar eficazmente la instalación o cambio de sanitarios dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default InstalarSanitariosCosto;

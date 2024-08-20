import Head from 'next/head';

const ConstruirBanoCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta construir un baño? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la construcción de un baño y cómo presupuestar para esta renovación en tu hogar."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-construir-bano`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta construir un baño?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Construcción Básica: €3,000 - €8,000</p>
            <p>Incluye instalación de fontanería y electricidad, azulejos estándar y sanitarios básicos.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Construcción Avanzada: €8,000 - €15,000</p>
            <p>Incluye diseño personalizado, materiales de alta gama y acabados premium.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y diseño del baño.</li>
          <li>Calidad de los materiales seleccionados (estándar vs. premium).</li>
          <li>Necesidad de modificaciones estructurales o ajustes en la instalación.</li>
          <li>Costos laborales y tarifas de contratistas.</li>
          <li>Ubicación geográfica y accesibilidad del sitio de construcción.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Componentes de la construcción</h2>
        <ul className="list-disc list-inside">
          <li>Demolición y preparación del espacio.</li>
          <li>Instalación de fontanería y sistemas eléctricos necesarios.</li>
          <li>Colocación de azulejos, pisos y acabados de pared.</li>
          <li>Montaje de sanitarios, lavabos y accesorios.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluar requisitos</strong>: Determinar necesidades específicas y requisitos de diseño.</p>
        <p>2. <strong>Selección de materiales</strong>: Comparar opciones de materiales y ajustarse al presupuesto.</p>
        <p>3. <strong>Costos laborales</strong>: Obtener cotizaciones de contratistas calificados y comparar precios.</p>
        <p>4. <strong>Supervisión y garantía</strong>: Asegurarse de que se cumplan estándares de calidad y seguridad.</p>
      </section>

      <section>
        <p className="text-lg">
          Con una planificación detallada y ajuste a tu presupuesto, puedes construir un baño que mejore significativamente tu hogar.
        </p>
      </section>
    </div>
  );
};

export default ConstruirBanoCosto;

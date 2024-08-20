import Head from 'next/head';

const ReformaCocinaBanoCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta una reforma de cocina y baño? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos típicos asociados con la reforma de cocina y baño, y cómo presupuestar para estos proyectos de renovación."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-reforma-cocina-bano`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta una reforma de cocina y baño?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reforma Básica: €5,000 - €15,000</p>
            <p>Incluye renovación de acabados y actualización de instalaciones.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reforma Completa: €15,000 - €50,000+</p>
            <p>Para proyectos que implican cambios estructurales y diseño interior personalizado.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Extensión y complejidad de los cambios estructurales y distribución.</li>
          <li>Calidad de los materiales y acabados seleccionados.</li>
          <li>Costos adicionales como permisos, diseño arquitectónico y gestión de residuos.</li>
          <li>Ubicación geográfica y tarifas locales de mano de obra.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Componentes típicos de una reforma de cocina y baño</h2>
        <ul className="list-disc list-inside">
          <li>Renovación completa de la cocina (muebles, encimera, electrodomésticos).</li>
          <li>Actualización de instalaciones eléctricas y fontanería.</li>
          <li>Sustitución de suelos y carpintería.</li>
          <li>Renovación del baño (sanitarios, azulejos, iluminación).</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación inicial</strong>: Define tus necesidades específicas y objetivos de diseño.</p>
        <p>2. <strong>Presupuestos detallados</strong>: Solicita estimaciones de múltiples contratistas y proveedores.</p>
        <p>3. <strong>Selección de materiales</strong>: Elige materiales que se ajusten a tu estilo y presupuesto.</p>
        <p>4. <strong>Consideraciones adicionales</strong>: Reserva un fondo para contingencias y ajustes durante la ejecución.</p>
      </section>

      <section>
        <p className="text-lg">
          Con una planificación cuidadosa y la selección adecuada de profesionales, puedes llevar a cabo una reforma de cocina y baño que transforme tus espacios según tus necesidades y presupuesto.
        </p>
      </section>
    </div>
  );
};

export default ReformaCocinaBanoCosto;

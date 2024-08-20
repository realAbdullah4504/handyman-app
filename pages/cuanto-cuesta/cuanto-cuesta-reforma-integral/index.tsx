import Head from 'next/head';

const ReformaIntegralCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta una reforma integral? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos típicos asociados con una reforma integral de vivienda o local, y cómo presupuestar para este tipo de proyectos."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-reforma-integral`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta una reforma integral?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reforma Básica: €10,000 - €30,000</p>
            <p>Incluye renovación de acabados y actualización de instalaciones.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reforma Completa: €30,000 - €100,000+</p>
            <p>Para proyectos que implican cambios estructurales y diseño interior personalizado.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Extensión y complejidad de la reforma (cambio de distribución, ampliaciones).</li>
          <li>Calidad de los materiales y acabados seleccionados.</li>
          <li>Costos adicionales como permisos, diseño arquitectónico y gestión de residuos.</li>
          <li>Ubicación geográfica y tarifas locales de mano de obra.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Componentes típicos de una reforma integral</h2>
        <ul className="list-disc list-inside">
          <li>Renovación de cocina y baños.</li>
          <li>Actualización de instalaciones eléctricas y fontanería.</li>
          <li>Sustitución de suelos y carpintería.</li>
          <li>Pintura y decoración.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación inicial</strong>: Determina el alcance total del proyecto y las áreas prioritarias.</p>
        <p>2. <strong>Presupuestos detallados</strong>: Obtén estimaciones de múltiples contratistas y proveedores.</p>
        <p>3. <strong>Selección de materiales</strong>: Elige materiales duraderos que se ajusten al presupuesto disponible.</p>
        <p>4. <strong>Consideraciones adicionales</strong>: Reserva un fondo para imprevistos y ajustes durante la ejecución del proyecto.</p>
      </section>

      <section>
        <p className="text-lg">
          Con una planificación cuidadosa y la selección adecuada de profesionales, puedes llevar a cabo una reforma integral que transforme tu espacio según tus necesidades y presupuesto.
        </p>
      </section>
    </div>
  );
};

export default ReformaIntegralCosto;
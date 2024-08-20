import Head from 'next/head';

const ReformaIntegralViviendaCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta una reforma integral de vivienda? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos típicos asociados con una reforma integral de vivienda, incluyendo materiales y mano de obra."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-reforma-integral-vivienda`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta una reforma integral de vivienda?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reforma básica: €200 - €400 por metro cuadrado</p>
            <p>Incluye renovación de superficies y actualización de acabados básicos.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reforma completa: €400 - €800+ por metro cuadrado</p>
            <p>Incluye renovación total de instalaciones y actualización de materiales premium.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y complejidad de la vivienda.</li>
          <li>Calidad de los materiales seleccionados.</li>
          <li>Estado actual de la vivienda y necesidad de reparaciones estructurales.</li>
          <li>Costo de la mano de obra y tiempo de ejecución del proyecto.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Pasos para presupuestar</h2>
        <p>1. <strong>Planificación detallada</strong>: Define los objetivos y el alcance de la reforma.</p>
        <p>2. <strong>Solicitud de presupuestos</strong>: Obtén cotizaciones detalladas de contratistas y proveedores.</p>
        <p>3. <strong>Selección de materiales</strong>: Elige materiales que se ajusten a tu presupuesto y requisitos.</p>
        <p>4. <strong>Supervisión y seguimiento</strong>: Asegúrate de que el proyecto se desarrolle según lo acordado.</p>
      </section>

      <section>
        <p className="text-lg">
          Con una planificación cuidadosa y la selección adecuada de materiales y contratistas, puedes lograr una reforma integral exitosa que transforme tu vivienda.
        </p>
      </section>
    </div>
  );
};

export default ReformaIntegralViviendaCosto;
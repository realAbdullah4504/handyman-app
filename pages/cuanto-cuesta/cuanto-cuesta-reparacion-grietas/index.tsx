import Head from 'next/head';

const ReparacionGrietasCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta la reparación de grietas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con la reparación de grietas y cómo planificar y presupuestar este tipo de trabajo."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-reparacion-grietas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta la reparación de grietas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación Básica: €10 - €30 por m²</p>
            <p>Incluye la reparación de pequeñas grietas superficiales.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación Completa: €30 - €60 por m²</p>
            <p>Incluye la reparación de grietas profundas y el tratamiento de la superficie.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y profundidad de las grietas: Las grietas más grandes y profundas requieren más trabajo y materiales.</li>
          <li>Tipo de materiales: Los materiales de alta calidad pueden aumentar los costos.</li>
          <li>Estado general de la superficie: Si la superficie está en mal estado, puede requerir reparaciones adicionales.</li>
          <li>Accesibilidad: Si las grietas son de difícil acceso, los costes pueden ser mayores.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para la reparación de grietas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Reparación Básica</strong>: €10 - €30 por m², incluyendo la reparación de pequeñas grietas superficiales.
          </li>
          <li>
            <strong>Reparación Completa</strong>: €30 - €60 por m², incluyendo la reparación de grietas profundas y el tratamiento de la superficie.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación de necesidades</strong>: Determina el tamaño y la profundidad de las grietas que necesitan reparación.</p>
        <p>2. <strong>Consulta con profesionales</strong>: Obtén asesoría de expertos en reparaciones para conocer los requisitos y costos.</p>
        <p>3. <strong>Comparación de presupuestos</strong>: Solicita varios presupuestos a empresas especializadas para comparar costos y servicios ofrecidos.</p>
        <p>4. <strong>Consideraciones adicionales</strong>: Ten en cuenta los costos adicionales como permisos y licencias necesarios para la obra.</p>
      </section>

      <section>
        <p className="text-lg">
          Al comprender los factores que influyen en los costos de la reparación de grietas y planificar adecuadamente, puedes gestionar el proyecto de manera eficiente y dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default ReparacionGrietasCoste;

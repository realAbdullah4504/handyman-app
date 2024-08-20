import Head from 'next/head';

const ProyectoRehabilitacionFachadaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta un proyecto de rehabilitación de fachada? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con un proyecto de rehabilitación de fachada y cómo planificar y presupuestar este tipo de trabajo."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-proyecto-rehabilitacion-fachada`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta un proyecto de rehabilitación de fachada?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Rehabilitación Básica: €30 - €60 por m²</p>
            <p>Incluye limpieza y reparación de pequeñas grietas y desperfectos.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Rehabilitación Completa: €60 - €100 por m²</p>
            <p>Incluye renovación total, aislamiento y tratamiento estético.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y estado de la fachada: Las fachadas más grandes y en peor estado requieren más trabajo y materiales.</li>
          <li>Tipo de materiales: Los materiales de alta calidad y específicos pueden aumentar los costos.</li>
          <li>Accesibilidad: Si la fachada es de difícil acceso, los costes pueden ser mayores debido al uso de andamios o grúas.</li>
          <li>Normativas locales: Los permisos y regulaciones locales pueden influir en los costos finales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para la rehabilitación de fachadas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Rehabilitación Básica</strong>: €30 - €60 por m², incluyendo limpieza y reparación de pequeñas grietas y desperfectos.
          </li>
          <li>
            <strong>Rehabilitación Completa</strong>: €60 - €100 por m², incluyendo renovación total, aislamiento y tratamiento estético.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación de necesidades</strong>: Determina el tamaño y estado de la fachada que necesita rehabilitación.</p>
        <p>2. <strong>Consulta con profesionales</strong>: Obtén asesoría de expertos en rehabilitación de fachadas para conocer los requisitos y costos.</p>
        <p>3. <strong>Comparación de presupuestos</strong>: Solicita varios presupuestos a empresas especializadas para comparar costos y servicios ofrecidos.</p>
        <p>4. <strong>Consideraciones adicionales</strong>: Ten en cuenta los costos adicionales como permisos y licencias necesarios para la obra.</p>
      </section>

      <section>
        <p className="text-lg">
          Al comprender los factores que influyen en los costos de un proyecto de rehabilitación de fachadas y planificar adecuadamente, puedes gestionar el proyecto de manera eficiente y dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default ProyectoRehabilitacionFachadaCoste;
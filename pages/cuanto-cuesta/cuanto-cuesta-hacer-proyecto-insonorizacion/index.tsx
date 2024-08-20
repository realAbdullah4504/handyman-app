import Head from 'next/head';

const CosteProyectoInsonorizacion = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta hacer un proyecto de insonorización? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la realización de un proyecto de insonorización y cómo planificar tu presupuesto para mejorar la acústica de tu espacio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-hacer-proyecto-insonorizacion`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta hacer un proyecto de insonorización?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo Estimado: 1000€ - 5000€</p>
            <p>Incluye evaluación inicial y diseño básico de soluciones de insonorización.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo Detallado: 5000€ - 20000€ o más</p>
            <p>Incluye diseño acústico avanzado, simulaciones y recomendaciones específicas para el espacio.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Uso del Espacio: Puede variar dependiendo del área total a insonorizar y el tipo de actividades realizadas.</li>
          <li>Materiales y Equipamiento: Costo de materiales absorbentes de sonido, paneles acústicos, etc.</li>
          <li>Calidad del Diseño: Desde soluciones básicas hasta diseño acústico personalizado.</li>
          <li>Profesionalismo: Experiencia y renombre del ingeniero acústico.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Proyectos de Insonorización</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Costo Estimado</strong>: 1000€ - 5000€, incluyendo evaluación inicial y diseño básico de soluciones de insonorización.
          </li>
          <li>
            <strong>Costo Detallado</strong>: 5000€ - 20000€ o más, incluyendo diseño acústico avanzado, simulaciones y recomendaciones específicas para el espacio.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación Inicial</strong>: Determina las necesidades específicas de insonorización del espacio.</p>
        <p>2. <strong>Obtención de Presupuestos</strong>: Solicita cotizaciones detalladas de ingenieros acústicos y proveedores de materiales.</p>
        <p>3. <strong>Implementación y Ajustes</strong>: Considera la calidad del diseño acústico y los ajustes necesarios.</p>
        <p>4. <strong>Mantenimiento y Actualización</strong>: Incluye costos adicionales para la implementación y mantenimiento del proyecto.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar cuidadosamente un proyecto de insonorización, puedes mejorar significativamente la acústica de tu espacio, proporcionando un ambiente más cómodo y eficiente.
        </p>
      </section>
    </div>
  );
};

export default CosteProyectoInsonorizacion;
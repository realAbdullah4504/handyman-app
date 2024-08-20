import Head from 'next/head';

const RehabilitacionEdificiosCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta la rehabilitación de edificios? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la rehabilitación de edificios y cómo presupuestar para este tipo de proyectos."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-rehabilitacion-edificios`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta la rehabilitación de edificios?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Rehabilitación Básica: €100,000 - €500,000</p>
            <p>Incluye trabajos como restauración de fachadas, reparaciones estructurales y mejoras básicas.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Rehabilitación Completa: €500,000 - €1,000,000+</p>
            <p>Proyectos que involucran modernización integral, actualización de servicios y sistemas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y complejidad del edificio a rehabilitar.</li>
          <li>Estado actual de las estructuras y sistemas.</li>
          <li>Materiales y equipos especializados requeridos.</li>
          <li>Costos laborales y tarifas de contratistas en tu ubicación.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Componentes típicos de la rehabilitación de edificios</h2>
        <ul className="list-disc list-inside">
          <li>Evaluación inicial y planificación detallada del proyecto.</li>
          <li>Trabajos de demolición y preparación del sitio.</li>
          <li>Renovaciones estructurales y de fachadas.</li>
          <li>Actualización de sistemas eléctricos, de plomería y HVAC.</li>
          <li>Instalación de nuevas tecnologías y equipos modernos.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Definición clara de objetivos</strong>: Establece los resultados deseados y requisitos del proyecto.</p>
        <p>2. <strong>Obtención de cotizaciones detalladas</strong>: Solicita presupuestos a varios contratistas con experiencia en rehabilitación de edificios.</p>
        <p>3. <strong>Selección de contratistas y materiales</strong>: Elige proveedores y subcontratistas calificados para garantizar calidad y cumplimiento.</p>
        <p>4. <strong>Gestión eficiente de recursos</strong>: Supervisa el progreso del proyecto para mantenerse dentro del presupuesto y plazos establecidos.</p>
      </section>

      <section>
        <p className="text-lg">
          Con una planificación meticulosa y ejecución eficiente, puedes llevar a cabo la rehabilitación de edificios para mejorar su funcionalidad y valor.
        </p>
      </section>
    </div>
  );
};

export default RehabilitacionEdificiosCosto;

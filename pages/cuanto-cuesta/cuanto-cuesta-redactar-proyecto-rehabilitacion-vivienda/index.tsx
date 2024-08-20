import Head from 'next/head';

const RedactarProyectoRehabilitacionViviendaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta redactar un proyecto de rehabilitación de vivienda? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la redacción de un proyecto de rehabilitación de vivienda y cómo planificar tu presupuesto para esta fase inicial del proceso."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-redactar-proyecto-rehabilitacion-vivienda`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta redactar un proyecto de rehabilitación de vivienda?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Proyecto Básico: 3,000€ - 6,000€</p>
            <p>Incluye planos básicos y especificaciones generales para la rehabilitación.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Proyecto Detallado: 6,000€ - 12,000€</p>
            <p>Incluye planos detallados, especificaciones técnicas y estudio de seguridad.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Estado Actual de la Vivienda: Condiciones y necesidades específicas de rehabilitación.</li>
          <li>Especificaciones Técnicas: Complejidad y detalle requerido en los planos y especificaciones.</li>
          <li>Normativas Locales: Requisitos legales y permisos necesarios para la rehabilitación.</li>
          <li>Ubicación: Precios pueden variar según la ubicación geográfica y condiciones locales del mercado.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Redacción de Proyectos de Rehabilitación de Vivienda</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Proyecto Básico</strong>: 3,000€ - 6,000€, incluyendo planos y especificaciones generales.
          </li>
          <li>
            <strong>Proyecto Detallado</strong>: 6,000€ - 12,000€, incluyendo planos detallados y especificaciones técnicas completas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluar Necesidades</strong>: Identificar las áreas específicas que necesitan rehabilitación y mejora.</p>
        <p>2. <strong>Consultar Profesionales</strong>: Obtener presupuestos detallados de arquitectos y contratistas para comparar servicios y precios.</p>
        <p>3. <strong>Considerar Normativas</strong>: Asegurarse de cumplir con las regulaciones y requisitos legales locales durante la rehabilitación.</p>
        <p>4. <strong>Contemplar Contingencias</strong>: Reservar un margen para imprevistos y ajustes durante la ejecución del proyecto.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar cuidadosamente la redacción de un proyecto de rehabilitación de vivienda, puedes asegurar una base sólida para la renovación efectiva de tu propiedad.
        </p>
      </section>
    </div>
  );
};

export default RedactarProyectoRehabilitacionViviendaCoste;
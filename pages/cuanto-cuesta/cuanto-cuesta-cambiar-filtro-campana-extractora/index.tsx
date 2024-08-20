import Head from 'next/head';

const CambiarFiltroCampanaExtractoraCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta cambiar el filtro de una campana extractora? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el cambio del filtro de una campana extractora y cómo presupuestar para este tipo de mantenimiento."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-cambiar-filtro-campana-extractora`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta cambiar el filtro de una campana extractora?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Filtro Básico: €15 - €30</p>
            <p>Incluye filtros de carbón activado estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Filtro Premium: €30 - €60</p>
            <p>Incluye filtros de alta eficiencia y de mayor durabilidad.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de filtro: carbón activado, filtros metálicos o filtros de alta eficiencia.</li>
          <li>Marca y modelo de la campana extractora.</li>
          <li>Frecuencia de uso y desgaste del filtro.</li>
          <li>Costo de mano de obra si se contrata un técnico para el reemplazo.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Componentes del Cambio de Filtro</h2>
        <ul className="list-disc list-inside">
          <li>Adquisición del filtro nuevo compatible con la campana extractora.</li>
          <li>Retiro del filtro antiguo y desecho adecuado.</li>
          <li>Instalación del nuevo filtro y verificación de su funcionamiento.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación inicial</strong>: Determinar el tipo y estado del filtro actual de la campana extractora.</p>
        <p>2. <strong>Investigación de opciones</strong>: Comparar precios y características de los filtros disponibles en el mercado.</p>
        <p>3. <strong>Consideración de la instalación</strong>: Decidir si realizar el cambio del filtro uno mismo o contratar a un técnico.</p>
        <p>4. <strong>Mantenimiento regular</strong>: Planificar cambios de filtro periódicos para mantener la eficiencia de la campana extractora.</p>
      </section>

      <section>
        <p className="text-lg">
          Al comprender los factores que afectan los costos y planificar adecuadamente, puedes gestionar eficazmente el cambio de filtro de tu campana extractora dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default CambiarFiltroCampanaExtractoraCosto;

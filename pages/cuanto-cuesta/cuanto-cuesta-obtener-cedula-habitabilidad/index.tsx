import Head from 'next/head';

const CedulaHabitabilidadCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta obtener una cédula de habitabilidad? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con obtener una cédula de habitabilidad y cómo tramitarla para tu vivienda en España."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-obtener-cedula-habitabilidad`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta obtener una cédula de habitabilidad?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Trámite Básico: €150 - €300</p>
            <p>Incluye visita técnica y emisión de la cédula para viviendas estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Trámite Urgente: €300 - €500</p>
            <p>Proceso acelerado para obtener la cédula en menos tiempo.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y tipo de propiedad: Costos pueden variar según el tamaño y características de la vivienda.</li>
          <li>Ubicación geográfica: Tarifas municipales y regionales pueden influir en el costo total.</li>
          <li>Estado de la vivienda: Necesidad de realizar obras o ajustes pueden aumentar los costos.</li>
          <li>Tiempo de respuesta requerido: Tarifas pueden variar para trámites urgentes o estándar.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para cédulas de habitabilidad</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Trámite Básico</strong>: €150 - €300, incluyendo visita técnica y emisión de la cédula para viviendas estándar.
          </li>
          <li>
            <strong>Trámite Urgente</strong>: €300 - €500, proceso acelerado para obtener la cédula en menos tiempo.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación inicial</strong>: Determinar los requisitos específicos y estado de la vivienda.</p>
        <p>2. <strong>Solicitar presupuestos</strong>: Obtener varias estimaciones de técnicos y empresas autorizadas.</p>
        <p>3. <strong>Considerar plazos y urgencia</strong>: Decidir entre un trámite estándar o urgente según necesidades.</p>
        <p>4. <strong>Revisión de condiciones</strong>: Asegurar que todos los detalles del trámite estén especificados en el contrato.</p>
      </section>

      <section>
        <p className="text-lg">
          Al entender los factores que afectan los costos y planificar adecuadamente, puedes obtener una cédula de habitabilidad de manera eficiente y dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default CedulaHabitabilidadCoste;

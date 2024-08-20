import Head from 'next/head';

const PintarPuertasCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta pintar puertas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la pintura de puertas y cómo planificar tu presupuesto para este tipo de proyecto de renovación."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-pintar-puertas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta pintar puertas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Pintura Estándar: 50€ - 150€ por puerta</p>
            <p>Incluye mano de obra y materiales básicos.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Pintura de Alta Calidad: 150€ - 300€ por puerta</p>
            <p>Incluye pinturas premium y acabados especiales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Número de Puertas: Cuántas puertas necesitan ser pintadas.</li>
          <li>Calidad de la Pintura: Diferencias en el precio según la calidad y tipo de pintura elegida.</li>
          <li>Estado de las Puertas: Necesidad de preparación o reparación antes de pintar.</li>
          <li>Ubicación y Accesibilidad: Costos pueden variar según la ubicación geográfica y la accesibilidad del lugar.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Pintar Puertas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Pintura Estándar</strong>: 50€ - 150€ por puerta, incluyendo mano de obra y materiales básicos.
          </li>
          <li>
            <strong>Pintura de Alta Calidad</strong>: 150€ - 300€ por puerta, incluyendo pinturas premium y acabados especiales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Conteo y Evaluación de Puertas</strong>: Determina cuántas puertas necesitas pintar y su estado actual.</p>
        <p>2. <strong>Selección de Pintura</strong>: Decide entre opciones de pintura estándar o de alta calidad, considerando el presupuesto disponible.</p>
        <p>3. <strong>Presupuesto Detallado</strong>: Solicita presupuestos detallados de varios pintores para comparar costos y servicios.</p>
        <p>4. <strong>Planificación de Tiempo</strong>: Coordina con el profesional para establecer fechas y tiempos de trabajo.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente y presupuestar la pintura de puertas, podrás mejorar la apariencia de tu hogar o local comercial mientras te ajustas a tus límites de gasto.
        </p>
      </section>
    </div>
  );
};

export default PintarPuertasCoste;

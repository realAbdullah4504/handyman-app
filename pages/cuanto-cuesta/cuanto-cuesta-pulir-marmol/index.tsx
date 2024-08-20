import Head from 'next/head';

const PulirMarmolCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta pulir mármol? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el pulido de mármol y cómo planificar tu presupuesto para este servicio de restauración."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-pulir-marmol`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta pulir mármol?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Pulido Básico: 20€ - 30€ por m²</p>
            <p>Incluye preparación superficial, pulido y sellado básico del mármol.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Pulido y Abrillantado: 30€ - 50€ por m²</p>
            <p>Incluye pulido, eliminación de imperfecciones y abrillantado final del mármol.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Estado del Mármol: Grado de desgaste y daños que requieran reparación antes del pulido.</li>
          <li>Tamaño del Área: El área total a pulir determina el costo total del servicio.</li>
          <li>Acabados y Detalles: Opciones adicionales como abrillantado, sellado y reparaciones específicas.</li>
          <li>Ubicación Geográfica: Precios pueden variar según la ubicación y la oferta local de servicios.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Pulir Mármol</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Pulido Básico</strong>: 20€ - 30€ por m², incluyendo preparación superficial, pulido y sellado básico del mármol.
          </li>
          <li>
            <strong>Pulido y Abrillantado</strong>: 30€ - 50€ por m², incluyendo pulido, eliminación de imperfecciones y abrillantado final del mármol.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Inspección y Evaluación</strong>: Determina el estado actual del mármol y las reparaciones necesarias.</p>
        <p>2. <strong>Obtención de Cotizaciones</strong>: Consulta con varios especialistas en pulido de mármol para comparar precios y servicios.</p>
        <p>3. <strong>Selección de Opciones</strong>: Elige entre diferentes acabados y detalles según tus preferencias y presupuesto.</p>
        <p>4. <strong>Programación del Servicio</strong>: Coordina con el contratista la fecha y duración del servicio de pulido de mármol.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente el presupuesto para pulir mármol, puedes restaurar y embellecer eficazmente tus superficies de mármol.
        </p>
      </section>
    </div>
  );
};

export default PulirMarmolCoste;
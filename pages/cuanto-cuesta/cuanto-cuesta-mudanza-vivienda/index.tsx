import Head from 'next/head';

const MudanzaViviendaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta una mudanza de vivienda? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con una mudanza de vivienda y cómo planificar el presupuesto para trasladarte de manera eficiente."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-mudanza-vivienda`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta una mudanza de vivienda?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Mudanza básica: €300 - €800</p>
            <p>Incluye transporte y carga/descarga básica de muebles y cajas.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Mudanza completa: €800 - €1500</p>
            <p>Puede incluir embalaje, desmontaje/montaje de muebles y seguro adicional.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño de la vivienda: Número de habitaciones y cantidad de muebles.</li>
          <li>Distancia: Local vs. larga distancia.</li>
          <li>Servicios adicionales: Embalaje, seguro, montaje/desmontaje de muebles.</li>
          <li>Temporada: Precios pueden variar en temporada alta.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Presupuesto y planificación</h2>
        <p>1. <strong>Evaluación de necesidades</strong>: Determinar servicios requeridos según tamaño y distancia.</p>
        <p>2. <strong>Solicitar cotizaciones</strong>: Obtener varios presupuestos de empresas de mudanzas.</p>
        <p>3. <strong>Comparar ofertas</strong>: Considerar servicios adicionales y reputación de la empresa.</p>
        <p>4. <strong>Programar la mudanza</strong>: Confirmar fechas y detalles logísticos con la empresa seleccionada.</p>
      </section>

      <section>
        <p className="text-lg">
          Planificar con anticipación y comparar opciones te ayudará a encontrar la mejor opción de mudanza que se ajuste a tu presupuesto y necesidades.
        </p>
      </section>
    </div>
  );
};

export default MudanzaViviendaCoste;
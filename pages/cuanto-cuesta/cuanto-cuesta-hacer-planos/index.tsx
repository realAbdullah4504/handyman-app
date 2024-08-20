import Head from 'next/head';

const HacerPlanosCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta hacer planos? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la realización de planos arquitectónicos y cómo planificar tu presupuesto para esta fase inicial del proceso de construcción o remodelación."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-hacer-planos`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta hacer planos?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Planos Básicos: 500€ - 1,500€</p>
            <p>Incluye planos de distribución y elementos estructurales básicos.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Planos Detallados: 1,500€ - 5,000€</p>
            <p>Incluye planos detallados, especificaciones técnicas y cálculos estructurales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Complejidad del Proyecto: Dimensiones y características específicas del proyecto arquitectónico.</li>
          <li>Especificaciones Técnicas: Nivel de detalle requerido en los planos y especificaciones.</li>
          <li>Consultoría Profesional: Honorarios de arquitectos y consultores involucrados en la elaboración de los planos.</li>
          <li>Ubicación: Precios pueden variar según la ubicación geográfica y condiciones locales del mercado.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Hacer Planos</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Planos Básicos</strong>: 500€ - 1,500€, incluyendo planos de distribución y elementos estructurales.
          </li>
          <li>
            <strong>Planos Detallados</strong>: 1,500€ - 5,000€, incluyendo planos detallados, especificaciones técnicas y cálculos estructurales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Definir Requerimientos</strong>: Especificar necesidades y objetivos para los planos arquitectónicos.</p>
        <p>2. <strong>Solicitar Presupuestos</strong>: Obtener cotizaciones detalladas de arquitectos y consultores para comparar servicios y costos.</p>
        <p>3. <strong>Considerar Detalles</strong>: Evaluar el nivel de detalle necesario y ajustar el presupuesto en consecuencia.</p>
        <p>4. <strong>Contemplar Tiempos</strong>: Establecer plazos de entrega y revisiones para los planos arquitectónicos.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar cuidadosamente la elaboración de planos arquitectónicos, puedes garantizar una base sólida para el éxito de tu proyecto de construcción o remodelación.
        </p>
      </section>
    </div>
  );
};

export default HacerPlanosCoste;
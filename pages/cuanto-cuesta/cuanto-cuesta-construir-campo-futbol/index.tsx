import Head from 'next/head';

const ConstruirCampoFutbolCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta construir un campo de fútbol? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la construcción de un campo de fútbol y cómo planificar tu presupuesto para esta tarea."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-construir-campo-futbol`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta construir un campo de fútbol?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Campo Estándar: 100,000€ - 300,000€</p>
            <p>Incluye instalaciones básicas como la superficie de juego, cercas y porterías estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Campo Profesional: 500,000€ - 1,000,000€</p>
            <p>Incluye instalaciones de alta calidad con césped artificial de última generación, iluminación y gradas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño del Campo: Dimensiones específicas del campo de fútbol y número de canchas.</li>
          <li>Calidad del Césped: Tipo de superficie de juego, como césped natural o artificial, y su calidad.</li>
          <li>Instalaciones Adicionales: Costos adicionales para iluminación, gradas, vestuarios y otras instalaciones.</li>
          <li>Ubicación: Precios variados según la ubicación geográfica y las regulaciones locales de construcción.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Construir un Campo de Fútbol</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Campo Estándar</strong>: 100,000€ - 300,000€, incluyendo instalaciones básicas como la superficie de juego, cercas y porterías estándar.
          </li>
          <li>
            <strong>Campo Profesional</strong>: 500,000€ - 1,000,000€, incluyendo instalaciones de alta calidad con césped artificial de última generación, iluminación y gradas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Definición de Requisitos del Campo</strong>: Determina las dimensiones exactas, el tipo de césped y las instalaciones requeridas para tu campo de fútbol.</p>
        <p>2. <strong>Consultoría y Diseño</strong>: Trabaja con arquitectos y diseñadores de campos deportivos para desarrollar un plan detallado y costeable.</p>
        <p>3. <strong>Comparación de Costos</strong>: Obtén cotizaciones de constructores especializados en instalaciones deportivas para comparar precios y servicios.</p>
        <p>4. <strong>Planificación de Permisos</strong>: Asegúrate de cumplir con todos los permisos y regulaciones locales antes de iniciar la construcción del campo de fútbol.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente la construcción de tu campo de fútbol, puedes optimizar los costos y asegurar instalaciones de calidad para jugadores y espectadores.
        </p>
      </section>
    </div>
  );
};

export default ConstruirCampoFutbolCoste;
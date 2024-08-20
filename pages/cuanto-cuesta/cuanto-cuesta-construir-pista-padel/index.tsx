import Head from 'next/head';

const ConstruirPistaPadelCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta construir una pista de pádel? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la construcción de una pista de pádel y cómo planificar tu presupuesto para esta tarea."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-construir-pista-padel`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta construir una pista de pádel?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Pista Básica: 20,000€ - 40,000€</p>
            <p>Incluye superficie de juego estándar y mallas básicas.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Pista Profesional: 50,000€ - 100,000€</p>
            <p>Incluye superficie de juego de alta calidad, iluminación y cerramientos.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Tipo de Pista: Dimensiones específicas y tipo de superficie de juego (interior o exterior).</li>
          <li>Calidad de la Superficie: Material del suelo, como césped artificial o hormigón.</li>
          <li>Instalaciones Adicionales: Iluminación, cerramientos, y otros accesorios como gradas y vestuarios.</li>
          <li>Ubicación: Costos variados según la ubicación geográfica y las regulaciones locales de construcción.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Construir una Pista de Pádel</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Pista Básica</strong>: 20,000€ - 40,000€, incluyendo superficie de juego estándar y mallas básicas.
          </li>
          <li>
            <strong>Pista Profesional</strong>: 50,000€ - 100,000€, incluyendo superficie de juego de alta calidad, iluminación y cerramientos.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Definición de Requisitos de la Pista</strong>: Determina las dimensiones exactas, el tipo de superficie de juego y las instalaciones necesarias para tu pista de pádel.</p>
        <p>2. <strong>Consultoría y Diseño</strong>: Trabaja con arquitectos y diseñadores de instalaciones deportivas para desarrollar un plan detallado y costeable.</p>
        <p>3. <strong>Comparación de Costos</strong>: Obtén cotizaciones de constructores especializados en instalaciones deportivas para comparar precios y servicios.</p>
        <p>4. <strong>Planificación de Permisos</strong>: Asegúrate de cumplir con todos los permisos y regulaciones locales antes de iniciar la construcción de la pista de pádel.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente la construcción de tu pista de pádel, puedes optimizar los costos y asegurar instalaciones de calidad para los jugadores.
        </p>
      </section>
    </div>
  );
};

export default ConstruirPistaPadelCoste;
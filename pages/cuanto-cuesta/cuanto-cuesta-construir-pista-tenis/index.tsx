import Head from 'next/head';

const ConstruirPistaTenisCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta construir una pista de tenis? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la construcción de una pista de tenis y cómo planificar tu presupuesto para esta tarea."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-construir-pista-tenis`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta construir una pista de tenis?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Pista Básica: 30,000€ - 50,000€</p>
            <p>Incluye superficie estándar y mallas básicas.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Pista Profesional: 60,000€ - 100,000€</p>
            <p>Incluye superficie de alta calidad, iluminación y cerramientos.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Tipo de Pista: Dimensiones específicas y tipo de superficie (tierra batida, césped artificial, etc.).</li>
          <li>Calidad de la Superficie: Material del suelo y sistemas de drenaje.</li>
          <li>Instalaciones Adicionales: Iluminación, cerramientos, y otros accesorios como gradas y vestuarios.</li>
          <li>Ubicación: Costos variados según la ubicación geográfica y las regulaciones locales de construcción.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Construir una Pista de Tenis</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Pista Básica</strong>: 30,000€ - 50,000€, incluyendo superficie estándar y mallas básicas.
          </li>
          <li>
            <strong>Pista Profesional</strong>: 60,000€ - 100,000€, incluyendo superficie de alta calidad, iluminación y cerramientos.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Definición de Requisitos de la Pista</strong>: Determina las dimensiones exactas, el tipo de superficie y las instalaciones necesarias para tu pista de tenis.</p>
        <p>2. <strong>Consultoría y Diseño</strong>: Trabaja con arquitectos y diseñadores de instalaciones deportivas para desarrollar un plan detallado y costeable.</p>
        <p>3. <strong>Comparación de Costos</strong>: Obtén cotizaciones de constructores especializados en instalaciones deportivas para comparar precios y servicios.</p>
        <p>4. <strong>Planificación de Permisos</strong>: Asegúrate de cumplir con todos los permisos y regulaciones locales antes de iniciar la construcción de la pista de tenis.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente la construcción de tu pista de tenis, puedes optimizar los costos y asegurar instalaciones de calidad para los jugadores.
        </p>
      </section>
    </div>
  );
};

export default ConstruirPistaTenisCoste;
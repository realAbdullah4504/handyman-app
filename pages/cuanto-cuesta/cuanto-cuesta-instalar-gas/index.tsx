import Head from 'next/head';

const CuantoCuestaInstalarGas = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar gas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de gas y cómo planificar tu presupuesto para este proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-instalar-gas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar gas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación básica: €800 - €1,500</p>
            <p>Incluye conexión y montaje de la instalación básica de gas.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación avanzada: €1,500 - €3,000</p>
            <p>Para instalaciones más complejas o en áreas de difícil acceso.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de instalación: Básica (doméstica) o avanzada (comercial o industrial).</li>
          <li>Tipo de gas: Natural, propano o butano.</li>
          <li>Ubicación: Accesibilidad y distancia desde la red de suministro de gas.</li>
          <li>Normativas locales: Requisitos de seguridad y permisos.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio de instalación de gas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Instalación básica</strong>: €800 - €1,500, incluye conexión estándar a la red de gas doméstica.
          </li>
          <li>
            <strong>Instalación avanzada</strong>: €1,500 - €3,000, para instalaciones complejas o en áreas con acceso difícil.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación de necesidades de gas</strong>: Determinar el tipo y la cantidad de gas necesarios.</p>
        <p>2. <strong>Obtención de cotizaciones</strong>: Comparar precios y servicios ofrecidos por diferentes instaladores.</p>
        <p>3. <strong>Consideración de normativas</strong>: Asegurarse de cumplir con todas las normativas y permisos locales.</p>
        <p>4. <strong>Instalación profesional</strong>: Contratar instaladores certificados y con experiencia.</p>
      </section>

      <section>
        <p className="text-lg">
          Con una planificación cuidadosa, puedes garantizar que la instalación de gas sea segura y eficiente para tu hogar o negocio.
        </p>
      </section>
    </div>
  );
};

export default CuantoCuestaInstalarGas;

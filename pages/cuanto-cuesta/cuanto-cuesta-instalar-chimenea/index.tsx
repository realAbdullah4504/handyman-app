import Head from 'next/head';

const InstalarChimeneaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar una chimenea? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de una chimenea y cómo planificar tu presupuesto para este servicio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-instalar-chimenea`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar una chimenea?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Básica: 500€ - 1,000€</p>
            <p>Incluye chimenea estándar y mano de obra básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Avanzada: 1,000€ - 3,000€</p>
            <p>Incluye chimenea especial y técnicas avanzadas de instalación.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo y Material de la Chimenea: Chimenea estándar de metal vs. chimenea de piedra natural.</li>
          <li>Accesorios: Costos adicionales para accesorios como mangueras, válvulas y rejillas.</li>
          <li>Accesibilidad: Dificultades adicionales como altura del techo o ubicación dentro del hogar.</li>
          <li>Ubicación: Los precios pueden variar según la ubicación geográfica y las condiciones del mercado local.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Instalación de Chimenea</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Instalación Básica</strong>: 500€ - 1,000€, incluyendo chimenea estándar y mano de obra básica.
          </li>
          <li>
            <strong>Instalación Avanzada</strong>: 1,000€ - 3,000€, incluyendo chimenea especial y técnicas avanzadas de instalación.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de las Necesidades de Instalación</strong>: Determina el tipo de chimenea y los requisitos específicos para su instalación.</p>
        <p>2. <strong>Investigación y Comparación</strong>: Obtén cotizaciones de varios instaladores de chimeneas para comparar precios, tipos de chimeneas ofrecidas y métodos de instalación.</p>
        <p>3. <strong>Considerar Beneficios a Largo Plazo</strong>: Asegúrate de que la chimenea instalada sea eficiente energéticamente y segura para el uso a largo plazo.</p>
        <p>4. <strong>Calidad y Fiabilidad</strong>: Elige un instalador de chimeneas con experiencia para garantizar una instalación adecuada y segura.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar cuidadosamente la instalación de una chimenea, puedes mejorar el confort y la eficiencia energética de tu hogar, manteniéndote dentro de tus posibilidades financieras.
        </p>
      </section>
    </div>
  );
};

export default InstalarChimeneaCoste;
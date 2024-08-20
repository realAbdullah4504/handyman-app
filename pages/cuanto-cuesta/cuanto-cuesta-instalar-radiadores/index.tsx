import Head from 'next/head';

const InstalarRadiadoresCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar radiadores? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de radiadores en tu hogar o negocio y cómo planificar tu presupuesto para este tipo de proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-instalar-radiadores`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar radiadores?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Básica: 800€ - 1,500€</p>
            <p>Incluye la instalación de radiadores estándar y conexiones básicas.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Avanzada: 1,500€ - 3,000€</p>
            <p>Incluye radiadores de alta eficiencia energética y sistemas de control avanzados.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Tipo de Radiadores: Varía según el tamaño de la habitación y la eficiencia energética de los radiadores.</li>
          <li>Complejidad de la Instalación: Puede incluir cambios en la distribución de tuberías y sistemas de calefacción existentes.</li>
          <li>Material de los Radiadores: Costos adicionales por radiadores de aluminio, acero u otros materiales.</li>
          <li>Localización Geográfica: Puede influir en los costos de mano de obra y materiales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Instalación de Radiadores</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Instalación Básica</strong>: 800€ - 1,500€, incluye radiadores estándar y conexiones básicas.
          </li>
          <li>
            <strong>Instalación Avanzada</strong>: 1,500€ - 3,000€, incluye radiadores de alta eficiencia energética y sistemas de control avanzados.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Dimensionamiento de Radiadores</strong>: Determina el número y tamaño adecuados de radiadores para cada espacio.</p>
        <p>2. <strong>Consulta con Profesionales</strong>: Obtén varias cotizaciones de instaladores de radiadores para comparar precios y opciones.</p>
        <p>3. <strong>Evaluación de Eficiencia Energética</strong>: Considera los costos de operación a largo plazo y los beneficios de eficiencia energética.</p>
        <p>4. <strong>Consideración de Estética y Funcionalidad</strong>: Elige radiadores que complementen el estilo y las necesidades de calefacción de tu espacio.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar la instalación de radiadores, es importante considerar tanto los costos iniciales como los beneficios a largo plazo en términos de eficiencia energética y confort.
        </p>
      </section>
    </div>
  );
};

export default InstalarRadiadoresCoste;

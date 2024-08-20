import Head from 'next/head';

const DisenarJardinCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta diseñar un jardín? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el diseño de jardines, incluyendo la planificación del paisaje, selección de plantas, instalación de elementos decorativos y más."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-disenar-jardin`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta diseñar un jardín?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo por Diseño: 500€ - 5,000€+</p>
            <p>Varía según el tamaño del jardín, la complejidad del diseño y los elementos deseados.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo por Hora: 30€ - 100€+</p>
            <p>Tarifas por hora de consultoría o diseño paisajístico profesional.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Elementos que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño del Jardín: Área total que se va a diseñar y remodelar.</li>
          <li>Complejidad del Diseño: Estilo de paisajismo y detalles personalizados.</li>
          <li>Selección de Plantas: Costo y disponibilidad de plantas y árboles.</li>
          <li>Instalación de Elementos: Incluye caminos, iluminación, riego automático, entre otros.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Costos Promedio para Diseñar un Jardín</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Por Proyecto</strong>: 500€ - 5,000€+, dependiendo de la escala y el alcance del diseño.
          </li>
          <li>
            <strong>Por Hora</strong>: 30€ - 100€+, para consultoría y servicios de diseño paisajístico.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Consultar Expertos</strong>: Evaluación inicial con diseñadores paisajistas profesionales.</p>
        <p>2. <strong>Determinar Necesidades</strong>: Definir objetivos y requisitos específicos del diseño del jardín.</p>
        <p>3. <strong>Presupuesto Detallado</strong>: Incluir costos de materiales, plantas y honorarios profesionales.</p>
        <p>4. <strong>Implementación y Mantenimiento</strong>: Planificar futuros costos de mantenimiento y cuidado del jardín.</p>
      </section>

      <section>
        <p className="text-lg">
          Diseñar un jardín es una inversión que puede mejorar significativamente el valor y la estética de una propiedad.
        </p>
      </section>
    </div>
  );
};

export default DisenarJardinCoste;
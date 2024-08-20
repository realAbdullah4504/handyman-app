import Head from 'next/head';

const DisenarJardinVerticalCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta diseñar un jardín vertical? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el diseño de jardines verticales, incluyendo la estructura, selección de plantas, instalación y mantenimiento."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-disenar-jardin-vertical`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta diseñar un jardín vertical?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo por Diseño: 500€ - 5,000€+</p>
            <p>Varía según el tamaño, la complejidad y la estructura del jardín vertical.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo por Instalación: 200€ - 1,000€+</p>
            <p>Incluye la instalación de la estructura y las plantas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Elementos que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Complejidad del Diseño: Dimensiones y detalles personalizados del jardín vertical.</li>
          <li>Selección de Plantas: Costo y disponibilidad de las especies elegidas.</li>
          <li>Estructura y Materiales: Tipo de sistema de riego, sustrato y materiales de la estructura.</li>
          <li>Mantenimiento: Costos recurrentes para el cuidado y mantenimiento del jardín vertical.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Costos Promedio para Diseñar un Jardín Vertical</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Por Proyecto</strong>: 500€ - 5,000€+, dependiendo del tamaño y la complejidad.
          </li>
          <li>
            <strong>Por Instalación</strong>: 200€ - 1,000€+, considerando la estructura y las plantas seleccionadas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Consultar Diseñadores</strong>: Evaluación inicial con profesionales en diseño de jardines verticales.</p>
        <p>2. <strong>Determinar Requisitos</strong>: Definir las necesidades específicas del diseño y la instalación.</p>
        <p>3. <strong>Presupuesto Detallado</strong>: Incluir costos de materiales, estructuras y honorarios profesionales.</p>
        <p>4. <strong>Mantenimiento Futuro</strong>: Considerar los costos de cuidado regular y mantenimiento del jardín vertical.</p>
      </section>

      <section>
        <p className="text-lg">
          Diseñar un jardín vertical es una inversión estética y funcional que puede transformar espacios interiores y exteriores.
        </p>
      </section>
    </div>
  );
};

export default DisenarJardinVerticalCoste;
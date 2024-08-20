import Head from 'next/head';

const AmpliarBanoCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta ampliar un baño? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la ampliación de un baño y cómo presupuestar para esta remodelación en tu hogar."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-ampliar-bano`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta ampliar un baño?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Ampliación Básica: €3,000 - €8,000</p>
            <p>Incluye expansión de espacio, adición de accesorios básicos y ajustes de plomería.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Ampliación Completa: €8,000 - €15,000</p>
            <p>Incluye diseño detallado, instalación de accesorios premium y acabados personalizados.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño adicional y complejidad de la ampliación.</li>
          <li>Selección de materiales y acabados.</li>
          <li>Necesidad de ajustes estructurales o de plomería.</li>
          <li>Costos laborales y tarifas de contratistas en tu ubicación.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Componentes de la ampliación de baño</h2>
        <ul className="list-disc list-inside">
          <li>Consulta y diseño inicial con el cliente.</li>
          <li>Desarrollo de planos y especificaciones técnicas.</li>
          <li>Instalación de nuevos accesorios y ajustes de plomería.</li>
          <li>Acabados de pintura y decoración según el diseño.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Consulta inicial</strong>: Define tus necesidades y expectativas para la ampliación del baño.</p>
        <p>2. <strong>Obtención de propuestas</strong>: Solicita estimaciones detalladas de contratistas y compara sus servicios y tarifas.</p>
        <p>3. <strong>Selección de diseño</strong>: Elige un diseño que se ajuste a tu estilo y presupuesto.</p>
        <p>4. <strong>Seguimiento del proceso</strong>: Supervisa el progreso y asegúrate de que se cumplan los plazos y estándares de calidad.</p>
      </section>

      <section>
        <p className="text-lg">
          Con una planificación cuidadosa y ajuste a tu presupuesto, puedes ampliar tu baño para mejorar la funcionalidad y comodidad en tu hogar.
        </p>
      </section>
    </div>
  );
};

export default AmpliarBanoCosto;

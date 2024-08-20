import Head from 'next/head';

const AmpliarCocinaCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta ampliar una cocina? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos típicos asociados con la ampliación de cocinas y cómo presupuestar para esta fase de renovación."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-ampliar-cocina`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta ampliar una cocina?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Ampliación básica: €5,000 - €10,000+</p>
            <p>Incluye la expansión de espacio utilizando estructuras existentes y materiales básicos.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Ampliación completa: €10,000 - €30,000+</p>
            <p>Incluye expansión significativa, diseño personalizado, y materiales de alta calidad.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y escala de la ampliación.</li>
          <li>Complejidad estructural y necesidades de permisos.</li>
          <li>Materiales utilizados y nivel de personalización.</li>
          <li>Costos de mano de obra y honorarios profesionales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Pasos para presupuestar</h2>
        <p>1. <strong>Consultar con un arquitecto</strong>: Discute tus planes y requisitos con un profesional para obtener un diseño adecuado.</p>
        <p>2. <strong>Obtener permisos y aprobaciones</strong>: Asegúrate de cumplir con los requisitos legales antes de comenzar la construcción.</p>
        <p>3. <strong>Selección de materiales</strong>: Elige materiales que se alineen con tu visión de diseño y tu presupuesto.</p>
        <p>4. <strong>Presupuesto detallado</strong>: Obtén un presupuesto detallado que incluya todos los costos asociados con la ampliación de la cocina.</p>
      </section>

      <section>
        <p className="text-lg">
          Con una planificación adecuada y la ayuda de profesionales, puedes ampliar tu cocina de manera efectiva y dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default AmpliarCocinaCosto;
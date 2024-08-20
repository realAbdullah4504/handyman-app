import Head from 'next/head';

const CuantoCuestaRehabilitacionVivienda = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta la rehabilitación de una vivienda? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos típicos asociados con la rehabilitación de una vivienda y cómo planificar tu presupuesto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-rehabilitacion-vivienda`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta la rehabilitación de una vivienda?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Rehabilitación básica: €X - €X por metro cuadrado</p>
            <p>Incluye renovaciones menores y materiales estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Rehabilitación integral: €X - €X por metro cuadrado</p>
            <p>Incluye renovaciones completas con materiales de alta gama y diseño personalizado.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Extensión y complejidad de las renovaciones.</li>
          <li>Calidad y tipo de materiales utilizados (pintura, suelos, instalaciones).</li>
          <li>Tamaño total de la vivienda a rehabilitar.</li>
          <li>Ubicación geográfica y accesibilidad al sitio.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Consejos para la rehabilitación de una vivienda</h2>
        <p>1. <strong>Define un presupuesto claro</strong>: Establece un presupuesto inicial y planifica cada fase de las renovaciones.</p>
        <p>2. <strong>Prioriza las necesidades</strong>: Decide qué áreas de la vivienda necesitan renovaciones prioritarias.</p>
        <p>3. <strong>Contrata profesionales cualificados</strong>: Busca contratistas con experiencia y referencias sólidas.</p>
        <p>4. <strong>Planificación del tiempo</strong>: Considera el tiempo necesario para completar las renovaciones y coordínalo con los profesionales.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente y ajustar tu presupuesto para la rehabilitación de una vivienda, puedes mejorar significativamente tu espacio de vida mientras te mantienes dentro de tus medios financieros.
        </p>
      </section>
    </div>
  );
};

export default CuantoCuestaRehabilitacionVivienda;

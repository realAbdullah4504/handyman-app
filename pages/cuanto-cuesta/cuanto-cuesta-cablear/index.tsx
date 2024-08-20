import Head from 'next/head';

const Cableado = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta cablear una vivienda o local? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el cableado eléctrico de una vivienda o local y cómo presupuestar para este tipo de proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-cablear`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta cablear una vivienda o local?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Cableado Básico: €1,000 - €3,000</p>
            <p>Incluye cableado estándar para una vivienda o local pequeño.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Cableado Avanzado: €3,000 - €6,000</p>
            <p>Incluye cableado con características adicionales o para locales grandes.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y tipo de la propiedad: vivienda pequeña, vivienda grande, local comercial, etc.</li>
          <li>Complejidad del diseño eléctrico: número de puntos de conexión, tipos de circuitos requeridos, etc.</li>
          <li>Calidad de los materiales utilizados: cables, interruptores, paneles eléctricos, etc.</li>
          <li>Normativas locales y requisitos de seguridad.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para cableado eléctrico</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Cableado Básico</strong>: €1,000 - €3,000, incluyendo cableado estándar para una vivienda o local pequeño.
          </li>
          <li>
            <strong>Cableado Avanzado</strong>: €3,000 - €6,000, incluyendo cableado con características adicionales o para locales grandes.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación inicial</strong>: Determinar las necesidades eléctricas específicas de la propiedad.</p>
        <p>2. <strong>Solicitar presupuestos</strong>: Obtener varias cotizaciones de electricistas con experiencia.</p>
        <p>3. <strong>Considerar la eficiencia energética</strong>: Explorar opciones para optimizar el consumo eléctrico.</p>
        <p>4. <strong>Cumplimiento normativo</strong>: Asegurarse de cumplir con las regulaciones locales y contratar profesionales cualificados.</p>
      </section>

      <section>
        <p className="text-lg">
          Al entender los factores que influyen en los costos y planificar adecuadamente, puedes realizar un cableado eléctrico eficiente y dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default Cableado;
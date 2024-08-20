import Head from 'next/head';

const ReformarViviendaDiscapacidadCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta reformar una vivienda para personas con discapacidad? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con la reforma de viviendas para personas con discapacidad y cómo presupuestar para proyectos de accesibilidad y adaptación."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-reformar-vivienda-discapacidad`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta reformar una vivienda para personas con discapacidad?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reforma Básica: €10,000 - €20,000</p>
            <p>Incluye adaptaciones básicas como rampas y barras de apoyo.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reforma Completa: €20,000 - €50,000</p>
            <p>Incluye remodelación completa con tecnología y diseño accesible.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de discapacidad: Adaptaciones específicas según las necesidades del usuario.</li>
          <li>Áreas a reformar: Número de habitaciones y áreas de la vivienda a adaptar.</li>
          <li>Tecnología y materiales: Uso de tecnología avanzada y materiales específicos para accesibilidad.</li>
          <li>Regulaciones locales: Cumplimiento de normativas y requisitos legales para accesibilidad.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para reformar una vivienda para personas con discapacidad</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Reforma Básica</strong>: €10,000 - €20,000, incluyendo adaptaciones básicas como rampas y barras de apoyo.
          </li>
          <li>
            <strong>Reforma Completa</strong>: €20,000 - €50,000, incluyendo remodelación completa con tecnología y diseño accesible.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluar necesidades de accesibilidad</strong>: Determinar las adaptaciones específicas requeridas según el tipo de discapacidad.</p>
        <p>2. <strong>Obtener múltiples presupuestos</strong>: Comparar estimaciones de diferentes contratistas especializados en accesibilidad.</p>
        <p>3. <strong>Considerar tecnología y diseño</strong>: Planificar para incluir tecnologías y materiales que mejoren la calidad de vida del usuario.</p>
        <p>4. <strong>Garantizar cumplimiento normativo</strong>: Asegurarse de cumplir con las regulaciones locales y normativas de accesibilidad.</p>
      </section>

      <section>
        <p className="text-lg">
          Al entender los factores que afectan los costos de reformar una vivienda para personas con discapacidad y planificar adecuadamente, puedes realizar proyectos de accesibilidad de manera efectiva y dentro del presupuesto.
        </p>
      </section>
    </div>
  );
};

export default ReformarViviendaDiscapacidadCoste;

import Head from 'next/head';

const CuantoCuestaITE = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta una Inspección Técnica de Edificios (ITE)? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con la Inspección Técnica de Edificios (ITE) y cómo planificar tu presupuesto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-ite`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta una Inspección Técnica de Edificios (ITE)?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Inspección Básica: €300 - €500</p>
            <p>Incluye revisión básica de la estructura y certificación.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Inspección Avanzada: €500 - €1000</p>
            <p>Incluye inspección detallada y análisis estructural.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y complejidad del edificio: Número de unidades y estado general.</li>
          <li>Antigüedad del edificio: Impacto en la cantidad de inspecciones requeridas.</li>
          <li>Requisitos locales: Normativas y requisitos específicos de la ciudad o región.</li>
          <li>Profesional contratado: Experiencia y reputación del inspector técnico.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Presupuesto y planificación</h2>
        <p>1. <strong>Evaluación inicial</strong>: Determinar el tipo de inspección requerida según el estado del edificio.</p>
        <p>2. <strong>Solicitar cotizaciones</strong>: Obtener varios presupuestos de inspectores técnicos y comparar servicios.</p>
        <p>3. <strong>Considerar requisitos legales</strong>: Asegurarse de cumplir con todas las normativas locales y requisitos legales.</p>
        <p>4. <strong>Programar inspecciones periódicas</strong>: Planificar futuras inspecciones para mantener la certificación del edificio.</p>
      </section>

      <section>
        <p className="text-lg">
          Realizar una inspección técnica de edificios (ITE) ayuda a garantizar la seguridad y el cumplimiento normativo del edificio.
        </p>
      </section>
    </div>
  );
};

export default CuantoCuestaITE;

import Head from 'next/head';

const LicenciaActividadCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta una licencia de actividad? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con la obtención de una licencia de actividad y cómo gestionar el proceso de solicitud."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-licencia-de-actividad`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta una licencia de actividad?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Licencia Básica: €300 - €800</p>
            <p>Incluye la tramitación de la licencia para actividades con bajo impacto ambiental.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Licencia Compleja: €800 - €2,500</p>
            <p>Incluye la tramitación de la licencia para actividades con mayor impacto ambiental o complejidad técnica.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de actividad: El impacto ambiental y la complejidad técnica de la actividad influyen en el coste.</li>
          <li>Ubicación: Los costes pueden variar según la normativa y requisitos del municipio o comunidad autónoma.</li>
          <li>Dimensión del local: El tamaño del local y las modificaciones necesarias pueden incrementar los costes.</li>
          <li>Asesoría y gestión: Contratar a profesionales para la tramitación y gestión de la licencia puede suponer un coste adicional.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para la obtención de una licencia de actividad</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Licencia Básica</strong>: €300 - €800, incluyendo la tramitación para actividades con bajo impacto ambiental.
          </li>
          <li>
            <strong>Licencia Compleja</strong>: €800 - €2,500, incluyendo la tramitación para actividades con mayor impacto ambiental o complejidad técnica.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación de la actividad</strong>: Determinar el tipo de actividad y su impacto ambiental para saber qué tipo de licencia necesitas.</p>
        <p>2. <strong>Consulta con profesionales</strong>: Obtener asesoría de expertos en la tramitación de licencias de actividad para conocer los requisitos y costos.</p>
        <p>3. <strong>Comparación de presupuestos</strong>: Solicitar varios presupuestos a profesionales para comparar costes y servicios ofrecidos.</p>
        <p>4. <strong>Consideraciones adicionales</strong>: Tener en cuenta los costes adicionales como las posibles reformas del local y tasas municipales.</p>
      </section>

      <section>
        <p className="text-lg">
          Al entender los factores que influyen en los costos de obtener una licencia de actividad y planificar adecuadamente, puedes gestionar el proceso de solicitud de manera eficiente y dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default LicenciaActividadCoste;
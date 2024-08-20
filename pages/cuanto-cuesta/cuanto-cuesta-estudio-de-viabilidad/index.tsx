import Head from 'next/head';

const EstudioViabilidadCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta estudio de viabilidad? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con un estudio de viabilidad para proyectos de construcción, renovación o desarrollo inmobiliario."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-estudio-de-viabilidad`}
        />
        
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">
        ¿Cuánto cuesta estudio de viabilidad?
      </h1>

      <section className="mb-8">
        <div className="bg-green-500 text-white p-4 rounded-md shadow-md">
          <p className="text-xl font-bold mb-2">Costo por Servicio: Variable</p>
          <p>Dependiendo del tamaño y alcance del proyecto.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Complejidad del Proyecto: Escala y requerimientos del proyecto.</li>
          <li>Análisis de Viabilidad: Estudio de mercado, evaluación financiera y análisis técnico.</li>
          <li>Ubicación: Impacto en costos regionales y normativas locales.</li>
          <li>Profesionales Involucrados: Consultores, arquitectos y especialistas necesarios.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación Inicial</strong>: Definir los objetivos y alcance del estudio.</p>
        <p>2. <strong>Recopilación de Datos</strong>: Revisión de documentación y estudios preliminares.</p>
        <p>3. <strong>Análisis y Informe</strong>: Desarrollo del estudio y presentación de resultados.</p>
        <p>4. <strong>Implementación</strong>: Ejecución de recomendaciones y seguimiento.</p>
      </section>

      <section>
        <p className="text-lg">
          Un estudio de viabilidad es esencial para evaluar la factibilidad y riesgos asociados con proyectos de construcción y desarrollo.
        </p>
      </section>
    </div>
  );
};

export default EstudioViabilidadCoste;
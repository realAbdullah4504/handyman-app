
import Head from 'next/head';

const RealizarEstudioImpactoAmbientalCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta realizar un estudio de impacto ambiental? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con realizar un estudio de impacto ambiental y cómo planificar tu presupuesto para este servicio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-realizar-estudio-impacto-ambiental`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta realizar un estudio de impacto ambiental?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Estudio Básico: 5,000€ - 10,000€</p>
            <p>Incluye evaluación preliminar y documentación básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Estudio Completo: 10,000€ - 50,000€</p>
            <p>Incluye evaluación detallada, estudios de campo y presentación de informes.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño del Proyecto: La magnitud y complejidad del proyecto influirán en la extensión y detalle del estudio.</li>
          <li>Tipos de Impacto: Evaluación de diferentes tipos de impacto ambiental como agua, aire, suelo y biodiversidad.</li>
          <li>Regulaciones Locales: Cumplimiento de normativas y requisitos legales locales.</li>
          <li>Especialización Requerida: Necesidad de consultores ambientales especializados.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Realizar un Estudio de Impacto Ambiental</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Estudio Básico</strong>: 5,000€ - 10,000€, incluyendo evaluación preliminar y documentación básica.
          </li>
          <li>
            <strong>Estudio Completo</strong>: 10,000€ - 50,000€, incluyendo evaluación detallada y estudios de campo extensivos.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de Requisitos</strong>: Determina los requisitos específicos del estudio según las necesidades del proyecto.</p>
        <p>2. <strong>Consulta con Expertos</strong>: Trabaja con consultores ambientales para obtener estimaciones precisas y detalladas.</p>
        <p>3. <strong>Considera Contingencias</strong>: Prevé un margen para imprevistos como estudios adicionales requeridos.</p>
        <p>4. <strong>Planificación de Plazos</strong>: Coordina el cronograma del estudio con el proyecto general para evitar retrasos.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente y presupuestar un estudio de impacto ambiental, puedes garantizar la sostenibilidad y cumplimiento normativo de tu proyecto.
        </p>
      </section>
    </div>
  );
};

export default RealizarEstudioImpactoAmbientalCoste;
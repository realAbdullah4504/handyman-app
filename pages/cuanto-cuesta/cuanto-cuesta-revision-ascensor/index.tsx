import Head from 'next/head';

const RevisionAscensorCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta la revisión obligatoria de un ascensor? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la revisión obligatoria de un ascensor y cómo planificar tu presupuesto para esta tarea."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-revision-ascensor`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta la revisión obligatoria de un ascensor?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Revisión Básica: 200€ - 500€</p>
            <p>Incluye inspección de componentes básicos y ajustes menores.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Revisión Completa: 500€ - 1000€</p>
            <p>Incluye inspección detallada, ajustes, lubricación y pruebas de seguridad completas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Marca y Modelo del Ascensor: Diferencias en los costos de mantenimiento y revisión.</li>
          <li>Edad del Ascensor: Impacto en la frecuencia y profundidad de las revisiones necesarias.</li>
          <li>Normativas Locales: Requisitos específicos según las regulaciones locales de seguridad y mantenimiento.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para la Revisión de un Ascensor</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Revisión Básica</strong>: 200€ - 500€, incluyendo inspección de componentes básicos y ajustes menores.
          </li>
          <li>
            <strong>Revisión Completa</strong>: 500€ - 1000€, incluyendo inspección detallada, ajustes, lubricación y pruebas de seguridad completas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluar la Frecuencia de las Revisiones</strong>: Determinar la frecuencia recomendada de las revisiones según la normativa local y las condiciones del ascensor.</p>
        <p>2. <strong>Obtener Varios Presupuestos</strong>: Solicitar presupuestos detallados de varias empresas de mantenimiento de ascensores para comparar precios y servicios.</p>
        <p>3. <strong>Considerar el Mantenimiento Preventivo</strong>: Invertir en mantenimiento regular para evitar costos mayores por reparaciones.</p>
        <p>4. <strong>Cumplir con las Normativas Locales</strong>: Asegurarse de que todas las revisiones cumplan con las regulaciones locales de seguridad y mantenimiento.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente y presupuestar la revisión obligatoria de un ascensor, puedes garantizar su funcionamiento seguro y prolongar su vida útil dentro de tus recursos financieros.
        </p>
      </section>
    </div>
  );
};

export default RevisionAscensorCoste;
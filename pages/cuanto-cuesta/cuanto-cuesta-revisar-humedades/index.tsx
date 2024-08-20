import Head from 'next/head';

const RevisarHumedadesCost = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta revisar humedades? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados a la revisión de humedades, incluyendo inspección, diagnóstico y reporte detallado."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-revisar-humedades`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta revisar humedades?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Inspección Básica: 100€ - 300€</p>
            <p>Incluye la evaluación visual y detección de signos iniciales de humedad.</p>
          </div>
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Inspección Profesional: 300€ - 600€</p>
            <p>Requiere herramientas y técnicas especializadas para una evaluación detallada.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Extensión del área a revisar.</li>
          <li>Complejidad de los problemas de humedad.</li>
          <li>Nivel de experiencia del profesional.</li>
          <li>Ubicación geográfica.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Costos Promedio para Revisar Humedades</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Inspección Básica</strong>: 100€ - 300€, dependiendo del tamaño del área y la accesibilidad.
          </li>
          <li>
            <strong>Inspección Profesional</strong>: 300€ - 600€, utilizando herramientas avanzadas y técnicas especializadas.
          </li>
          <li>
            <strong>Costo Total</strong>: 100€ - 600€, dependiendo de la extensión y complejidad del trabajo.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Consejos para la Revisión de Humedades</h2>
        <p>1. <strong>Evaluación Inicial</strong>: Realiza una inspección visual regularmente para detectar signos tempranos de humedad.</p>
        <p>2. <strong>Profesional Especializado</strong>: Contrata a un especialista en humedades con experiencia para una evaluación precisa.</p>
        <p>3. <strong>Informe Detallado</strong>: Solicita un informe completo que incluya causas, diagnóstico y recomendaciones para el tratamiento.</p>
      </section>

      <section>
        <p className="text-lg">
          Asegúrate de revisar periódicamente tus espacios para evitar problemas mayores de humedad. Calcula el presupuesto y planifica la revisión adecuada para tus necesidades.
        </p>
      </section>
    </div>
  );
};

export default RevisarHumedadesCost;

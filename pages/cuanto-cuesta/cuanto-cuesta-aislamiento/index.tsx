import Head from 'next/head';

const CuantoCuestaAislamiento = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta el aislamiento? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el aislamiento de viviendas, incluyendo materiales, mano de obra y otros factores relevantes."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-aislamiento`}
        />
       
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">
        ¿Cuánto cuesta el aislamiento?
      </h1>

      <section className="mb-8">
        <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mb-4">
          <p className="text-xl font-bold mb-2">Costo típico: €1000 - €5000</p>
          <p>
            Costo promedio para el aislamiento de una vivienda de tamaño medio, incluyendo materiales y mano de obra.
          </p>
        </div>
        <p className="mb-4">
          El costo puede variar dependiendo del tipo de aislamiento (térmico, acústico), el tamaño de la vivienda, y la complejidad de la instalación.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Componentes del costo</h2>
        <ul className="list-disc list-inside">
          <li>Costo de los materiales de aislamiento.</li>
          <li>Mano de obra de los instaladores.</li>
          <li>Posibles costos adicionales como la preparación de superficies o la eliminación de aislamiento viejo.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Recomendaciones</h2>
        <p>1. <strong>Evalúa tu necesidad</strong>: Determina si necesitas aislamiento térmico, acústico o ambos.</p>
        <p>2. <strong>Consulta a profesionales</strong>: Solicita varios presupuestos y consulta con expertos en aislamiento para encontrar la mejor opción.</p>
        <p>3. <strong>Considera la eficiencia energética</strong>: El aislamiento adecuado puede mejorar la eficiencia energética de tu hogar y reducir costos a largo plazo.</p>
      </section>

      <section>
        <p className="text-lg">
          El aislamiento adecuado puede proporcionar confort en tu hogar y mejorar su eficiencia energética, amortizando la inversión inicial.
        </p>
      </section>
    </div>
  );
};

export default CuantoCuestaAislamiento;
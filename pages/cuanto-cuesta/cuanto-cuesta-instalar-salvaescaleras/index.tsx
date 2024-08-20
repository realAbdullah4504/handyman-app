import Head from 'next/head';

const CuantoCuestaInstalarSalvaescaleras = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar salvaescaleras? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de salvaescaleras y cómo planificar tu presupuesto para este proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-instalar-salvaescaleras`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar salvaescaleras?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Salvaescaleras rectos: €2,000 - €5,000</p>
            <p>Incluye instalación básica y para escaleras rectas.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Salvaescaleras curvos: €5,000 - €10,000</p>
            <p>Requiere instalación especializada para escaleras curvas o con descansos.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de escalera: Recta, curva o con descansos.</li>
          <li>Personalización: Opciones adicionales como controles remotos, asientos y capacidad de peso.</li>
          <li>Instalación: Complejidad del montaje según la estructura de la escalera.</li>
          <li>Mantenimiento: Costos futuros de mantenimiento y reparación.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio de instalación de salvaescaleras</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Salvaescaleras rectos</strong>: €2,000 - €5,000, incluye instalación básica para escaleras sin curvas.
          </li>
          <li>
            <strong>Salvaescaleras curvos</strong>: €5,000 - €10,000, requiere instalación especializada para escaleras con curvas o descansos.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación del espacio y necesidades</strong>: Determinar el tipo y tamaño del salvaescaleras requerido.</p>
        <p>2. <strong>Obtención de cotizaciones</strong>: Comparar precios y servicios ofrecidos por varios proveedores.</p>
        <p>3. <strong>Consideración de mantenimiento</strong>: Incluir costos futuros de mantenimiento y reparación en tu presupuesto.</p>
        <p>4. <strong>Instalación profesional</strong>: Contratar a instaladores con experiencia y referencias sólidas.</p>
      </section>

      <section>
        <p className="text-lg">
          Con una planificación cuidadosa, puedes garantizar que la instalación de un salvaescaleras sea una inversión beneficiosa para la accesibilidad de tu hogar.
        </p>
      </section>
    </div>
  );
};

export default CuantoCuestaInstalarSalvaescaleras;
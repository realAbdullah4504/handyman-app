import Head from 'next/head';

const DesbrozarJardinCost = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta desbrozar un jardín? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados a desbrozar un jardín y cómo planificar esta tarea según tus necesidades y presupuesto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-desbrozar-jardin`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta desbrozar un jardín?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Desbroce Básico: 100€ - 300€</p>
            <p>Incluye desbroce de maleza ligera y pequeños arbustos.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Desbroce Completo: 300€ - 1000€</p>
            <p>Incluye desbroce de maleza densa, arbustos grandes y preparación del terreno.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño del área a desbrozar.</li>
          <li>Densidad y tipo de vegetación presente.</li>
          <li>Necesidad de eliminación de residuos vegetales.</li>
          <li>Accesibilidad al sitio de trabajo.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Costos Promedio de Desbroce de Jardín</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Desbroce Básico</strong>: 100€ - 300€, incluye desbroce de maleza ligera y pequeños arbustos.
          </li>
          <li>
            <strong>Desbroce Completo</strong>: 300€ - 1000€, incluye desbroce de maleza densa, arbustos grandes y preparación del terreno.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Consejos para Desbrozar un Jardín</h2>
        <p>1. <strong>Evalúa el Estado del Jardín</strong>: Determina la cantidad de trabajo necesario antes de contratar un servicio de desbroce.</p>
        <p>2. <strong>Solicita Varios Presupuestos</strong>: Obtén estimaciones de diferentes empresas de jardinería para comparar precios y servicios.</p>
        <p>3. <strong>Considera el Mantenimiento</strong>: Planifica el mantenimiento regular para evitar que la maleza vuelva a crecer rápidamente.</p>
        <p>4. <strong>Recicla los Residuos</strong>: Averigua si el servicio de desbroce incluye la eliminación y reciclaje adecuado de los residuos vegetales.</p>
      </section>

      <section>
        <p className="text-lg">
          Calcula el presupuesto para desbrozar tu jardín según sus necesidades específicas y asegúrate de considerar todos los factores relevantes para un trabajo de calidad.
        </p>
      </section>
    </div>
  );
};

export default DesbrozarJardinCost;
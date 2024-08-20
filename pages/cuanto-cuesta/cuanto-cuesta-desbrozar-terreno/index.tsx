import Head from 'next/head';

const DesbrozarTerrenoCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta desbrozar un terreno? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el desbroce de terrenos, incluyendo la superficie, la vegetación presente y la accesibilidad."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-desbrozar-terreno`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta desbrozar un terreno?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo por Metro Cuadrado: 1€ - 5€+</p>
            <p>Dependiendo de la densidad de la vegetación y el tamaño del terreno.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo Total Estimado: 500€ - 5,000€+</p>
            <p>Varía según la extensión del terreno y la dificultad de acceso.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño del Terreno: Área total a desbrozar en metros cuadrados.</li>
          <li>Densidad de la Vegetación: Tipo de vegetación y su densidad en el terreno.</li>
          <li>Accesibilidad: Facilidad o dificultad para acceder al terreno con maquinaria.</li>
          <li>Eliminación de Residuos: Costo adicional para la eliminación de desechos vegetales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Costos Promedio para Desbrozar un Terreno</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Por Metro Cuadrado</strong>: 1€ - 5€+, dependiendo de la densidad y el tipo de vegetación.
          </li>
          <li>
            <strong>Costo Total</strong>: 500€ - 5,000€+, considerando la superficie y la accesibilidad.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación Inicial</strong>: Inspeccionar el terreno y determinar la densidad de la vegetación.</p>
        <p>2. <strong>Obtener Cotizaciones</strong>: Solicitar presupuestos detallados a varias empresas especializadas.</p>
        <p>3. <strong>Considerar Desechos</strong>: Incluir costos para la eliminación de residuos vegetales.</p>
        <p>4. <strong>Factor en la Accesibilidad</strong>: Evaluar la facilidad de acceso para maquinaria pesada.</p>
      </section>

      <section>
        <p className="text-lg">
          Desbrozar un terreno es esencial para preparar el área antes de cualquier proyecto de construcción o desarrollo.
        </p>
      </section>
    </div>
  );
};

export default DesbrozarTerrenoCoste;
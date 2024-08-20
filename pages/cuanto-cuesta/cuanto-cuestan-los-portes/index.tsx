import Head from 'next/head';

const PortesCost = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuestan los portes? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados a los portes y cómo calcular el presupuesto para tu traslado."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuestan-los-portes`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuestan los portes?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo Básico: 100€ - 300€</p>
            <p>Para traslados locales o pequeñas cargas.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo Medio: 300€ - 800€</p>
            <p>Para traslados interurbanos o cargas voluminosas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Distancia del traslado y ubicaciones involucradas.</li>
          <li>Tamaño y peso de los objetos a transportar.</li>
          <li>Servicios adicionales como embalaje y montaje de muebles.</li>
          <li>Temporada del año y días de la semana.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Costos Promedio de Portes</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Costo Básico</strong>: 100€ - 300€, para traslados locales o pequeñas cargas.
          </li>
          <li>
            <strong>Costo Medio</strong>: 300€ - 800€, para traslados interurbanos o cargas voluminosas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Consejos para Calcular el Presupuesto de Portes</h2>
        <p>1. <strong>Evalúa los Requerimientos</strong>: Determina el volumen y peso de los objetos a trasladar.</p>
        <p>2. <strong>Comparación de Precios</strong>: Solicita presupuestos de varias empresas de portes para obtener la mejor tarifa.</p>
        <p>3. <strong>Servicios Adicionales</strong>: Considera servicios de embalaje, desmontaje y montaje según tus necesidades.</p>
        <p>4. <strong>Planificación</strong>: Programa tu traslado en días menos demandados para potencialmente ahorrar en costos.</p>
      </section>

      <section>
        <p className="text-lg">
          Calcula el presupuesto para tus portes considerando todos los factores relevantes y asegurando una traslado eficiente y económico.
        </p>
      </section>
    </div>
  );
};

export default PortesCost;
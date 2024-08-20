import Head from 'next/head';

const AlquilarAndamiosCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta alquilar andamios? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con el alquiler de andamios y cómo presupuestar para este tipo de necesidades en España."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-alquilar-andamios`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta alquilar andamios?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Andamios Estándar: €50 - €100 por semana</p>
            <p>Andamios básicos para proyectos estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Andamios Especializados: €100 - €200 por semana</p>
            <p>Andamios con características especiales o para proyectos más complejos.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de andamio: Estándar versus especializado o personalizado.</li>
          <li>Duración del alquiler: Tarifas por día, semana o mes.</li>
          <li>Accesorios y extras: Costos adicionales por plataformas, escaleras, etc.</li>
          <li>Ubicación geográfica: Precios varían según la zona y la disponibilidad local.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para alquilar andamios</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Andamios Estándar</strong>: €50 - €100 por semana, para proyectos estándar con necesidades básicas de andamios.
          </li>
          <li>
            <strong>Andamios Especializados</strong>: €100 - €200 por semana, para proyectos que requieren características especiales o más complejidad.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluar necesidades específicas</strong>: Determinar el tipo y cantidad de andamios necesarios para el proyecto.</p>
        <p>2. <strong>Solicitar cotizaciones</strong>: Obtener múltiples presupuestos de proveedores de andamios.</p>
        <p>3. <strong>Considerar accesorios y extras</strong>: Incluir costos adicionales por plataformas, escaleras u otros accesorios necesarios.</p>
        <p>4. <strong>Confirmar disponibilidad y tiempos de entrega</strong>: Asegurarse de que los andamios estén disponibles para la fecha requerida y coordinar la entrega.</p>
      </section>

      <section>
        <p className="text-lg">
          Al entender los factores que afectan los costos y planificar adecuadamente, puedes alquilar andamios de manera eficiente y dentro de tu presupuesto para tu proyecto.
        </p>
      </section>
    </div>
  );
};

export default AlquilarAndamiosCoste;
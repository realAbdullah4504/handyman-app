import Head from 'next/head';

const CuantoCuestaTapizarMuebles = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta tapizar muebles? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el tapizado de muebles y cómo planificar tu presupuesto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-tapizar-muebles`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta tapizar muebles?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Sofá de tres plazas: €300 - €600</p>
            <p>Incluye tela estándar y mano de obra básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Sillón individual: €100 - €300</p>
            <p>Dependiendo del tamaño y complejidad del diseño.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de mueble: Sofás, sillones, sillas, etc.</li>
          <li>Tela y material: Tela estándar versus tela premium.</li>
          <li>Tamaño y diseño: Número de plazas, detalles de diseño, etc.</li>
          <li>Estado actual: Necesidad de reparaciones previas al tapizado.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Presupuesto y planificación</h2>
        <p>1. <strong>Selección de tela</strong>: Elije entre opciones de tela estándar o premium.</p>
        <p>2. <strong>Obtener cotizaciones</strong>: Solicita presupuestos detallados de varios tapiceros.</p>
        <p>3. <strong>Revisión de muestras</strong>: Examina muestras de tela y verifica calidad y durabilidad.</p>
        <p>4. <strong>Considerar extras</strong>: Pregunta sobre extras como tratamientos antimanchas o garantías.</p>
      </section>

      <section>
        <p className="text-lg">
          Tapizar tus muebles puede revitalizar su apariencia y prolongar su vida útil de manera efectiva.
        </p>
      </section>
    </div>
  );
};

export default CuantoCuestaTapizarMuebles;

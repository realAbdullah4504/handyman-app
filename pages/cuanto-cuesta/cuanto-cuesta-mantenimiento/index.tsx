import Head from 'next/head';

const CuantoCuestaMantenimiento = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta el mantenimiento? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el mantenimiento de diferentes tipos de propiedades y cómo planificar tu presupuesto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-mantenimiento`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta el mantenimiento?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Mantenimiento de jardines: €50 - €200 al mes</p>
            <p>Varía según el tamaño del jardín y la frecuencia del mantenimiento.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Mantenimiento de edificios: €100 - €500 al mes</p>
            <p>Incluye limpieza, reparaciones menores y servicios de mantenimiento general.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de propiedad: Casa, apartamento, edificio comercial, etc.</li>
          <li>Tamaño de la propiedad: Área total que requiere mantenimiento.</li>
          <li>Tipo de servicio: Mantenimiento de jardines, limpieza, reparaciones, etc.</li>
          <li>Ubicación: Precios pueden variar según la región geográfica.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Presupuesto y planificación</h2>
        <p>1. <strong>Identificación de necesidades</strong>: Evalúa qué tipo de mantenimiento necesitas.</p>
        <p>2. <strong>Comparación de proveedores</strong>: Solicita presupuestos de varios proveedores de servicios de mantenimiento.</p>
        <p>3. <strong>Consideración de calidad</strong>: Equilibra costos con la calidad del servicio ofrecido.</p>
        <p>4. <strong>Programación de mantenimiento</strong>: Planifica el mantenimiento regular para prevenir problemas costosos a largo plazo.</p>
      </section>

      <section>
        <p className="text-lg">
          El mantenimiento adecuado puede prolongar la vida útil de tus propiedades y asegurar su buen estado.
        </p>
      </section>
    </div>
  );
};

export default CuantoCuestaMantenimiento;
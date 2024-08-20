import Head from 'next/head';

const RepararSaunaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta reparar una sauna? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la reparación de saunas y cómo presupuestar para este tipo de servicio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-reparar-sauna`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta reparar una sauna?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación básica: €100 - €300</p>
            <p>Reparaciones menores como ajustes de temperatura o luces.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación completa: €300 - €1,000</p>
            <p>Reparaciones importantes como cambio de partes o sistemas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de reparación: Desde ajustes simples hasta cambios completos de componentes.</li>
          <li>Estado de la sauna: Edad, mantenimiento previo y condiciones generales.</li>
          <li>Profesionalismo: Contratar expertos en reparación de saunas para asegurar calidad.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para reparación de saunas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Reparación básica</strong>: €100 - €300, ajustes menores de temperatura o luces.
          </li>
          <li>
            <strong>Reparación completa</strong>: €300 - €1,000, cambios importantes de partes o sistemas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Identificación de problemas</strong>: Evaluar los problemas específicos de la sauna.</p>
        <p>2. <strong>Priorización de reparaciones</strong>: Determinar las reparaciones necesarias según el presupuesto.</p>
        <p>3. <strong>Profesionalismo en la reparación</strong>: Contratar técnicos especializados en saunas para garantizar la reparación adecuada.</p>
      </section>

      <section>
        <p className="text-lg">
          Planifica tu presupuesto considerando los factores que afectan los costos y selecciona un servicio de reparación que se ajuste a tus necesidades y presupuesto.
        </p>
      </section>
    </div>
  );
};

export default RepararSaunaCoste;

import Head from 'next/head';

const CuantoCuestaPerito = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta contratar a un perito? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la contratación de peritos para diferentes tipos de servicios y cómo planificar tu presupuesto para estos profesionales."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-perito`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta contratar a un perito?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Tarifa por Hora: 50€ - 150€</p>
            <p>Dependiendo de la especialización y la experiencia del perito.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Tarifa por Servicio: 500€ - 5,000€</p>
            <p>Para servicios específicos como peritajes judiciales o valoraciones técnicas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Especialización del Perito: Peritos en áreas técnicas o legales pueden cobrar tarifas más altas.</li>
          <li>Complejidad del Servicio: Servicios que requieren análisis detallado pueden tener costos más elevados.</li>
          <li>Ubicación Geográfica: Los costos pueden variar según la región y la demanda de servicios de peritaje.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Contratar a un Perito</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Tarifa por Hora</strong>: 50€ - 150€, dependiendo de la especialización y experiencia del perito.
          </li>
          <li>
            <strong>Tarifa por Servicio</strong>: 500€ - 5,000€, para servicios específicos como peritajes judiciales o valoraciones técnicas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluar las Necesidades del Servicio</strong>: Determinar qué tipo de perito necesitas y para qué propósito.</p>
        <p>2. <strong>Solicitar Varios Presupuestos</strong>: Obtener cotizaciones detalladas de diferentes peritos.</p>
        <p>3. <strong>Revisar Experiencia y Credenciales</strong>: Elegir un perito con la experiencia adecuada para tu caso específico.</p>
        <p>4. <strong>Definir los Términos del Servicio</strong>: Establecer claramente las expectativas y el alcance del trabajo con el perito.</p>
      </section>

      <section>
        <p className="text-lg">
          Contratar a un perito cualificado es esencial para servicios técnicos y legales. Planificar tu presupuesto te ayudará a asegurar un servicio de calidad y cumplir con los objetivos de tu proyecto.
        </p>
      </section>
    </div>
  );
};

export default CuantoCuestaPerito;
import Head from 'next/head';

const ConstructoraCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta contratar a una constructora? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con la contratación de una constructora y cómo presupuestar para proyectos de construcción."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-contratar-una-constructora`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta contratar a una constructora?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Proyecto Básico: €100,000 - €300,000</p>
            <p>Incluye proyectos residenciales estándar y materiales básicos.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Proyecto Premium: €300,000 - €1,000,000+</p>
            <p>Incluye proyectos personalizados con materiales de alta calidad y diseño arquitectónico.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y complejidad del proyecto: desde proyectos residenciales simples hasta construcciones complejas.</li>
          <li>Materiales utilizados: costos varían según la calidad y especificaciones de los materiales.</li>
          <li>Ubicación: precios pueden variar significativamente según la ubicación geográfica y condiciones del mercado local.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para constructoras</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Proyecto Básico</strong>: €100,000 - €300,000, incluyendo proyectos residenciales estándar y materiales básicos.
          </li>
          <li>
            <strong>Proyecto Premium</strong>: €300,000 - €1,000,000+, incluyendo proyectos personalizados con materiales de alta calidad y diseño arquitectónico.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Definir el alcance del proyecto</strong>: Detallar los requisitos y expectativas del proyecto de construcción.</p>
        <p>2. <strong>Solicitar múltiples presupuestos</strong>: Obtener estimaciones de diferentes constructoras para comparar costos y servicios ofrecidos.</p>
        <p>3. <strong>Revisar experiencia y referencias</strong>: Seleccionar una constructora con experiencia comprobada y buenas referencias de proyectos anteriores.</p>
        <p>4. <strong>Negociar términos claros</strong>: Establecer un contrato detallado que incluya costos, cronograma y términos de pago.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar tu presupuesto y entender los factores que afectan los costos de contratar una constructora, puedes asegurar el éxito de tu proyecto de construcción dentro de tus posibilidades financieras.
        </p>
      </section>
    </div>
  );
};

export default ConstructoraCoste;
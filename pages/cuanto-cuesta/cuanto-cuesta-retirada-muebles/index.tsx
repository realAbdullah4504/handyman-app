import Head from 'next/head';

const RetiradaMueblesCost = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta la retirada de muebles? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados a la retirada de muebles y cómo planificar el servicio según tus necesidades."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-retirada-muebles`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta la retirada de muebles?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Retirada Básica: 50€ - 200€</p>
            <p>Incluye la retirada de muebles estándar y desmontaje básico.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Retirada Completa: 200€ - 500€</p>
            <p>Servicio completo con desmontaje, embalaje y retirada de muebles grandes o especializados.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y cantidad de los muebles a retirar.</li>
          <li>Complejidad del desmontaje y embalaje necesario.</li>
          <li>Necesidad de equipos especiales o mano de obra adicional.</li>
          <li>Ubicación y acceso al lugar de retirada.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Costos Promedio de Retirada de Muebles</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Retirada Básica</strong>: 50€ - 200€, incluye la retirada de muebles estándar y desmontaje básico.
          </li>
          <li>
            <strong>Retirada Completa</strong>: 200€ - 500€, servicio completo con desmontaje, embalaje y retirada de muebles grandes o especializados.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Consejos para Planificar el Servicio de Retirada de Muebles</h2>
        <p>1. <strong>Evalúa tus Necesidades</strong>: Determina qué muebles necesitas retirar y su estado.</p>
        <p>2. <strong>Solicita Varios Presupuestos</strong>: Comparar precios y servicios entre diferentes empresas.</p>
        <p>3. <strong>Considera la Sostenibilidad</strong>: Pregunta sobre opciones de reciclaje o donación de muebles.</p>
        <p>4. <strong>Programa con Anticipación</strong>: Planifica la retirada de muebles con tiempo suficiente antes de la mudanza o renovación.</p>
      </section>

      <section>
        <p className="text-lg">
          Calcula el presupuesto para la retirada de muebles teniendo en cuenta todos los factores relevantes y asegurando un servicio eficiente y sin complicaciones.
        </p>
      </section>
    </div>
  );
};

export default RetiradaMueblesCost;

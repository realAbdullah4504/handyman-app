import Head from 'next/head';

const EmbalajeCost = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta el servicio de embalaje? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados al servicio de embalaje y cómo calcular el presupuesto para tu traslado."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-servicio-de-embalaje`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta el servicio de embalaje?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Embalaje Básico: 50€ - 150€</p>
            <p>Para objetos estándar y pequeñas mudanzas.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Embalaje Completo: 150€ - 500€</p>
            <p>Incluye embalaje especializado y para artículos frágiles.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y cantidad de los objetos a embalar.</li>
          <li>Complejidad y fragilidad de los artículos.</li>
          <li>Necesidad de materiales de embalaje especializados.</li>
          <li>Servicios adicionales como desmontaje y montaje de muebles.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Costos Promedio del Servicio de Embalaje</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Embalaje Básico</strong>: 50€ - 150€, para objetos estándar y pequeñas mudanzas.
          </li>
          <li>
            <strong>Embalaje Completo</strong>: 150€ - 500€, incluye embalaje especializado y para artículos frágiles.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Consejos para Calcular el Presupuesto de Embalaje</h2>
        <p>1. <strong>Evalúa los Requerimientos</strong>: Determina el tipo y cantidad de embalaje necesario.</p>
        <p>2. <strong>Solicita Varios Presupuestos</strong>: Obtén cotizaciones detalladas de diferentes empresas de mudanzas.</p>
        <p>3. <strong>Considera la Fragilidad</strong>: Asegúrate de incluir el embalaje especializado para artículos delicados.</p>
        <p>4. <strong>Planificación</strong>: Programa el servicio de embalaje con antelación para coordinar con tu mudanza.</p>
      </section>

      <section>
        <p className="text-lg">
          Calcula el presupuesto para el servicio de embalaje considerando todos los factores relevantes y asegurando una mudanza segura y eficiente.
        </p>
      </section>
    </div>
  );
};

export default EmbalajeCost;
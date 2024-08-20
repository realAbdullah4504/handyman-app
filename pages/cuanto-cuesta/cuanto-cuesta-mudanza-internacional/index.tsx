import Head from 'next/head';

const MudanzaInternacionalCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta una mudanza internacional? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con las mudanzas internacionales y cómo planificar tu presupuesto para este servicio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-mudanza-internacional`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta una mudanza internacional?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Mudanza Básica: 1,000€ - 5,000€</p>
            <p>Incluye transporte y servicios mínimos.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Mudanza Compleja: 5,000€ - 15,000€+</p>
            <p>Incluye embalaje especializado y gestión aduanal.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Distancia y Ruta: Kilómetros y complejidad del itinerario.</li>
          <li>Embalaje y Aduanas: Necesidad de embalaje especializado y trámites aduaneros.</li>
          <li>Entrega y Seguro: Cobertura de seguro y método de entrega (puerta a puerta, puerto a puerto, etc.).</li>
          <li>Temporada y Temporalidad: Precios pueden variar según la demanda y la temporada del año.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Mudanzas Internacionales</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Mudanza Básica</strong>: 1,000€ - 5,000€, incluyendo transporte y servicios mínimos.
          </li>
          <li>
            <strong>Mudanza Compleja</strong>: 5,000€ - 15,000€+, incluyendo embalaje especializado y gestión aduanal.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de Necesidades</strong>: Determina el volumen y los servicios adicionales requeridos para la mudanza internacional.</p>
        <p>2. <strong>Obtener Cotizaciones Detalladas</strong>: Solicita varios presupuestos de empresas de mudanzas internacionales para comparar precios y servicios.</p>
        <p>3. <strong>Consideraciones Legales y Aduaneras</strong>: Asegúrate de entender los requisitos aduaneros y legales del país de destino.</p>
        <p>4. <strong>Embalaje y Seguro</strong>: Elige un proveedor que ofrezca embalaje seguro y opciones de seguro de carga adecuadas.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar cuidadosamente una mudanza internacional, puedes asegurarte de que se realice de manera eficiente y dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default MudanzaInternacionalCoste;
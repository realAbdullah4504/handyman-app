import Head from 'next/head';

const MudanzaOficinasCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta una mudanza de oficinas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con las mudanzas de oficinas y cómo planificar tu presupuesto para este servicio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-mudanza-oficinas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta una mudanza de oficinas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Mudanza Básica: 500€ - 2,000€</p>
            <p>Para pequeñas oficinas con mobiliario estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Mudanza Compleja: 2,000€ - 10,000€+</p>
            <p>Para oficinas grandes con equipo especializado y servicios adicionales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño de la Oficina: Metros cuadrados y cantidad de equipos a mover.</li>
          <li>Equipamiento Especializado: Equipos sensibles o tecnológicos.</li>
          <li>Distancia y Accesibilidad: Costos pueden variar según la distancia y facilidad de acceso.</li>
          <li>Horarios y Temporalidad: Puede haber tarifas adicionales para mudanzas fuera de horario laboral.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Mudanzas de Oficinas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Mudanza Básica</strong>: 500€ - 2,000€, para pequeñas oficinas con mobiliario estándar.
          </li>
          <li>
            <strong>Mudanza Compleja</strong>: 2,000€ - 10,000€+, para oficinas grandes con equipo especializado y servicios adicionales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluar Necesidades de Mudanza</strong>: Determinar el tamaño y requisitos especiales de la oficina.</p>
        <p>2. <strong>Obtener Múltiples Cotizaciones</strong>: Comparar precios y servicios ofrecidos por varias empresas de mudanzas.</p>
        <p>3. <strong>Consideraciones Logísticas</strong>: Coordinar el acceso, horarios y requerimientos especiales con la empresa de mudanzas.</p>
        <p>4. <strong>Planificación del Tiempo</strong>: Asegurarse de cumplir con los plazos y minimizar interrupciones en las operaciones.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar cuidadosamente una mudanza de oficinas, puedes asegurarte de que se realice de manera eficiente y dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default MudanzaOficinasCoste;
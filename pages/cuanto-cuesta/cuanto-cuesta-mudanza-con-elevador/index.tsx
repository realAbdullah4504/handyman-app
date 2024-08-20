import Head from 'next/head';

const MudanzaConElevadorCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta una mudanza con elevador? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con las mudanzas que requieren el uso de elevadores y cómo planificar tu presupuesto para este servicio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-mudanza-con-elevador`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta una mudanza con elevador?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Mudanza Básica: 300€ - 1,000€</p>
            <p>Incluye elevador básico y mano de obra.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Mudanza Compleja: 1,000€ - 3,000€</p>
            <p>Incluye elevador especializado y servicios adicionales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Peso de los Objetos: Impacto en la capacidad del elevador necesario.</li>
          <li>Altura y Acceso: Número de pisos y facilidad de acceso para el montaje del elevador.</li>
          <li>Equipamiento Especial: Necesidad de elevadores especializados para cargas pesadas o voluminosas.</li>
          <li>Fecha y Temporalidad: Demanda y disponibilidad en fechas específicas.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Mudanzas con Elevador</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Mudanza Básica</strong>: 300€ - 1,000€, incluyendo elevador básico y mano de obra.
          </li>
          <li>
            <strong>Mudanza Compleja</strong>: 1,000€ - 3,000€, incluyendo elevador especializado y servicios adicionales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de Necesidades</strong>: Determina el volumen y los servicios adicionales requeridos para la mudanza con elevador.</p>
        <p>2. <strong>Solicitar Varios Presupuestos</strong>: Obtén cotizaciones detalladas de varias empresas de mudanzas para comparar precios y servicios.</p>
        <p>3. <strong>Coordinación y Logística</strong>: Asegúrate de tener acceso confirmado para el montaje del elevador en el día de la mudanza.</p>
        <p>4. <strong>Seguridad y Regulaciones</strong>: Cumple con las normativas de seguridad y regulaciones locales para el uso de elevadores de mudanza.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar cuidadosamente una mudanza con elevador, puedes asegurarte de que se realice de manera eficiente y dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default MudanzaConElevadorCoste;
import Head from 'next/head';

const AmpliarAnchoDePuertaCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta ampliar el ancho de una puerta? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la ampliación del ancho de una puerta y cómo planificar tu presupuesto para este servicio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-ampliar-ancho-de-puerta`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta ampliar el ancho de una puerta?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Ampliación Básica: 200€ - 500€</p>
            <p>Incluye modificaciones estándar en el marco y la puerta.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Ampliación Personalizada: 500€ - 1000€</p>
            <p>Incluye modificaciones personalizadas y ajustes especiales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Material de la Puerta: Madera, PVC, metal, etc.</li>
          <li>Complejidad del Trabajo: Simple ajuste vs. reconstrucción parcial.</li>
          <li>Acabados Adicionales: Pintura, barnizado o acabados decorativos.</li>
          <li>Ubicación: Variaciones en costos según la región y proveedores locales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Ampliar el Ancho de una Puerta</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Ampliación Básica</strong>: 200€ - 500€, incluyendo modificaciones estándar en el marco y la puerta.
          </li>
          <li>
            <strong>Ampliación Personalizada</strong>: 500€ - 1000€, incluyendo modificaciones personalizadas y ajustes especiales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de la Puerta</strong>: Inspección inicial para determinar las modificaciones necesarias.</p>
        <p>2. <strong>Solicitar Cotizaciones</strong>: Obtener presupuestos detallados de varios carpinteros o especialistas en puertas.</p>
        <p>3. <strong>Selección de Materiales y Acabados</strong>: Elegir opciones que se ajusten a tu presupuesto y requisitos estéticos.</p>
        <p>4. <strong>Confirmación de Trabajo</strong>: Asegurarte de que el contratista seleccionado entienda claramente tus expectativas y necesidades.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente la ampliación del ancho de una puerta, puedes mejorar la accesibilidad y estética de tu hogar, manteniéndote dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default AmpliarAnchoDePuertaCosto;
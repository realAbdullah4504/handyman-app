import Head from 'next/head';

const QuitarEscalon = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta quitar un escalón? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la eliminación de un escalón y cómo planificar tu presupuesto para este proyecto de construcción."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/quitar-escalon`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta quitar un escalón?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Eliminación Básica: 100€ - 200€ por escalón</p>
            <p>Incluye demolición y eliminación de escombros básicos.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Eliminación Compleja: 200€ - 400€ por escalón</p>
            <p>Incluye estructuras complejas o escalones de mayor tamaño.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Complejidad del Escalón: Dimensiones y diseño del escalón a eliminar.</li>
          <li>Estado del Escalón: Condición actual y necesidad de reparaciones adicionales.</li>
          <li>Accesibilidad: Facilidad de acceso al sitio de trabajo.</li>
          <li>Ubicación: Costos regionales y variaciones del mercado.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Quitar un Escalón</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Eliminación Básica</strong>: 100€ - 200€ por escalón, incluyendo demolición y eliminación de escombros básicos.
          </li>
          <li>
            <strong>Eliminación Compleja</strong>: 200€ - 400€ por escalón, incluyendo estructuras complejas o escalones de mayor tamaño.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación del Escalón</strong>: Inspección para determinar tamaño y complejidad.</p>
        <p>2. <strong>Cotización de Materiales</strong>: Obtención de presupuestos detallados para materiales necesarios.</p>
        <p>3. <strong>Consideración de Tiempo y Mano de Obra</strong>: Estimación del tiempo requerido y costos de mano de obra.</p>
        <p>4. <strong>Reparaciones Adicionales</strong>: Planificación para reparaciones o modificaciones adicionales necesarias.</p>
      </section>

      <section>
        <p className="text-lg">
          La eliminación de un escalón puede mejorar la accesibilidad y estética de tu espacio. Asegúrate de planificar cuidadosamente para ajustarte a tu presupuesto y necesidades específicas.
        </p>
      </section>
    </div>
  );
};

export default QuitarEscalon;

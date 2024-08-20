import Head from 'next/head';

const RepararPuertasCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta reparar puertas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la reparación de puertas y cómo planificar tu presupuesto para mantener tus puertas en condiciones óptimas."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-reparar-puertas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta reparar puertas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación Básica: 50€ - 100€ por puerta</p>
            <p>Incluye reparaciones estándar como ajuste de bisagras o reparación de cerraduras.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación Avanzada: 100€ - 200€ por puerta</p>
            <p>Incluye reparaciones especializadas como restauración de madera o instalación de nuevas cerraduras.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Estado Actual de las Puertas: Daños menores vs. daños estructurales.</li>
          <li>Tipo de Reparación Necesaria: Reparaciones básicas vs. reparaciones completas o especializadas.</li>
          <li>Cantidad de Puertas a Reparar: Número total de puertas que necesitan ser reparadas.</li>
          <li>Ubicación: Los precios pueden variar según la ubicación geográfica y las condiciones del mercado local.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Reparar Puertas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Reparación Básica</strong>: 50€ - 100€ por puerta, incluyendo ajuste de bisagras o reparación de cerraduras.
          </li>
          <li>
            <strong>Reparación Avanzada</strong>: 100€ - 200€ por puerta, incluyendo restauración de madera o instalación de nuevas cerraduras.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación del Estado de las Puertas</strong>: Determina la cantidad y tipo de reparaciones necesarias para cada puerta.</p>
        <p>2. <strong>Obtención de Cotizaciones</strong>: Solicita varios presupuestos de diferentes proveedores para comparar precios y servicios ofrecidos.</p>
        <p>3. <strong>Consideración de Costos a Largo Plazo</strong>: Reparar puertas correctamente puede evitar costos mayores en el futuro por daños adicionales.</p>
        <p>4. <strong>Selección de Proveedor</strong>: Elige un proveedor con experiencia y buena reputación para asegurar trabajos de reparación de calidad.</p>
      </section>

      <section>
        <p className="text-lg">
          Planificar y presupuestar adecuadamente la reparación de puertas puede mantener la funcionalidad y estética de tu hogar, mientras te mantienes dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default RepararPuertasCosto;
import Head from 'next/head';

const RepararVentanasCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta reparar ventanas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la reparación de ventanas y cómo planificar tu presupuesto para mantener la funcionalidad y eficiencia energética de tus ventanas."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-reparar-ventanas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta reparar ventanas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación Básica: 50€ - 100€ por ventana</p>
            <p>Incluye reparaciones estándar como ajuste de marcos o reemplazo de manivelas.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación Avanzada: 100€ - 200€ por ventana</p>
            <p>Incluye reparaciones especializadas como reemplazo de vidrios o renovación de sellados.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Estado Actual de las Ventanas: Daños menores vs. ventanas en mal estado.</li>
          <li>Tipo de Reparación Necesaria: Reparaciones básicas vs. reparaciones completas o especializadas.</li>
          <li>Cantidad de Ventanas a Reparar: Número total de ventanas que necesitan ser reparadas.</li>
          <li>Ubicación: Los precios pueden variar según la ubicación geográfica y las condiciones del mercado local.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Reparar Ventanas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Reparación Básica</strong>: 50€ - 100€ por ventana, incluyendo ajuste de marcos o reemplazo de manivelas.
          </li>
          <li>
            <strong>Reparación Avanzada</strong>: 100€ - 200€ por ventana, incluyendo reemplazo de vidrios o renovación de sellados.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación del Estado de las Ventanas</strong>: Determina la cantidad y tipo de reparaciones necesarias para cada ventana.</p>
        <p>2. <strong>Obtención de Cotizaciones</strong>: Solicita varios presupuestos de diferentes proveedores para comparar precios y servicios ofrecidos.</p>
        <p>3. <strong>Consideración de Beneficios a Largo Plazo</strong>: Reparar ventanas adecuadamente puede mejorar la eficiencia energética y reducir costos de calefacción y refrigeración.</p>
        <p>4. <strong>Selección de Proveedor</strong>: Elige un proveedor con experiencia en reparación de ventanas para garantizar trabajos de calidad y duraderos.</p>
      </section>

      <section>
        <p className="text-lg">
          Planificar y presupuestar adecuadamente la reparación de ventanas puede mantener la funcionalidad y eficiencia energética de tus ventanas, mientras te mantienes dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default RepararVentanasCosto;
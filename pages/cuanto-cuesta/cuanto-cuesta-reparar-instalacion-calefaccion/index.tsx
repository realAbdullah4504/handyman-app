import Head from 'next/head';

const RepararInstalacionCalefaccionCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta reparar una instalación de calefacción? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la reparación de una instalación de calefacción y cómo planificar tu presupuesto para este servicio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-reparar-instalacion-calefaccion`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta reparar una instalación de calefacción?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación Básica: 200€ - 500€</p>
            <p>Incluye reparaciones menores y piezas estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación Compleja: 500€ - 2.000€</p>
            <p>Incluye reparaciones mayores y reemplazo de componentes críticos.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Gravedad del Problema: Desde pequeñas fugas hasta fallos completos del sistema.</li>
          <li>Tipo de Sistema: Radiadores, suelo radiante, calderas, etc.</li>
          <li>Repuestos Necesarios: Costo y disponibilidad de piezas de repuesto.</li>
          <li>Profesionalismo: Experiencia del técnico y tarifas regionales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Reparación de Instalación de Calefacción</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Reparación Básica</strong>: 200€ - 500€, incluye reparaciones menores y piezas estándar.
          </li>
          <li>
            <strong>Reparación Compleja</strong>: 500€ - 2.000€, incluye reparaciones mayores y reemplazo de componentes críticos.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Diagnóstico del Problema</strong>: Identifica la causa raíz y el alcance del problema de calefacción.</p>
        <p>2. <strong>Comparación de Presupuestos</strong>: Solicita varias cotizaciones para evaluar opciones y costos.</p>
        <p>3. <strong>Consideraciones Adicionales</strong>: Incluye garantías, tiempo estimado de reparación y revisiones post-servicio.</p>
      </section>

      <section>
        <p className="text-lg">
          Reparar una instalación de calefacción puede variar significativamente en costos. Asegúrate de entender completamente el problema antes de proceder con cualquier reparación.
        </p>
      </section>
    </div>
  );
};

export default RepararInstalacionCalefaccionCoste;
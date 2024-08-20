import Head from 'next/head';

const RepararToldoCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta reparar un toldo? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con la reparación de toldos y cómo planificar tu presupuesto para este servicio de mantenimiento en el hogar."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-reparar-toldo`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta reparar un toldo?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación Básica: €50 - €200</p>
            <p>Incluye pequeños parches y ajustes menores.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación Avanzada: €200 - €500</p>
            <p>Incluye reemplazo de piezas importantes y reparaciones extensas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Daños y extensión: Gravedad de los daños y cantidad de trabajo necesario.</li>
          <li>Materiales: Calidad y tipo de materiales requeridos para la reparación.</li>
          <li>Profesionalismo: Costos adicionales por servicios de instalación profesional.</li>
          <li>Ubicación: Costos pueden variar según la ubicación geográfica y accesibilidad.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para reparación de toldos</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Reparación Básica</strong>: €50 - €200, incluyendo pequeños parches y ajustes menores.
          </li>
          <li>
            <strong>Reparación Avanzada</strong>: €200 - €500, incluyendo reemplazo de piezas importantes y reparaciones extensas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación de daños y necesidades</strong>: Determinar la gravedad de los daños y el tipo de reparación requerida.</p>
        <p>2. <strong>Solicitar múltiples presupuestos</strong>: Comparar estimaciones de varios proveedores de reparación de toldos.</p>
        <p>3. <strong>Considerar mantenimiento y durabilidad</strong>: Evaluar costos a largo plazo y beneficios de la calidad de la reparación.</p>
        <p>4. <strong>Garantía y servicio post-reparación</strong>: Asegurar la garantía y el servicio post-reparación ofrecido por los proveedores.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar tu presupuesto y comprender los factores que afectan los costos de reparación de toldos, puedes mantener tu espacio exterior en óptimas condiciones dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default RepararToldoCoste;

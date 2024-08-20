import Head from 'next/head';

const ArreglarPuertaCorrederaCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta arreglar una puerta corredera? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el arreglo de puertas correderas y cómo planificar tu presupuesto para este servicio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-arreglar-puerta-corredera`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta arreglar una puerta corredera?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación Básica: 50€ - 150€</p>
            <p>Incluye ajustes menores y reparaciones sencillas.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación Compleja: 150€ - 300€</p>
            <p>Incluye reemplazo de piezas y reparaciones más extensas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Grado de Daño: Extensión y tipo de reparación necesaria.</li>
          <li>Reemplazo de Componentes: Costos adicionales por materiales.</li>
          <li>Tiempo y Mano de Obra: Tarifas de trabajo y duración del servicio.</li>
          <li>Ubicación: Precios pueden variar según la región y proveedores locales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Arreglo de Puertas Correderas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Reparación Básica</strong>: 50€ - 150€, incluyendo ajustes menores y reparaciones sencillas.
          </li>
          <li>
            <strong>Reparación Compleja</strong>: 150€ - 300€, incluyendo reemplazo de piezas y reparaciones más extensas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación del Daño</strong>: Inspección inicial para determinar la causa y extensión del problema.</p>
        <p>2. <strong>Solicitar Cotizaciones</strong>: Obtener estimaciones detalladas de varios especialistas en reparación de puertas correderas.</p>
        <p>3. <strong>Consideración de Durabilidad</strong>: Optar por soluciones que minimicen problemas futuros.</p>
        <p>4. <strong>Selección del Proveedor</strong>: Elegir un profesional con experiencia en reparaciones de puertas correderas.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente el arreglo de una puerta corredera, puedes mejorar la funcionalidad y estética de tu espacio, manteniéndote dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default ArreglarPuertaCorrederaCosto;
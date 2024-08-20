import Head from 'next/head';

const ArreglarEnchufeCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta arreglar un enchufe? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el servicio de reparación de enchufes y cómo presupuestar para este tipo de trabajo eléctrico."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-arreglar-enchufe`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta arreglar un enchufe?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación Básica: €50 - €100 por enchufe</p>
            <p>Incluye revisión y reparación de problemas menores.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación Compleja: €100 - €200 por enchufe</p>
            <p>Incluye reemplazo de partes y solución de problemas eléctricos más complicados.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Gravedad del problema eléctrico.</li>
          <li>Necesidad de reemplazo de componentes.</li>
          <li>Costos adicionales de materiales y mano de obra.</li>
          <li>Ubicación y accesibilidad del enchufe.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Servicios de Reparación de Enchufes</h2>
        <ul className="list-disc list-inside">
          <li>Revisión de Circuitos: Desde €50 por visita para diagnóstico inicial.</li>
          <li>Reemplazo de Enchufes: Desde €20 por unidad más costo de instalación.</li>
          <li>Actualización de Cableado: Costos adicionales según la complejidad.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Diagnóstico del problema</strong>: Identificar la causa raíz del problema eléctrico.</p>
        <p>2. <strong>Obtención de cotizaciones</strong>: Solicitar estimaciones detalladas a electricistas y servicios de reparación.</p>
        <p>3. <strong>Consideración de opciones</strong>: Comparar costos y servicios ofrecidos por diferentes proveedores.</p>
        <p>4. <strong>Reparación y garantía</strong>: Asegurarse de que el trabajo esté respaldado por garantías y certificaciones.</p>
      </section>

      <section>
        <p className="text-lg">
          Al entender los factores que afectan los costos y planificar adecuadamente, puedes gestionar eficazmente la reparación de enchufes dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default ArreglarEnchufeCosto;
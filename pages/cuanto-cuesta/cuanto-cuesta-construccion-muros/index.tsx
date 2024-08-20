import Head from 'next/head';

const ConstruccionMurosCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta la construcción de muros? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con la construcción de muros y cómo presupuestar para tu proyecto de albañilería."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta-construccion-muros`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta la construcción de muros?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Muro Básico: €30 - €50 por metro cuadrado</p>
            <p>Incluye construcción estándar con ladrillos o bloques simples.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Muro de Piedra: €50 - €100+ por metro cuadrado</p>
            <p>Incluye construcción con piedra natural o materiales decorativos.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de material: El costo varía según si se utilizan ladrillos, bloques, piedra natural u otros materiales.</li>
          <li>Altura y diseño del muro: Muros más altos o con diseños complejos pueden aumentar los costos.</li>
          <li>Preparación del terreno: Costos adicionales para la nivelación del terreno y cimientos adecuados.</li>
          <li>Ubicación del proyecto: Los costos pueden variar según la accesibilidad y la ubicación geográfica.</li>
          <li>Acabados y detalles: Costos adicionales para acabados decorativos y detalles estructurales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para construcción de muros</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Muro Básico</strong>: €30 - €50 por metro cuadrado, incluyendo construcción estándar con ladrillos o bloques simples.
          </li>
          <li>
            <strong>Muro de Piedra</strong>: €50 - €100+ por metro cuadrado, incluyendo construcción con piedra natural o materiales decorativos.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación del proyecto</strong>: Determinar el tipo y diseño del muro requerido.</p>
        <p>2. <strong>Solicitar cotizaciones</strong>: Obtener presupuestos detallados de contratistas de albañilería y proveedores de materiales.</p>
        <p>3. <strong>Gestión de materiales</strong>: Planificar la entrega y almacenamiento adecuados de materiales de construcción.</p>
        <p>4. <strong>Acabados y mantenimiento</strong>: Considerar los costos de mantenimiento y posibles reparaciones futuras del muro.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar la construcción de muros, considera estos factores para garantizar que el proyecto se realice dentro del presupuesto y cumpla con los requisitos estructurales y estéticos.
        </p>
      </section>
    </div>
  );
};

export default ConstruccionMurosCoste;
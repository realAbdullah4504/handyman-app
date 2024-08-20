import Head from 'next/head';

const CambiarInsertChimeneaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta cambiar un insert de chimenea? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con cambiar un insert de chimenea y cómo planificar tu presupuesto para esta mejora en tu sistema de calefacción."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-cambiar-insert-chimenea`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta cambiar un insert de chimenea?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Cambio Básico: 500€ - 1,000€</p>
            <p>Incluye el costo del insert estándar y la instalación básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Cambio Avanzado: 1,000€ - 3,000€</p>
            <p>Incluye insert de alta calidad y adaptaciones necesarias.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Tipo de Insert: Desde estándar hasta modelos personalizados.</li>
          <li>Calidad del Insert: Materiales y eficiencia energética del insert seleccionado.</li>
          <li>Adaptaciones Necesarias: Modificaciones en la chimenea existente y el sistema de ventilación.</li>
          <li>Ubicación: Precios que pueden variar según la ubicación geográfica y los servicios disponibles.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Cambiar un Insert de Chimenea</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Cambio Básico</strong>: 500€ - 1,000€, incluyendo el costo del insert estándar y la instalación básica.
          </li>
          <li>
            <strong>Cambio Avanzado</strong>: 1,000€ - 3,000€, incluyendo insert de alta calidad y adaptaciones necesarias.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de Necesidades</strong>: Determina el tamaño y especificaciones del nuevo insert.</p>
        <p>2. <strong>Consulta y Comparación</strong>: Obtén varios presupuestos detallados de profesionales en chimeneas.</p>
        <p>3. <strong>Consideración de Eficiencia Energética</strong>: Evalúa el ahorro energético y los beneficios de salud ambiental del nuevo insert.</p>
        <p>4. <strong>Selección de Profesionales</strong>: Elige un instalador con experiencia en sistemas de calefacción y chimeneas.</p>
      </section>

      <section>
        <p className="text-lg">
          Cambiar un insert de chimenea puede mejorar la eficiencia y estética de tu hogar, proporcionando calor más eficiente y reduciendo costos a largo plazo.
        </p>
      </section>
    </div>
  );
};

export default CambiarInsertChimeneaCoste;
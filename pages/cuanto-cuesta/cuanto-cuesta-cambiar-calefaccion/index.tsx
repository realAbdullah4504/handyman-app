import Head from 'next/head';

const CambiarCalefaccionCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta cambiar el sistema de calefacción? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el cambio del sistema de calefacción en tu hogar y cómo planificar tu presupuesto para este tipo de proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-cambiar-calefaccion`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta cambiar el sistema de calefacción?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Cambio Básico: 3,000€ - 6,000€</p>
            <p>Incluye reemplazo de caldera estándar y ajustes básicos.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Cambio Avanzado: 6,000€ - 10,000€</p>
            <p>Incluye sistema de calefacción de alta eficiencia y/o instalación compleja.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Sistema: Radiadores convencionales, suelo radiante, o sistemas de aire acondicionado con bomba de calor.</li>
          <li>Complejidad de la Instalación: Cambios estructurales necesarios, ajustes de tuberías, y requisitos de ventilación.</li>
          <li>Ubicación y Proveedor: Variaciones regionales en costos de materiales y mano de obra.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Cambio de Sistema de Calefacción</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Cambio Básico</strong>: 3,000€ - 6,000€, incluye reemplazo de caldera estándar y ajustes básicos.
          </li>
          <li>
            <strong>Cambio Avanzado</strong>: 6,000€ - 10,000€, incluye sistema de calefacción de alta eficiencia y/o instalación compleja.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de Necesidades</strong>: Determina las necesidades de calefacción según el tamaño y diseño de tu hogar.</p>
        <p>2. <strong>Cotizaciones y Comparaciones</strong>: Obtén presupuestos detallados de múltiples proveedores para evaluar opciones y costos.</p>
        <p>3. <strong>Consideraciones de Eficiencia</strong>: Elige sistemas que maximicen la eficiencia energética para reducir costos a largo plazo.</p>
        <p>4. <strong>Selección de Proveedor</strong>: Selecciona un proveedor con experiencia y referencias para garantizar una instalación adecuada y eficiente.</p>
      </section>

      <section>
        <p className="text-lg">
          Cambiar el sistema de calefacción de tu hogar puede mejorar el confort y la eficiencia energética, pero requiere una planificación cuidadosa del presupuesto.
        </p>
      </section>
    </div>
  );
};

export default CambiarCalefaccionCoste;
import Head from 'next/head';

const InstalarCalderaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar una caldera? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de una caldera en tu hogar y cómo planificar tu presupuesto para este tipo de proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-instalar-caldera`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar una caldera?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Básica: 1,000€ - 2,000€</p>
            <p>Incluye el costo de la caldera estándar y la instalación básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Avanzada: 2,000€ - 4,000€</p>
            <p>Incluye caldera de alta eficiencia y/o instalación compleja.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Caldera: Estándar vs. alta eficiencia energética o específica para necesidades especiales.</li>
          <li>Instalación: Complejidad de la instalación y necesidad de ajustes en la infraestructura existente.</li>
          <li>Materiales y Mano de Obra: Costos variarán dependiendo de los proveedores y ubicación geográfica.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Instalación de Caldera</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Instalación Básica</strong>: 1,000€ - 2,000€, incluye la caldera estándar y la instalación básica.
          </li>
          <li>
            <strong>Instalación Avanzada</strong>: 2,000€ - 4,000€, incluye caldera de alta eficiencia y/o instalación compleja.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de Necesidades</strong>: Determina la capacidad necesaria de la caldera según el tamaño de tu hogar.</p>
        <p>2. <strong>Cotizaciones y Comparaciones</strong>: Solicita presupuestos detallados de múltiples proveedores para comparar opciones.</p>
        <p>3. <strong>Consideraciones de Eficiencia</strong>: Evalúa la eficiencia energética de la caldera para costos operativos a largo plazo.</p>
        <p>4. <strong>Selección de Proveedor</strong>: Elige un proveedor con experiencia y garantías para asegurar una instalación adecuada y duradera.</p>
      </section>

      <section>
        <p className="text-lg">
          Planificar la instalación de una caldera te permite seleccionar opciones que se ajusten a tus necesidades de consumo y presupuesto.
        </p>
      </section>
    </div>
  );
};

export default InstalarCalderaCoste;
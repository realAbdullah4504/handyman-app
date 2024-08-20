import Head from 'next/head';

const PuertaPVCCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta una puerta de PVC? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de puertas de PVC y cómo planificar tu presupuesto para este servicio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-puerta-pvc`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta una puerta de PVC?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Puerta Básica: 300€ - 600€ por puerta</p>
            <p>Incluye puertas de PVC estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Puerta Premium: 600€ - 1200€ por puerta</p>
            <p>Incluye puertas de PVC con características adicionales como mayor seguridad o diseño personalizado.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Tipo de Puerta: Dimensiones y diseño (corredera, abatible, con vidrio, etc.).</li>
          <li>Calidad del Material: PVC estándar o de alta calidad con características adicionales.</li>
          <li>Acabados y Opciones: Color, acabado superficial, tipo de vidrio, herrajes, etc.</li>
          <li>Ubicación de Instalación: Piso bajo, altura del edificio y accesibilidad.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Instalación de Puerta de PVC</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Puerta Básica</strong>: 300€ - 600€ por puerta, incluye puertas de PVC estándar.
          </li>
          <li>
            <strong>Puerta Premium</strong>: 600€ - 1200€ por puerta, incluye puertas de PVC con características adicionales como mayor seguridad o diseño personalizado.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Medir y Evaluar</strong>: Determina el tamaño y tipo de puerta que necesitas instalar.</p>
        <p>2. <strong>Solicitar Presupuestos</strong>: Obtén varias cotizaciones detalladas de diferentes proveedores de puertas de PVC.</p>
        <p>3. <strong>Seleccionar Opciones</strong>: Considera la calidad, el diseño y las características adicionales de las puertas.</p>
        <p>4. <strong>Instalación y Mantenimiento</strong>: Asegúrate de coordinar la instalación con profesionales para garantizar un trabajo de calidad.</p>
      </section>

      <section>
        <p className="text-lg">
          Instalar una puerta de PVC puede mejorar la seguridad y la eficiencia energética de tu hogar, mientras optimizas tu presupuesto con la opción adecuada.
        </p>
      </section>
    </div>
  );
};

export default PuertaPVCCoste;

import Head from 'next/head';

const CambiarCalderaGasCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta cambiar una caldera de gas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el cambio de una caldera de gas y cómo planificar tu presupuesto para este servicio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-cambiar-caldera-gas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta cambiar una caldera de gas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Caldera Básica: 1.000€ - 2.000€</p>
            <p>Incluye la caldera estándar y la instalación básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Caldera Premium: 2.000€ - 5.000€</p>
            <p>Incluye una caldera de alta eficiencia y la instalación avanzada.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Caldera: Estándar vs. alta eficiencia, capacidad, etc.</li>
          <li>Complejidad de la Instalación: Requiere modificaciones estructurales, ubicación, etc.</li>
          <li>Marca y Modelo: Variaciones en costos según el fabricante y características.</li>
          <li>Ubicación Geográfica: Precios regionales y disponibilidad de instaladores.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Cambio de Caldera de Gas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Caldera Básica</strong>: 1.000€ - 2.000€, incluye la caldera estándar y la instalación básica.
          </li>
          <li>
            <strong>Caldera Premium</strong>: 2.000€ - 5.000€, incluye una caldera de alta eficiencia y la instalación avanzada.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de Necesidades</strong>: Determina el tipo y capacidad de caldera adecuada para tus necesidades.</p>
        <p>2. <strong>Comparación de Proveedores</strong>: Solicita varios presupuestos para obtener la mejor relación calidad-precio.</p>
        <p>3. <strong>Consideraciones Adicionales</strong>: Incluye costos de mantenimiento y garantías al evaluar las opciones de compra.</p>
      </section>

      <section>
        <p className="text-lg">
          Cambiar una caldera de gas es una inversión importante. Asegúrate de planificar cuidadosamente tu presupuesto para obtener el mejor rendimiento y eficiencia de tu nueva caldera.
        </p>
      </section>
    </div>
  );
};

export default CambiarCalderaGasCoste;

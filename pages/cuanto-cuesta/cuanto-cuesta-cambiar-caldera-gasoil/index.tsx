import Head from 'next/head';

const CambiarCalderaGasoilCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta cambiar una caldera de gasoil? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el cambio de una caldera de gasoil y cómo planificar tu presupuesto para este servicio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-cambiar-caldera-gasoil`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta cambiar una caldera de gasoil?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Cambio Básico: 2.000€ - 4.000€</p>
            <p>Incluye caldera estándar y mano de obra básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Cambio Complejo: 4.000€ - 8.000€</p>
            <p>Incluye caldera de alta eficiencia y modificaciones en la instalación.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Caldera: Estándar o de alta eficiencia energética.</li>
          <li>Capacidad y Potencia: Necesidades de calefacción según el tamaño del hogar.</li>
          <li>Estado de la Instalación: Requiere ajustes o actualización de la infraestructura.</li>
          <li>Marca y Modelo: Varía el precio según el fabricante y las características adicionales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Cambio de Caldera de Gasoil</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Cambio Básico</strong>: 2.000€ - 4.000€, incluye caldera estándar y mano de obra básica.
          </li>
          <li>
            <strong>Cambio Complejo</strong>: 4.000€ - 8.000€, incluye caldera de alta eficiencia y modificaciones en la instalación.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluar Necesidades de Calefacción</strong>: Determina la capacidad y eficiencia requerida.</p>
        <p>2. <strong>Solicitar Varios Presupuestos</strong>: Comparar costos y opciones ofrecidas por diferentes profesionales.</p>
        <p>3. <strong>Consideraciones Adicionales</strong>: Garantías, mantenimiento y ahorro energético del nuevo equipo.</p>
      </section>

      <section>
        <p className="text-lg">
          Cambiar una caldera de gasoil puede variar en costo dependiendo de varios factores. Es crucial obtener múltiples cotizaciones y entender completamente los requerimientos antes de proceder.
        </p>
      </section>
    </div>
  );
};

export default CambiarCalderaGasoilCoste;

import Head from 'next/head';

const PulirGranitoCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta pulir granito? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el pulido de superficies de granito y cómo planificar tu presupuesto para este servicio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-pulir-granito`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta pulir granito?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Pulido Básico: 20€ - 30€ por metro cuadrado</p>
            <p>Incluye pulido estándar y sellado de la superficie.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Pulido Premium: 30€ - 50€ por metro cuadrado</p>
            <p>Incluye pulido avanzado con productos de alta calidad.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Estado del Granito: Condición actual y nivel de daño o desgaste.</li>
          <li>Tamaño del Área: Superficie total a pulir en metros cuadrados.</li>
          <li>Productos y Técnicas: Uso de productos estándar vs. productos premium para el pulido.</li>
          <li>Ubicación: Los precios pueden variar según la ubicación geográfica y el mercado local.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Pulir Granito</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Pulido Básico</strong>: 20€ - 30€ por metro cuadrado, incluyendo pulido estándar y sellado de la superficie.
          </li>
          <li>
            <strong>Pulido Premium</strong>: 30€ - 50€ por metro cuadrado, incluyendo pulido avanzado con productos de alta calidad.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación del Granito</strong>: Determina el estado y las necesidades específicas de pulido.</p>
        <p>2. <strong>Cotización Detallada</strong>: Obtén estimaciones de varios proveedores para comparar precios y servicios ofrecidos.</p>
        <p>3. <strong>Selección de Productos</strong>: Considera la calidad de los productos y técnicas para asegurar resultados duraderos.</p>
        <p>4. <strong>Revisión de Garantías</strong>: Asegúrate de entender las garantías ofrecidas por los proveedores en caso de problemas futuros.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente y presupuestar el pulido de superficies de granito, puedes mantener la apariencia y durabilidad de tus superficies mientras te mantienes dentro de tu presupuesto establecido.
        </p>
      </section>
    </div>
  );
};

export default PulirGranitoCoste;
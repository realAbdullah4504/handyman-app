import Head from 'next/head';

const PonerTarimaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta poner tarima flotante? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de tarima flotante y cómo planificar tu presupuesto para este tipo de proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-poner-tarima`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta poner tarima flotante?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Coste Básico: 15€ - 25€ por metro cuadrado</p>
            <p>Incluye tarima flotante estándar y mano de obra básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Coste Avanzado: 25€ - 40€ por metro cuadrado</p>
            <p>Incluye tarima flotante premium y mano de obra especializada.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Tarima: Calidad y material de la tarima flotante.</li>
          <li>Área a Cubrir: Tamaño del espacio donde se instalará la tarima.</li>
          <li>Preparación del Suelo: Necesidad de nivelación o preparación del suelo previa.</li>
          <li>Ubicación y Accesibilidad: Impacto en costos de logística y transporte.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Poner Tarima Flotante</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Coste Básico</strong>: 15€ - 25€ por metro cuadrado, incluyendo tarima flotante estándar y mano de obra básica.
          </li>
          <li>
            <strong>Coste Avanzado</strong>: 25€ - 40€ por metro cuadrado, incluyendo tarima flotante premium y mano de obra especializada.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Medición del Espacio</strong>: Obtener medidas exactas del área a cubrir con tarima flotante.</p>
        <p>2. <strong>Selección de Material</strong>: Escoger entre diferentes opciones de tarima flotante según el estilo y presupuesto.</p>
        <p>3. <strong>Solicitar Presupuestos Detallados</strong>: Obtener cotizaciones de varios proveedores y comparar costos.</p>
        <p>4. <strong>Programar Instalación</strong>: Coordinar fechas de instalación y asegurarse de la preparación adecuada del suelo.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente y presupuestar la instalación de tarima flotante, puedes garantizar que el proyecto se realice de manera efectiva y dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default PonerTarimaCoste;

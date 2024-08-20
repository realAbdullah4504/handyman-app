import Head from 'next/head';

const PonerPuertaBlindadaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta poner una puerta blindada? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de una puerta blindada y cómo planificar tu presupuesto para este tipo de mejora en la seguridad del hogar."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-poner-puerta-blindada`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta poner una puerta blindada?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Puerta Básica: 500€ - 1,000€</p>
            <p>Incluye la puerta y la instalación estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Puerta Premium: 1,000€ - 2,000€</p>
            <p>Incluye una puerta de alta seguridad con cerraduras avanzadas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Puerta: Básica vs. premium, características de seguridad adicionales.</li>
          <li>Dimensiones: Tamaño estándar vs. personalizado de la puerta.</li>
          <li>Instalación: Incluye costos adicionales si se requiere adaptación del marco existente.</li>
          <li>Ubicación: Los precios pueden variar según la ubicación geográfica y el mercado local.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Poner una Puerta Blindada</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Puerta Básica</strong>: 500€ - 1,000€, incluyendo la puerta y la instalación estándar.
          </li>
          <li>
            <strong>Puerta Premium</strong>: 1,000€ - 2,000€, incluyendo una puerta de alta seguridad con cerraduras avanzadas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Selección de la Puerta</strong>: Escoge el tipo de puerta y las características de seguridad que se adapten a tus necesidades.</p>
        <p>2. <strong>Medición y Personalización</strong>: Toma medidas precisas y considera opciones personalizadas si es necesario.</p>
        <p>3. <strong>Comparación de Precios</strong>: Obtén cotizaciones detalladas de varios proveedores e instaladores.</p>
        <p>4. <strong>Consideraciones Adicionales</strong>: Incluye un margen para imprevistos y costos adicionales durante la instalación.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente y presupuestar la instalación de una puerta blindada, puedes mejorar la seguridad de tu hogar mientras te mantienes dentro de tu presupuesto establecido.
        </p>
      </section>
    </div>
  );
};

export default PonerPuertaBlindadaCoste;
import Head from 'next/head';

const CuantoCuestaDomotica = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta la instalación de domótica? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de sistemas de domótica y cómo planificar tu presupuesto para este proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-domotica`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta la instalación de domótica?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo básico: €2,000 - €5,000</p>
            <p>Incluye instalación de sistemas básicos como iluminación y seguridad.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo avanzado: €5,000 - €10,000</p>
            <p>Incluye integración de sistemas complejos como HVAC y automatización completa.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Alcance del sistema: Básico vs. avanzado con diferentes niveles de integración.</li>
          <li>Tamaño del hogar: Según la cantidad de dispositivos y áreas a cubrir.</li>
          <li>Tecnología utilizada: Costos pueden variar según la marca y la complejidad de los dispositivos.</li>
          <li>Personalización: Adición de características personalizadas y programación específica.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio de instalación de domótica</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Instalación básica</strong>: €2,000 - €5,000, incluye sistemas básicos como iluminación y seguridad.
          </li>
          <li>
            <strong>Instalación avanzada</strong>: €5,000 - €10,000, incluye integración de sistemas complejos y automatización completa.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Definir necesidades y metas</strong>: Identificar qué aspectos de la domótica son prioritarios.</p>
        <p>2. <strong>Consultar y comparar</strong>: Obtener cotizaciones detalladas de varios proveedores y comparar servicios.</p>
        <p>3. <strong>Considerar el retorno de inversión</strong>: Evaluar beneficios a largo plazo en ahorro de energía y comodidad.</p>
        <p>4. <strong>Seleccionar instaladores</strong>: Elegir profesionales con experiencia en sistemas de domótica y buenas referencias.</p>
      </section>

      <section>
        <p className="text-lg">
          Con una adecuada planificación y presupuestación, la instalación de domótica puede mejorar significativamente la eficiencia y confort de tu hogar.
        </p>
      </section>
    </div>
  );
};

export default CuantoCuestaDomotica;
import Head from 'next/head';

const InstalarParquetCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar parquet? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con la instalación de parquet y cómo presupuestar para mejorar tus suelos con este tipo de acabado."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-instalar-parquet`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar parquet?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación básica: €20 - €40 por metro cuadrado</p>
            <p>Incluye parquet estándar y mano de obra básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación premium: €40 - €80+ por metro cuadrado</p>
            <p>Para parquet de alta gama y técnicas de instalación avanzadas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de parquet: Madera maciza, laminado, o ingeniería.</li>
          <li>Calidad del parquet: Estándar vs. premium.</li>
          <li>Área a cubrir: Total de metros cuadrados a instalar.</li>
          <li>Condiciones del suelo: Preparación previa del suelo si es necesario.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Presupuesto y planificación</h2>
        <p>1. <strong>Evaluación inicial</strong>: Medir y evaluar el área a cubrir con parquet.</p>
        <p>2. <strong>Solicitar presupuestos</strong>: Obtener cotizaciones detalladas de varios instaladores.</p>
        <p>3. <strong>Selección de materiales</strong>: Elegir el tipo y calidad de parquet que se ajuste al presupuesto.</p>
        <p>4. <strong>Programación de instalación</strong>: Coordinar con el instalador para fijar fechas de trabajo.</p>
      </section>

      <section>
        <p className="text-lg">
          Instalar parquet puede mejorar significativamente la estética y valor de tu hogar u oficina.
        </p>
      </section>
    </div>
  );
};

export default InstalarParquetCoste;
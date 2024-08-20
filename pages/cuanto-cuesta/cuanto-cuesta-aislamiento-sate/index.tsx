import Head from 'next/head';

const AislamientoSATECosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta el aislamiento SATE? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el aislamiento térmico exterior SATE y cómo planificar tu presupuesto para este servicio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-aislamiento-sate`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta el aislamiento SATE?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Básica: 50€ - 70€ por metro cuadrado</p>
            <p>Incluye materiales estándar y mano de obra básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Avanzada: 70€ - 100€ por metro cuadrado</p>
            <p>Incluye materiales premium y técnicas de instalación avanzadas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño de la Superficie: Área total a ser aislada.</li>
          <li>Calidad de los Materiales: Estándar vs. Premium.</li>
          <li>Complejidad de la Instalación: Accesibilidad y estructuras del edificio.</li>
          <li>Ubicación: Precios pueden variar según la región y proveedores locales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Aislamiento SATE</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Instalación Básica</strong>: 50€ - 70€ por metro cuadrado, incluyendo materiales estándar y mano de obra básica.
          </li>
          <li>
            <strong>Instalación Avanzada</strong>: 70€ - 100€ por metro cuadrado, incluyendo materiales premium y técnicas de instalación avanzadas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de Necesidades</strong>: Determinar el tipo y grado de aislamiento requerido.</p>
        <p>2. <strong>Obtención de Cotizaciones</strong>: Solicitar presupuestos detallados de varios contratistas especializados.</p>
        <p>3. <strong>Consideración de Beneficios a Largo Plazo</strong>: Ahorro energético y confort térmico.</p>
        <p>4. <strong>Selección del Proveedor</strong>: Elegir un proveedor con experiencia y buenas referencias en instalación de SATE.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente el aislamiento SATE, puedes mejorar la eficiencia energética de tu edificio y reducir costos a largo plazo, manteniéndote dentro de tus posibilidades financieras.
        </p>
      </section>
    </div>
  );
};

export default AislamientoSATECosto;
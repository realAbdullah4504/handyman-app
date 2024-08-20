import Head from 'next/head';

const AdaptarAccesosDiscapacidadCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta adaptar accesos para discapacidad? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la adaptación de accesos para discapacidad y cómo planificar tu presupuesto para este servicio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-adaptar-accesos-discapacidad`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta adaptar accesos para discapacidad?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Adaptación Básica: 1.000€ - 3.000€ por acceso</p>
            <p>Incluye rampas sencillas y modificaciones mínimas.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Adaptación Completa: 5.000€ - 10.000€ por acceso</p>
            <p>Incluye soluciones personalizadas, elevadores, y modificaciones estructurales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Acceso: Puertas, rampas, elevadores, etc.</li>
          <li>Grado de Adaptación: Básica vs. Completa.</li>
          <li>Características Específicas: Necesidades particulares del usuario.</li>
          <li>Ubicación: Precios pueden variar según la región y proveedores locales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Adaptar Accesos para Discapacidad</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Adaptación Básica</strong>: 1.000€ - 3.000€ por acceso, incluyendo rampas y modificaciones mínimas.
          </li>
          <li>
            <strong>Adaptación Completa</strong>: 5.000€ - 10.000€ por acceso, incluyendo soluciones personalizadas y modificaciones estructurales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de las Necesidades</strong>: Determinar los accesos que necesitan adaptación y las necesidades específicas.</p>
        <p>2. <strong>Obtención de Cotizaciones</strong>: Solicitar presupuestos detallados de varios proveedores especializados.</p>
        <p>3. <strong>Considerar Beneficios a Largo Plazo</strong>: Accesibilidad mejorada y cumplimiento de normativas.</p>
        <p>4. <strong>Selección de Proveedor</strong>: Elegir un proveedor con experiencia y que pueda ofrecer soluciones personalizadas.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente la adaptación de accesos para discapacidad, puedes mejorar la accesibilidad y la calidad de vida, manteniéndote dentro de tus posibilidades financieras.
        </p>
      </section>
    </div>
  );
};

export default AdaptarAccesosDiscapacidadCosto;
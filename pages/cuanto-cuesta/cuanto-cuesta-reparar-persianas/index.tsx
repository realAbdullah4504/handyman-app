import Head from 'next/head';

const RepararPersianasCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta reparar persianas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la reparación de persianas y cómo planificar tu presupuesto para mantener tus persianas en buen estado."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-reparar-persianas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta reparar persianas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación Básica: 30€ - 50€ por persiana</p>
            <p>Incluye reparaciones simples como ajuste de cordones o cambio de lamas.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación Completa: 50€ - 100€ por persiana</p>
            <p>Incluye reparaciones más complejas como cambio de mecanismos o instalación de motorización.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Problema: Averías simples vs. problemas estructurales.</li>
          <li>Material y Tipo de Persiana: Persianas de PVC, aluminio, madera, etc.</li>
          <li>Reparación Urgente: Costos adicionales por servicios rápidos o de emergencia.</li>
          <li>Ubicación: Los precios pueden variar según la ubicación geográfica y las condiciones del mercado local.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Reparar Persianas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Reparación Básica</strong>: 30€ - 50€ por persiana, incluyendo ajustes simples y cambios de componentes menores.
          </li>
          <li>
            <strong>Reparación Completa</strong>: 50€ - 100€ por persiana, incluyendo reparaciones más complejas y cambios de mecanismos.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Identificación del Problema</strong>: Diagnostica el problema específico con tus persianas.</p>
        <p>2. <strong>Solicitud de Evaluación</strong>: Obtén una evaluación profesional para determinar el alcance de la reparación.</p>
        <p>3. <strong>Comparación de Cotizaciones</strong>: Obtén varios presupuestos de diferentes proveedores para comparar costos y servicios.</p>
        <p>4. <strong>Consideración de Calidad y Garantía</strong>: Elige un servicio de reparación que ofrezca calidad y garantía adecuadas para el trabajo realizado.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar adecuadamente la reparación de tus persianas, puedes mantenerlas en buen estado y prolongar su vida útil de manera efectiva.
        </p>
      </section>
    </div>
  );
};

export default RepararPersianasCosto;
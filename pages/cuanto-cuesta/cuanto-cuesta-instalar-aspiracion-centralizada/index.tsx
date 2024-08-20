import Head from 'next/head';

const AspiracionCentralizadaCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar un sistema de aspiración centralizada? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de un sistema de aspiración centralizada en tu hogar y cómo planificar tu presupuesto para este tipo de proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-instalar-aspiracion-centralizada`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar un sistema de aspiración centralizada?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Básica: 2,000€ - 5,000€</p>
            <p>Precio estimado para la instalación estándar de un sistema de aspiración centralizada.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Compleja: 5,000€ - 10,000€</p>
            <p>Precio más alto para instalaciones que requieren equipos más avanzados o casas más grandes.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño de la Casa: Área total que necesitas cubrir con el sistema de aspiración.</li>
          <li>Equipos y Materiales: Calidad y tipo de equipos de aspiración centralizada seleccionados.</li>
          <li>Complejidad de la Instalación: Dificultades como la necesidad de perforar paredes o instalar conductos largos.</li>
          <li>Profesionalismo: La experiencia y reputación del instalador contratado.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Instalar Aspiración Centralizada</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Instalación Básica</strong>: 2,000€ - 5,000€, incluyendo equipo estándar y mano de obra.
          </li>
          <li>
            <strong>Instalación Compleja</strong>: 5,000€ - 10,000€, para proyectos más grandes o complejos.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación del Espacio</strong>: Determinar el tamaño y la disposición de tu casa para la instalación.</p>
        <p>2. <strong>Obtener Varios Presupuestos</strong>: Comparar ofertas de diferentes instaladores y equipos.</p>
        <p>3. <strong>Considerar el Mantenimiento</strong>: Incluir costos adicionales para el mantenimiento regular del sistema.</p>
        <p>4. <strong>Garantía y Soporte</strong>: Verificar si el instalador ofrece garantías y soporte post-instalación.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar la instalación de un sistema de aspiración centralizada, es importante considerar todos los factores para asegurar que obtengas el mejor servicio dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default AspiracionCentralizadaCosto;
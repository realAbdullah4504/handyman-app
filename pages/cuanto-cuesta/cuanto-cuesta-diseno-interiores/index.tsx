import Head from 'next/head';

const DisenoInterioresCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta el diseño de interiores? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la contratación de servicios de diseño de interiores y cómo planificar tu presupuesto para crear el ambiente perfecto en tu hogar o espacio comercial."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-diseno-interiores`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta el diseño de interiores?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Diseño Básico: 1,000€ - 3,000€</p>
            <p>Incluye consultas iniciales y propuestas de diseño básicas.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Diseño Completo: 3,000€ - 10,000€</p>
            <p>Incluye diseño detallado, selección de materiales, y gestión de proyectos.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño del Espacio: Dimensiones y características del espacio a diseñar.</li>
          <li>Especificaciones del Cliente: Gustos personales y requerimientos específicos del cliente.</li>
          <li>Calidad de los Materiales: Costo de los materiales y acabados seleccionados para el diseño.</li>
          <li>Ubicación: Precios pueden variar según la ubicación geográfica y condiciones locales del mercado.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Diseño de Interiores</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Diseño Básico</strong>: 1,000€ - 3,000€, incluyendo consultas iniciales y propuestas básicas.
          </li>
          <li>
            <strong>Diseño Completo</strong>: 3,000€ - 10,000€, incluyendo diseño detallado y gestión completa del proyecto.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Definir Expectativas</strong>: Clarificar objetivos y visión para el diseño de interiores.</p>
        <p>2. <strong>Consultar Profesionales</strong>: Obtener presupuestos detallados de diseñadores de interiores para comparar servicios y precios.</p>
        <p>3. <strong>Seleccionar Materiales</strong>: Elegir materiales y acabados que se ajusten al presupuesto y estilo deseado.</p>
        <p>4. <strong>Considerar Plazos</strong>: Establecer plazos de ejecución y entrega para el diseño de interiores.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar cuidadosamente el diseño de interiores, puedes crear un espacio que refleje tu estilo y funcionalidad mientras mantienes el control sobre los costos.
        </p>
      </section>
    </div>
  );
};

export default DisenoInterioresCoste;
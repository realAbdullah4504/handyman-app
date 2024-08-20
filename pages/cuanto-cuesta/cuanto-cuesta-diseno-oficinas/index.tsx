import Head from 'next/head';

const DisenoOficinasCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta el diseño de oficinas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el diseño de oficinas y cómo planificar tu presupuesto para esta tarea."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-diseno-oficinas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta el diseño de oficinas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Diseño Básico: 1000€ - 5000€</p>
            <p>Incluye planos básicos y diseño funcional.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Diseño Premium: 5000€ - 20000€</p>
            <p>Incluye diseño personalizado, asesoría de decoración y gestión del proyecto.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Complejidad del Espacio: Área total a diseñar y nivel de detalle requerido.</li>
          <li>Estilo y Requisitos de Diseño: Moderno, tradicional, minimalista, etc.</li>
          <li>Materiales y Mobiliario: Costo de materiales y muebles seleccionados para el diseño.</li>
          <li>Servicios Adicionales: Costos de consultoría, gestión de proyectos y decoración.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para el Diseño de Oficinas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Diseño Básico</strong>: 1000€ - 5000€, incluyendo planos y diseño funcional.
          </li>
          <li>
            <strong>Diseño Premium</strong>: 5000€ - 20000€, incluyendo diseño personalizado y gestión del proyecto.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de Necesidades de Diseño</strong>: Determina el estilo y los requisitos específicos para el diseño de tu oficina.</p>
        <p>2. <strong>Presupuesto y Financiamiento</strong>: Establece un presupuesto claro y considera opciones de financiamiento si es necesario.</p>
        <p>3. <strong>Selección de Diseño y Materiales</strong>: Elige diseños y materiales que se ajusten al presupuesto y estilo deseado.</p>
        <p>4. <strong>Contratación de Profesionales</strong>: Si es necesario, contrata diseñadores o consultores con experiencia en diseño de oficinas para obtener resultados efectivos.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente y presupuestar el diseño de oficinas, puedes crear un espacio funcional y estéticamente agradable dentro de tus posibilidades financieras.
        </p>
      </section>
    </div>
  );
};

export default DisenoOficinasCoste;
import Head from 'next/head';

const ConstruirRampaGarajeCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta construir una rampa de garaje? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la construcción de una rampa de garaje y cómo planificar tu presupuesto para esta tarea."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-construir-rampa-garaje`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta construir una rampa de garaje?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Rampa Básica: 1,000€ - 3,000€</p>
            <p>Incluye rampa estándar con pendiente moderada y materiales básicos.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Rampa Personalizada: 3,000€ - 7,000€</p>
            <p>Incluye rampa con diseño personalizado, pendiente ajustada y acabados especiales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Longitud de la Rampa: Dimensiones específicas y longitud de la rampa de garaje.</li>
          <li>Material de Construcción: Calidad y tipo de materiales utilizados para la construcción de la rampa.</li>
          <li>Grado de Pendiente: Pendiente requerida según el diseño y las necesidades de accesibilidad.</li>
          <li>Accesibilidad del Sitio: Costos adicionales según la ubicación y la accesibilidad al sitio de construcción.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Construir una Rampa de Garaje</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Rampa Básica</strong>: 1,000€ - 3,000€, incluyendo rampa estándar con pendiente moderada y materiales básicos.
          </li>
          <li>
            <strong>Rampa Personalizada</strong>: 3,000€ - 7,000€, incluyendo rampa con diseño personalizado, pendiente ajustada y acabados especiales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Definición de Requisitos de la Rampa</strong>: Determina las dimensiones exactas, la pendiente y los requisitos específicos para tu rampa de garaje.</p>
        <p>2. <strong>Selección de Materiales y Diseño</strong>: Consulta con expertos para seleccionar los materiales adecuados y diseñar la rampa según tus necesidades de accesibilidad.</p>
        <p>3. <strong>Comparación de Proveedores</strong>: Obtén varias cotizaciones detalladas para comparar precios y opciones de diseño personalizado.</p>
        <p>4. <strong>Consideración de Permiso y Normativas</strong>: Asegúrate de cumplir con todos los permisos y regulaciones locales antes de iniciar la construcción de la rampa.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente la construcción de tu rampa de garaje, puedes optimizar los costos y garantizar una accesibilidad segura y funcional para tu hogar o negocio.
        </p>
      </section>
    </div>
  );
};

export default ConstruirRampaGarajeCoste;
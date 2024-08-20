import Head from 'next/head';

const TratamientoMaderaCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta el tratamiento de madera? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el tratamiento de madera y cómo planificar tu presupuesto para mantener la madera de tu hogar en condiciones óptimas."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-tratamiento-madera`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta el tratamiento de madera?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Tratamiento Básico: 50€ - 100€ por metro cuadrado</p>
            <p>Incluye tratamiento estándar para protección contra humedad y plagas.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Tratamiento Avanzado: 100€ - 200€ por metro cuadrado</p>
            <p>Incluye tratamiento especializado con productos premium para mayor durabilidad y protección.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Estado Actual de la Madera: Nuevo vs. madera vieja o deteriorada.</li>
          <li>Tamaño de la Superficie a Tratar: Área total de la superficie de madera a tratar.</li>
          <li>Tipo de Tratamiento: Básico vs. avanzado con productos especializados.</li>
          <li>Ubicación: Los precios pueden variar según la ubicación geográfica y las condiciones del mercado local.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Tratamiento de Madera</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Tratamiento Básico</strong>: 50€ - 100€ por metro cuadrado, incluyendo tratamiento estándar para protección contra humedad y plagas.
          </li>
          <li>
            <strong>Tratamiento Avanzado</strong>: 100€ - 200€ por metro cuadrado, incluyendo tratamiento especializado con productos premium para mayor durabilidad y protección.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación del Estado de la Madera</strong>: Determina si la madera necesita un tratamiento básico o avanzado.</p>
        <p>2. <strong>Investigación y Comparación</strong>: Obtén cotizaciones de varios proveedores para comparar precios y tipos de tratamientos ofrecidos.</p>
        <p>3. <strong>Considerar Beneficios a Largo Plazo</strong>: La inversión en tratamiento de madera puede prolongar la vida útil y reducir costos de mantenimiento a largo plazo.</p>
        <p>4. <strong>Calidad y Fiabilidad</strong>: Elige un proveedor con experiencia en tratamiento de madera para asegurar resultados efectivos y duraderos.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar cuidadosamente el tratamiento de madera, puedes proteger y mantener la belleza natural de tus estructuras de madera, manteniéndote dentro de tus posibilidades financieras.
        </p>
      </section>
    </div>
  );
};

export default TratamientoMaderaCosto;
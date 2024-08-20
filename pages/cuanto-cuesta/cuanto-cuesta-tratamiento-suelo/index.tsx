import Head from 'next/head';

const TratamientoSueloCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta un tratamiento para el suelo? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con los tratamientos para suelos y cómo planificar tu presupuesto para este tipo de servicio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-tratamiento-suelo`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta un tratamiento para el suelo?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Tratamiento Básico: 2€ - 5€ por m²</p>
            <p>Incluye limpieza superficial y aplicación de sellador estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Tratamiento Avanzado: 5€ - 10€ por m²</p>
            <p>Incluye limpieza profunda, reparación de grietas menores y sellado especializado.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Suelo: Diferentes materiales de suelo requieren tratamientos específicos.</li>
          <li>Estado Actual del Suelo: Nivel de suciedad, daños o necesidad de reparaciones.</li>
          <li>Área de Tratamiento: Tamaño total del área a tratar.</li>
          <li>Complejidad del Tratamiento: Desde limpiezas simples hasta reparaciones y tratamientos especializados.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Tratamiento de Suelo</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Tratamiento Básico</strong>: 2€ - 5€ por m², incluyendo limpieza superficial y aplicación de sellador estándar.
          </li>
          <li>
            <strong>Tratamiento Avanzado</strong>: 5€ - 10€ por m², incluyendo limpieza profunda, reparación de grietas menores y sellado especializado.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación del Suelo</strong>: Inspección detallada para determinar el estado y tipo de tratamiento necesario.</p>
        <p>2. <strong>Selección de Tratamiento</strong>: Elección entre opciones de tratamiento básico o avanzado según el estado y necesidades del suelo.</p>
        <p>3. <strong>Obtención de Presupuestos</strong>: Consulta con empresas especializadas para obtener presupuestos detallados y comparar opciones.</p>
        <p>4. <strong>Consideraciones Adicionales</strong>: Incluye costos adicionales como materiales de sellado, reparaciones específicas y mantenimiento futuro.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar adecuadamente el presupuesto para un tratamiento de suelo, puedes mejorar su apariencia y prolongar su vida útil dentro de un rango de costos definido.
        </p>
      </section>
    </div>
  );
};

export default TratamientoSueloCoste;
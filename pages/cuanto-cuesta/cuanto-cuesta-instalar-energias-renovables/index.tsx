import Head from 'next/head';

const CuantoCuestaInstalarEnergiasRenovables = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar energías renovables? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de energías renovables como energía solar, eólica o biomasa, y cómo planificar tu presupuesto para este tipo de servicios."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-instalar-energias-renovables`}
        />
       
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">
        ¿Cuánto cuesta instalar energías renovables?
      </h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Energía solar fotovoltaica: €4,000 - €20,000</p>
            <p>Incluye paneles solares y sistema de inversores.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Energía eólica: €10,000 - €50,000</p>
            <p>Costo dependiente de la capacidad del generador y altura de las torres.</p>
          </div>
          <div className="bg-purple-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Energía de biomasa: €8,000 - €30,000</p>
            <p>Incluye equipos de calderas y almacenamiento de combustible.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de energía renovable: Varía según la tecnología seleccionada (solar, eólica, biomasa, etc.).</li>
          <li>Escalabilidad del sistema: Dimensiones y capacidad del sistema a instalar.</li>
          <li>Ubicación: Condiciones geográficas y accesibilidad al recurso renovable.</li>
          <li>Subvenciones y ayudas: Disponibilidad de incentivos gubernamentales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio de instalación</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Energía solar fotovoltaica</strong>: €4,000 - €20,000, incluye paneles solares y sistema de inversores.
          </li>
          <li>
            <strong>Energía eólica</strong>: €10,000 - €50,000, costo dependiente de la capacidad del generador y altura de las torres.
          </li>
          <li>
            <strong>Energía de biomasa</strong>: €8,000 - €30,000, incluye equipos de calderas y almacenamiento de combustible.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación de necesidades</strong>: Determinar el consumo de energía y requerimientos del sistema renovable.</p>
        <p>2. <strong>Consulta y comparación</strong>: Obtener cotizaciones de múltiples proveedores de energías renovables.</p>
        <p>3. <strong>Consideraciones adicionales</strong>: Evaluar el retorno de la inversión y la sostenibilidad del proyecto a largo plazo.</p>
        <p>4. <strong>Instalación profesional</strong>: Contratar expertos certificados para asegurar la eficiencia y durabilidad del sistema.</p>
      </section>

      <section>
        <p className="text-lg">
          Con una planificación adecuada, puedes implementar soluciones de energías renovables de manera efectiva y dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default CuantoCuestaInstalarEnergiasRenovables;

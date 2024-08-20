import Head from 'next/head';

const CuantoCuestaInstalarEnergiaSolarTermica = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar energía solar térmica para calefacción o ACS? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de energía solar térmica para calefacción o agua caliente sanitaria (ACS) y cómo planificar tu presupuesto para este servicio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-instalar-energia-solar-termica`}
        />
     
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">
        ¿Cuánto cuesta instalar energía solar térmica para calefacción o ACS?
      </h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación básica: €3,000 - €8,000</p>
            <p>Incluye colectores solares y sistema de almacenamiento.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación avanzada: €8,000 - €15,000</p>
            <p>Para sistemas con mayor capacidad de generación de calor.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño del sistema: Número de colectores solares y capacidad de almacenamiento.</li>
          <li>Ubicación: Orientación y inclinación del techo.</li>
          <li>Complementos: Equipos adicionales como bombas y reguladores.</li>
          <li>Subvenciones y ayudas: Disponibilidad de incentivos fiscales y subvenciones.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio de instalación</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Instalación básica</strong>: €3,000 - €8,000, incluye colectores solares y sistema de almacenamiento.
          </li>
          <li>
            <strong>Instalación avanzada</strong>: €8,000 - €15,000, para sistemas con mayor capacidad de generación de calor.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación de necesidades</strong>: Determinar la demanda de calefacción o ACS.</p>
        <p>2. <strong>Consultas y comparaciones</strong>: Obtener presupuestos de varios proveedores de energía solar.</p>
        <p>3. <strong>Consideraciones adicionales</strong>: Revisar la viabilidad técnica y económica del proyecto.</p>
        <p>4. <strong>Instalación profesional</strong>: Contratar a instaladores certificados para garantizar un rendimiento óptimo.</p>
      </section>

      <section>
        <p className="text-lg">
          Con una planificación cuidadosa y evaluación de opciones, puedes disfrutar de los beneficios económicos y ambientales de la energía solar térmica dentro de tu presupuesto establecido.
        </p>
      </section>
    </div>
  );
};

export default CuantoCuestaInstalarEnergiaSolarTermica;
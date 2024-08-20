import Head from 'next/head';

const CuantoCuestaPulirSuelos = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta pulir suelos? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el pulido de suelos y cómo planificar tu presupuesto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-pulir-suelos`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta pulir suelos?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Pulido de suelos de mármol: €15 - €30 por metro cuadrado</p>
            <p>Incluye pulido y abrillantado básico.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Pulido de suelos de parqué: €20 - €40 por metro cuadrado</p>
            <p>Requiere técnicas especiales para suelos de madera.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de suelo: Mármol, parqué, terrazo, etc.</li>
          <li>Estado actual del suelo: Nivel de desgaste y daños.</li>
          <li>Área total: Superficie a ser pulida.</li>
          <li>Acabados adicionales: Abrillantado, sellado, etc.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Presupuesto y planificación</h2>
        <p>1. <strong>Evaluación inicial</strong>: Inspeccionar el estado del suelo y definir objetivos.</p>
        <p>2. <strong>Obtener cotizaciones</strong>: Solicitar presupuestos detallados a varios proveedores.</p>
        <p>3. <strong>Revisar referencias</strong>: Ver trabajos anteriores y revisar la reputación del proveedor.</p>
        <p>4. <strong>Contrato detallado</strong>: Firmar un acuerdo que especifique todos los términos.</p>
      </section>

      <section>
        <p className="text-lg">
          El pulido de suelos puede restaurar la belleza y prolongar la vida útil de tus suelos de manera efectiva.
        </p>
      </section>
    </div>
  );
};

export default CuantoCuestaPulirSuelos;
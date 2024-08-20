import Head from 'next/head';

const EliminarHumedadesCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta eliminar humedades? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con la eliminación de humedades en hogares y cómo presupuestar para resolver este problema de manera efectiva."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-eliminar-humedades`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta eliminar humedades?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Tratamiento básico: €200 - €500</p>
            <p>Incluye diagnóstico y tratamiento para pequeñas áreas afectadas.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Tratamiento avanzado: €500 - €1500</p>
            <p>Para áreas extensas con daños severos y reparaciones adicionales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Extensión del problema: Área afectada por humedades.</li>
          <li>Tipo de humedad: Condensación, filtración o capilaridad.</li>
          <li>Daños estructurales: Necesidad de reparaciones adicionales.</li>
          <li>Ubicación: Precios pueden variar según la región y acceso.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Presupuesto y planificación</h2>
        <p>1. <strong>Inspección detallada</strong>: Evaluar la extensión y tipo de humedad.</p>
        <p>2. <strong>Solicitar evaluaciones</strong>: Obtener presupuestos detallados de profesionales.</p>
        <p>3. <strong>Comparar opciones</strong>: Considerar métodos de tratamiento y costos asociados.</p>
        <p>4. <strong>Planificación de reparaciones</strong>: Programar tratamiento y reparaciones necesarias.</p>
      </section>

      <section>
        <p className="text-lg">
          Abordar problemas de humedad a tiempo puede prevenir daños mayores y costosos en tu hogar.
        </p>
      </section>
    </div>
  );
};

export default EliminarHumedadesCoste;
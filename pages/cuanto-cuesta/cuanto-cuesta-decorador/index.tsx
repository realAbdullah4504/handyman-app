import Head from 'next/head';

const CuantoCuestaDecorador = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta contratar a un decorador? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con la contratación de decoradores y cómo planificar tu presupuesto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-decorador`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta contratar a un decorador?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Consultoría básica: €500 - €1,000</p>
            <p>Para asesoramiento básico en decoración de interiores.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Diseño completo: €2,000 - €5,000</p>
            <p>Para un diseño completo de decoración de interiores, incluyendo planos y supervisión.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Alcance del proyecto: Consultoría básica, diseño completo, o renovación integral.</li>
          <li>Tamaño del espacio: Área total a ser decorada o renovada.</li>
          <li>Calidad y tipo de materiales: Selección de materiales y acabados afectará el coste final.</li>
          <li>Ubicación geográfica: Variaciones de precios dependiendo de la región y mercado.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Presupuesto y planificación</h2>
        <p>1. <strong>Definir objetivos</strong>: Establecer claramente tus necesidades y expectativas para la decoración.</p>
        <p>2. <strong>Obtener cotizaciones</strong>: Solicitar presupuestos detallados y comparar servicios ofrecidos.</p>
        <p>3. <strong>Revisar portfolio</strong>: Evaluar trabajos anteriores del decorador para asegurar un estilo compatible.</p>
        <p>4. <strong>Acuerdo de contrato</strong>: Firmar un contrato detallado que especifique alcance, costes y plazos.</p>
      </section>

      <section>
        <p className="text-lg">
          Contratar a un decorador profesional puede transformar tu espacio de acuerdo a tus preferencias y estilo personal.
        </p>
      </section>
    </div>
  );
};

export default CuantoCuestaDecorador;
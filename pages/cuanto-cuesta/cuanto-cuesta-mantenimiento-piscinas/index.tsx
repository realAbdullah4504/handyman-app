import Head from 'next/head';

const MantenimientoPiscinasCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta el mantenimiento de piscinas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con el mantenimiento de piscinas y cómo presupuestar para mantener tu piscina en buen estado durante todo el año."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-mantenimiento-piscinas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta el mantenimiento de piscinas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Mantenimiento básico mensual: €50 - €150</p>
            <p>Incluye limpieza, pruebas químicas y ajuste de equilibrio del agua.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Mantenimiento completo mensual: €100 - €300</p>
            <p>Puede incluir reparaciones menores, vaciado parcial y limpieza a fondo.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño de la piscina: Área y volumen de agua a mantener.</li>
          <li>Frecuencia de uso: Uso regular vs. estacional.</li>
          <li>Estado de la piscina: Edad y condiciones estructurales.</li>
          <li>Servicios adicionales: Tratamientos especiales como invernaje o apertura de piscina.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Presupuesto y planificación</h2>
        <p>1. <strong>Evaluar necesidades de mantenimiento</strong>: Determinar el tipo y frecuencia de servicios requeridos.</p>
        <p>2. <strong>Comparar proveedores</strong>: Obtener cotizaciones detalladas y servicios ofrecidos por diferentes empresas de mantenimiento de piscinas.</p>
        <p>3. <strong>Considerar servicios adicionales</strong>: Incluir costos de productos químicos y servicios especiales según la temporada.</p>
        <p>4. <strong>Establecer calendario de mantenimiento</strong>: Programar visitas regulares para asegurar el buen estado continuo de la piscina.</p>
      </section>

      <section>
        <p className="text-lg">
          Con un plan de mantenimiento adecuado, puedes disfrutar de tu piscina mientras mantienes los costos bajo control y prolongas su vida útil.
        </p>
      </section>
    </div>
  );
};

export default MantenimientoPiscinasCoste;
import Head from 'next/head';

const ServicioLimpiezaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta el servicio de limpieza? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con el servicio de limpieza y cómo presupuestar para mantener tu hogar o negocio limpio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-servicio-limpieza`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta el servicio de limpieza?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Limpieza estándar: €15 - €30 por hora</p>
            <p>Incluye limpieza general de áreas comunes y superficies.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Limpieza profunda: €30 - €50 por hora</p>
            <p>Puede incluir limpieza detallada de áreas específicas o servicios adicionales como lavado de ventanas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y tipo de propiedad: Hogar, oficina, local comercial, etc.</li>
          <li>Frecuencia de limpieza: Servicios semanales, quincenales o mensuales pueden variar en costo.</li>
          <li>Detalle de servicios: Limpieza estándar vs. limpieza profunda o servicios especializados como limpieza de alfombras.</li>
          <li>Ubicación geográfica: Costos pueden variar según la región o ciudad.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Presupuesto y planificación</h2>
        <p>1. <strong>Evaluación de necesidades de limpieza</strong>: Determinar la frecuencia y alcance de los servicios requeridos.</p>
        <p>2. <strong>Solicitar presupuestos</strong>: Obtener cotizaciones detalladas de diferentes empresas de limpieza para comparar precios y servicios.</p>
        <p>3. <strong>Consideraciones adicionales</strong>: Incluir costos de productos de limpieza y posibles servicios adicionales requeridos.</p>
        <p>4. <strong>Coordinación de servicios</strong>: Establecer horarios y expectativas claras con el proveedor de servicios de limpieza.</p>
      </section>

      <section>
        <p className="text-lg">
          Al considerar contratar un servicio de limpieza, estos factores te ayudarán a asegurar que el costo y los servicios se alineen con tus necesidades y presupuesto.
        </p>
      </section>
    </div>
  );
};

export default ServicioLimpiezaCoste;
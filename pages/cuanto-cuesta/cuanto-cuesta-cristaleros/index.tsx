import Head from 'next/head';

const CuantoCuestaCristaleros = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta el servicio de cristaleros? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con el servicio de cristaleros y cómo planificar tu presupuesto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-cristaleros`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta el servicio de cristaleros?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación de ventanas: €100 - €300</p>
            <p>Precio promedio para reparaciones menores en ventanas de vidrio.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación de puertas de vidrio: €200 - €600</p>
            <p>Precio promedio para la instalación de puertas de vidrio estándar.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de trabajo: Reparación, instalación, o sustitución de cristales.</li>
          <li>Tamaño y diseño: Dimensiones y características del cristal a trabajar.</li>
          <li>Material: Vidrio estándar, templado, o especial.</li>
          <li>Ubicación geográfica: Variaciones de costos según la región.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Presupuesto y planificación</h2>
        <p>1. <strong>Definir requisitos</strong>: Especificar el tipo y tamaño del trabajo de cristalería necesario.</p>
        <p>2. <strong>Solicitar presupuestos</strong>: Obtener varias cotizaciones de cristaleros y comparar precios y servicios.</p>
        <p>3. <strong>Calidad y garantía</strong>: Evaluar la calidad del vidrio y garantías ofrecidas por los proveedores.</p>
        <p>4. <strong>Planificación de tiempo</strong>: Asegurar la disponibilidad del proveedor y tiempos de realización del trabajo.</p>
      </section>

      <section>
        <p className="text-lg">
          El servicio de cristaleros proporciona soluciones para reparación e instalación de cristales adaptadas a tus necesidades.
        </p>
      </section>
    </div>
  );
};

export default CuantoCuestaCristaleros;
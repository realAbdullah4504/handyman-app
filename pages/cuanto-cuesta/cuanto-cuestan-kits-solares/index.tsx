import Head from 'next/head';

const CuantoCuestanKitsSolares = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuestan los kits solares? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con los kits solares, incluyendo tipos de kits, capacidades y cómo calcular el presupuesto para tu sistema de energía solar."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuestan-kits-solares`}
        />
        
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">
        ¿Cuánto cuestan los kits solares?
      </h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Kit solar básico: €1,000 - €3,000</p>
            <p>Incluye paneles solares y controlador de carga.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Kit solar completo: €3,000 - €10,000</p>
            <p>Incluye baterías, inversor y sistema de montaje.</p>
          </div>
          <div className="bg-purple-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Kits personalizados: Variable</p>
            <p>Precios pueden variar dependiendo de la capacidad y componentes adicionales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y capacidad del kit: Mayor capacidad implica costos más altos.</li>
          <li>Componentes incluidos: Baterías, inversores y controladores pueden incrementar el costo.</li>
          <li>Calidad y marca: Marcas reconocidas y componentes de alta calidad pueden ser más costosos.</li>
          <li>Instalación: Costos adicionales para la instalación profesional del kit solar.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evalúa tus necesidades energéticas</strong>: Determina la cantidad de energía que necesitas generar.</p>
        <p>2. <strong>Selecciona el tipo de kit</strong>: Decide entre un kit básico o completo según tus requerimientos.</p>
        <p>3. <strong>Consulta con expertos</strong>: Obtén recomendaciones y cotizaciones de instaladores de sistemas solares.</p>
        <p>4. <strong>Calcula el costo total</strong>: Incluye no solo el costo del kit, sino también instalación y mantenimiento a largo plazo.</p>
      </section>

      <section>
        <p className="text-lg">
          Los kits solares ofrecen una solución conveniente para la generación de energía renovable, considera estos factores para tomar una decisión informada.
        </p>
      </section>
    </div>
  );
};

export default CuantoCuestanKitsSolares;

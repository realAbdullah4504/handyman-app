import Head from 'next/head';

const PlacasSolaresCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar placas solares? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con la instalación de placas solares y cómo presupuestar para proyectos de energía solar."
        />
        <link
					rel="canonical"
					href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-instalar-placas-solares`}
				/>
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar placas solares?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Básica: €3,000 - €6,000</p>
            <p>Incluye panel solar estándar y instalación básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Premium: €6,000 - €12,000</p>
            <p>Incluye panel solar de alta eficiencia y técnicas avanzadas de instalación.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo y calidad de los paneles solares: paneles estándar vs. premium con diferentes niveles de eficiencia.</li>
          <li>Tamaño del sistema: Área total y capacidad de generación requerida.</li>
          <li>Ubicación: Los costos pueden variar según la ubicación geográfica y las condiciones del sitio.</li>
          <li>Subvenciones y ayudas: Disponibilidad de incentivos fiscales y subvenciones gubernamentales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para instalación de placas solares</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Instalación Básica</strong>: €3,000 - €6,000, incluyendo panel solar estándar y instalación básica.
          </li>
          <li>
            <strong>Instalación Premium</strong>: €6,000 - €12,000, incluyendo panel solar de alta eficiencia y técnicas avanzadas de instalación.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluar necesidades de energía</strong>: Determinar el consumo actual y futuro para calcular la capacidad necesaria.</p>
        <p>2. <strong>Consultar con expertos en energía solar</strong>: Obtener varias cotizaciones y opiniones de instaladores profesionales.</p>
        <p>3. <strong>Explorar opciones de financiamiento</strong>: Considerar opciones de financiamiento y beneficios fiscales disponibles.</p>
        <p>4. <strong>Considerar el retorno de la inversión</strong>: Evaluar el ahorro a largo plazo en facturas de energía frente al costo inicial de instalación.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar tu presupuesto y entender los factores que afectan los costos de instalación de placas solares, puedes tomar decisiones informadas para adoptar energía solar de manera efectiva y económica.
        </p>
      </section>
    </div>
  );
};

export default PlacasSolaresCoste;
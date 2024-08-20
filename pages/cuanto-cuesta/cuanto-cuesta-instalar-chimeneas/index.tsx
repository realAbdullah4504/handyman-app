import Head from 'next/head';

const CuantoCuestaInstalarChimeneas = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar chimeneas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de chimeneas y cómo planificar tu presupuesto para este proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-instalar-chimeneas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar chimeneas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Chimeneas estándar: €1,500 - €3,000</p>
            <p>Incluye instalación básica de una chimenea estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Chimeneas de diseño: €3,000 - €7,000</p>
            <p>Para chimeneas personalizadas o de diseño exclusivo.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de chimenea: Estándar, de diseño o personalizada.</li>
          <li>Materiales: Piedra, mármol, acero inoxidable, etc.</li>
          <li>Ubicación: Interior o exterior, accesibilidad para la instalación.</li>
          <li>Instalación de conductos: Requisitos adicionales para la ventilación y salida de humos.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio de instalación de chimeneas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Chimeneas estándar</strong>: €1,500 - €3,000, incluye instalación básica de una chimenea estándar.
          </li>
          <li>
            <strong>Chimeneas de diseño</strong>: €3,000 - €7,000, para chimeneas personalizadas o de diseño exclusivo.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación de necesidades de chimeneas</strong>: Determinar el tipo y diseño de chimenea requerido.</p>
        <p>2. <strong>Obtención de cotizaciones</strong>: Comparar precios y servicios ofrecidos por diferentes instaladores de chimeneas.</p>
        <p>3. <strong>Consideración de normativas</strong>: Asegurarse de cumplir con las regulaciones locales y requisitos de seguridad.</p>
        <p>4. <strong>Instalación profesional</strong>: Contratar instaladores con experiencia en la instalación de chimeneas.</p>
      </section>

      <section>
        <p className="text-lg">
          Con una planificación cuidadosa, puedes garantizar que la instalación de chimeneas sea segura y eficiente para tu hogar.
        </p>
      </section>
    </div>
  );
};

export default CuantoCuestaInstalarChimeneas;

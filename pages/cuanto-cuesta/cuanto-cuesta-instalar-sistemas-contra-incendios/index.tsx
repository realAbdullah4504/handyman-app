import Head from 'next/head';

const CuantoCuestaInstalarSistemasContraIncendios = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar sistemas contra incendios? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de sistemas contra incendios y cómo planificar tu presupuesto para este proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-instalar-sistemas-contra-incendios`}
        />
       
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">
        ¿Cuánto cuesta instalar sistemas contra incendios?
      </h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Extintores y señalización: €200 - €500</p>
            <p>Incluye extintores y señalización básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">
              Sistemas automáticos: €3,000 - €10,000
            </p>
            <p>Para sistemas automáticos de detección y extinción.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de sistema: Extintores, sistemas automáticos, etc.</li>
          <li>Área a cubrir: Tamaño del edificio o espacio a proteger.</li>
          <li>Normativas locales: Cumplimiento de regulaciones contra incendios.</li>
          <li>Complejidad de la instalación: Requiere obra civil, acceso, etc.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Precios promedio de instalación de sistemas contra incendios
        </h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Extintores y señalización</strong>: €200 - €500, incluye extintores y señalización básica.
          </li>
          <li>
            <strong>Sistemas automáticos</strong>: €3,000 - €10,000, para sistemas automáticos de detección y extinción.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación de necesidades contra incendios</strong>: Determinar el tipo y alcance de la protección necesaria.</p>
        <p>2. <strong>Obtención de cotizaciones</strong>: Solicitar presupuestos detallados a empresas especializadas.</p>
        <p>3. <strong>Cumplimiento normativo</strong>: Asegurar que la instalación cumpla con todas las regulaciones locales.</p>
        <p>4. <strong>Instalación profesional</strong>: Contratar a especialistas certificados en instalaciones contra incendios.</p>
      </section>

      <section>
        <p className="text-lg">
          Con una planificación cuidadosa y cumplimiento de normativas, puedes asegurar una instalación efectiva y segura de sistemas contra incendios dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default CuantoCuestaInstalarSistemasContraIncendios;
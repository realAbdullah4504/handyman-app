import Head from 'next/head';

const CircuitosElectricosCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta hacer circuitos eléctricos? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de circuitos eléctricos y cómo presupuestar para este tipo de proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-hacer-circuitos-electricos`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta hacer circuitos eléctricos?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Básica: €200 - €500 por circuito</p>
            <p>Incluye cableado estándar y componentes básicos.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Completa: €500 - €1,500 o más por circuito</p>
            <p>Incluye componentes avanzados y automatización.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Longitud y complejidad del cableado.</li>
          <li>Tipo de componentes eléctricos utilizados.</li>
          <li>Costos de mano de obra y permisos necesarios.</li>
          <li>Requerimientos específicos del proyecto.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Componentes de la Instalación</h2>
        <ul className="list-disc list-inside">
          <li>Cableado eléctrico y conexiones a la red.</li>
          <li>Interruptores, enchufes y otros puntos de conexión.</li>
          <li>Sistemas de control y protección eléctrica.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación inicial</strong>: Determinar la extensión y requisitos específicos del proyecto de circuitos eléctricos.</p>
        <p>2. <strong>Solicitud de presupuestos</strong>: Obtener estimaciones detalladas de electricistas y contratistas.</p>
        <p>3. <strong>Comparación de opciones</strong>: Evaluar la experiencia y reputación de los proveedores de servicios.</p>
        <p>4. <strong>Permisos y regulaciones</strong>: Confirmar los permisos necesarios y cumplir con las normativas locales.</p>
      </section>

      <section>
        <p className="text-lg">
          Al comprender los factores que afectan los costos y planificar adecuadamente, puedes gestionar eficazmente la instalación de circuitos eléctricos dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default CircuitosElectricosCosto;

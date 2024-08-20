import Head from 'next/head';

const SustituirAscensorCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta sustituir un ascensor? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con la sustitución de ascensores y cómo presupuestar para este tipo de proyecto de construcción."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-sustituir-ascensor`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta sustituir un ascensor?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Sustitución Estándar: €20,000 - €50,000</p>
            <p>Incluye la instalación de un ascensor estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Sustitución Premium: €50,000 - €100,000</p>
            <p>Incluye la instalación de un ascensor de alta gama con características adicionales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y capacidad del ascensor: Ascensores estándar vs. personalizados.</li>
          <li>Características adicionales: Ascensores con tecnología avanzada o características de lujo.</li>
          <li>Requisitos de instalación: Costos pueden variar según la complejidad de la instalación y el acceso al edificio.</li>
          <li>Ubicación: Precios pueden diferir según factores regionales y condiciones del mercado local.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para sustitución de ascensores</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Sustitución Estándar</strong>: €20,000 - €50,000, incluyendo la instalación de un ascensor estándar.
          </li>
          <li>
            <strong>Sustitución Premium</strong>: €50,000 - €100,000, incluyendo la instalación de un ascensor de alta gama.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluar necesidades de sustitución</strong>: Determinar el tipo de ascensor y las características necesarias.</p>
        <p>2. <strong>Obtener múltiples presupuestos</strong>: Comparar estimaciones de diferentes empresas de instalación de ascensores.</p>
        <p>3. <strong>Considerar el retorno de la inversión</strong>: Evaluar los beneficios a largo plazo y la mejora en el valor de la propiedad.</p>
        <p>4. <strong>Planificar la logística de la instalación</strong>: Coordinar el acceso al edificio y los permisos necesarios para la instalación.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar tu presupuesto y comprender los factores que afectan los costos de sustituir un ascensor, puedes asegurar una instalación exitosa dentro de tus posibilidades financieras.
        </p>
      </section>
    </div>
  );
};

export default SustituirAscensorCoste;

import Head from 'next/head';

const CambiarBisagrasCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta cambiar bisagras? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con cambiar bisagras y cómo planificar tu presupuesto para esta tarea."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-cambiar-bisagras`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta cambiar bisagras?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Bisagras Estándar: 5€ - 15€ por bisagra</p>
            <p>Incluye bisagras comunes de metal o plástico para puertas estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Bisagras de Calidad: 15€ - 30€ por bisagra</p>
            <p>Incluye bisagras de alta calidad, como bisagras de acero inoxidable o para puertas pesadas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Bisagra: Bisagras estándar vs. bisagras de calidad premium.</li>
          <li>Material y Resistencia: Material de la bisagra y su capacidad para soportar el peso de la puerta.</li>
          <li>Cantidad de Bisagras: Número total de bisagras que se van a cambiar.</li>
          <li>Instalación: Costos adicionales si se requiere instalación profesional.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Cambiar Bisagras</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Bisagras Estándar</strong>: 5€ - 15€ por bisagra, incluyendo materiales básicos y posiblemente instalación.
          </li>
          <li>
            <strong>Bisagras de Calidad</strong>: 15€ - 30€ por bisagra, incluyendo bisagras duraderas y resistentes para puertas pesadas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Identificación de Necesidades</strong>: Determina el tipo y número de bisagras necesarias para tu proyecto.</p>
        <p>2. <strong>Selección de Bisagras</strong>: Elige entre opciones estándar y de calidad basado en el uso previsto y la estética.</p>
        <p>3. <strong>Solicitud de Presupuestos</strong>: Obtén múltiples presupuestos de proveedores para comparar precios y servicios.</p>
        <p>4. <strong>Consideración de Instalación</strong>: Decide si puedes realizar la instalación tú mismo o si requieres un profesional.</p>
      </section>

      <section>
        <p className="text-lg">
          Cambiar las bisagras puede mejorar la funcionalidad y el rendimiento de tus puertas, asegurando una operación suave y duradera.
        </p>
      </section>
    </div>
  );
};

export default CambiarBisagrasCoste;
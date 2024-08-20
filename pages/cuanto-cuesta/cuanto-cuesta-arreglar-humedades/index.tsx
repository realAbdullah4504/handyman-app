import Head from 'next/head';

const ArreglarHumedadesCost = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta arreglar humedades? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados a la reparación de humedades, incluyendo diagnóstico, tratamiento y reparación."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-arreglar-humedades`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta arreglar humedades?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-red-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Diagnóstico: 100€ - 300€</p>
            <p>Incluye la inspección profesional para identificar la causa de la humedad.</p>
          </div>
          <div className="bg-yellow-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Tratamiento: 200€ - 1500€</p>
            <p>El costo varía según el tipo de humedad y el tratamiento necesario.</p>
          </div>
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación: 300€ - 2000€</p>
            <p>Incluye la reparación de daños causados por la humedad.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de humedad (condensación, capilaridad, filtración).</li>
          <li>Gravedad del daño.</li>
          <li>Área afectada.</li>
          <li>Materiales necesarios para la reparación.</li>
          <li>Mano de obra especializada.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Costos Promedio para Arreglar Humedades</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Diagnóstico</strong>: 100€ - 300€, dependiendo de la complejidad de la inspección.
          </li>
          <li>
            <strong>Tratamiento</strong>: 200€ - 1500€, dependiendo del tipo de humedad y tratamiento requerido.
          </li>
          <li>
            <strong>Reparación</strong>: 300€ - 2000€, dependiendo de la extensión de los daños.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Consejos para Arreglar Humedades</h2>
        <p>1. <strong>Identificación</strong>: Identifica el tipo de humedad y su causa.</p>
        <p>2. <strong>Profesional</strong>: Contrata a un profesional para un diagnóstico preciso.</p>
        <p>3. <strong>Tratamiento</strong>: Asegúrate de aplicar el tratamiento adecuado según el tipo de humedad.</p>
        <p>4. <strong>Prevención</strong>: Implementa medidas para prevenir futuras humedades.</p>
        <p>5. <strong>Mantenimiento</strong>: Realiza mantenimiento regular para evitar problemas recurrentes.</p>
      </section>

      <section>
        <p className="text-lg">
          Calcula el presupuesto para la reparación de humedades considerando todos los factores relevantes y mantén tu hogar libre de problemas de humedad.
        </p>
      </section>
    </div>
  );
};

export default ArreglarHumedadesCost;

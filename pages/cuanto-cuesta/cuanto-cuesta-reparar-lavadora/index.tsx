import Head from 'next/head';

const ReparacionLavadora = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta reparar una lavadora? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la reparación de lavadoras y cómo presupuestar para este tipo de servicio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-reparar-lavadora`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta reparar una lavadora?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación Básica: €50 - €100</p>
            <p>Incluye reparaciones simples como cambio de piezas menores.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación Compleja: €100 - €300</p>
            <p>Incluye reparaciones que requieren cambio de piezas importantes o diagnóstico avanzado.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de problema: problemas eléctricos, problemas con el tambor, problemas de drenaje, etc.</li>
          <li>Marca y modelo de la lavadora.</li>
          <li>Disponibilidad de repuestos.</li>
          <li>Experiencia del técnico y tarifas de servicio.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para reparación de lavadoras</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Reparación Básica</strong>: €50 - €100, incluyendo cambios de piezas menores.
          </li>
          <li>
            <strong>Reparación Compleja</strong>: €100 - €300, incluyendo cambios de piezas importantes o diagnóstico avanzado.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Diagnóstico del problema</strong>: Identificar el problema específico de la lavadora.</p>
        <p>2. <strong>Solicitar presupuestos</strong>: Obtener varias estimaciones de técnicos de reparación de confianza.</p>
        <p>3. <strong>Considerar la edad de la lavadora</strong>: Evaluar si la reparación es económicamente viable frente a la compra de una nueva.</p>
        <p>4. <strong>Certificación del técnico</strong>: Asegurarse de contratar técnicos certificados para garantizar un servicio de calidad y duradero.</p>
      </section>

      <section>
        <p className="text-lg">
          Al entender los factores que influyen en los costos y planificar adecuadamente, puedes gestionar eficazmente la reparación de tu lavadora dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default ReparacionLavadora;

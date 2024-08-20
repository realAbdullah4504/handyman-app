import Head from 'next/head';

const ReformasOficinasCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta reformar oficinas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con la reforma de oficinas y cómo presupuestar para renovar y mejorar tu espacio de trabajo."
        />
        <link
					rel="canonical"
					href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-reformar-oficinas`}
				/>
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta reformar oficinas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reforma Básica: €200 - €500 por metro cuadrado</p>
            <p>Incluye pintura, renovación de suelos y cambios menores en la distribución.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reforma Completa: €500 - €1000 por metro cuadrado</p>
            <p>Incluye renovación completa de instalaciones, mobiliario y diseño personalizado.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y complejidad de la oficina: Oficinas pequeñas vs. grandes y con múltiples salas.</li>
          <li>Materiales y acabados: Calidad de suelos, paredes, techos, iluminación y mobiliario.</li>
          <li>Mano de obra y tiempo de trabajo: Costo de la contratación de profesionales y duración del proyecto.</li>
          <li>Localización y accesibilidad: Impacto del lugar en los costos de transporte y disposición de materiales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para reformar oficinas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Reforma Básica</strong>: €200 - €500 por metro cuadrado, incluyendo pintura, renovación de suelos y cambios menores en la distribución.
          </li>
          <li>
            <strong>Reforma Completa</strong>: €500 - €1000 por metro cuadrado, incluyendo renovación completa de instalaciones, mobiliario y diseño personalizado.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluar necesidades y deseos</strong>: Definir prioridades como funcionalidad vs. estética.</p>
        <p>2. <strong>Obtener varios presupuestos</strong>: Comparar ofertas de contratistas y proveedores de materiales.</p>
        <p>3. <strong>Considerar la durabilidad y mantenimiento</strong>: Optar por materiales que ofrezcan valor a largo plazo.</p>
        <p>4. <strong>Programación y logística</strong>: Coordinar el tiempo y la logística para minimizar interrupciones.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar la reforma de tu oficina, ten en cuenta estos factores para asegurar un proyecto exitoso dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default ReformasOficinasCoste;
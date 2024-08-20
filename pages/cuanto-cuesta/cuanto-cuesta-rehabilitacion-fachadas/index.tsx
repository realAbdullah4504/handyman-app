import Head from 'next/head';

const RehabilitacionFachadasCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta la rehabilitación de fachadas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con la rehabilitación de fachadas y cómo presupuestar para renovar y mejorar el exterior de tu edificio."
        />
        <link
					rel="canonical"
					href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-rehabilitacion-fachadas`}
				/>
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta la rehabilitación de fachadas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Rehabilitación Básica: €30 - €60 por metro cuadrado</p>
            <p>Incluye limpieza, reparación de grietas y pintura.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Rehabilitación Completa: €60 - €120 por metro cuadrado</p>
            <p>Incluye aislamiento térmico, revestimientos y renovación completa.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y estado de la fachada: Superficie total y grado de deterioro.</li>
          <li>Materiales y acabados: Calidad de los revestimientos, pintura y elementos decorativos.</li>
          <li>Mano de obra y tiempo de trabajo: Costo de la contratación de profesionales y duración del proyecto.</li>
          <li>Localización y accesibilidad: Impacto del lugar en los costos de transporte y disposición de materiales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para rehabilitación de fachadas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Rehabilitación Básica</strong>: €30 - €60 por metro cuadrado, incluyendo limpieza, reparación de grietas y pintura.
          </li>
          <li>
            <strong>Rehabilitación Completa</strong>: €60 - €120 por metro cuadrado, incluyendo aislamiento térmico, revestimientos y renovación completa.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluar el estado actual de la fachada</strong>: Determinar las áreas que necesitan mayor atención.</p>
        <p>2. <strong>Obtener varios presupuestos</strong>: Comparar ofertas de contratistas y proveedores de materiales.</p>
        <p>3. <strong>Considerar la durabilidad y mantenimiento</strong>: Optar por materiales que ofrezcan valor a largo plazo.</p>
        <p>4. <strong>Programación y logística</strong>: Coordinar el tiempo y la logística para minimizar interrupciones.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar la rehabilitación de tu fachada, ten en cuenta estos factores para asegurar un proyecto exitoso dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default RehabilitacionFachadasCoste;
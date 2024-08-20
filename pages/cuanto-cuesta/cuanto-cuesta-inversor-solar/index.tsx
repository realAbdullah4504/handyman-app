import Head from 'next/head';

const InversorSolarCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta un inversor solar? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la compra e instalación de un inversor solar y cómo planificar tu presupuesto para energía solar."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-inversor-solar`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta un inversor solar?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Inversor Básico: 500€ - 1,500€</p>
            <p>Incluye modelos estándar de baja potencia.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Inversor Avanzado: 1,500€ - 5,000€</p>
            <p>Incluye modelos de alta eficiencia y mayor potencia.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Capacidad de Potencia: Costos variarán según la capacidad de potencia necesaria para tu sistema solar.</li>
          <li>Marca y Calidad: Diferentes marcas y calidades de inversores pueden influir en los costos.</li>
          <li>Instalación: Costos adicionales por la instalación del inversor y la integración con tu sistema solar existente.</li>
          <li>Garantía y Soporte: Costos pueden verse afectados por la garantía y el soporte ofrecidos por el fabricante.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Inversores Solares</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Inversor Básico</strong>: 500€ - 1,500€, incluyendo modelos estándar de baja potencia.
          </li>
          <li>
            <strong>Inversor Avanzado</strong>: 1,500€ - 5,000€, incluyendo modelos de alta eficiencia y mayor potencia.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de Requerimientos</strong>: Determinar la capacidad de potencia necesaria para tu sistema solar.</p>
        <p>2. <strong>Solicitar Propuestas y Evaluaciones</strong>: Obtener múltiples presupuestos de proveedores de inversores para comparar costos y características.</p>
        <p>3. <strong>Considerar Calidad y Garantía</strong>: Revisar la calidad del inversor y la garantía ofrecida para garantizar la fiabilidad y durabilidad del sistema.</p>
        <p>4. <strong>Instalación y Mantenimiento</strong>: Establecer un plan de instalación y mantenimiento para maximizar la eficiencia y vida útil del inversor solar.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar cuidadosamente la compra e instalación de un inversor solar, puede garantizar un sistema solar eficiente y rentable para su hogar o negocio.
        </p>
      </section>
    </div>
  );
};

export default InversorSolarCoste;
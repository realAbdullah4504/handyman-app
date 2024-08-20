import Head from 'next/head';

const LimpiezaFachadasCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta la limpieza de fachadas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la limpieza de fachadas de edificios y cómo abordar este servicio para mantener la estética y funcionalidad."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-limpieza-fachadas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta la limpieza de fachadas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Limpieza Básica: 300€ - 500€</p>
            <p>Incluye limpieza superficial y eliminación de polvo y suciedad leve.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Limpieza Completa: 500€ - 1000€</p>
            <p>Incluye limpieza profunda, eliminación de manchas difíciles y tratamiento especializado.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Altura: Dimensiones del edificio y dificultad para alcanzar ciertas áreas.</li>
          <li>Estado de la Fachada: Nivel de suciedad acumulada y necesidades específicas de limpieza.</li>
          <li>Materiales del Edificio: Tipo de superficie y requerimientos especiales de tratamiento.</li>
          <li>Equipo y Personal: Uso de maquinaria especializada y experiencia del personal de limpieza.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precio Promedio para la Limpieza de Fachadas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Limpieza Básica</strong>: 300€ - 500€, incluyendo limpieza superficial y eliminación de polvo y suciedad leve.
          </li>
          <li>
            <strong>Limpieza Completa</strong>: 500€ - 1000€, incluyendo limpieza profunda y tratamiento especializado de manchas difíciles.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Inspección Inicial</strong>: Evaluación detallada para determinar el estado y necesidades específicas de la fachada.</p>
        <p>2. <strong>Consultas Múltiples</strong>: Obtención de presupuestos detallados de varias empresas de limpieza para comparar precios y servicios.</p>
        <p>3. <strong>Tratamiento Especializado</strong>: Considerar la necesidad de tratamiento especializado para preservar y mejorar la apariencia de la fachada.</p>
        <p>4. <strong>Mantenimiento Regular</strong>: Establecer un programa de mantenimiento periódico para prolongar la vida útil y estética de la fachada.</p>
      </section>

      <section>
        <p className="text-lg">
          La limpieza de fachadas es crucial para mantener la estética y funcionalidad de los edificios, requiriendo un enfoque profesional y planificado.
        </p>
      </section>
    </div>
  );
};

export default LimpiezaFachadasCoste;

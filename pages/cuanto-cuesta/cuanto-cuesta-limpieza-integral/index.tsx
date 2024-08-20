import Head from 'next/head';

const LimpiezaIntegralCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta una limpieza integral? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con una limpieza integral y cómo mantener todos los espacios de tu hogar o negocio en óptimas condiciones."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-limpieza-integral`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta una limpieza integral?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Limpieza Básica: 150€ - 300€</p>
            <p>Incluye limpieza de áreas comunes y superficies visibles.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Limpieza Profunda: 300€ - 500€</p>
            <p>Incluye limpieza detallada de espacios sensibles y mantenimiento especializado.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño del Espacio: Metros cuadrados a limpiar.</li>
          <li>Tipo de Limpieza: Residencial o comercial.</li>
          <li>Estado de los Espacios: Nivel de suciedad y mantenimiento previo.</li>
          <li>Servicios Adicionales: Limpieza de ventanas, alfombras, etc.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precio Promedio para una Limpieza Integral</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Limpieza Básica</strong>: 150€ - 300€, incluyendo limpieza de áreas comunes y superficies visibles.
          </li>
          <li>
            <strong>Limpieza Profunda</strong>: 300€ - 500€, incluyendo limpieza detallada de espacios sensibles y mantenimiento especializado.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de Necesidades</strong>: Determina los espacios y la frecuencia de limpieza necesaria.</p>
        <p>2. <strong>Obtención de Presupuestos</strong>: Consulta con varias empresas de limpieza para comparar precios y servicios ofrecidos.</p>
        <p>3. <strong>Servicios Especiales</strong>: Considera la necesidad de servicios adicionales como limpieza de alfombras o tratamiento de suelos especiales.</p>
        <p>4. <strong>Mantenimiento Regular</strong>: Establece un plan de limpieza regular para mantener todos los espacios en condiciones óptimas.</p>
      </section>

      <section>
        <p className="text-lg">
          Mantener una limpieza integral regular es esencial para garantizar un ambiente limpio y saludable, ya sea en el hogar o en un entorno comercial.
        </p>
      </section>
    </div>
  );
};

export default LimpiezaIntegralCoste;
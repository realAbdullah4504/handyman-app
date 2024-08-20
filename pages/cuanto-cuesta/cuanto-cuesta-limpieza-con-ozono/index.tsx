import Head from 'next/head';

const LimpiezaConOzonoCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta la limpieza con ozono? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la limpieza con ozono y cómo esta técnica puede mejorar la calidad del aire y eliminar olores en diferentes entornos."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-limpieza-con-ozono`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta la limpieza con ozono?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Limpieza Básica: 100€ - 200€</p>
            <p>Incluye tratamiento de ozono para pequeñas áreas o habitaciones individuales.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Limpieza Completa: 300€ - 500€</p>
            <p>Incluye tratamiento de ozono para toda la casa o espacios grandes.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño del Espacio: Área a tratar con ozono.</li>
          <li>Nivel de Contaminación: Grado de contaminación del aire o presencia de olores.</li>
          <li>Equipo y Tecnología: Uso de equipos de ozono y tecnología asociada.</li>
          <li>Frecuencia del Tratamiento: Necesidad de tratamientos regulares.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precio Promedio para la Limpieza con Ozono</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Limpieza Básica</strong>: 100€ - 200€, incluyendo tratamiento de ozono para áreas pequeñas.
          </li>
          <li>
            <strong>Limpieza Completa</strong>: 300€ - 500€, incluyendo tratamiento de ozono para toda la casa o espacios grandes.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación Inicial</strong>: Determinar la necesidad y extensión del tratamiento de ozono.</p>
        <p>2. <strong>Comparación de Precios</strong>: Obtener presupuestos de diferentes proveedores de servicios de limpieza con ozono.</p>
        <p>3. <strong>Beneficios a Largo Plazo</strong>: Considerar los beneficios de mejorar la calidad del aire y eliminar olores persistentes.</p>
        <p>4. <strong>Mantenimiento Continuo</strong>: Programar tratamientos regulares para mantener la calidad del aire en interiores.</p>
      </section>

      <section>
        <p className="text-lg">
          La limpieza con ozono es una técnica efectiva para mejorar la calidad del aire y eliminar olores en diferentes entornos, utilizando tecnología especializada y equipos de ozono.
        </p>
      </section>
    </div>
  );
};

export default LimpiezaConOzonoCoste;

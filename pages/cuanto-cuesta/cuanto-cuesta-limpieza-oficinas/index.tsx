import Head from 'next/head';

const LimpiezaOficinasCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta la limpieza de oficinas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la limpieza de oficinas y cómo mantener un entorno de trabajo limpio y productivo."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-limpieza-oficinas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta la limpieza de oficinas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Limpieza Básica: 80€ - 150€</p>
            <p>Incluye limpieza de áreas comunes y superficies.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Limpieza Profunda: 150€ - 300€</p>
            <p>Incluye limpieza detallada de espacios difíciles y áreas especializadas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño de la Oficina: Área total que requiere limpieza.</li>
          <li>Tipo de Espacios: Oficinas privadas, áreas de trabajo compartido, salas de reuniones, etc.</li>
          <li>Frecuencia de la Limpieza: Diaria, semanal, o limpieza ocasional.</li>
          <li>Servicios Adicionales: Limpieza de alfombras, ventanas, o servicios especiales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precio Promedio para la Limpieza de Oficinas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Limpieza Básica</strong>: 80€ - 150€, incluyendo limpieza de áreas comunes y superficies.
          </li>
          <li>
            <strong>Limpieza Profunda</strong>: 150€ - 300€, incluyendo limpieza detallada de espacios difíciles y áreas especializadas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de Necesidades</strong>: Determina las áreas y frecuencia de limpieza necesarias para tu oficina.</p>
        <p>2. <strong>Obtención de Presupuestos</strong>: Consulta con varias empresas de limpieza para comparar precios y servicios.</p>
        <p>3. <strong>Servicios Especiales</strong>: Considera la necesidad de servicios adicionales como limpieza de alfombras o ventanas.</p>
        <p>4. <strong>Mantenimiento Regular</strong>: Establece un programa de limpieza regular para mantener un ambiente de trabajo limpio y saludable.</p>
      </section>

      <section>
        <p className="text-lg">
          Mantener una oficina limpia y ordenada no solo mejora la productividad, sino que también crea un entorno de trabajo más agradable para todos.
        </p>
      </section>
    </div>
  );
};

export default LimpiezaOficinasCoste;
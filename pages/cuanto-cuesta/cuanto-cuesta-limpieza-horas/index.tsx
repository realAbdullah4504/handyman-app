import Head from 'next/head';

const LimpiezaHorasCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta la limpieza por horas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la limpieza por horas y cómo contratar servicios de limpieza flexibles para tu hogar o negocio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-limpieza-horas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta la limpieza por horas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Limpieza Básica: 15€ - 25€ por hora</p>
            <p>Incluye limpieza general de áreas comunes y superficies accesibles.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Limpieza Especializada: 25€ - 40€ por hora</p>
            <p>Incluye limpieza detallada de áreas específicas o limpieza profunda según necesidades.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño del Espacio: Espacios más grandes pueden requerir más tiempo y personal.</li>
          <li>Tipo de Limpieza: Limpieza regular versus limpieza profunda o especializada.</li>
          <li>Equipamiento y Productos: Uso de equipos especiales o productos específicos puede influir en el costo.</li>
          <li>Frecuencia de Servicio: Servicios regulares pueden ofrecer tarifas más económicas que servicios esporádicos.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precio Promedio para la Limpieza por Horas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Limpieza Básica</strong>: 15€ - 25€ por hora, incluyendo limpieza general de áreas comunes y superficies accesibles.
          </li>
          <li>
            <strong>Limpieza Especializada</strong>: 25€ - 40€ por hora, incluyendo limpieza detallada de áreas específicas o limpieza profunda según necesidades.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de Necesidades</strong>: Determina el tipo y frecuencia de limpieza requeridos para tu espacio.</p>
        <p>2. <strong>Consulta y Comparación</strong>: Obtén cotizaciones de varias empresas de limpieza para comparar precios y servicios ofrecidos.</p>
        <p>3. <strong>Considera Servicios Adicionales</strong>: Evalúa la necesidad de servicios adicionales como limpieza de ventanas, alfombras o tratamiento de suelos.</p>
        <p>4. <strong>Programación y Mantenimiento</strong>: Establece un horario regular de limpieza para mantener tu espacio limpio y ordenado.</p>
      </section>

      <section>
        <p className="text-lg">
          Contratar servicios de limpieza por horas te proporciona flexibilidad y control sobre el tiempo y la frecuencia de limpieza, adaptándose a tus necesidades específicas.
        </p>
      </section>
    </div>
  );
};

export default LimpiezaHorasCoste;
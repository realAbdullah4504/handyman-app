import Head from 'next/head';

const HacerTejadoCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta hacer un tejado? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la construcción de tejados y cómo planificar tu presupuesto para este proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-hacer-tejado`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta hacer un tejado?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Tejado Básico: 80€ - 120€ por metro cuadrado</p>
            <p>Incluye materiales estándar y mano de obra básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Tejado Completo: 150€ - 250€ por metro cuadrado</p>
            <p>Incluye materiales premium y técnicas de construcción avanzadas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Material: Tejas cerámicas, tejas asfálticas, tejas metálicas, etc.</li>
          <li>Estilo del Tejado: Inclinación, diseño arquitectónico y complejidad.</li>
          <li>Tamaño del Tejado: Área total a cubrir con el tejado.</li>
          <li>Accesibilidad: Dificultad para acceder al tejado y espacio disponible para equipos.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Hacer un Tejado</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Tejado Básico</strong>: 80€ - 120€ por metro cuadrado, incluyendo materiales estándar y mano de obra básica.
          </li>
          <li>
            <strong>Tejado Completo</strong>: 150€ - 250€ por metro cuadrado, incluyendo materiales premium y técnicas de construcción avanzadas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Diseño y Planificación</strong>: Consulta con un arquitecto o diseñador para definir el estilo y los materiales del tejado.</p>
        <p>2. <strong>Obtención de Estimaciones</strong>: Solicita presupuestos detallados de varios contratistas para comparar precios y métodos de construcción.</p>
        <p>3. <strong>Selección de Materiales</strong>: Considera la calidad, durabilidad y estética de los materiales a utilizar en la construcción del tejado.</p>
        <p>4. <strong>Programación de la Construcción</strong>: Coordina el calendario de construcción para garantizar la eficiencia y minimizar retrasos.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar cuidadosamente la construcción de un tejado, puedes mejorar la eficiencia energética y la durabilidad de tu hogar.
        </p>
      </section>
    </div>
  );
};

export default HacerTejadoCosto;
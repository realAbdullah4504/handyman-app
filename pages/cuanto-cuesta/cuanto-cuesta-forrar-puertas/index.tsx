import Head from 'next/head';

const ForrarPuertasCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta forrar puertas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos típicos asociados con el forrado de puertas, incluyendo materiales utilizados, métodos de instalación, y consideraciones adicionales para la renovación o mejora de puertas."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-forrar-puertas`}
        />
       
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">
        ¿Cuánto cuesta forrar puertas?
      </h1>

      <section className="mb-8">
        <div className="bg-green-500 text-white p-4 rounded-md shadow-md">
          <p className="text-xl font-bold mb-2">Costo por Forrado: Variable</p>
          <p>El precio puede variar según el tipo de material utilizado, la cantidad de puertas a forrar, y el tamaño y diseño de las puertas.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Material de Forrado (madera, PVC, laminado, etc.)</li>
          <li>Número de Puertas a Forrar</li>
          <li>Tamaño y Diseño de las Puertas</li>
          <li>Complejidad del Trabajo de Instalación</li>
          <li>Costo de Mano de Obra</li>
        </ul>
      </section>

      <section>
        <p className="text-lg">
          Forrar puertas puede ser una forma eficaz de renovar o mejorar el aspecto de una vivienda. Considera obtener varios presupuestos y evaluar diferentes opciones de materiales y acabados para tomar una decisión informada.
        </p>
      </section>
    </div>
  );
};

export default ForrarPuertasCoste;
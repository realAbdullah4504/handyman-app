import Head from 'next/head';

const EliminarBarrerasArquitectonicasCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta eliminar barreras arquitectónicas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos típicos asociados con la eliminación de barreras arquitectónicas, incluyendo factores como el tipo de barrera, el tamaño del área y los materiales necesarios."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-eliminar-barreras-arquitectonicas`}
        />
        
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">
        ¿Cuánto cuesta eliminar barreras arquitectónicas?
      </h1>

      <section className="mb-8">
        <div className="bg-green-500 text-white p-4 rounded-md shadow-md">
          <p className="text-xl font-bold mb-2">Costo por Eliminación: Variable</p>
          <p>El precio puede variar según el tipo de barrera, tamaño del área y materiales necesarios.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Barrera Arquitectónica (ej. escaleras, puertas estrechas, falta de rampas)</li>
          <li>Tamaño del Área a Modificar</li>
          <li>Materiales Necesarios para la Modificación</li>
          <li>Costos Laborales y de Instalación</li>
        </ul>
      </section>

      <section>
        <p className="text-lg">
          La eliminación de barreras arquitectónicas puede requerir modificaciones significativas para mejorar la accesibilidad. Obtener varios presupuestos y considerar diferentes factores puede ayudar a planificar y gestionar el costo total del proyecto.
        </p>
      </section>
    </div>
  );
};

export default EliminarBarrerasArquitectonicasCoste;
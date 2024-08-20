import Head from 'next/head';

const EliminarHormigasCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta eliminar hormigas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos típicos asociados con la eliminación de hormigas en viviendas y jardines, métodos de control y prevención."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-eliminar-hormigas`}
        />
       
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">
        ¿Cuánto cuesta eliminar hormigas?
      </h1>

      <section className="mb-8">
        <div className="bg-green-500 text-white p-4 rounded-md shadow-md">
          <p className="text-xl font-bold mb-2">Costo por Eliminación: Variable</p>
          <p>El precio puede variar según la gravedad de la infestación y el método de eliminación utilizado.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Métodos Comunes de Eliminación de Hormigas</h2>
        <ul className="list-disc list-inside">
          <li>Trampas y cebos específicos</li>
          <li>Productos químicos y pesticidas</li>
          <li>Repelentes naturales</li>
          <li>Control y sellado de accesos</li>
          <li>Revisión y eliminación de fuentes de alimentos y agua</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Grado de Infestación</li>
          <li>Tamaño de la Propiedad</li>
          <li>Tipo de Hormigas (ej. hormigas carpinteras, hormigas de jardín)</li>
          <li>Método de Eliminación Elegido</li>
          <li>Profesionalidad del Servicio</li>
        </ul>
      </section>

      <section>
        <p className="text-lg">
          La eliminación de hormigas puede ser compleja y variar en costos. Es importante abordar el problema con métodos efectivos para evitar futuras infestaciones.
        </p>
      </section>
    </div>
  );
};

export default EliminarHormigasCoste;
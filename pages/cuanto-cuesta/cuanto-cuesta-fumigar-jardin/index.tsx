import Head from 'next/head';

const FumigarJardinCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta fumigar un jardín? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos típicos asociados con la fumigación de jardines. Obtén información sobre los métodos utilizados, el tamaño del área a tratar y otros factores que pueden influir en el presupuesto para eliminar plagas en tu jardín."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-fumigar-jardin`}
        />
       
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">
        ¿Cuánto cuesta fumigar un jardín?
      </h1>

      <section className="mb-8">
        <div className="bg-green-500 text-white p-4 rounded-md shadow-md">
          <p className="text-xl font-bold mb-2">Costo por Fumigación: Variable</p>
          <p>El precio puede variar según el tamaño del jardín, el tipo de plagas a tratar, los métodos de fumigación utilizados y otros factores como la ubicación geográfica.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño del Jardín</li>
          <li>Tipo de Plagas a Tratar</li>
          <li>Métodos de Fumigación Utilizados</li>
          <li>Ubicación Geográfica</li>
        </ul>
      </section>

      <section>
        <p className="text-lg">
          La fumigación del jardín es crucial para mantener un espacio saludable y libre de plagas. Obtener varios presupuestos te permitirá elegir la mejor opción para tu situación específica.
        </p>
      </section>
    </div>
  );
};

export default FumigarJardinCoste;
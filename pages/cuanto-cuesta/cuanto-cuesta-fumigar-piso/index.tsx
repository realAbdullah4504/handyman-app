import Head from 'next/head';

const FumigarPisoCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta fumigar un piso? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos típicos asociados con la fumigación de pisos, incluyendo el tamaño del piso, el tipo de plagas a tratar, y otros factores que pueden influir en el presupuesto para eliminar plagas de forma efectiva."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-fumigar-piso`}
        />
       
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">
        ¿Cuánto cuesta fumigar un piso?
      </h1>

      <section className="mb-8">
        <div className="bg-green-500 text-white p-4 rounded-md shadow-md">
          <p className="text-xl font-bold mb-2">Costo por Fumigación: Variable</p>
          <p>El precio puede variar según el tamaño del piso, el tipo de plagas a tratar, la gravedad de la infestación, y otros factores como el tipo de tratamiento utilizado.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño del Piso</li>
          <li>Tipo de Plagas a Tratar (cucarachas, ratones, termitas, etc.)</li>
          <li>Gravedad de la Infestación</li>
          <li>Tipo de Tratamiento (químico, biológico, térmico, etc.)</li>
          <li>Costo de Mano de Obra</li>
        </ul>
      </section>

      <section>
        <p className="text-lg">
          La fumigación de un piso es crucial para eliminar plagas de forma efectiva y mantener un ambiente seguro y saludable. Es recomendable obtener varios presupuestos y considerar diferentes opciones de tratamiento antes de tomar una decisión.
        </p>
      </section>
    </div>
  );
};

export default FumigarPisoCoste;
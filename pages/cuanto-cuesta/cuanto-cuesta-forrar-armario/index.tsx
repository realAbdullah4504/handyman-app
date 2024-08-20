import Head from 'next/head';

const ForrarArmarioCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta forrar un armario? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos típicos asociados con forrar un armario, incluyendo el tamaño del armario, el tipo de material utilizado para el forrado, y otros factores que pueden influir en el presupuesto para renovar tu armario."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-forrar-armario`}
        />
        
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">
        ¿Cuánto cuesta forrar un armario?
      </h1>

      <section className="mb-8">
        <div className="bg-green-500 text-white p-4 rounded-md shadow-md">
          <p className="text-xl font-bold mb-2">Costo por Forrado: Variable</p>
          <p>El precio puede variar según el tamaño del armario, el tipo de material utilizado para el forrado, la complejidad del trabajo, y otros factores como la mano de obra requerida.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño del Armario</li>
          <li>Tipo de Material para el Forrado (madera, melamina, tela, etc.)</li>
          <li>Mano de Obra Requerida</li>
          <li>Complementos Adicionales (bisagras, manillas, etc.)</li>
        </ul>
      </section>

      <section>
        <p className="text-lg">
          Forrar un armario es una forma efectiva de renovar su aspecto y aumentar su funcionalidad. Es recomendable obtener varios presupuestos y considerar diferentes materiales antes de realizar el trabajo.
        </p>
      </section>
    </div>
  );
};

export default ForrarArmarioCoste;

import Head from 'next/head';

const ForjadoSanitarioCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta un forjado sanitario? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos típicos asociados con la construcción de un forjado sanitario, incluyendo el tamaño del área, el tipo de material utilizado, y otros factores que pueden influir en el presupuesto para mejorar la seguridad e higiene de tu espacio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-forjado-sanitario`}
        />
      
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">
        ¿Cuánto cuesta un forjado sanitario?
      </h1>

      <section className="mb-8">
        <div className="bg-green-500 text-white p-4 rounded-md shadow-md">
          <p className="text-xl font-bold mb-2">Costo por Forjado: Variable</p>
          <p>El precio puede variar según el tamaño del área a cubrir, el tipo de material utilizado para el forjado sanitario, la complejidad del trabajo, y otros factores como la mano de obra requerida.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño del Área a Cubrir</li>
          <li>Tipo de Material para el Forjado (cerámica, porcelanato, mármol, etc.)</li>
          <li>Mano de Obra Requerida</li>
          <li>Complementos Adicionales (selladores, juntas, etc.)</li>
        </ul>
      </section>

      <section>
        <p className="text-lg">
          La construcción de un forjado sanitario es crucial para asegurar la higiene y seguridad en áreas críticas. Obtener varios presupuestos y considerar diferentes materiales te ayudará a tomar una decisión informada.
        </p>
      </section>
    </div>
  );
};

export default ForjadoSanitarioCoste;
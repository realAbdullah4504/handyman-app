import Head from 'next/head';

const HacerHuertoCost = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta hacer un huerto? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados a la creación de un huerto en tu hogar, desde materiales hasta mano de obra."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-hacer-huerto`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta hacer un huerto?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Materiales: 50€ - 200€</p>
            <p>Incluye semillas, abono, herramientas básicas y tierra de cultivo.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Mano de Obra: 20€ - 50€ por hora</p>
            <p>El costo varía según la experiencia del jardinero y la complejidad del proyecto.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño del huerto.</li>
          <li>Tipo de plantas y cultivos seleccionados.</li>
          <li>Calidad de la tierra y abono.</li>
          <li>Necesidad de sistemas de riego.</li>
          <li>Costo de la mano de obra local.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Costos Promedio para Hacer un Huerto</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Materiales</strong>: 50€ - 200€, dependiendo de la calidad y cantidad.
          </li>
          <li>
            <strong>Mano de Obra</strong>: 20€ - 50€ por hora, dependiendo de la complejidad y experiencia del jardinero.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Consejos para la Creación de un Huerto</h2>
        <p>1. <strong>Planificación</strong>: Planifica el tamaño y la ubicación del huerto según la cantidad de luz solar y el espacio disponible.</p>
        <p>2. <strong>Selección de Plantas</strong>: Elige plantas adecuadas para tu clima y nivel de experiencia.</p>
        <p>3. <strong>Calidad de la Tierra</strong>: Invierte en tierra de buena calidad y abono orgánico para asegurar el crecimiento saludable de las plantas.</p>
        <p>4. <strong>Riego</strong>: Considera instalar un sistema de riego para mantener el huerto adecuadamente hidratado.</p>
        <p>5. <strong>Mantenimiento</strong>: Realiza un mantenimiento regular para prevenir plagas y enfermedades.</p>
      </section>

      <section>
        <p className="text-lg">
          Calcula el presupuesto para la creación de tu huerto considerando todos los factores relevantes y disfruta de los beneficios de cultivar tus propios alimentos.
        </p>
      </section>
    </div>
  );
};

export default HacerHuertoCost;

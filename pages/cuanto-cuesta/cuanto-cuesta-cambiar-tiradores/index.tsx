import Head from 'next/head';

const CambiarTiradoresCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta cambiar tiradores? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con cambiar los tiradores de muebles y cómo planificar tu presupuesto para esta mejora estética en tu hogar."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-cambiar-tiradores`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta cambiar tiradores?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Cambio Básico: 10€ - 30€ por tirador</p>
            <p>Incluye tiradores estándar y mano de obra básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Cambio Premium: 30€ - 50€ por tirador</p>
            <p>Utiliza tiradores de alta calidad y requiere instalación cuidadosa.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Tirador: Estándar vs. premium.</li>
          <li>Cantidad de Tiradores: Número total de tiradores a cambiar.</li>
          <li>Instalación: Costos laborales para la instalación por un carpintero o montador.</li>
          <li>Material y Diseño: Influencia en el costo según el material y el diseño de los tiradores.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Cambiar Tiradores</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Cambio Básico</strong>: 10€ - 30€ por tirador, incluyendo tiradores estándar y mano de obra básica.
          </li>
          <li>
            <strong>Cambio Premium</strong>: 30€ - 50€ por tirador, utilizando tiradores de alta calidad y con instalación cuidadosa.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Selección de Tiradores</strong>: Elige tiradores que complementen el estilo y función de tus muebles.</p>
        <p>2. <strong>Pedido y Entrega</strong>: Asegúrate de contar con todos los tiradores necesarios antes de iniciar la instalación.</p>
        <p>3. <strong>Instalación Profesional</strong>: Contrata un carpintero o montador experimentado para una instalación precisa y duradera.</p>
        <p>4. <strong>Consideración de Detalles</strong>: Revisa todos los detalles del proyecto para evitar sorpresas durante la instalación.</p>
      </section>

      <section>
        <p className="text-lg">
          Cambiar los tiradores es una forma efectiva de renovar el aspecto de tus muebles, mejorando tanto su estética como funcionalidad.
        </p>
      </section>
    </div>
  );
};

export default CambiarTiradoresCoste;
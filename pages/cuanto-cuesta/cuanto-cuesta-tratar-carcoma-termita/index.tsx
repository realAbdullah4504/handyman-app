
import Head from 'next/head';

const TratarCarcomaTermitaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta tratar carcoma y/o termitas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el tratamiento de carcoma y termitas y cómo planificar tu presupuesto para eliminar estas plagas."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-tratar-carcoma-termita`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta tratar carcoma y/o termitas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Tratamiento Básico: 300€ - 600€</p>
            <p>Incluye el tratamiento inicial y una inspección básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Tratamiento Completo: 600€ - 1500€</p>
            <p>Incluye tratamientos avanzados y seguimiento a largo plazo.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Grado de Infestación: El nivel de infestación de la carcoma o termitas.</li>
          <li>Tamaño de la Propiedad: Propiedades más grandes requieren tratamientos más extensos.</li>
          <li>Tipo de Tratamiento: Métodos de tratamiento, como químicos, calor o gas.</li>
          <li>Accesibilidad: La facilidad de acceso a las áreas infestadas puede afectar los costos.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Tratamientos</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Tratamiento Básico</strong>: 300€ - 600€, incluyendo inspección y tratamiento inicial.
          </li>
          <li>
            <strong>Tratamiento Completo</strong>: 600€ - 1500€, incluyendo tratamientos avanzados y seguimiento.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de la Infestación</strong>: Determina el grado de infestación para elegir el tratamiento adecuado.</p>
        <p>2. <strong>Solicitud de Cotizaciones</strong>: Obtén cotizaciones de varios profesionales especializados en control de plagas para comparar precios y servicios.</p>
        <p>3. <strong>Selección del Tratamiento</strong>: Elige el tratamiento más efectivo y adecuado para la infestación específica.</p>
        <p>4. <strong>Revisión y Seguimiento</strong>: Asegúrate de realizar un seguimiento regular después del tratamiento para prevenir futuras infestaciones.</p>
      </section>

      <section>
        <p className="text-lg">
          Planificar y presupuestar el tratamiento de carcoma y termitas es esencial para mantener tu propiedad libre de plagas y evitar daños a largo plazo.
        </p>
      </section>
    </div>
  );
};

export default TratarCarcomaTermitaCoste;
import Head from 'next/head';

const AperturaDePuertasCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta la apertura de puertas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el servicio de apertura de puertas y cómo planificar tu presupuesto para esta tarea."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-apertura-de-puertas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta la apertura de puertas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Apertura Básica: 50€ - 100€</p>
            <p>Incluye la apertura de puertas estándar sin daños a la cerradura.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Apertura de Emergencia: 100€ - 200€</p>
            <p>Incluye la apertura de puertas fuera del horario normal o en situaciones urgentes.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Puerta: Puertas estándar vs. puertas blindadas o de alta seguridad.</li>
          <li>Complejidad: Dificultad para abrir la puerta debido a cerraduras complicadas o sistemas de seguridad.</li>
          <li>Urgencia: Tarifas adicionales para servicios de apertura fuera del horario regular o en emergencias.</li>
          <li>Reputación del Servicio: Experiencia y garantía ofrecida por el proveedor del servicio.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Apertura de Puertas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Apertura Básica</strong>: 50€ - 100€, incluyendo la apertura de puertas estándar sin daños a la cerradura.
          </li>
          <li>
            <strong>Apertura de Emergencia</strong>: 100€ - 200€, incluyendo la apertura de puertas fuera del horario normal o en situaciones urgentes.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de la Situación</strong>: Determina la urgencia y el tipo de puerta que necesita ser abierta.</p>
        <p>2. <strong>Obtención de Presupuestos</strong>: Solicita varios presupuestos de servicios de cerrajería para comparar precios y condiciones.</p>
        <p>3. <strong>Seguridad y Confianza</strong>: Elige un servicio de cerrajería confiable con experiencia para garantizar una apertura segura y sin daños.</p>
        <p>4. <strong>Considerar Garantías</strong>: Asegúrate de que el servicio ofrecido incluya garantías y soporte post-servicio si es necesario.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar cuidadosamente la apertura de puertas, puedes asegurar el acceso seguro a tu propiedad mientras te ajustas a tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default AperturaDePuertasCoste;

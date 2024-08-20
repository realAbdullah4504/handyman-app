import Head from 'next/head';

const MudanzaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta una mudanza? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con una mudanza y cómo presupuestar para trasladar tus pertenencias de forma segura y eficiente."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-mudanza`}
        />
        
        {/* <link rel="canonical" href="https://www.tusitio.com/cuanto-cuesta-mudanza" /> */}
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta una mudanza?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Mudanza local: €300 - €800</p>
            <p>Incluye embalaje, carga, descarga y transporte de pertenencias dentro de la misma ciudad o área cercana.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Mudanza de larga distancia: €1000 - €3000+</p>
            <p>Incluye costos adicionales por distancia, embalaje especial y posible almacenamiento temporal.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Distancia y ubicación: Las mudanzas de larga distancia suelen ser más costosas que las locales.</li>
          <li>Cantidad de pertenencias: Más artículos pueden requerir más tiempo y recursos para mover.</li>
          <li>Embalaje y manejo especial: Artículos frágiles o especiales pueden necesitar embalaje adicional y cuidado.</li>
          <li>Fecha y temporada: Los costos pueden variar según la demanda y la disponibilidad de empresas de mudanzas en ciertas épocas del año.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Presupuesto y planificación</h2>
        <p>1. <strong>Evaluación de necesidades</strong>: Determinar el tamaño de la mudanza y los servicios requeridos.</p>
        <p>2. <strong>Solicitar cotizaciones</strong>: Obtener estimaciones detalladas de varias empresas de mudanzas para comparar precios y servicios.</p>
        <p>3. <strong>Planificación del tiempo</strong>: Coordinar la fecha y hora de la mudanza para garantizar disponibilidad y eficiencia.</p>
        <p>4. <strong>Consideraciones adicionales</strong>: Incluir costos como seguro de mudanza, tarifas de estacionamiento o permisos municipales si es necesario.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar una mudanza, ten en cuenta estos factores para asegurar que el proceso sea lo más suave posible y dentro del presupuesto estimado.
        </p>
      </section>
    </div>
  );
};

export default MudanzaCoste;
import Head from "next/head";

const JardinerosPage = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>¿Cuánto cuesta contratar jardineros? - Handyman</title>
				<meta
					name="description"
					content="Descubre los costos asociados con la contratación de jardineros para el mantenimiento de jardines y áreas verdes."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/jardineros`}
				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta contratar jardineros?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Mantenimiento básico: €20 - €50 por hora
						</p>
						<p>
							Incluye corte de césped, poda básica y mantenimiento
							regular.
						</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Servicios especializados: €50 - €100 por hora
						</p>
						<p>
							Incluye diseño de jardines, instalación de sistemas
							de riego, y paisajismo.
						</p>
					</div>
				</div>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Factores que Afectan los Costos
				</h2>
				<ul className="list-disc list-inside">
					<li>Tamaño del jardín: Área total a mantener o diseñar.</li>
					<li>
						Servicios requeridos: Mantenimiento básico vs. diseño y
						servicios especializados.
					</li>
					<li>
						Frecuencia de servicio: Servicios regulares vs. únicos.
					</li>
					<li>
						Ubicación: Precios pueden variar según la región y la
						disponibilidad de profesionales.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Contratar Jardineros
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Mantenimiento básico</strong>: €20 - €50 por
						hora, incluyendo tareas regulares de jardinería.
					</li>
					<li>
						<strong>Servicios especializados</strong>: €50 - €100
						por hora, incluyendo diseño y servicios avanzados de
						jardinería.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación para la Contratación de Jardineros
				</h2>
				<p>
					1. <strong>Evaluación de Necesidades</strong>: Determinar
					los servicios necesarios y la frecuencia de mantenimiento.
				</p>
				<p>
					2. <strong>Obtención de Presupuestos</strong>: Solicitar
					cotizaciones detalladas a varios jardineros profesionales.
				</p>
				<p>
					3. <strong>Consideración de Experiencia</strong>: Elegir
					jardineros con experiencia y buenas referencias.
				</p>
				<p>
					4. <strong>Revisión de Contrato</strong>: Asegurarse de
					incluir detalles específicos de los servicios en el
					contrato.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Con la contratación adecuada de jardineros, puedes mantener
					tu jardín en óptimas condiciones y mejorar el atractivo de
					tu espacio exterior.
				</p>
			</section>
		</div>
	);
};

export default JardinerosPage;

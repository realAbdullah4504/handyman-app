import Head from "next/head";

const PintarFachadaPage = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>¿Cuánto cuesta pintar una fachada? - Handyman</title>
				<meta
					name="description"
					content="Descubre los costos asociados con la pintura de fachadas y cómo planificar el presupuesto para este proyecto de mantenimiento."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/pintar-fachada`}
				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta pintar una fachada?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Pintura estándar: €15 - €25 por metro cuadrado
						</p>
						<p>
							Incluye preparación de superficie y mano de obra
							básica.
						</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Pintura premium: €25 - €40 por metro cuadrado
						</p>
						<p>
							Incluye pintura de alta calidad y técnicas avanzadas
							de aplicación.
						</p>
					</div>
				</div>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Factores que Afectan los Costos
				</h2>
				<ul className="list-disc list-inside">
					<li>
						Tamaño y altura de la fachada: Superficie total a pintar
						y accesibilidad.
					</li>
					<li>
						Estado de la superficie: Necesidad de reparaciones,
						limpieza o aplicaciones especiales.
					</li>
					<li>
						Tipo de pintura: Calidad y tipo de pintura seleccionada.
					</li>
					<li>
						Ubicación: Costos pueden variar según la región y
						accesibilidad al sitio.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Pintar Fachadas
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Pintura estándar</strong>: €15 - €25 por metro
						cuadrado, incluyendo preparación de superficie y mano de
						obra básica.
					</li>
					<li>
						<strong>Pintura premium</strong>: €25 - €40 por metro
						cuadrado, incluyendo pintura de alta calidad y técnicas
						avanzadas de aplicación.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación para Pintar una Fachada
				</h2>
				<p>
					1. <strong>Evaluación de la Fachada</strong>: Inspeccionar
					el estado actual y necesidades de preparación.
				</p>
				<p>
					2. <strong>Solicitud de Presupuestos</strong>: Obtener
					cotizaciones detalladas de varios contratistas
					especializados en pintura de fachadas.
				</p>
				<p>
					3. <strong>Selección del Contratista</strong>: Elegir un
					profesional con experiencia y referencias positivas.
				</p>
				<p>
					4. <strong>Supervisión del Proyecto</strong>: Asegurarse de
					que la pintura se realice según los estándares y plazos
					acordados.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Con una adecuada planificación y presupuesto, la pintura de
					fachadas puede mejorar significativamente la apariencia y
					protección de tu edificio.
				</p>
			</section>
		</div>
	);
};

export default PintarFachadaPage;

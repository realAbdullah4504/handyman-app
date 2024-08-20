import Head from "next/head";

const PonerBaldosasPage = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>¿Cuánto cuesta poner baldosas? - Handyman</title>
				<meta
					name="description"
					content="Descubre los costos asociados con la instalación de baldosas y cómo planificar este proyecto para tu hogar."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/poner-baldosas`}
				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta poner baldosas?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Instalación básica: €20 - €30 por metro cuadrado
						</p>
						<p>Incluye baldosas estándar y mano de obra básica.</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Instalación avanzada: €30 - €50 por metro cuadrado
						</p>
						<p>
							Incluye baldosas premium y patrones más complejos.
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
						Tipo y calidad de las baldosas: Estándar vs. premium con
						diferentes diseños y características.
					</li>
					<li>
						Tamaño del área a cubrir: Más metros cuadrados pueden
						implicar costos más altos.
					</li>
					<li>
						Patrones de instalación: Diseños especiales o patrones
						complejos pueden requerir más trabajo.
					</li>
					<li>
						Preparación de la superficie: Costos adicionales si es
						necesario preparar o nivelar la superficie antes de la
						instalación.
					</li>
					<li>
						Ubicación geográfica: Variación de precios según la
						región y condiciones del mercado local.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Poner Baldosas
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Instalación básica</strong>: €20 - €30 por metro
						cuadrado, incluyendo baldosas estándar y mano de obra
						básica.
					</li>
					<li>
						<strong>Instalación avanzada</strong>: €30 - €50 por
						metro cuadrado, incluyendo baldosas premium y patrones
						más complejos.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación para la Instalación de Baldosas
				</h2>
				<p>
					1. <strong>Evaluación del Proyecto</strong>: Determinar la
					cantidad de baldosas necesarias y el tipo de diseño.
				</p>
				<p>
					2. <strong>Obtención de Presupuestos</strong>: Solicitar
					cotizaciones detalladas a varios contratistas de instalación
					de baldosas.
				</p>
				<p>
					3. <strong>Selección de Baldosas</strong>: Elegir baldosas
					que complementen el diseño y la funcionalidad del espacio.
				</p>
				<p>
					4. <strong>Contratación del Instalador</strong>: Seleccionar
					un profesional con experiencia en la instalación de baldosas
					para garantizar un acabado de calidad.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Con una planificación adecuada y la selección de baldosas
					adecuadas, puedes mejorar la estética y funcionalidad de tu
					espacio interior o exterior.
				</p>
			</section>
		</div>
	);
};

export default PonerBaldosasPage;

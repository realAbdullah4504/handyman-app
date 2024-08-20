import Head from "next/head";

const PintarPuertasPage = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>¿Cuánto cuesta pintar puertas? - Handyman</title>
				<meta
					name="description"
					content="Descubre los costos asociados con pintar puertas y cómo planificar tu presupuesto para mejorar la apariencia de tu hogar."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/pintar-puertas`}

				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta pintar puertas?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Pintura Básica: €50 - €100 por puerta
						</p>
						<p>
							Incluye preparación y aplicación de pintura
							estándar.
						</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Pintura Especializada: €100 - €200 por puerta
						</p>
						<p>
							Incluye acabados especiales y preparación adicional.
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
						Tamaño y Tipo de Puerta: Puertas estándar vs. puertas
						con diseños especiales.
					</li>
					<li>
						Preparación de Superficie: Necesidad de lijar, reparar
						grietas, etc.
					</li>
					<li>
						Acabados y Diseños: Uso de pinturas especiales y
						acabados personalizados.
					</li>
					<li>
						Ubicación: Variación de costos según la región
						geográfica.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Pintar Puertas
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Pintura Básica</strong>: €50 - €100 por puerta,
						incluye preparación y aplicación de pintura estándar.
					</li>
					<li>
						<strong>Pintura Especializada</strong>: €100 - €200 por
						puerta, incluye acabados especiales y preparación
						adicional.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación del Presupuesto
				</h2>
				<p>
					1. <strong>Evaluación de Puertas</strong>: Determina el
					número y tipo de puertas que deseas pintar.
				</p>
				<p>
					2. <strong>Obtener Varios Presupuestos</strong>: Comparar
					costos y servicios ofrecidos por diferentes pintores.
				</p>
				<p>
					3. <strong>Consideración de Calidad</strong>: Elige pinturas
					de calidad y asegúrate de la preparación adecuada de la
					superficie.
				</p>
				<p>
					4. <strong>Profesionalismo</strong>: Contrata a pintores con
					experiencia para garantizar resultados satisfactorios.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Planifica cuidadosamente el presupuesto para pintar las
					puertas de tu hogar y mejora su apariencia de manera
					efectiva.
				</p>
			</section>
		</div>
	);
};

export default PintarPuertasPage;

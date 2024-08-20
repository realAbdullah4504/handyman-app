import Head from "next/head";

const KartingTrackConstruction = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>
					¿Cuánto cuesta construir una pista de karting? -
					Handyman
				</title>
				<meta
					name="description"
					content="Descubre los costos asociados con la construcción de una pista de karting y cómo presupuestar para este tipo de proyecto deportivo."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/construir-pista-karting`}
				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta construir una pista de karting?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Pista Básica: €50,000 - €100,000
						</p>
						<p>
							Incluye diseño básico y construcción de pista
							estándar.
						</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Pista Avanzada: €100,000 - €300,000 o más
						</p>
						<p>
							Incluye diseño personalizado y construcción de pista
							con características avanzadas.
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
						Tamaño y Diseño: Longitud y complejidad de la pista.
					</li>
					<li>
						Materiales: Calidad de la superficie y características
						de seguridad.
					</li>
					<li>
						Instalaciones Adicionales: Iluminación, tribunas y
						sistemas de cronometraje.
					</li>
					<li>
						Permisos y Regulaciones: Costos asociados con permisos
						de construcción y cumplimiento normativo.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Construir una Pista de Karting
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Pista Básica</strong>: €50,000 - €100,000,
						incluyendo diseño básico y construcción de pista
						estándar.
					</li>
					<li>
						<strong>Pista Avanzada</strong>: €100,000 - €300,000 o
						más, incluyendo diseño personalizado y construcción de
						pista con características avanzadas.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación del Presupuesto
				</h2>
				<p>
					1. <strong>Diseño y Planificación</strong>: Trabaja con
					profesionales para diseñar la pista según tus
					especificaciones.
				</p>
				<p>
					2. <strong>Consulta con Expertos</strong>: Obtén múltiples
					presupuestos de contratistas especializados en construcción
					de pistas de karting.
				</p>
				<p>
					3. <strong>Gestión de Proyecto</strong>: Considera costos de
					gestión y supervisión del proyecto.
				</p>
				<p>
					4. <strong>Costos Ocultos</strong>: Contempla imprevistos y
					ajustes durante la construcción.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Al planificar cuidadosamente y presupuestar la construcción
					de una pista de karting, asegúrate de considerar todos los
					elementos necesarios para un proyecto exitoso y dentro del
					presupuesto.
				</p>
			</section>
		</div>
	);
};

export default KartingTrackConstruction;

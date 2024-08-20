import Head from "next/head";

const HomeRenovationCost = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>
					¿Cuánto cuesta reformar una vivienda? - Handyman
				</title>
				<meta
					name="description"
					content="Descubre los costos asociados con la reforma de viviendas y cómo presupuestar para este tipo de renovación."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/reformas-viviendas`}
				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta reformar una vivienda?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Reforma Básica: €100 - €300 por metro cuadrado
						</p>
						<p>
							Incluye renovaciones simples como pintura y cambio
							de suelos.
						</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Reforma Completa: €300 - €800 por metro cuadrado
						</p>
						<p>
							Incluye renovaciones completas con cambios
							estructurales y acabados de alta calidad.
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
						Extensión de la Reforma: Desde renovaciones simples
						hasta proyectos complejos.
					</li>
					<li>
						Materiales y Acabados: Calidad y costos de materiales
						utilizados.
					</li>
					<li>
						Mano de Obra: Tarifas de contratistas y especialistas.
					</li>
					<li>
						Ubicación: Precios pueden variar según la región y
						condiciones del mercado local.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Reformas de Viviendas
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Reforma Básica</strong>: €100 - €300 por metro
						cuadrado, incluyendo renovaciones simples como pintura y
						cambio de suelos.
					</li>
					<li>
						<strong>Reforma Completa</strong>: €300 - €800 por metro
						cuadrado, incluyendo renovaciones completas con cambios
						estructurales y acabados de alta calidad.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación del Presupuesto
				</h2>
				<p>
					1. <strong>Evaluación de Necesidades</strong>: Determina el
					alcance y los objetivos de tu reforma.
				</p>
				<p>
					2. <strong>Presupuesto Detallado</strong>: Obtén
					estimaciones de costos detalladas de contratistas y
					proveedores de materiales.
				</p>
				<p>
					3. <strong>Comparación de Ofertas</strong>: Analiza varias
					propuestas antes de comprometerte con un contratista.
				</p>
				<p>
					4. <strong>Consideración de Calidad</strong>: Balancea costo
					y calidad para obtener el mejor valor para tu inversión.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Al planificar cuidadosamente y presupuestar la reforma de tu
					vivienda, puedes mejorar su funcionalidad y estética
					mientras te mantienes dentro de tu presupuesto.
				</p>
			</section>
		</div>
	);
};

export default HomeRenovationCost;

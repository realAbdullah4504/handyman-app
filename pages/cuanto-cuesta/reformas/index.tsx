import Head from "next/head";

const ReformasPage = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>¿Cuánto cuesta hacer reformas? - Handyman</title>
				<meta
					name="description"
					content="Descubre los costos asociados con las reformas de viviendas y cómo planificar tu presupuesto para renovar y mejorar tu hogar."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/reformas`}

				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta hacer reformas?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Reforma Básica: €5000 - €10000
						</p>
						<p>Incluye mano de obra y materiales estándar.</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Reforma Completa: €15000 - €30000
						</p>
						<p>
							Incluye materiales de alta calidad y diseño
							personalizado.
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
						Extensión de la Reforma: Tamaño y complejidad del
						proyecto.
					</li>
					<li>
						Materiales y Acabados: Calidad y tipo de materiales
						seleccionados.
					</li>
					<li>
						Ubicación: Variación de costos según la región
						geográfica.
					</li>
					<li>
						Profesionalismo: Contratación de profesionales
						especializados.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Reformas
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Reforma Básica</strong>: €5000 - €10000, incluye
						mano de obra y materiales estándar.
					</li>
					<li>
						<strong>Reforma Completa</strong>: €15000 - €30000,
						incluye materiales de alta calidad y diseño
						personalizado.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación del Presupuesto
				</h2>
				<p>
					1. <strong>Evaluación del Proyecto</strong>: Determina el
					alcance y las necesidades específicas de tu reforma.
				</p>
				<p>
					2. <strong>Pedir Varios Presupuestos</strong>: Comparar
					costos y servicios ofrecidos por diferentes contratistas.
				</p>
				<p>
					3. <strong>Consideración de Calidad</strong>: Opta por
					materiales y servicios que cumplan con tus expectativas de
					calidad y durabilidad.
				</p>
				<p>
					4. <strong>Profesionalismo</strong>: Contrata a
					profesionales con experiencia para garantizar resultados
					satisfactorios.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Planifica tu presupuesto cuidadosamente para las reformas de
					tu hogar y asegúrate de obtener el mejor valor por tu
					inversión.
				</p>
			</section>
		</div>
	);
};

export default ReformasPage;

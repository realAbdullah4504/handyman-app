import Head from "next/head";

const HacerTejadoPage = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>¿Cuánto cuesta hacer un tejado? - Handyman</title>
				<meta
					name="description"
					content="Descubre los costos asociados con la construcción de un tejado y cómo planificar este proyecto para tu hogar."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/hacer-tejado`}
				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta hacer un tejado?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Tejado básico: €50 - €100 por m²
						</p>
						<p>
							Incluye materiales estándar y mano de obra básica.
						</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Tejado premium: €100 - €200 por m²
						</p>
						<p>
							Incluye materiales premium y técnicas avanzadas de
							construcción.
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
						Tipo de materiales: Desde tejas estándar hasta tejas de
						alta gama.
					</li>
					<li>
						Dimensiones del tejado: Tamaño total del área a cubrir.
					</li>
					<li>
						Complejidad de la estructura: Tejados con diseños
						complejos o pendientes pronunciadas.
					</li>
					<li>
						Ubicación geográfica: Precios variados según la región y
						condiciones del mercado local.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Hacer un Tejado
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Tejado básico</strong>: €50 - €100 por m²,
						incluyendo materiales estándar y mano de obra básica.
					</li>
					<li>
						<strong>Tejado premium</strong>: €100 - €200 por m²,
						incluyendo materiales premium y técnicas avanzadas de
						construcción.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación para Hacer un Tejado
				</h2>
				<p>
					1. <strong>Evaluación de Proyecto</strong>: Determinar el
					tipo de tejado y materiales necesarios.
				</p>
				<p>
					2. <strong>Obtención de Presupuestos</strong>: Solicitar
					presupuestos detallados a contratistas locales.
				</p>
				<p>
					3. <strong>Selección de Materiales</strong>: Comparar
					opciones de materiales en términos de costo y calidad.
				</p>
				<p>
					4. <strong>Contratación de Profesionales</strong>:
					Seleccionar contratistas con experiencia en la construcción
					de tejados.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Con una planificación adecuada, construir un tejado puede
					mejorar la estructura y el valor de tu propiedad de manera
					significativa.
				</p>
			</section>
		</div>
	);
};

export default HacerTejadoPage;

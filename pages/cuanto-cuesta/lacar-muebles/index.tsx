import Head from "next/head";

const LacarMueblesPage = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>¿Cuánto cuesta lacar muebles? - Handyman</title>
				<meta
					name="description"
					content="Descubre los costos asociados con el lacado de muebles y cómo planificar el presupuesto para este servicio de restauración."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/lacar-muebles`}
				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta lacar muebles?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Lacado básico: €100 - €300 por mueble
						</p>
						<p>
							Incluye preparación de superficie y lacado con
							pintura estándar.
						</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Lacado premium: €300 - €600 por mueble
						</p>
						<p>
							Incluye preparación avanzada y lacado con pintura de
							alta calidad.
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
						Tamaño y tipo de mueble: Muebles pequeños vs. muebles
						grandes y complejos.
					</li>
					<li>
						Calidad del lacado: Pintura estándar vs. pintura premium
						con acabados especiales.
					</li>
					<li>
						Preparación de superficie: Tratamiento previo de la
						madera o material del mueble.
					</li>
					<li>
						Ubicación: Precios pueden variar según la región y la
						disponibilidad de profesionales.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Lacar Muebles
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Lacado básico</strong>: €100 - €300 por mueble,
						incluyendo preparación y pintura estándar.
					</li>
					<li>
						<strong>Lacado premium</strong>: €300 - €600 por mueble,
						incluyendo preparación avanzada y pintura de alta
						calidad.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación para el Lacado de Muebles
				</h2>
				<p>
					1. <strong>Evaluación de Muebles</strong>: Determinar los
					muebles a lacar y sus necesidades específicas.
				</p>
				<p>
					2. <strong>Obtención de Presupuestos</strong>: Solicitar
					cotizaciones detalladas a varios especialistas en lacado de
					muebles.
				</p>
				<p>
					3. <strong>Selección de Materiales</strong>: Elegir entre
					opciones de pintura estándar o premium según el presupuesto
					y las preferencias estéticas.
				</p>
				<p>
					4. <strong>Confirmación de Servicios</strong>: Asegurarse de
					incluir todos los servicios necesarios en el contrato con el
					especialista en lacado de muebles.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Con el lacado adecuado de muebles, puedes restaurar y
					embellecer tus muebles existentes con un acabado
					profesional.
				</p>
			</section>
		</div>
	);
};

export default LacarMueblesPage;

import Head from "next/head";

const LimpiezaCasaPage = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>¿Cuánto cuesta la limpieza de una casa? - Handyman</title>
				<meta
					name="description"
					content="Descubre los costos asociados con la limpieza de una casa y cómo planificar este servicio."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/limpieza-casa`}
				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta la limpieza de una casa?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Limpieza Básica: €50 - €100
						</p>
						<p>
							Limpieza general incluyendo áreas comunes y
							superficies.
						</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Limpieza Profunda: €100 - €200
						</p>
						<p>
							Limpieza exhaustiva incluyendo áreas difíciles de
							alcanzar y detalles minuciosos.
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
						Tamaño y Complejidad de la Casa: Número de habitaciones,
						baños y áreas a limpiar.
					</li>
					<li>
						Frecuencia de la Limpieza: Servicios programados
						regularmente o limpiezas únicas.
					</li>
					<li>
						Estado Actual de la Casa: Nivel de suciedad acumulada y
						necesidad de limpieza adicional.
					</li>
					<li>
						Servicios Adicionales: Lavandería, limpieza de alfombras
						o tratamientos especiales.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Limpieza de Casas
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Limpieza Básica</strong>: €50 - €100, incluyendo
						limpieza general de áreas comunes y superficies.
					</li>
					<li>
						<strong>Limpieza Profunda</strong>: €100 - €200,
						incluyendo limpieza exhaustiva de áreas difíciles de
						alcanzar y detalles minuciosos.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación de la Limpieza de la Casa
				</h2>
				<p>
					1. <strong>Evaluación de Necesidades</strong>: Determine la
					frecuencia y el alcance de la limpieza necesaria para su
					casa.
				</p>
				<p>
					2. <strong>Comparación de Precios</strong>: Solicite
					cotizaciones de varios servicios de limpieza para encontrar
					la mejor opción de costo-beneficio.
				</p>
				<p>
					3. <strong>Servicios Adicionales</strong>: Considere agregar
					servicios como limpieza de ventanas o tratamiento de suelos
					según sea necesario.
				</p>
				<p>
					4. <strong>Programación Regular</strong>: Establezca un
					horario de limpieza regular para mantener su casa limpia y
					ordenada a largo plazo.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Al planificar la limpieza de una casa, considere estos
					factores para garantizar que el servicio cumpla con sus
					expectativas y necesidades.
				</p>
			</section>
		</div>
	);
};

export default LimpiezaCasaPage;

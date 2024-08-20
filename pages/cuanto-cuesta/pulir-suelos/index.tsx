import Head from "next/head";

const PulirSuelosPage = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>¿Cuánto cuesta pulir suelos? - Handyman</title>
				<meta
					name="description"
					content="Descubre los costos asociados con el pulido de suelos y cómo planificar este servicio."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/pulir-suelos`}
				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta pulir suelos?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Pulido básico: €10 - €20 por m²
						</p>
						<p>Incluye pulido estándar de suelos.</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Pulido avanzado: €20 - €40 por m²
						</p>
						<p>
							Incluye pulido con acabados especiales o suelos
							difíciles.
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
						Tipo de Suelo: Material del suelo como mármol, granito,
						madera, etc.
					</li>
					<li>
						Estado del Suelo: Nivel de daño, manchas o desgaste.
					</li>
					<li>Área a Pulir: Tamaño total del área a tratar.</li>
					<li>
						Acabados Especiales: Tratamientos adicionales como
						sellado o abrillantado.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Pulir Suelos
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Pulido básico</strong>: €10 - €20 por m²,
						incluyendo pulido estándar de suelos.
					</li>
					<li>
						<strong>Pulido avanzado</strong>: €20 - €40 por m²,
						incluyendo pulido con acabados especiales o suelos
						difíciles.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación del Pulido de Suelos
				</h2>
				<p>
					1. <strong>Evaluación del Suelo</strong>: Determinar el tipo
					y estado del suelo para determinar el tratamiento adecuado.
				</p>
				<p>
					2. <strong>Solicitud de Presupuestos</strong>: Obtener
					cotizaciones detalladas de varios proveedores para comparar
					precios y servicios adicionales.
				</p>
				<p>
					3. <strong>Considerar Necesidades Específicas</strong>:
					Evaluar la necesidad de tratamientos adicionales como
					sellado o abrillantado.
				</p>
				<p>
					4. <strong>Selección de Proveedor</strong>: Elegir un
					proveedor con experiencia en pulido de suelos y buenas
					referencias de clientes anteriores.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Al planificar el pulido de suelos, ten en cuenta estos
					factores para asegurar que obtengas el mejor servicio y
					resultados para tus necesidades.
				</p>
			</section>
		</div>
	);
};

export default PulirSuelosPage;

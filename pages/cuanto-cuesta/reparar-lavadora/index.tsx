import Head from "next/head";

const WasherRepairCost = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>
					¿Cuánto cuesta reparar una lavadora? - Handyman
				</title>
				<meta
					name="description"
					content="Descubre los costos asociados con la reparación de lavadoras y cómo presupuestar para este servicio de mantenimiento."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/reparar-lavadora`}
				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta reparar una lavadora?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Reparación Básica: €50 - €150
						</p>
						<p>
							Incluye reparaciones simples como cambio de piezas
							menores o ajustes.
						</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Reparación Completa: €150 - €300
						</p>
						<p>
							Incluye reparaciones completas con reemplazo de
							piezas principales y ajustes extensos.
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
						Tipo de Problema: Costos varían según la complejidad y
						gravedad del problema de la lavadora.
					</li>
					<li>
						Repuestos Necesarios: Precios pueden incrementar con el
						reemplazo de piezas originales o especializadas.
					</li>
					<li>
						Mano de Obra: Tarifas del técnico o empresa de
						reparación por el servicio.
					</li>
					<li>
						Urgencia y Horario: Precios pueden ser más altos para
						reparaciones urgentes o fuera de horario regular.
					</li>
					<li>
						Ubicación: Costos que pueden variar según la ubicación
						geográfica y las condiciones del mercado local.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Reparación de Lavadoras
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Reparación Básica</strong>: €50 - €150,
						incluyendo cambios de piezas menores y ajustes simples.
					</li>
					<li>
						<strong>Reparación Completa</strong>: €150 - €300,
						incluyendo reemplazo de piezas principales y ajustes
						extensos.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación del Presupuesto
				</h2>
				<p>
					1. <strong>Identificar Problemas de la Lavadora</strong>:
					Diagnosticar el problema específico antes de solicitar
					reparaciones.
				</p>
				<p>
					2. <strong>Solicitar Varios Presupuestos</strong>: Obtener
					cotizaciones detalladas de técnicos especializados para
					comparar costos y servicios ofrecidos.
				</p>
				<p>
					3. <strong>Considerar Costo-Beneficio</strong>: Evaluar la
					viabilidad de reparar versus reemplazar la lavadora en
					función del costo total de reparación.
				</p>
				<p>
					4. <strong>Revisar Garantías</strong>: Asegurarse de
					entender las garantías ofrecidas por la empresa de
					reparación y las condiciones de servicio.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Al planificar cuidadosamente y presupuestar la reparación de
					una lavadora, puedes prolongar su vida útil de manera
					efectiva y dentro de tu presupuesto.
				</p>
			</section>
		</div>
	);
};

export default WasherRepairCost;

import Head from "next/head";

const DoorInstallation = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>
					¿Cuánto cuesta instalar puertas? - Handyman
				</title>
				<meta
					name="description"
					content="Descubre los costos asociados con la instalación de puertas y cómo presupuestar para este tipo de proyecto de carpintería."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/instalar-puertas`}
				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta instalar puertas?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Básica: €100 - €300 por puerta
						</p>
						<p>Incluye puertas estándar y mano de obra básica.</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Personalizada: €300 - €1,000 o más por puerta
						</p>
						<p>
							Incluye puertas de diseño especial y ajustes
							personalizados.
						</p>
					</div>
				</div>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Factores que Afectan los Costos
				</h2>
				<ul className="list-disc list-inside">
					<li>Tipo de Puerta: Estándar vs. personalizada.</li>
					<li>Material: Madera, metal, PVC, etc.</li>
					<li>
						Acabado y Diseño: Diseños especiales y acabados
						decorativos.
					</li>
					<li>
						Mano de Obra: Costos asociados con la instalación
						profesional.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Instalar Puertas
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Básica</strong>: €100 - €300 por puerta,
						incluyendo puertas estándar y mano de obra básica.
					</li>
					<li>
						<strong>Personalizada</strong>: €300 - €1,000 o más por
						puerta, incluyendo puertas de diseño especial y ajustes
						personalizados.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación del Presupuesto
				</h2>
				<p>
					1. <strong>Selección de Puertas</strong>: Elije el tipo y
					diseño de puerta que se adapte a tus necesidades y estilo de
					hogar.
				</p>
				<p>
					2. <strong>Consultas y Comparaciones</strong>: Solicita
					varios presupuestos de instaladores de puertas para comparar
					precios y servicios.
				</p>
				<p>
					3. <strong>Consideraciones Adicionales</strong>: Planifica
					para cualquier trabajo adicional requerido como ajustes de
					marcos o pintura.
				</p>
				<p>
					4. <strong>Mantenimiento y Garantía</strong>: Verifica las
					políticas de garantía y mantenimiento ofrecidas por el
					instalador.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Al planificar cuidadosamente y presupuestar la instalación
					de puertas, puedes mejorar la seguridad y el estilo de tu
					hogar mientras te mantienes dentro de tu presupuesto.
				</p>
			</section>
		</div>
	);
};

export default DoorInstallation;

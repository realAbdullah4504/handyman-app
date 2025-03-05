import { Footer, Header } from "@/components";
import { NextPage } from "next";

const AvisoLegal: NextPage = () => {
  return (
    <>
    <Header/>
    <div className="container mx-auto pt-[95px] pb-[10px] px-6">
      <h1 className="text-2xl font-bold">Aviso Legal</h1>
      <p>Nombre de la empresa: Oficios24 SL</p>
      <p>Dirección: Giuseppe Licopoli, Neuenkamperstr 32, 42657 Solingen, Alemania</p>
      <p>Teléfono: +49 174 899-9213</p>
      <p>Correo electrónico: info@oficios24.es</p>
    </div>
    <Footer/>
    </>
  );
};

export default AvisoLegal;

import  Link  from 'next/link'
import AsciiArt from './ascciArt';

function SuccessPage(){
    return(

        <div
            className=" flex flex-col gap-y-4 flex items-center justify-center h-screen"
        >
            <h1
                className="bg-slade-400 block p-2 placeholder:text-slate-500"
                //className="block p-2 text-4xl"
            >
                Formulario enviado con exito!
        
            </h1>
            
             <Link href={"/"} className="bg-slade-400 block p-2 placeholder:text-slate-500">Volver a la pagina principal</Link>
             <AsciiArt /> 
           
        </div>
    );

}
export default SuccessPage;
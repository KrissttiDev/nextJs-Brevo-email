import { log } from "console";

import {handleForm}  from "./action";
export default function HomePage(){


  return(
    <div className="flex items-center justify-center h-screen">
      <form action={handleForm} method="POST" className="flex flex-col gap-y-4">
        <input name="title" 
          type="text" placeholder="Email title" 
          className="bg-slade-400 block p-2 placeholder:text-slate-500"
        />
        <input name="to_email" 
          type="email" placeholder="Write  the email of the person you wany to sent the email" 
          className="bg-slade-400 block p-2 placeholder:text-slate-500"
        />
        <input name="to_name" 
          type="text" placeholder="Write  the name of the person you wany to sent the email" 
          className="bg-slade-400 block p-2 placeholder:text-slate-500"
        />

        <textarea name="content" 
          placeholder="Write your Email....."
          className="bg-slade-400 block p-2 placeholder:text-slate-500">

        </textarea>

        <button
        className="bg-green-500 text-white p-2 rounded-md hover-:bg-slate-600">
          Enviar
        </button>
      </form>
    </div>
  );
}
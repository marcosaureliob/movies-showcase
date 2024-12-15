import { FileSearch, VideoCamera } from "phosphor-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav id='navbar' className='flex items-center bg-slate-500 p-4 justify-between'>
      <div className="flex gap-3 items-center">
        <VideoCamera weight="fill" className="text-slate-400 text-xl font-bold" />
        <h2 className="text-lg font-semibold text-slate-400">
          Movie List
        </h2>
      </div>
      <div className='flex gap-4 items-center'>
        <h2 className='text-lg font-semibold text-slate-400 active:text-purple-400'>
          <Link to={"/"}>Home</Link>
        </h2>
        <form className="flex items-center">
          <input className="rounded-md px-2 py-1 bg-slate-400 text-white font-medium" placeholder="Busque um filme" />
          <button type="submit" >
            <FileSearch size={30} className=" text-slate-400" weight="fill" />
          </button>
        </form>
      </div>
    </nav>
  )
}

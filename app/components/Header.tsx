"use client";
import Link from "next/link";
const Header = () => {
  return (
    <main>
    <nav className="flex items-start bg-slate-950 p-6">
      <ul className="flex">
        <li className="mr-4"><a className="text-sky-500" href="#">Home</a></li>
        <li className="mr-4"><a className="text-white" href="#">About</a></li>
        <li className="mr-4"><a className="text-white" href="#">Services</a></li>
        <li><a className="text-white" href="../dash/users">Users</a></li>

      </ul>
    </nav>
    <button className="btn-class rounded-xl" onClick={()=>document.getElementById('my_modal_5').showModal()}>log-in</button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Log-in</h3><br />
          <form>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Username / E-mail</span>
                </div>
                <input type="text" id="username" placeholder="Username / E-mail" className="input input-bordered w-full max-w-xs"/>
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Password</span>
                </div>
                <input type="password" id="password" placeholder="Password" className="input input-bordered w-full max-w-xs"/>
              </label> <br />
             <div className="text-start">
               <button className="btn btn-primary">Log-in</button>
             </div>
          </form>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    <div className="form">

    </div>
    </main>
  );
};

export default Header;

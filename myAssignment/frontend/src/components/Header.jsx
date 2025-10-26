import { useState } from "react";
export default function Header() {
    return(
        <header className="flex justify-between items-center px-8 py-4 bg-red-900 text-white">
           
                <div className="flex items-center gap-2">
                    <img
                    src="./src/assets/logo.jpg"
                    alt="App Logo"
                    className="h-10 w-10 rounded-full object-cover"
                    />
                    <h1 className="text-2xl font-semibold">MachioAlerts!</h1>
                </div>
                
               
                    <nav className="flex justify-between gap-5">
                           <a href="#" className="hover:text-blue-400" >Home</a>
                           <a href="#" className="hover:text-blue-400">Profile</a>
                           <a href="#" className="hover:text-blue-400">Notification</a>

                    </nav>
                    <button type="button" className="rounded text-white bg-red-300 hover:bg-red-500 px-5 py-4">ALERT!</button>
        </header>
    );
}


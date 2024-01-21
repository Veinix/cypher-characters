import React from 'react'

function SiteMap() {
    return (
        <div> SiteMap </div>
    )
}


function Footer() {
    return (
        <footer className="bg-indigo-800 hidden sm:block">
            <div className="p-2 text-white">
                <h1 className="text-2xl hidden sm:block mb-2">Footer</h1>
                <div className="flex">
                    <div className="flex-grow flex flex-col">
                        <a href="#" className="text-xs uppercase tracking-wider">Product</a>
                        <a href="#" className="text-xs uppercase tracking-wider">Services</a>
                        <a href="#" className="text-xs uppercase tracking-wider">Team</a>
                        <a href="#" className="text-xs uppercase tracking-wider">More...</a>
                    </div>
                    <div className="flex-grow flex flex-col">
                        <a href="#" className="text-xs uppercase tracking-wider">Contact</a>
                        <a href="#" className="text-xs uppercase tracking-wider">About</a>
                        <a href="#" className="text-xs uppercase tracking-wider">Careers</a>
                        <a href="#" className="text-xs uppercase tracking-wider">Affiliates</a>
                    </div>
                    <div className="flex-grow flex flex-col">
                        <a href="#" className="text-xs uppercase tracking-wider">Facebook</a>
                        <a href="#" className="text-xs uppercase tracking-wider">Instagram</a>
                        <a href="http://in1.com" className="text-xs uppercase tracking-wider">In1.com</a>
                        <a href="#" className="text-xs uppercase tracking-wider">Twitter</a>
                    </div>
                    <div className="flex-grow flex flex-col">
                        <a href="#" className="text-xs uppercase tracking-wider">FAQs</a>
                        <a href="#" className="text-xs uppercase tracking-wider">Open</a>
                        <a href="#" className="text-xs uppercase tracking-wider">Launch Up</a>
                        <a href="#" className="text-xs uppercase tracking-wider">Get Started</a>
                    </div>
                </div>
                <div className="text-right text-xs">
                    <a href="">&copy;2024 Veinix</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer

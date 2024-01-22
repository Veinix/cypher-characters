import Aside from "./Aside"
import Footer from "./Footer"
import Header from "./Header"

interface LayoutTemplateProps {
    children: React.ReactNode
}

function LayoutTemplate({ children }: LayoutTemplateProps) {
    return (
        <div className="flex flex-col gap-2">
            <div className="w-full min-h-screen h-auto flex-col ">
                <Header />
                {/* <Aside /> */}
                <main className="w-full min-h-full p-4">
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default LayoutTemplate
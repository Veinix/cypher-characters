import Aside from "./Aside"
import Footer from "./Footer"
import Header from "./Header"

interface LayoutTemplateProps {
    children: React.ReactNode
}

function LayoutTemplate({ children }: LayoutTemplateProps) {
    return (
        <>
            <div className="w-full min-h-screen flex-col ">
                <Header />
                {/* <Aside /> */}
                <main className="w-full h-full p-4">
                    {children}
                </main>
            </div>
            <Footer />
        </>
    )
}

export default LayoutTemplate
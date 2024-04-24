"use client"
import MyApp from "@/components/atoms/myapp"
import ProfilePage from "@/components/templates/profil_page"

export default function Home() {
    return(
    <>
        <MyApp Component={ProfilePage} pageProps={undefined} />
    </>
    )
}
import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";
import AllPosts from "../organisms/allpost";

export default function ProfilPage() {
    return (
        <Section2 isFancy={true}>
            <Heading>Profil Saya</Heading>
            <Post
                title="Hello Traveller!"
                body="Baca tentang petualangan saya."
            />  
            <AllPosts/>
        </Section2>
    )
}
import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";
import AllPosts from "../organisms/allpost";

export default function Contacts() {
    return (
        <Section2 isFancy={true}>
            <Heading>Contact Saya</Heading>
            <Post title="Instagram!" body="@anwarnlif" />
            <Post title="LinkedIn!" body="@AnwarAlifKatresna"></Post>
        </Section2>
    );
}
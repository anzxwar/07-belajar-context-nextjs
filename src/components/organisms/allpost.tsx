import Heading from "../atoms/heading";
import Section2 from "../atoms/section2";
import RecentPosts from "../molecules/recentposts";

export default function AllPosts() {
    return (
        <Section2 isFancy={true}>
            <Heading>Posts</Heading>
            <RecentPosts/>
        </Section2>
    );
}
import Heading from "./heading";
import Section2 from "./section2";

export default function Post({ title, body}: {title: string, body: string}) {
    return (
        <div>
            <p>Anwar Alif Katresna</p>
            <p>NIM: 2341728026</p>

            <Section2 isFancy={true}>
            <Heading>
                {title}
            </Heading>
            <p><i>{body}</i></p>
        </Section2>
        </div>
    );
}
import { InfoMovie } from "@/components/screens/InfoMovie";

export async function generateMetadata(params: {params: Promise<{name_movie: string}>}) {
    const {name_movie} = await params.params
    return {
        title: name_movie,
    };
}

const Info = async (params: { params: Promise<{ name_movie: string }> }) => {
    const {name_movie} = await params.params
    return (
        <InfoMovie name={name_movie}/>
    )
}

export default Info;
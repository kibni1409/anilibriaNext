import Head from "next/head";
import {FC} from "react";
import {TMeta} from "@/components/layout/seo/types";

const Meta: FC<TMeta> = ({title}) => {
    return (
        <Head>
            <title>{title}</title>
        </Head>
    )
}

export default Meta;
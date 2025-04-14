import Image from 'next/image'

export default function NotFound(){
    return (
        <div style={{
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'row',
            paddingTop: 300,
        }}>
            <Image src={'/pngwingcom.png'} alt="404" width={500} height={300} />
        </div>
    );
};
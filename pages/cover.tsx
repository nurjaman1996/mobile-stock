import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className="flex justify-center max-w-screen-sm bg-[#202A36] mx-auto h-screen">
            <title>WMS App</title>
            <div className='w-full m-auto'>
                <Image
                    className='m-auto max-w-[75%]'
                    src="/logo.png"
                    alt='Logo'
                    height="450"
                    width="450"
                    priority
                />
            </div>
        </div>
    )
}

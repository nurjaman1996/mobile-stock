import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { AiOutlineArrowLeft } from 'react-icons/ai';

export default function ProductPage() {

    let size: any = [];
    for (let index = 0; index < 11; index++) {
        if (index == 0) {
            size.push(
                <div key={index} className='bg-red-600 rounded-md py-2 text-sm'>{index + 35}={index + 0}</div>
            )
        } else {
            size.push(
                <div key={index} className='bg-green-600 rounded-md py-2 text-sm'>{index + 35}={index + 10}</div>
            )
        }
    }



    return (
        <>
            <Head>
                <title>WMS App</title>
            </Head>
            <div className="flex justify-center max-w-screen-sm bg-[#fdfdfd] mx-auto h-auto min-h-screen pb-6">

                <div className='fixed w-full bg-[#ffffff] px-3 z-10 drop-shadow h-[3.5rem] py-[0.6rem] flex max-w-screen-sm'>
                    <Link className='h-auto my-auto flex justify-start' href="/">
                        <AiOutlineArrowLeft size={20} />
                    </Link>
                    <div className='w-full font-bold my-auto flex justify-center mr-4'>
                        Details Product
                    </div>
                </div>

                <div className='h-fit mt-[3.5rem] w-full'>
                    <Image
                        className='m-auto max-w-[100%]'
                        src="/testproduk0.jpg"
                        alt='product-1'
                        height="1500"
                        width="1500"
                        priority
                    />

                    <div className='px-3 py-1 mt-1 mb-10 h-auto bg-white'>
                        <div className='text-sm w-fit font-bold text-[#5B9EE1]'>
                            NIKE
                        </div>

                        <p className='line-clamp-2 text-base mb-2 font-medium'>Nike Air Force Triple White PK Version Import dari China Luar Biasa</p>

                        <div className='mt-3 flex font-medium'>
                            <div className='text-xs text-center border border-gray-500 rounded-lg px-3 bg-white py-1'>
                                IMPORT
                            </div>
                            <div className='text-xs text-center grow justify-self-center border border-gray-500 rounded-lg px-3 bg-white py-1 mx-2'>
                                GUDANG BANDUNG
                            </div>
                            <div className='text-xs text-center border border-gray-500 bg-white rounded-lg px-3 py-1'>
                                QTY 120
                            </div>
                        </div>

                        <div className='mt-2 grid grid-cols-3 gap-3 font-medium'>
                            <div className='text-xs text-center border shadow-sm rounded-lg border-gray-500 bg-white px-3'>
                                <div className='mt-1 mb-2 inline-block align-top'>
                                    <p className='text-xs'>Normal</p>
                                    <p className='text-xs'>Rp 450.000</p>
                                </div>
                            </div>
                            <div className='text-xs text-center border shadow-sm rounded-lg border-gray-500 bg-white px-3'>
                                <div className='mt-1 mb-2 inline-block align-top'>
                                    <p className='text-xs'>Reseller</p>
                                    <p className='text-xs'>Rp 400.000</p>
                                </div>
                            </div>
                            <div className='text-xs text-center border shadow-sm rounded-lg border-gray-500 bg-white px-3'>
                                <div className='mt-1 mb-2 inline-block align-top'>
                                    <p className='text-xs'>Grosir</p>
                                    <p className='text-xs'>Rp 350.000</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-4 gap-4 mt-4 text-center text-white">
                            {size}
                        </div>



                    </div>

                    <center><p className='text-xs text-[#ababab]'>Stock App Version 1</p></center>
                </div>

            </div>
        </>
    )
}

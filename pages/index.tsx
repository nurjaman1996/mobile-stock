import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillHome } from 'react-icons/ai';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export async function getServerSideProps() {
  const response = await fetch('https://dummyjson.com/products?limit=6&skip=0');
  const dataProducts = await response.json();

  return {
    props: {
      dataProducts
    }
  };
}

export default function Home({ dataProducts: dataProduct_ }: any) {

  const [start, setStart] = useState(6);
  const [dataProduct, setData] = useState(dataProduct_.products);
  const [hasMore, setHasMore] = useState(true);

  async function loadMore() {
    const req = await fetch(`https://dummyjson.com/products?limit=6&skip=${start}`);
    const newDataProduct = await req.json();

    setData([...dataProduct, ...newDataProduct.products]);
    setStart(start + 6);
    setHasMore(start > dataProduct.length ? false : true);
  }

  // useEffect(() => {
  //   setHasMore(start > dataProduct.length ? false : true);
  // })

  let imageList: any = [];
  {
    dataProduct.map((product: any) => {
      return (
        imageList.push(

          <Link className='m-[2.5px] bg-white h-auto drop-shadow-md z-0' key={product.id} href="/ProductPage">
            <div className='aspect-square'>
              <Image
                className='m-auto max-w-[100%] max-h-[100%]'
                src={product.thumbnail}
                alt='product-1'
                height="500"
                width="500"
                priority
              />
            </div>

            <div className='px-2 py-1 mt-1 mb-2 h-auto'>
              <div className='text-xs w-fit text-[#ababab]'>
                {product.brand}
              </div>

              <p className='line-clamp-2 text-xs my-1 h-8 font-medium'>
                {product.title}
              </p>

              <div className="grid grid-cols-2 text-[#302dd5]">
                <div className='text-xs w-fit justify-self-start'>
                  Rp {product.price}.000
                </div>
                <div className='text-xs w-fit justify-self-end'>
                  {product.id} Pcs
                </div>
              </div>
            </div>
          </Link>
        )
      )
    })
  }


  return (
    <>
      <Head>
        <title>WMS App</title>
      </Head>

      <div className="justify-center max-w-screen-sm bg-[#fdfdfd] mx-auto h-auto min-h-screen mb-7">

        <div className='fixed top-0 w-full max-w-screen-sm bg-[#ffffff] px-3 z-10 drop-shadow h-[3.5rem] py-[0.6rem] flex'>
          <form className='w-[70%]'>
            <input placeholder='Search Product Name' type="text" className="w-full h-auto my-auto px-3 py-2 bg-[#EFEFEF] text-sm placeholder-slate-600 focus:outline-none capitalize" />
          </form>

          <div className='w-[30%] h-full my-auto grid grid-rows-2 justify-center justify-items-center px-3'>
            <AiFillHome size={20} />
            <span className='text-[0.6rem] mt-auto line-clamp-1'>All Warehouse</span>
          </div>
        </div>

        <InfiniteScroll
          dataLength={dataProduct.length}
          next={loadMore}
          hasMore={hasMore}
          loader={
            <div className='fixed'>
            </div>
          }
          endMessage={
            <div className='text-center mt-6 text-xs'>
              <b>No More Data...</b>
            </div>
          }
        >
          <div className="grid grid-cols-2 w-full h-auto mt-[3.7rem] z-0">
            {imageList}
          </div>
        </InfiniteScroll>

        <button className="fixed right-0 bottom-0 mr-7 mb-7 z-20" onClick={scrollToTop}>
          <BsFillArrowUpCircleFill className='text-[200%] no-underline' />
        </button>

      </div>
    </>
  )
}

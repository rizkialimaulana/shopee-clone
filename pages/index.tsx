import type { NextPage } from 'next'
import Head from 'next/head'
import { BiMailSend } from "react-icons/bi";
import Header from '../components/Header'

const Home: NextPage = ({categories, products}: any) => {
  return (
    <div className="">
      <Head>
        <title>Shopee Clone Indonesia</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Header />
      <main className="flex w-full flex-1 flex-col py-10 space-y-5 md:px-20 px-3">
        <div className="flex flex-col shadow-lg">
          <div className="w-full bg-gray-200 p-2">
            <h1 className="uppercase tracking-wider font-bold">kategori</h1>
          </div>
          <div className="flex flex-row md:overflow-hidden overflow-x-scroll items-center space-x-5 md:space-y-5 p-5">
            {categories.map((item: any) => (
              <div className="w-36 bg-gray-100 h-20 p-4 flex flex-col items-center justify-center text-center transition-all hover:bg-gray-200 cursor-pointer">
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col shadow-lg">
          <div className="w-full bg-gray-200 p-2">
            <h1 className="uppercase tracking-wider font-bold">best sales</h1>
          </div>
          <div className="grid md:grid md:grid-cols-6 grid-cols-2 items-center space-y-5 p-5">
            {products?.map((item: any) => (
              <div
                key={item.id}
                className="w-40 bg-gray-100 h-72 p-4 flex flex-col space-y-2 items-center justify-center text-center transition-all hover:bg-gray-200 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-28 h-32 object-contain"
                />
                <span className="font-bold text-xs">{item.title}</span>
                <span className="text-[#e67931]">USD {item.price}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="uppercase tracking-[10px] font-bold text-lg">
            newsletter
          </h1>
          <p>Dapatkan info seputar promo dan juga tawaran menarik lainnya</p>
          <div className="md:w-fit w-full">
            <div className="flex flex-row md:w-[30rem] w-full h-[50px] border border-[#ff6600] items-center bg-white rounded-full shadow-lg">
              <input
                type="text"
                className="w-full h-[30px] outline-none px-2 ml-2"
                placeholder="Email anda"
              />
              <BiMailSend className="inline-flex rounded-full w-9 h-8 py-2 bg-[#ff6600] text-white mr-2 cursor-pointer" />
            </div>
          </div>
        </div>
      </main>
      <footer className=""></footer>
    </div>
  );
}

export default Home

export async function getStaticProps() {
  const categories = await fetch("https://fakestoreapi.com/products/categories").then(
    (res) => res.json()
  );

  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props: {
      categories,
      products
    }
  }
}

import Header from '../components/Header'
import Head from "next/head";
import ProductFeed from '../components/ProductFeed';

export default function Home({ products }) {
  return (
    <div className="bg-slate-300">
      <Head>
        <title>SCS Web Application</title>
      </Head>

      <Header />

    <main className="max-w-screen-2xl mx-auto bg-slate-300"> 
       {/*Product feed */}
        <ProductFeed products={products}/>
    </main>

    </div>
  )
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return { 
    props: {
      products,
    },
  };
}

// GET => https://fakestoreapi.com/products

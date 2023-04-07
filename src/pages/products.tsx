import { ProductListItem } from "@/components/Product";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";

const fetchData = async (page: number) => {
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=25&offset=${page * 25}`
  );
  const data: ProductInterface[] = await res.json();
  return data;
};

const usePageNumber = () => {
  const router = useRouter();
  const first = <T,>(arr: T | T[]): T | undefined =>
    Array.isArray(arr) ? arr[0] : arr;
  const [pageNumber, setPageNumber] = useState(
    Number.parseInt(first(router.query.page) || "1")
  );

  useEffect(() => {
    setPageNumber(Number.parseInt(first(router.query.page) || "1"));
  }, [router.query.page]);

  return pageNumber;
};

const ProductsPage = () => {
  const pageNumber = usePageNumber();
  const { data, isLoading, status, error } = useQuery(
    ["products", pageNumber],
    () => fetchData(pageNumber),
    { keepPreviousData: true }
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!data || error) {
    return <h1>Coś poszło nie tak</h1>;
  }

  const totalPages = Math.ceil(data.length / 25);
  const indicators = new Array(totalPages).fill(0);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data.map((product: ProductInterface) => {
            return (
              <li key={product.id} className="shadow-sm rounded-md ">
                <ProductListItem
                  data={{
                    id: product.id,
                    title: product.title,
                    thumbnailUrl: product.image,
                    thumbnailAlt: product.title,
                  }}
                ></ProductListItem>
              </li>
            );
          })}
        </ul>
      </div>
      <nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
        <div className="hidden md:-mt-px md:flex">
          {indicators.map((indicator, index) => (
            <Link
              href={`/products?page=${index + 1}`}
              key={index}
              className={`${
                pageNumber === index + 1
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium`}
            >
              {index + 1}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default ProductsPage;

interface ProductInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

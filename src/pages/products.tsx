import { ProductListItem } from "@/components/Product";
import { GetStaticProps, InferGetStaticPropsType } from "next";

const ProductsPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
    </div>
  );
};

export default ProductsPage;

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`https://fakestoreapi.com/products/`);
  const data: ProductInterface[] = await response.json();

  return {
    props: {
      data,
    },
  };
};

interface ProductInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

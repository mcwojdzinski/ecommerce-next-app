import Product from "@/components/Product";
import { GetStaticProps, InferGetStaticPropsType } from "next";

const ProductsPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {data.map((product: ProductInterface) => {
        return (
          <li key={product.id} className="bg-teal-200">
            <Product
              data={{
                description: product.description,
                thumbnailUrl: product.image,
                thumbnailAlt: product.title,
                rating: product.rating.rate,
              }}
            ></Product>
            {product.title}
          </li>
        );
      })}
    </ul>
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

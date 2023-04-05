import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { ProductDetails } from "@/components/Product";

const ProductIdPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!data) {
    return <div>coś poszło nie tak</div>;
  }
  return (
    <div>
      <ProductDetails
        data={{
          title: data.title,
          description: data.description,
          thumbnailUrl: data.image,
          thumbnailAlt: data.title,
          rating: data.rating.rate,
        }}
      />
    </div>
  );
};

export default ProductIdPage;

export const getStaticPaths = async () => {
  const response = await fetch(`https://fakestoreapi.com/products/`);
  const data: SingleProductInterface[] = await response.json();
  return {
    paths: data.map((product) => {
      return {
        params: {
          productId: product.id.toString(),
        },
      };
    }),
    fallback: false,
  };
};
export type InferGetStaticPathsType<T> = T extends () => Promise<{
  paths: Array<{ params: infer R }>;
}>
  ? R
  : never;
export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<InferGetStaticPathsType<typeof getStaticPaths>>) => {
  if (!params?.productId) {
    return { props: {}, notFound: true };
  }
  const response = await fetch(
    `https://fakestoreapi.com/products/${params?.productId}`
  );
  const data: SingleProductInterface | null = await response.json();

  return {
    props: {
      data,
    },
  };
};

interface SingleProductInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

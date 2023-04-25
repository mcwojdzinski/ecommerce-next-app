import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { NextSeo } from "next-seo";

interface ProductDetails {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  rating: number;
}

interface ProductProps {
  data: ProductDetails;
}
export const ProductDetails = ({ data }: ProductProps) => {
  return (
    <div className="max-w-5xl mx-auto">
      <NextSeo
        title={data.title}
        description={data.description}
        canonical={`https://ecommerce-next-app.vercel.app/products/${data.id}`}
        openGraph={{
          url: `https://ecommerce-next-app.vercel.app/products/${data.id}`,
          title: data.title,
          description: data.description,
          images: [
            {
              url: data.thumbnailUrl,
              alt: data.thumbnailAlt,
              type: "image/jpeg",
            },
          ],
          siteName: "E-Commerce shop",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      ></NextSeo>
      <h2 className="p-4 font-bold text-center text-2xl">{data.title}</h2>
      <Image
        src={data.thumbnailUrl}
        alt={data.thumbnailAlt}
        className="h-1/2 object-center group-hover:opacity-75"
        width={400}
        height={300}
        quality={100}
      />

      <p className="mt-1 text-lg font-medium text-gray-900">{data.rating}</p>
      <p>{data.description}</p>

      <article className="prose lg:prose-xl">
        <ReactMarkdown>{data.longDescription}</ReactMarkdown>
      </article>
    </div>
  );
};

type ProductListItem = Pick<
  ProductDetails,
  "id" | "title" | "thumbnailUrl" | "thumbnailAlt"
>;

interface ProductListItemProps {
  data: ProductListItem;
}
export const ProductListItem = ({ data }: ProductListItemProps) => {
  return (
    <>
      <Link href={`/products/${data.id}`} className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <Image
            src={data.thumbnailUrl}
            alt={data.thumbnailAlt}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
            width={100}
            height={100}
          />
        </div>
        <h2 className="p-4 font-bold text-center text-2xl">{data.title}</h2>
      </Link>
    </>
  );
};

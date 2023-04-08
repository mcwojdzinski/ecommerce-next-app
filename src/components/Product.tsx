import Link from "next/link";
import Image from "next/image";

interface ProductDetails {
  id: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  rating: number;
}

interface ProductProps {
  data: ProductDetails;
}
export const ProductDetails = ({ data }: ProductProps) => {
  return (
    <>
      <div className="aspect-h-1 aspect-w-1 w-1/2 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <Image
          src={data.thumbnailUrl}
          alt={data.thumbnailAlt}
          className="object-cover object-center group-hover:opacity-75"
          width={50}
          height={50}
          quality={100}
        />
      </div>
      <h2 className="p-4 font-bold text-center text-2xl">{data.title}</h2>
      <p className="mt-1 text-lg font-medium text-gray-900">{data.rating}</p>
      <p>{data.description}</p>
    </>
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

import Link from "next/link";

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
      <a href="#" className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            src={data.thumbnailUrl}
            alt={data.thumbnailAlt}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h2 className="p-4 font-bold text-center text-2xl">{data.title}</h2>
        <p className="mt-1 text-lg font-medium text-gray-900">{data.rating}</p>
        <p>{data.description}</p>
      </a>
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
          <img
            src={data.thumbnailUrl}
            alt={data.thumbnailAlt}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h2 className="p-4 font-bold text-center text-2xl">{data.title}</h2>
      </Link>
    </>
  );
};

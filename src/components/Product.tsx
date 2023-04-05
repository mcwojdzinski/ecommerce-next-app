import Image from "next/image";

interface ProductProps {
  data: {
    description: string;
    thumbnailUrl: string;
    thumbnailAlt: string;
    rating: number;
  };
}

const Product = ({ data }: ProductProps) => {
  return (
    <>
      <Image
        src={data.thumbnailUrl}
        alt={data.thumbnailAlt}
        className="w-[100px]"
      />
      <p>{data.description}</p>
      <p> {data.rating} </p>
    </>
  );
};

export default Product;

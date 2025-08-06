import Image from "next/image";

export default function Home() {
  return (
    <div className="container my-5">
      <div className="relative size-80 ">
        <Image  fill={true} priority={true} sizes="100vw"  className="mx-auto object-cover object-center"  src="https://cdn.smartslider3.com/wp-content/uploads/2019/05/sliderimages.png" alt="" />
      </div>
    </div>
  );
}

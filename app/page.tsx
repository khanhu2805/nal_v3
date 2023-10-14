import BannerSlideShow from "@/components/BannerSlideShow";
import ProductSlideShow from "@/components/ProductSildeShow";
import { PrismaClient } from "@prisma/client";


export  default async function HomePage() {
  const product = await new PrismaClient().product.findMany();
  return (
    <>
    <BannerSlideShow/>
    <div className="flex flex-col mb-10 w-screen">
      <span className="text-xl font-bold mt-5 w-screen text-center">SẢN PHẨM MỚI</span>
      <p className="text-lg font-normal italic mt-5 w-screen text-center">"NAL mang đến cho bạn sản phẩm thời trang mới - phong cách và thoải mái tối ưu."</p>
      <ProductSlideShow products = {product}/>
      <span className="text-xl font-bold mt-5 w-screen text-center">SẢN PHẨM SALE SỐC</span>
      <p className="text-lg font-normal italic mt-5 w-screen text-center">"Khám phá cơ hội tiết kiệm không giới hạn với sản phẩm sale của NAL.
      <br/>
      Nhận ngay những món đồ thời trang ưu đãi, không chỉ giúp bạn trông xuất sắc hơn mà còn giữ ví tiền của bạn nguyên vẹn."</p>
      <ProductSlideShow products = {product}/>
    </div>
    </>
  )
}
'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Define the Footer component
export default function Footer() {
    const path = usePathname()
    if (path.startsWith('/sign_in') ) return null;
    if (path.startsWith('/sign_up')) return null;
  return (
    <div className='bg-orange-100 w-screen h-fit p-4 flex flex-row'>
        <div className='flex basis-1/3 space-y-2 items-center h-fit'>
            <img src='/assets/logo.png' alt='logo'/>
            <div className='flex flex-col items-center'>
                <h3 className='text-xl font-bold'>NAL</h3>
                <p className='text-lg italic font-semibold'>Chất lượng và phong cách hàng đầu</p>
            </div>
        </div>
        <div className='flex flex-col basis-1/3  justify-center items-center'>
            <span className='text-xl font-bold'>LIÊN HỆ</span>
            <div className='flex flex-row space-x-6'>
                <Link href=''>
                    <img src='/assets/fb.png' className='h-24 w-24'/>
                </Link>
                <Link href=''>
                    <img src='/assets/youtube.png' className='mt-4 h-16 w-16'/>
                </Link>
                <Link href=''>
                    <img src='/assets/tiktok.png' className='mt-4 h-16 w-16'/>
                </Link>
            </div>
        </div>
        <div className='basis-1/3 flex flex-col text-lg font-semibold italic items-center'>
            <span className='text-xl font-bold not-italic'>CỬA HÀNG</span>
            <div className='flex flex-row mt-2'>
                <div className='flex flex-col not-italic space-y-4'>
                    <p>Địa chỉ:</p>
                    <p>SĐT:</p>
                </div>
                <div className='flex flex-col ml-4 space-y-4'>
                    <p>10 QL22, Tân Xuân, Hóc Môn, Thành phố Hồ Chí Minh</p>
                    <p>0123456789</p>
                </div>
            </div>
        </div>
    </div>

  );
}
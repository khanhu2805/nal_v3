'use client'
import numberWithCommas from '@/number_commas'
import axios from 'axios'
import {useSession, signOut, signIn} from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const {data:session} = useSession();
    const path = usePathname();
    const [cartNumber, setCartNumber] = useState(0);
    //console.log(session.user.name)
        if (session && session.user) {
            const fetchUserCart = async() => {
            try {
                const response = await axios.get('/api/cart', {
                    params: {
                        id: session.user.id       
                    }
                })
                 .then((response) => {
                    setCartNumber(response.data);
                 });
            } catch(err) {
                return console.log(err);
            }
            };
            fetchUserCart();
            return  (
                <>
                <div className='flex bg-orange-100 h-fit w-screen py-4 items-center shadow-md'>
                        <a className='flex-col ml-40'href='/'>
                            <img src='/assets/logo.png' className='h-12 w-12' alt = 'logo'/>
                            <span className='text-black font-bold text-2xl'>NAL</span>
                        </a>
                    <div className='ml-40'>
                        <div className='flex space-x-12'>
                            <Link href='/product' className='text-black font-bold text-2xl hover:text-orange-400'>SẢN PHẨM</Link>
                            
                            <div className='border-r-2 border-black'></div>
                            <Link href='/about' className='text-black font-bold text-2xl hover:text-orange-400'>ABOUT US</Link>
                            <div className='border-r-2 border-black'></div>
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='flex items-center ml-20'>
                            <div className='flex flex-row space-x-4'> 
                                <svg className='' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" >
                                    <path fillRule="evenodd" clipRule="evenodd" d="M15 12C16.705 12 18.3401 11.3679 19.5457 10.2426C20.7513 9.11742 21.4286 7.5913 21.4286 6C21.4286 4.4087 20.7513 2.88258 19.5457 1.75736C18.3401 0.632141 16.705 0 15 0C13.295 0 11.6599 0.632141 10.4543 1.75736C9.24872 2.88258 8.57143 4.4087 8.57143 6C8.57143 7.5913 9.24872 9.11742 10.4543 10.2426C11.6599 11.3679 13.295 12 15 12ZM0 30C-2.93527e-08 28.1615 0.387987 26.341 1.14181 24.6424C1.89563 22.9439 3.00052 21.4005 4.3934 20.1005C5.78628 18.8005 7.43986 17.7693 9.25975 17.0657C11.0796 16.3621 13.0302 16 15 16C16.9698 16 18.9204 16.3621 20.7403 17.0657C22.5601 17.7693 24.2137 18.8005 25.6066 20.1005C26.9995 21.4005 28.1044 22.9439 28.8582 24.6424C29.612 26.341 30 28.1615 30 30H0Z" fill="black"/>
                                </svg>
                                <span className='text-black font-semibold text-xl -mt-1'>{session.user.name}</span>
                            </div>
                        </div>
                        <Link href='/cart' className='ml-20 relative'>
                            <div className='bg-red-600 absolute rounded-full w-5 h-5 -right-1 top-0 text-sm flex items-center justify-center font-semibold text-white'>{cartNumber > 99 ? '99+' : cartNumber}</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path d="M33.75 10H27.5C27.5 8.01088 26.7098 6.10322 25.3033 4.6967C23.8968 3.29018 21.9891 2.5 20 2.5C18.0109 2.5 16.1032 3.29018 14.6967 4.6967C13.2902 6.10322 12.5 8.01088 12.5 10H6.25C5.58696 10 4.95107 10.2634 4.48223 10.7322C4.01339 11.2011 3.75 11.837 3.75 12.5V31.25C3.75 31.913 4.01339 32.5489 4.48223 33.0178C4.95107 33.4866 5.58696 33.75 6.25 33.75H33.75C34.413 33.75 35.0489 33.4866 35.5178 33.0178C35.9866 32.5489 36.25 31.913 36.25 31.25V12.5C36.25 11.837 35.9866 11.2011 35.5178 10.7322C35.0489 10.2634 34.413 10 33.75 10ZM20 5C21.3261 5 22.5979 5.52678 23.5355 6.46447C24.4732 7.40215 25 8.67392 25 10H15C15 8.67392 15.5268 7.40215 16.4645 6.46447C17.4021 5.52678 18.6739 5 20 5ZM33.75 31.25H6.25V12.5H12.5V15C12.5 15.3315 12.6317 15.6495 12.8661 15.8839C13.1005 16.1183 13.4185 16.25 13.75 16.25C14.0815 16.25 14.3995 16.1183 14.6339 15.8839C14.8683 15.6495 15 15.3315 15 15V12.5H25V15C25 15.3315 25.1317 15.6495 25.3661 15.8839C25.6005 16.1183 25.9185 16.25 26.25 16.25C26.5815 16.25 26.8995 16.1183 27.1339 15.8839C27.3683 15.6495 27.5 15.3315 27.5 15V12.5H33.75V31.25Z" fill="black"/>
                            </svg>
                        </Link>
                        <button onClick={() => signOut()} className='ml-20 text-black p-3 font-bold text-xl border-solid border-2 border-orange-400 rounded-lg hover:bg-orange-400'>ĐĂNG XUẤT</button>
                    </div>
                </div>
                </>
            )
        }
        if (path.startsWith('/sign_in') ) return null;
        if (path.startsWith('/sign_up')) return null;
        if (session && session.user.name ==='admin') {
            return  (
                <>
                <div className='flex bg-orange-100 h-fit w-screen py-4 items-center shadow-md'>
                        <a className='flex-col ml-40'href='/'>
                            <img src='/assets/logo.png' className='h-12 w-12' alt = 'logo'/>
                            <span className='text-black font-bold text-2xl'>NAL</span>
                        </a>
                    <div className='ml-40'>
                        <div className='flex space-x-12'>
                            <Link href='/product' className='text-black font-bold text-2xl hover:text-orange-400'>SẢN PHẨM</Link>
                            
                            <div className='border-r-2 border-black'></div>
                            <Link href='/about' className='text-black font-bold text-2xl hover:text-orange-400'>ABOUT US</Link>
                            <div className='border-r-2 border-black'></div>
                            <Link href='/admin/add_product' className='text-black font-bold text-2xl hover:text-orange-400'>ADD</Link>
                            <div className='border-r-2 border-black'></div>
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='flex items-center ml-20'>
                            <div className='flex flex-row space-x-4'> 
                                <svg className='' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" >
                                    <path fillRule="evenodd" clipRule="evenodd" d="M15 12C16.705 12 18.3401 11.3679 19.5457 10.2426C20.7513 9.11742 21.4286 7.5913 21.4286 6C21.4286 4.4087 20.7513 2.88258 19.5457 1.75736C18.3401 0.632141 16.705 0 15 0C13.295 0 11.6599 0.632141 10.4543 1.75736C9.24872 2.88258 8.57143 4.4087 8.57143 6C8.57143 7.5913 9.24872 9.11742 10.4543 10.2426C11.6599 11.3679 13.295 12 15 12ZM0 30C-2.93527e-08 28.1615 0.387987 26.341 1.14181 24.6424C1.89563 22.9439 3.00052 21.4005 4.3934 20.1005C5.78628 18.8005 7.43986 17.7693 9.25975 17.0657C11.0796 16.3621 13.0302 16 15 16C16.9698 16 18.9204 16.3621 20.7403 17.0657C22.5601 17.7693 24.2137 18.8005 25.6066 20.1005C26.9995 21.4005 28.1044 22.9439 28.8582 24.6424C29.612 26.341 30 28.1615 30 30H0Z" fill="black"/>
                                </svg>
                                <span className='text-black font-semibold text-xl -mt-1'>{session.user.name}</span>
                            </div>
                        </div>
                        <button onClick={() => signOut()} className='ml-20 text-black p-3 font-bold text-xl border-solid border-2 border-orange-400 rounded-lg hover:bg-orange-400'>ĐĂNG XUẤT</button>
                    </div>
                </div>
                </>
            )
        }
       return (
                <div className='flex bg-orange-100 h-fit w-screen py-4 items-center shadow-md'>
                        <a className='flex-col ml-40'href='/'>
                            <img src='/assets/logo.png' className='h-12 w-12' alt = 'logo'/>
                            <span className='text-black font-bold text-2xl'>NAL</span>
                        </a>
                    <div className='ml-40'>
                        <div className='flex space-x-12'>
                            <Link href='/product' className='text-black font-bold text-2xl hover:text-orange-400'>SẢN PHẨM</Link>
                            
                            <div className='border-r-2 border-black'></div>
                            <Link href='/about' className='text-black font-bold text-2xl hover:text-orange-400'>ABOUT US</Link>
                            <div className='border-r-2 border-black'></div>
                        </div>
                    </div>
                    <a href='/sign_in' className='ml-80 text-black p-3 font-bold text-xl border-solid border-2 border-orange-400 rounded-lg hover:bg-orange-400'>ĐĂNG NHẬP</a>
                    </div>
                )
        
}

export default Navbar
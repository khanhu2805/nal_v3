'use client'
import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation';
type Props = {}

const SignInForm = (props: Props) => {
    const router = useRouter();
    const [user, setUser] = useState({
        phone:'',
        password:''
    })
    const SignIn = () => {
            try {
                signIn('credentials', {
                    phone:user.phone,
                    password:user.password,
                    redirect:true,
                    callbackUrl:'/'
                })
            }
            catch{
                console.log('Error')
            }
      
    }
    
  return (
    <div className=" flex h-fit  flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-20 w-auto"
              src="./assets/logo.png"
              alt="Your Company"  
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              ĐĂNG NHẬP
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="space-y-6">
              <div>
                <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                  SỐ ĐIỆN THOẠI
                </label>
                <div className="mt-2">
                  <input
                    id="phone"
                    name=""
                    type="text"
                    value={user.phone}
                    onChange={(e) => setUser({...user, phone:e.target.value})}
                    required
                    className="outline-none  block w-full rounded-md p-1.5 text-gray-900 shadow-sm border-[2px] placeholder:text-gray-400 focus:border-2 focus:border-orange-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                  MẬT KHẨU
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name=""
                    type="password"
                    onChange={(e) => setUser({...user, password:e.target.value})}
                    required
                    className="outline-none  block w-full rounded-md p-1.5 text-gray-900 shadow-sm border-[2px] placeholder:text-gray-400 focus:border-2 focus:border-orange-500 sm:text-sm sm:leading-6"
                  />
                 
                </div>
              </div>

                
              <div>
                <button
                  onClick={SignIn}
                  className="flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
                >
                  ĐĂNG NHẬP
                </button>
              </div>
            </div>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Chưa có tài khoản?{' '}
              <a href="/sign_up" className="font-semibold leading-6 text-orange-400 hover:text-orange-500">
                ĐĂNG KÝ
              </a>  
            </p>
          </div>
        </div>
  )
}

export default SignInForm
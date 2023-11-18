'use client'
import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
type Props = {}

const SignUpForm = (props: Props) => {
    const [user, setUser] = useState({
        name:'',
        phone:'',
        password:'',
        money:0,
    });
    const router = useRouter();
   
  
    const Register = () => {
            const data = {
                name:user.name,
                phone: user.phone,
                password:user.password,
                money: user.money
            }
            axios.post('/api/register', data)
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log(error)
            })
            .finally (() => {
                router.push('/sign_in')
            })
        }
    
  return (
    <div className=" flex h-fit  flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-20 w-auto"
              src="./assets/logo.png"
              alt="NAL"  
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              ĐĂNG KÝ
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="space-y-6">
              <div>
                <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                  HỌ TÊN
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name=""
                    type="text"
                    onChange={(e) => setUser({...user, name:e.target.value})}
                    required
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                  SỐ ĐIỆN THOẠI
                </label>
                <div className="mt-2">
                  <input
                    id="phone"
                    name=""
                    type='text'
                    placeholder={user.phone}
                    onChange={(e) => setUser({...user, phone:e.target.value})}
                    minLength={10}
                    maxLength={10}
                    required
                    className="placeholder:font-extralight block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"
                  />
                </div>
                {user.phone.length<10? (
                <div>
                  <h3 className='text-red-500 flex justify-end'>NHẬP THIẾU SỐ ĐIỆN THOẠI</h3>
                </div>)
                :(<div></div>)}
                {user.phone.at(0) != '0'? (
                <div>
                  <h3 className='text-red-500 flex justify-end'>NHẬP SAI ĐỊNH DẠNG SỐ ĐIỆN THOẠI</h3>
                </div>)
                :(<div></div>)}
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
                    minLength={6}
                    required
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"
                  />
                  {user.password.length<6 ? (
                <div>
                  <h3 className='text-red-500 flex justify-end'>PASSWORD PHẢI TRÊN 6 KÍ TỰ</h3>
                </div>)
                :(<div></div>)}
                </div>
              </div>

                
              <div>
                <button
                  onClick={Register}
                  disabled={user.name.length==0 || user.phone.length<10 || user.phone.at(0)!= '0' || user.password.length<6}
                  className={`${user.name.length==0 || user.phone.length<10 || user.phone.at(0)!= '0' || user.password.length<6 ? 'cursor-not-allowed':''} flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400`}
                >
                  ĐĂNG KÝ
                </button>
              </div>
            </div>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Đã có tài khoản?{' '}
              <a href="/sign_in" className="font-semibold leading-6 text-orange-400 hover:text-orange-500">
                ĐĂNG NHẬP
              </a>  
            </p>
          </div>
        </div>
  )
}


export default SignUpForm
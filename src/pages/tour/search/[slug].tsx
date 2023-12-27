'use client'
import React from 'react'

import { MdKeyboardArrowRight, MdLocationOn } from 'react-icons/md'
import { BsSearch } from 'react-icons/bs'
import Search from '~/components/Search'
import SearchITourtem from '~/components/Search/searchTour/SearchTourItem'
import { BiShareAlt, BiSolidLike, BiSolidStar } from 'react-icons/bi'
import Link from 'next/link'
import { AiFillHome } from 'react-icons/ai'
const TourSearch = () => {
        return (
                <div className="container mt-2">
                        <Search />
                        <div className="flex justify-between items-center py-4">
                                <div className="flex items-center gap-3 text-xs">
                                        <AiFillHome />
                                        <Link href="" className="hover:text-[color:var(--primary-color)]">Trang chủ</Link>
                                        <span>/</span>
                                        <Link href="" className="hover:text-[color:var(--primary-color)]">Việt Nam</Link>
                                </div>
                        </div>

                        <div className="flex gap-6">

                                {/* Content left*/}
                                <div className="w-1/5 flex flex-col gap-6">

                                        {/* Hotline hỗ trợ */}
                                        <div className="w-full border rounded">
                                                <div className='px-4 py-2 bg-gray-200 border-b'>
                                                        <h6>Địa điểm HOT trong nước</h6>
                                                </div>
                                                <div className="flex flex-col py-3">
                                                        <Link className='py-2 px-4 text-sm hover:bg-teal-100 hover:text-blue-400' href="">Nha Trang</Link>
                                                        <Link className='py-2 px-4 text-sm hover:bg-teal-100 hover:text-blue-400' href="">Nha Trang</Link>
                                                        <Link className='py-2 px-4 text-sm hover:bg-teal-100 hover:text-blue-400' href="">Nha Trang</Link>
                                                        <Link className='py-2 px-4 text-sm hover:bg-teal-100 hover:text-blue-400' href="">Nha Trang</Link>
                                                        <Link className='py-2 px-4 text-sm hover:bg-teal-100 hover:text-blue-400' href="">Nha Trang</Link>
                                                        <Link className='py-2 px-4 text-sm hover:bg-teal-100 hover:text-blue-400' href="">Nha Trang</Link>
                                                </div>

                                        </div>

                                        <div className="w-full border rounded">
                                                <div className='px-4 py-2 bg-gray-200 border-b'>
                                                        <h6>Địa điểm HOT nước ngoài</h6>
                                                </div>
                                                <div className="flex flex-col py-3">
                                                        <Link className='py-2 px-4 text-sm hover:bg-teal-100 hover:text-blue-400' href="">Châu Âu</Link>
                                                        <Link className='py-2 px-4 text-sm hover:bg-teal-100 hover:text-blue-400' href="">Trung Quốc</Link>
                                                        <Link className='py-2 px-4 text-sm hover:bg-teal-100 hover:text-blue-400' href="">Thái Lan</Link>
                                                        <Link className='py-2 px-4 text-sm hover:bg-teal-100 hover:text-blue-400' href="">Hàn Quốc</Link>
                                                </div>

                                        </div>

                                        <div className="w-full border rounded">
                                                <div className='px-4 py-2 bg-gray-200 border-b'>
                                                        <h6>Loại Tour</h6>
                                                </div>
                                                <div className="flex flex-col py-3">
                                                        <Link className='py-2 px-4 text-sm hover:bg-teal-100 hover:text-blue-400' href="">Trọn gói</Link>
                                                        <Link className='py-2 px-4 text-sm hover:bg-teal-100 hover:text-blue-400' href="">Tour land</Link>
                                                        <Link className='py-2 px-4 text-sm hover:bg-teal-100 hover:text-blue-400' href="">Daily tours</Link>
                                                        <Link className='py-2 px-4 text-sm hover:bg-teal-100 hover:text-blue-400' href="">Tour du thuyền</Link>
                                                        <Link className='py-2 px-4 text-sm hover:bg-teal-100 hover:text-blue-400' href="">Tư vấn làm Visa</Link>
                                                </div>

                                        </div>

                                        <div className="w-full border rounded">
                                                <div className='px-4 py-2 bg-gray-200 border-b'>
                                                        <h6>Tour theo chủ đề</h6>
                                                </div>
                                                <div className="flex flex-col py-3">
                                                        <Link className='py-2 px-4 text-sm hover:bg-teal-100 hover:text-blue-400' href="">Tour ưu đãi đặc biệt hôm nay</Link>
                                                        <Link className='py-2 px-4 text-sm hover:bg-teal-100 hover:text-blue-400' href="">Tour Đông Bắc</Link>
                                                        <Link className='py-2 px-4 text-sm hover:bg-teal-100 hover:text-blue-400' href="">Tour 2/9</Link>
                                                        <Link className='py-2 px-4 text-sm hover:bg-teal-100 hover:text-blue-400' href="">Tour du lịch độc đáo</Link>
                                                        <Link className='py-2 px-4 text-sm hover:bg-teal-100 hover:text-blue-400' href="">Tour nghỉ dưỡng</Link>
                                                </div>

                                        </div>
                                </div>
                                {/* Content right */}
                                <div className="flex-1">
                                        <h2 className="text-3xl font-bold">Tour du lịch Trung Quốc từ Hồ Chí Minh</h2>
                                        <div className="border border-t-3 grid grid-cols-5 my-6 text-center text-sm">
                                                <div className="hover:bg-gray-100 py-2 text-gray-500">
                                                        Sắp xếp theo:
                                                </div>
                                                <div className="hover:bg-gray-100 py-2 cursor-pointer bg-gray-100 text-[color:var(--primary-color)]">
                                                        ItourGo đề xuất
                                                </div>
                                                <div className="hover:bg-gray-100 py-2 cursor-pointer">
                                                        Thời lượng Tour
                                                </div>
                                                <div className="hover:bg-gray-100 py-2 cursor-pointer">
                                                        Ngày khởi hành
                                                </div>
                                                <div className="hover:bg-gray-100 py-2 cursor-pointer">
                                                        Giá Tour
                                                </div>
                                        </div>
                                        <div className="flex flex-col gap-5">
                                                <SearchITourtem />
                                                <SearchITourtem />
                                                <SearchITourtem />
                                                <SearchITourtem />
                                        </div>
                                </div>
                        </div>
                        <div className="flex flex-col gap-6 mt-8">
                                <div className='rounded border'>
                                        <h6 className='flex gap-3 px-4 py-1 bg-[#F9F9F9] items-center font-bold'><MdKeyboardArrowRight />Tour trong nước</h6>
                                        <div className="bg-white flex gap-3 grid grid-cols-6 text-sm p-4">
                                                <Link href="" className='text-blue-500'>Tour Nam Du</Link>
                                                <Link href="" className='text-blue-500'>Tour Long An</Link>
                                                <Link href="" className='text-blue-500'>Tour Miền Tây</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                        </div>
                                </div>
                                <div className='rounded border'>
                                        <h6 className='flex gap-3 px-4 py-1 bg-[#F9F9F9] items-center font-bold'><MdKeyboardArrowRight />Tour trong nước</h6>
                                        <div className="bg-white flex gap-3 grid grid-cols-6 text-sm p-4">
                                                <Link href="" className='text-blue-500'>Tour Nam Du</Link>
                                                <Link href="" className='text-blue-500'>Tour Long An</Link>
                                                <Link href="" className='text-blue-500'>Tour Miền Tây</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                        </div>
                                </div>
                                <div className='rounded border'>
                                        <h6 className='flex gap-3 px-4 py-1 bg-[#F9F9F9] items-center font-bold'><MdKeyboardArrowRight />Tour trong nước</h6>
                                        <div className="bg-white flex gap-3 grid grid-cols-6 text-sm p-4">
                                                <Link href="" className='text-blue-500'>Tour Nam Du</Link>
                                                <Link href="" className='text-blue-500'>Tour Long An</Link>
                                                <Link href="" className='text-blue-500'>Tour Miền Tây</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                        </div>
                                </div>
                                <div className='rounded border'>
                                        <h6 className='flex gap-3 px-4 py-1 bg-[#F9F9F9] items-center font-bold'><MdKeyboardArrowRight />Tour trong nước</h6>
                                        <div className="bg-white flex gap-3 grid grid-cols-6 text-sm p-4">
                                                <Link href="" className='text-blue-500'>Tour Nam Du</Link>
                                                <Link href="" className='text-blue-500'>Tour Long An</Link>
                                                <Link href="" className='text-blue-500'>Tour Miền Tây</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                        </div>
                                </div>
                                <div className='rounded border'>
                                        <h6 className='flex gap-3 px-4 py-1 bg-[#F9F9F9] items-center font-bold'><MdKeyboardArrowRight />Tour trong nước</h6>
                                        <div className="bg-white flex gap-3 grid grid-cols-6 text-sm p-4">
                                                <Link href="" className='text-blue-500'>Tour Nam Du</Link>
                                                <Link href="" className='text-blue-500'>Tour Long An</Link>
                                                <Link href="" className='text-blue-500'>Tour Miền Tây</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                                <Link href="" className='text-blue-500'>Tour Lý Sơn</Link>
                                        </div>
                                </div>
                        </div>

                </div>
        )
}

export default TourSearch 

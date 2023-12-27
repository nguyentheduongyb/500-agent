const bokunElement = document.querySelector('.bokun-elm')

bokunElement.innerHTML = `
<div class="w-full bg-white rounded-sm p-4 drop-shadow-[0_0_10px_rgba(0,0,0,0.25)] rounded-lg mb-3">
                                                        <h3 class="mb-3 text-[color:var(--primary-color)] text-xl font-bold">Lịch khởi hành & Giá</h3>
                                                        <p class="">Chọn ngày khời hành:</p>
                                                        <div class="flex justify-between mt-3">
                                                                <button class='p-3 border rounded border-teal-500'>28/08</button>
                                                                <button class='p-3 border rounded'>29/08</button>
                                                                <button class='p-3 border rounded'>30/08</button>
                                                                <button class='p-3 border rounded'>Tất cả</button>
                                                        </div>
                                                        <div class='p-3 flex items-center justify-between border rounded-lg mt-3'>
                                                                <span>Người lớn</span>
                                                                <span class='text-orange-500 font-medium text-xl'>x 12.000.000</span>
                                                                <div class='flex items-center gap-6 text-xl'>
                                                                        <button class='font-semibold'>+</button>
                                                                        <span>1</span>
                                                                        <button class='font-semibold'>-</button>
                                                                </div>
                                                        </div>
                                                        <div class='p-3 flex items-center justify-between border rounded-lg mt-3'>
                                                                <span>Trẻ em</span>
                                                                <span class='text-orange-500 font-medium text-xl'>x 12.000.000</span>
                                                                <div class='flex items-center gap-6 text-xl'>
                                                                        <button class='font-semibold'>+</button>
                                                                        <span>1</span>
                                                                        <button class='font-semibold'>-</button>
                                                                </div>
                                                        </div>
                                                        <p class='flex items-center mt-3 gap-3 text-[color:var(--primary-color)]'><HiOutlineInformationCircle /><span>Liên hệ để xác nhận chỗ</span></p>
                                                        <div class="mt-3">
                                                                <p class="flex justify-between mt-2 items-center">
                                                                        <span>Phụ thu phòng đơn</span>
                                                                        <span class="text-orange-500">+ 2.000.000 VNĐ</span>
                                                                </p>
                                                                <p class="flex justify-between mt-2 items-center">
                                                                        <span>Giá gốc</span>
                                                                        <span class="line-through">2.000.000 VNĐ</span>
                                                                </p>
                                                                <p class="flex justify-between mt-2 items-center">
                                                                        <span>Tổng cộng</span>
                                                                        <span class="font-medium text-2xl text-orange-500">20.000.000 VNĐ</span>
                                                                </p>
                                                        </div>
                                                        <div class="flex grid grid-cols-2 gap-4 mt-5">
                                                                <a class="border border-[color:var(--primary-color)] bg-white p-3 text-center text-[color:var(--primary-color)] rounded font-bold text-lg" href="/user/payment">Đặt cọc</a>
                                                                <a class="bg-[color:var(--primary-color)] p-3 text-center text-white rounded font-bold text-lg" href="/user/payment">Yêu cầu đặt</a>

                                                        </div>
                                                </div>
`
console.log(bokunElement);
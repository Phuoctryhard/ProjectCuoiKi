import React, { useState, useEffect } from 'react';
export default function Footer() {
  

    const [isVisible, setIsVisible] = useState(false);
  
    const handleScroll = () => {
      // Kiểm tra giá trị cuộn
      if (window.scrollY > 1000) {
        // Nếu vị trí cuộn lớn hơn 500px, hiển thị button
        setIsVisible(true);
      } else {
        // Ngược lại, ẩn button
        setIsVisible(false);
      }
    };
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    // Gắn sự kiện cuộn khi component được mount
    window.addEventListener('scroll', handleScroll);

    // Hủy sự kiện khi component bị unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // [] đảm bảo sự kiện chỉ được gắn một lần khi component được mount
  return (
    <div className='Footer'>
      <div class='bg-white p-4 py-16 text-base text-gray-600'>
        <div class='container px-5'>
          <div class='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6'>
            <div class='col-span-1 md:col-span-2'>
              <a class='mb-4 inline-block max-w-[152px]' href='/' previewlistener='true'></a>

              <ul class='mb-4'>
                <li>
                  Tầng 12A, Toà nhà AP Tower, 67 Nam Cao , Phường Hòa Khánh Nam, Quận Liên Chiểu, Thành phố Đà Nẵng
                </li>
                <li class='mt-2'>
                  Liên hệ:{' '}
                  <a class='transition-all hover:text-primary' href='tel:02862733496'>
                    0865446276
                  </a>{' '}
                  -{' '}
                  <a class='transition-all hover:text-primary' href='#'>
                    contact@ngodinhphuoc100@gmail.com
                  </a>
                </li>
              </ul>
              <p class='mb-2 font-bold text-black lg:mb-2'>Chứng nhận bởi</p>
              <a
                class='mb-3 inline-block'
                href='http://online.gov.vn/HomePage/WebsiteDisplay.aspx?DocId=24677'
                previewlistener='true'
              ></a>
            </div>
            <div class='col-span-1'>
              <p class='mb-2 font-bold text-black lg:mb-4'>Về Việc Làm IT 24h</p>
              <ul class='grid gap-2'>
                <li>
                  <a
                    title='Về chúng tôi'
                    class='transition-all hover:text-primary'
                    href='#'
                    previewlistener='true'
                  >
                    Về chúng tôi
                  </a>
                </li>
                <li>
                  <a
                    title='Liên hệ'
                    class='transition-all hover:text-primary'
                    href='#'
                    previewlistener='true'
                  >
                    Liên hệ
                  </a>
                </li>
                <li>
                  <a
                    title='Thỏa thuận sử dụng'
                    class='transition-all hover:text-primary'
                    href='#'
                    previewlistener='true'
                  >
                    Thỏa thuận sử dụng
                  </a>
                </li>
                <li>
                  <a
                    title='Cơ hội việc làm'
                    class='transition-all hover:text-primary'
                    href='#'
                    previewlistener='true'
                  >
                    Cơ hội việc làm
                  </a>
                </li>
                <li>
                  <a
                    title='Quy định bảo mật'
                    class='transition-all hover:text-primary'
                    href='#'
                    previewlistener='true'
                  >
                    Quy định bảo mật
                  </a>
                </li>
                <li>
                  <a
                    title='Quy chế hoạt động của sàn giao dịch thương mại điện tử.'
                    class='transition-all hover:text-primary'
                    href='#'
                    previewlistener='true'
                  >
                    Quy chế hoạt động của sàn giao dịch thương mại điện tử.
                  </a>
                </li>
                <li>
                  <a
                    title='Giải quyết khiếu nại'
                    class='transition-all hover:text-primary'
                    href='#'
                    previewlistener='true'
                  >
                    Giải quyết khiếu nại
                  </a>
                </li>
              </ul>
            </div>
            <div class='col-span-1'>
              <p class='mb-2 font-bold text-black lg:mb-4'>Ứng viên</p>
              <ul class='grid gap-2'>
                <li>
                  <a
                    title='Tính lương Gross - Net'
                    class='transition-all hover:text-primary'
                    href='#'
                    previewlistener='true'
                  >
                    Tính lương Gross - Net
                  </a>
                </li>
                <li>
                  <a
                    title='Tạo CV'
                    class='transition-all hover:text-primary'
                    href='#'
                    previewlistener='true'
                  >
                    Tạo CV
                  </a>
                </li>
                <li>
                  <a
                    title='Tìm kiếm công việc IT'
                    class='transition-all hover:text-primary'
                    href='#'
                    previewlistener='true'
                  >
                    Tìm kiếm công việc IT
                  </a>
                </li>
                <li>
                  <a
                    title='Trắc nghiệm tính cách'
                    class='transition-all hover:text-primary'
                    href='#'
                    previewlistener='true'
                  >
                    Trắc nghiệm tính cách
                  </a>
                </li>
              </ul>
            </div>
            <div class='col-span-1'>
              <p class='mb-2 font-bold text-black lg:mb-4'>Nhà tuyển dụng</p>
              <ul class='grid gap-2'>
                <li>
                  <a
                    title='Đăng việc làm IT'
                    class='transition-all hover:text-primary'
                    href='#'
                    previewlistener='true'
                  >
                    Đăng việc làm IT
                  </a>
                </li>
                <li>
                  <a
                    title='Tìm kiếm nhân tài'
                    class='transition-all hover:text-primary'
                    href='#'
                    previewlistener='true'
                  >
                    Tìm kiếm nhân tài
                  </a>
                </li>
                <li>
                  <a
                    title='Báo cáo thị trường IT'
                    class='transition-all hover:text-primary'
                    href='#'
                    previewlistener='true'
                  >
                    Báo cáo thị trường IT
                  </a>
                </li>
                <li>
                  <a
                    title='Tạo tài khoản'
                    class='transition-all hover:text-primary'
                    href='#'
                    previewlistener='true'
                  >
                    Tạo tài khoản
                  </a>
                </li>
              </ul>
            </div>
            <div class='col-span-1'>
              <p class='mb-2 font-bold text-black lg:mb-4'>Theo dõi chúng tôi tại</p>
              <div style={{ display: 'flex' }}>
                <img
                  style={{ maxWidth: '100%', height: 'auto', marginRight: '10px' }}
                  src='	https://www.topcv.vn/v4/image/footer/youtube.png?v=1.0.0'
                  alt='Facebook Icon'
                />
                <img
                  style={{ maxWidth: '100%', height: 'auto' }}
                  src='https://www.topcv.vn/v4/image/footer/facebook.png?v=1.0.0'
                  alt='TikTok Icon'
                />
              </div>

              <ul class=' mx-0 mb-4 flex items-center gap-4 text-4xl lg:mx-2'></ul>
              <p class='mb-2 font-bold text-black lg:mb-4'>Tải app tại đây</p>
              <img
                className='img-responsive'
                src='https://www.topcv.vn/v4/image/welcome/download/app_store.png?v=1.0.0'
                alt='Tai app  tai Google Play'
                title='Tải app TopCV tại Google Play'
              />

              <ul class='mb-4 flex gap-1'></ul>
            </div>
          </div>
          <div class='pt-16 text-center text-gray-400'>
            Copyright © CÔNG TY CỔ PHẦN Ngô Đình Phước / ĐKKD: 031 303 2338 - Cấp ngày: 03/02/2023
          </div>
          <button
          className={`fixed bottom-[9.5rem] right-6 z-30 inline-flex h-12 w-12 items-center justify-center rounded
          border border-solid border-primary-200 bg-primary/80 text-2xl text-white transition-all hover:bg-primary
          lg:bottom-32 lg:right-10 ${isVisible ? 'visible opacity-100' : 'invisible opacity-0'}`}
            type='button'
            onClick={handleScrollToTop}
          >
            <svg
              stroke='currentColor'
              fill='currentColor'
              stroke-width='0'
              viewBox='0 0 24 24'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M5 15h4v6h6v-6h4l-7-8zM4 3h16v2H4z'></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
  
}

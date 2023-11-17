import React from "react";

const Footer = () => {
  return (
    <footer className="mt-6 bg-white">
      <div className="w-[1200px] mx-auto pt-8">
        <div className="flex items-start justify-between ">
          <ul className="flex flex-col font-medium gap-y-3 text-[#333]">
            <li className="text-base uppercase">VỀ GEARVN</li>
            <li className="text-sm ">Giới thiệu</li>
            <li className="text-sm">Tuyển dụng</li>
          </ul>
          <ul className="flex flex-col font-medium gap-y-3 text-[#333]">
            <li className="text-base uppercase">CHÍNH SÁCH</li>
            <li className="text-sm ">Chính sách bảo hành</li>
            <li className="text-sm">Chính sách thanh toán</li>
            <li className="text-sm">Chính sách giao hàng</li>
            <li className="text-sm">Chính sách bảo mật</li>
          </ul>
          <ul className="flex flex-col font-medium gap-y-3 text-[#333]">
            <li className="text-base uppercase">THÔNG TIN</li>
            <li className="text-sm ">Hệ thống cửa hàng</li>
            <li className="text-sm">Trung tâm bảo hành</li>
          </ul>
          <ul className="flex flex-col font-medium gap-y-3 text-[#333]">
            <li className="text-base uppercase">
              TỔNG ĐÀI HỖ TRỢ (MIỄN PHÍ GỌI)
            </li>
            <li className="text-sm ">
              Gọi mua: Gọi mua: 1800.6975 (8:00 - 21:00)
            </li>
            <li className="text-sm">CSKH: CSKH: 1800.6173 (8:00 - 21:00)</li>
            <li className="text-sm">Email: cskh@gearvn.com</li>
          </ul>
          <ul className="flex flex-col font-medium gap-y-3 text-[#333]">
            <li className="text-base uppercase">ĐƠN VỊ VẬN CHUYỂN </li>
            <div className="flex gap-1">
              <img
                src="https://theme.hstatic.net/200000722513/1001090675/14/ship_1.png?v=2099"
                alt=""
                className="w-[69px] h-8"
              />
              <img
                src="https://theme.hstatic.net/200000722513/1001090675/14/ship_2.png?v=2099"
                alt=""
                className="w-[69px] h-8"
              />
              <img
                src="https://theme.hstatic.net/200000722513/1001090675/14/ship_3.png?v=2099"
                alt=""
                className="w-[69px] h-8"
              />
              <img
                src="https://theme.hstatic.net/200000722513/1001090675/14/ship_4.png?v=2099"
                alt=""
                className="w-[69px] h-8"
              />
            </div>
            <li className="text-base uppercase">CÁCH THỨC THANH TOÁN</li>
            <div className="flex w-[300px] flex-wrap gap-1">
              <img
                src="https://theme.hstatic.net/200000722513/1001090675/14/pay_1.png?v=2099"
                alt=""
                className="w-[69px] h-8"
              />
              <img
                src="https://theme.hstatic.net/200000722513/1001090675/14/pay_2.png?v=2099"
                alt=""
                className="w-[69px] h-8"
              />
              <img
                src="https://theme.hstatic.net/200000722513/1001090675/14/pay_3.png?v=2099"
                alt=""
                className="w-[69px] h-8"
              />
              <img
                src="https://theme.hstatic.net/200000722513/1001090675/14/pay_4.png?v=2099"
                alt=""
                className="w-[69px] h-8"
              />
              <img
                src="https://theme.hstatic.net/200000722513/1001090675/14/pay_5.png?v=2099"
                alt=""
                className="w-[69px] h-8"
              />
              <img
                src="https://theme.hstatic.net/200000722513/1001090675/14/pay_6.png?v=2099"
                alt=""
                className="w-[69px] h-8"
              />
              <img
                src="https://theme.hstatic.net/200000722513/1001090675/14/pay_7.png?v=2099"
                alt=""
                className="w-[69px] h-8"
              />
              <img
                src="https://theme.hstatic.net/200000722513/1001090675/14/pay_8.png?v=2099"
                alt=""
                className="w-[69px] h-8"
              />
            </div>
          </ul>
        </div>
        <div>
          <div className="flex items-center py-[15px] border-t-[1px] border-t-gray-300 mt-4 justify-between">
            <div className="flex items-center gap-x-4 py-[15px]">
              <h4 className="text-base font-semibold text-[#333] ">
                KẾT NỐI VỚI CHÚNG TÔI
              </h4>
              <div className="flex items-center gap-x-3">
                <img
                  src="https://file.hstatic.net/200000636033/file/facebook_1_0e31d70174824ea184c759534430deec.png"
                  alt=""
                  className="object-cover w-8 h-8"
                />
                <img
                  src="https://file.hstatic.net/200000722513/file/tiktok-logo_fe1e020f470a4d679064cec31bc676e4.png"
                  alt=""
                  className="object-cover w-8 h-8"
                />
                <img
                  src="https://file.hstatic.net/200000636033/file/youtube_1_d8de1f41ca614424aca55aa0c2791684.png"
                  alt=""
                  className="object-cover w-8 h-8"
                />
                <img
                  src="https://file.hstatic.net/200000636033/file/group_1_54d23abd89b74ead806840aa9458661d.png"
                  alt=""
                  className="object-cover w-8 h-8"
                />
              </div>
            </div>
            <img
              src="https://theme.hstatic.net/200000722513/1001090675/14/logo-bct.png?v=2099"
              alt=""
              className="w-[133px] h-[52px] object-cover"
            />
          </div>
          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

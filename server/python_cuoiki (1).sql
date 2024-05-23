-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th5 23, 2024 lúc 01:34 PM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
-- Phiên bản PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `python_cuoiki`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `blog`
--

CREATE TABLE `blog` (
  `_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `desc` text NOT NULL,
  `category` varchar(255) NOT NULL,
  `cover` varchar(255) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `blog`
--

INSERT INTO `blog` (`_id`, `title`, `desc`, `category`, `cover`, `date`) VALUES
(1, 'HƯỚNG DẪN CHI TIẾT CÁCH ĐẨY PUSH LÊN GIT', '<h1> 1. Cài đặt Git</h1>\r\n    <p>Đầu tiên, hãy chắc chắn rằng máy tính của bạn đã được cài đặt Git, gõ lệnh <code>git version</code> để kiểm tra. Kết quả hiện ra sẽ cho bạn biết phiên bản mà Git được cài đặt, hoặc nếu chưa, nó sẽ báo <code>git is an unknown command</code>. Nếu chưa được cài đặt, thực hiện những bước dưới đây tùy theo từng hệ điều hành của bạn:\r\n    </p>\r\n    <b>Cài đặt Git trên Windows</b>\r\n    <p>\r\n        Đi đến trình cài đặt Git dành cho Windows và tải xuống phiên bản mới nhất. Khi trình cài đặt đã bắt đầu, hãy làm theo các hướng dẫn được cung cấp trong màn hình hướng dẫn Cài đặt Git cho đến khi quá trình cài đặt hoàn tất. Mở Command Prompt (hoặc Git Bash) rồi gõ <code>git version</code> để xác định Git đã được cài đặt thành công cùng phiên bản của nó.\r\n    </p>\r\n    <b className=\"font-bold\">Cài đặt Git trên Mac</b>\r\n    <p>\r\n        Hầu hết các phiên bản của MacOS đã cài đặt Git, và bạn có thể kích hoạt thông qua Terminal với <code>git version</code>. Tuy nhiên, nếu Git chưa được cài đặt vì một lý do nào đó, bạn hãy làm theo các bước sau: Đi đến trình cài đặt Git dành cho MacOS và tải xuống phiên bản mới nhất. Sau đó, thực hiện việc cài đặt theo hướng dẫn. Mở terminal, rồi gõ <code>git version</code> để kiểm tra.\r\n    </p>\r\n    <b>Cài đặt Git trên Linux (Ubuntu)</b>\r\n    <p>\r\n        Mở command prompt và chạy dòng lệnh <code>sudo apt-get update</code> để chắc chắn rằng mọi thứ đều được cập nhật. Sau đó, để cài đặt Git, chạy dòng lệnh: <code>sudo apt-get install git-all</code>. Xác minh cài đặt bằng cách nhập lệnh sau: <code>git --version</code>.\r\n    </p>\r\n\r\n    <h1>2. Tạo kho lưu trữ cục bộ (Local Repository)</h1>\r\n    <p>\r\n        Sau khi bạn đã cài đặt Git thành công, bạn cần đăng nhập vào Github, sau đó ấn vào dấu + trên menu và chọn New repository. Bạn sẽ cần đặt tên cho kho chứa của bạn, sau đó lựa chọn loại kho chứa phù hợp – Public (ai cũng có thể clone) và Private (chỉ có những người được cấp quyền mới có thể clone). Sau khi bạn đã chọn xong những tuỳ chọn của repo mới, hãy ấn Create Repository để tạo. Khi tạo xong nó sẽ dẫn bạn tới trang hướng dẫn làm việc với kho chứa vừa tạo. Và kho chứa của bạn bây giờ sẽ có địa chỉ là <code>https://github.com/$user-name/$repository</code>, ví dụ ở hình dưới là: <code>https://github.com/ltnquang/ute.git</code>.\r\n    </p>\r\n\r\n    <h1>3. Clone repo về máy</h1>\r\n    <p>\r\n        Tiếp theo, việc của bạn bây giờ là hãy clone repo mới này về máy của mình bằng lệnh <code>git clone địa_chỉ</code>. Ví dụ ở trên, chúng ta sẽ clone repo về máy bằng lệnh:\r\n        <br>\r\n        <a href=\"\">$ git clone https://github.com/ltnquang/ute.git</a>\r\n    </p>\r\n\r\n    <h1>4. Push code lên git</h1>\r\n    <p>\r\n        Thêm/sửa/xóa các file/thư mục trên repo vừa clone về, sau đó lần lượt chạy từng lệnh sau:\r\n        <br>\r\n        <code>$ git add .</code>\r\n        <br>\r\n        <code>$ git commit -m \"điền nội dung commit vào đây\"</code>\r\n        <br>\r\n        <code>$ git push origin master</code>\r\n        <br>\r\n        Chú ý: Trỏ đúng thư mục mà chúng ta clone git về, ví dụ <code>cd \'tên thư mục\'</code> để chuyển đến. Vậy là bạn hoàn thành việc push code lên git rồi đó. Hãy vào lại GitHub repo để kiểm tra nhé!\r\n    </p>', 'Technology', 'b1.jpg', '2024-05-09'),
(2, 'KIẾN THỨC CẦN THIẾT ĐỂ TRỞ THÀNH WEB DEVELOPE', '1. Git & GitHub  Khi viết code, các web developer có thể sẽ cần phải xem lại đoạn code mình đã làm trước đây. Có một phương pháp đơn giản là dùng tính năng undo/redo của trình biên soạn. Tuy nhiên, bạn có thể bất cẩn ấn nhầm phím khác thay vì redo khiến lịch sử trạng thái lưu lại bị ghi đè hoặc không thể redo hoặc editor không lưu lại lịch sử sau khi đóng.\r\n    Bên cạnh đó, việc nhiều người cùng làm việc trong dự án đòi hỏi các thành viên phải chia sẻ các thay đổi mình tạo ra với nhau. Việc làm này nhằm đảm bảo mọi người đều đang làm việc trên cùng một phiên bản dự án. \r\n    2. HTTP/HTTPS\r\nCó thể bạn đã biết: Tất cả các trình duyệt mà bạn truy cập sẽ thấy tiền tố HTTP hoặc HTTPS được thêm vào sau địa chỉ URL của website đó.\r\nHTTP (tên đầy đủ: Hypertext Transfer Protocol) là giao thức truyền tải siêu văn bản. Nó được sử dụng trong www (World Wide Web) để truyền tải dữ liệu từ dạng văn bản, âm thanh đến hình ảnh giữa Web server đến các trình duyệt Web và ngược lại.\r\nCòn HTTPS (tên đầy đủ: Hypertext Transfer Protocol Secure) là giao thức truyền tải siêu văn bản an toàn. Hiểu đơn giản, đây là giao thức HTTP nhưng tích hợp thêm Chứng chỉ bảo mật TLS/SSL nhằm mã hóa các thông điệp để tăng tính bảo mật cho website.\r\nĐây đều là những kiến thức căn bản mà bất cứ một nhà phát triển web nào cũng cần sở hữu. \r\n3. Cấu trúc dữ liệu và thuật toán\r\nHiện nay, các website ngày càng trở nên phức tạp và chứa một lượng dữ liệu ngày càng lớn và đa dạng. Điều này đã dẫn đến sự xuất hiện của 3 vấn đề quan trọng mà mọi nhà lập trình web đều phải đối mặt:  \r\n\r\nTìm kiếm dữ liệu: Sẽ là bất khả thi để có thể thực hiện việc tìm kiếm một dữ liệu bất kỳ trong hàng triệu dữ liệu khác\r\nTốc độ bộ vi xử lý: Mặc dù bộ vi xử lý có tốc độ rất cao, nhưng nó cũng có giới hạn. Khi lưu lượng dữ liệu lên tới hàng tỷ bản ghi, tốc độ xử lý cũng sẽ chậm đi đáng kể.\r\nĐa yêu cầu: Khi hàng nghìn người dùng cùng thực hiện tìm kiếm trên một Web Server, thật khó khăn để có thể xử lý cùng lúc tất cả các yêu cầu đó', 'IT', 'b2.jpg', '2024-05-09'),
(3, 'Lập trình AI – ngôn ngữ phổ biến', '<p><strong>RESTful API là gì?</strong></p>\r\n<p>Để hiểu rõ RESTful API là gì, ta cần làm rõ hai khái niệm thành phần của nó. Bao gồm:</p>\r\n<ul>\r\n<li><strong>API</strong> là viết tắt của Application Programing Interface (Giao diện lập trình ứng dụng). Thuật ngữ này dùng để chỉ phương thức kết nối từ ứng dụng đến các thư viện khác nhau.</li>\r\n<li><strong>REST</strong> là từ viết tắt của REpresentational State Transfer (Truyền trạng thái đại diện). Đây là một tiêu chuẩn dùng để xây dựng API, giúp API trở nên thân thiện hơn với người dùng. Khái niệm này được Roy Fielding giới thiệu lần đầu vào năm 2000 trong luận văn tiến sĩ nổi tiếng của ông.</li>\r\n</ul>\r\n<p>Do đó, <strong>RESTful API</strong> (hay còn được gọi là REST API) là thuật ngữ dùng để chỉ những API được xây dựng theo cấu trúc REST. Mặc dù REST có thể được sử dụng với mọi giao thức, nhưng nó thường dùng HTTP cho Web API.</p>\r\n<p><strong>Những ràng buộc kiến trúc cơ bản của RESTful API</strong></p>\r\n<p>Thực tế cho thấy, có rất nhiều API tự nhận mình là RESTful, nhưng chúng lại không đáp ứng được những ràng buộc mà tiến sĩ Fielding đặt ra. Một RESTful API phải thỏa mãn những ràng buộc (hay điều kiện) sau đây:</p>\r\n<ol>\r\n<li><strong>Client–server (Máy khách – máy chủ)</strong>\r\n<p>Ràng buộc này hoạt động dựa trên ý tưởng rằng máy khách và máy chủ phải hoàn toàn tách biệt và được phép phát triển riêng lẻ, độc lập. Phương thức hoạt động chính của REST là tách biệt giao diện người dùng ra khỏi dữ liệu lưu trữ.</p>\r\n<p>Với cách thức này, người dùng có thể thực hiện thay đổi với các ứng dụng di động của mình một cách độc lập. Việc này không làm ảnh hưởng đến cấu trúc dữ liệu hoặc thiết kế cơ sở dữ liệu của máy chủ. Ngược lại, việc điều chỉnh cơ sở dữ liệu hoặc thay đổi ứng dụng của máy chủ cũng không ảnh hưởng đến ứng dụng của máy khách.</p>\r\n</li>\r\n<li><strong>Stateless (Phi trạng thái)</strong>\r\n<p>Bất kỳ một RESTful API nào cũng phải phi trạng thái. Nghĩa là mỗi yêu cầu (request) từ máy khách đến máy chủ có thể được thực hiện độc lập. Đồng thời, mỗi yêu cầu phải chứa mọi thông tin cần thiết để máy chủ hiểu và hoàn thành nó.</p>\r\n<p>Ngoài ra, yêu cầu của máy khách không thể lạm dụng bất kỳ thông tin nào trên máy chủ. Đó cũng chính là lý do khiến trạng thái phiên (session state) được giữ hoàn toàn trên máy khách. Điều này sẽ giúp tăng độ tin cậy cho API, hạn chế lỗi và giảm tài nguyên sử dụng.</p>\r\n</li>\r\n<li><strong>Cacheable (Lưu được vào bộ nhớ cache)</strong>\r\n<p>API phi trạng thái có thể tăng số lượng request, nhất là khi có nhiều cuộc gọi đến và đi. Do đó, RESTful API được thiết kế để lưu trữ dữ liệu vào cache để tăng tính tái sử dụng.</p>\r\n<p>Cụ thể, ràng buộc này yêu cầu mỗi phản hồi phải đánh dấu dữ liệu bên trong nó là lưu được hoặc không lưu được vào cache. Nếu phản hồi lưu được vào cache, thì máy khách có thể sử dụng lại dữ liệu của phản hồi đó cho các yêu cầu tương tự sau này.</p>\r\n</li>\r\n<li><strong>Uniform interface (Giao diện thống nhất)</strong>\r\n<p>REST áp dụng những nguyên tắc chung của kỹ thuật phần mềm cho giao diện thành phần. Chính vì lý do đó, tổng thể kiến trúc hệ thống được đơn giản hóa. Khả năng hiển thị của các tương tác cũng được cải thiện đáng kể.</p>\r\n<p>Để có giao diện thống nhất, REST cần nhiều ràng buộc kiến trúc cho các thành phần bên trong. Chẳng hạn, việc biểu diễn tài nguyên trên toàn hệ thống phải tuân theo các nguyên tắc cụ thể. Các nguyên tắc đó bao gồm: quy ước đ\r\n', 'Technology', 'b4.jpg', '2024-05-10');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `company`
--

CREATE TABLE `company` (
  `_id` int(11) NOT NULL,
  `employer` varchar(255) NOT NULL,
  `language` varchar(255) NOT NULL,
  `linhvuc` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `vitri` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `company`
--

INSERT INTO `company` (`_id`, `employer`, `language`, `linhvuc`, `name`, `vitri`, `image`) VALUES
(1, '20-100 Employees', 'Agile & Scum', 'Phần Mềm', 'Công ty TNHH Codelink', 'Hồ Chí Minh', 'https://salt.topdev.vn/JHuFW8G6yycem02__XlonHrxbjHBQCpuRrj9lrdagRk/fit/256/1000/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ltYWdlcy8yMDIyLzA3LzEzL1RvcERldi1TY3JlZW5TaG90MjAyMi0wNy0xMmF0MTcxODM3LU1pblRybmgtMTY1NzY4NjI5NS5wbmc'),
(2, '25-99 Employees', 'PHP,Nodejs,Reactjs', 'Outsourcing', 'FTP Software -Hồ Chí Minh', 'Thành Phố Thủ Đức - Hồ Chí Minh', 'https://salt.topdev.vn/mh7UULH3h6Wf9a7J-QzZWlO-gGv94foRl-YTabE3bIs/fit/256/1000/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ltYWdlcy8yMDIxLzA0LzEyL2VmMmIxNWQ0Nzg5ODJjY2ViZDk3YjE5ZDgyZDY2Y2I3LW5zd1hGLnBuZw');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `post`
--

CREATE TABLE `post` (
  `_id` int(11) NOT NULL,
  `congti` varchar(255) NOT NULL,
  `luong` varchar(255) NOT NULL,
  `vitri` varchar(255) NOT NULL,
  `khuvuc` varchar(255) NOT NULL,
  `level` varchar(255) NOT NULL,
  `anh` varchar(255) NOT NULL,
  `language` varchar(255) NOT NULL,
  `timedang` date NOT NULL,
  `soluong` varchar(255) NOT NULL,
  `kinhnghiem` varchar(255) NOT NULL,
  `bangcap` varchar(255) NOT NULL,
  `mota` text NOT NULL,
  `yeucau` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `post`
--

INSERT INTO `post` (`_id`, `congti`, `luong`, `vitri`, `khuvuc`, `level`, `anh`, `language`, `timedang`, `soluong`, `kinhnghiem`, `bangcap`, `mota`, `yeucau`) VALUES
(5, 'Công ty ABCD2', '10 triệu', 'Nhân viên kinh doanh', 'TP.HCM', 'Junior', 'https://example.com/image.jpg', 'Java', '2024-05-10', '4', '3 năm', 'Đại học', 'Thu nhập TB 13 tháng lương/năm\r\nThưởng Tết + thưởng lương tháng thứ 13 + thưởng hiệu quả công việc + thưởng theo tình tình kinh doanh \r\nKhám sức khỏe hàng năm + bảo hiểm sức khoẻ nâng cao \r\nPTI Đa dạng các hoạt động đào tạo chuyên môn và kỹ năng mềm Teambuilding, Du lịch, Sinh nhật, Year end party, … —----------- Thời gian: T2 - T6, nghỉ Thứ 7 & CN (chấm công linh hoạt) ', 'Liên hệ để biết thêm chi tiết '),
(6, 'Công ty ABC', '10 triệu', 'Nhân viên kinh doanh', 'TP.HCM', 'Junior', 'anh_1703599693911.jpg', 'Tiếng Anh', '2024-05-10', '5', '1 năm', 'Cử nhân', 'Mô tả công việc', 'Yêu cầu công việc'),
(7, 'Công ty ABC', '10 triệu', 'Nhân viên kinh doanh', 'TP.HCM', 'Junior', 'https://example.com/image.jpg', 'Tiếng Anh', '2024-05-10', '5', '1 năm', 'Cử nhân', 'Mô tả công việc', 'Yêu cầu công việc'),
(8, 'Công ty ABC', '10 triệu', 'Nhân viên kinh doanh', 'TP.HCM', 'Junior', 's', 'Tiếng Anh', '2024-05-10', '5', '1 năm', 'Cử nhân', 'Mô tả công việc', 'Yêu cầu công việc'),
(10, ' Công ty Ngô Đình Phước vip pro', '$2000', 'MIDDLE FULL-STACK DEVELOPE', 'Hải Châu - Đà Nẵng', 'senior', '356572488_3194315847528178_4153545103444160033_n.jpg', 'Java', '2024-05-23', '10', '2', 'Cao đẳng', 's', 's'),
(11, 'Công ty ABCD2', '10 triệu', 'Nhân viên kinh doanh', 'TP.HCM', 'entry', '26734504_207450473144986_4609166838249960267_n.jpg', 'ng', '2024-05-06', '3', 'Trên 3 năm ', 'Đại học ', 's', 's'),
(12, 'Công ty ABCD2', '10 triệu', 'Nhân viên kinh doanh', 'TP.HCM', 'entry', '54199208_1649564065146424_3714395199137382400_n.jpg', 'ng', '2024-05-14', '3', 'Trên 3 năm ', 'Đại học ', 'ssss', 'sss');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ungtuyen`
--

CREATE TABLE `ungtuyen` (
  `congty` varchar(255) NOT NULL,
  `cv` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `introduce` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `ungtuyen`
--

INSERT INTO `ungtuyen` (`congty`, `cv`, `email`, `fullname`, `introduce`, `phone`, `_id`) VALUES
('Cong ty ngo', '.pdf', 'ngodinh', 'ngo dinh phuoc', 'học giỏi đẹp trai', '0865446276', 1),
('Công ty ABC', '', 'd@gmail.com', 'd', 'd', 'd', 2),
('Công ty ABC', 'ngodinhphuoc.pdf', 'ngodinhphuoc100@gmail.com', 'Ngo Dinh PHuoc', 's', '0392798232', 3),
('Công ty ABC', 'mobilenet.pdf', 'ngodinhphuoc100@gmail.com', 'ngo phuoc', 's', '0865446276', 4);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `role`) VALUES
(1, '100@gmail.com', '0865446276', 'admin'),
(2, 'ngodinhphuoc100@gmail.com', '0865446276', 'user'),
(3, 'ngodinhphuoc100@gmail.com', '0865446276', 'user'),
(4, 'ngodinhphuoc100@gmail.com', '0865446276', 'user'),
(5, 'ngodinhphuoc100@gmail.com', '0865446276', 'user'),
(6, 'ngodinhphuoc100@gmail.com', '0865446276', 'user'),
(7, 'ngodinhphuoc100@gmail.com', '0865446276', 'user'),
(8, '100@gmail.com', '', 'user'),
(9, '100@gmail.com', '', 'user');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`_id`);

--
-- Chỉ mục cho bảng `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`_id`);

--
-- Chỉ mục cho bảng `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`_id`);

--
-- Chỉ mục cho bảng `ungtuyen`
--
ALTER TABLE `ungtuyen`
  ADD PRIMARY KEY (`_id`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `blog`
--
ALTER TABLE `blog`
  MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `company`
--
ALTER TABLE `company`
  MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `post`
--
ALTER TABLE `post`
  MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `ungtuyen`
--
ALTER TABLE `ungtuyen`
  MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

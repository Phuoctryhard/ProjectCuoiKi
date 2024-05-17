
export const category = [
  {
    id: 1,
    category: 'Life',
    title: 'Stay Calm And Surf',
    cover: '../images/category/ca1.png'
  },
  {
    id: 2,
    category: 'Fashion',
    title: 'Becoming a Dragonfly',
    cover: '../images/category/ca2.png'
  },
  {
    id: 3,
    category: 'Travel',
    title: "There's always light at the end of the tunnel",
    cover: '../images/category/ca3.png'
  },
  {
    id: 4,
    category: 'Sport',
    title: 'Stay Calm And Surf',
    cover: '../images/category/ca4.png'
  },
  {
    id: 5,
    category: 'Fun',
    title: "There's always light at the end of the tunnel",
    cover: '../images/category/ca5.png'
  },
  {
    id: 6,
    category: 'Health',
    title: 'Becoming a Dragonfly',
    cover: '../images/category/ca6.png'
  },
  {
    id: 7,
    category: 'Business',
    title: 'Stay Calm And Surf',
    cover: '../images/category/ca7.png'
  },
  {
    id: 8,
    category: 'Technology',
    title: "There's always light at the end of the tunnel",
    cover: '../images/category/ca8.png'
  }
]

export const nav = [
  {
    id: 1,
    text: 'home',
    url: '/'
  },
  {
    id: 2,
    text: 'about',
    url: '/about'
  },
  {
    id: 3,
    text: 'pages',
    url: '/pages'
  },
  {
    id: 4,
    text: 'blog',
    url: '/blog'
  },
  {
    id: 5,
    text: 'contact',
    url: '/contact'
  }
]
export const company= [
  {
    id: 1,
    category: 'RIKKEISOFT',
    title: 'Stay Calm And Surf',
    cover: '../images/company/logo.jpg'
  },
  {
    id: 2,
    category: 'PASONA DX HUB',
    title: 'Becoming a Dragonfly',
    cover: '../images/company/logo10.png'
  },
  {
    id: 3,
    category: 'LF',
    title: "There's always light at the end of the tunnel",
    cover: '../images/company/logo3.jpg'
  },
  {
    id: 4,
    category: 'LIFT SofT',
    title: 'Stay Calm And Surf',
    cover: '../images/company/logo4.jpg'
  },
  {
    id: 5,
    category: 'PARACEL TECH',
    title: "There's always light at the end of the tunnel",
    cover: '../images/company/logo5.jpg'
  },
  {
    id: 6,
    category: 'Công Ty Cổ Phần Giải Pháp Số AION',
    title: 'Becoming a Dragonfly',
    cover: '../images/company/logo6.jpg'
  },
  {
    id: 7,
    category: '𝐄𝐬𝐭 𝐫𝐨𝐮𝐠𝐞s',
    title: 'Stay Calm And Surf',
    cover: '../images/company/logo7.jpg'
  },
  {
    id: 8,
    category: 'Fastcoding vn',
    title: "There's always light at the end of the tunnel",
    cover: '../images/company/logo8.jpg'
  }
]
export const blog = [
  {
    id: 1,
    title: 'HƯỚNG DẪN CHI TIẾT CÁCH ĐẨY PUSH LÊN GIT',
    desc: `1. Cài đặt Git
    Đầu tiên, hãy chắc chắn rằng máy tính của bạn đã được cài đặt Git, gõ lệnh git version để kiểm tra. Kết quả hiện ra sẽ cho bạn biết phiên bản mà Git được cài đặt, hoặc nếu chưa, nó sẽ báo git is an unknown command. Nếu chưa được cài đặt, thực hiện những bước dưới đây tùy theo từng hệ điều hành của bạn:
    Cài đặt Git trên Windows
    Đi đến trình cài đặt Git dành cho Windows và tải xuống phiên bản mới nhất.
    Khi trình cài đặt đã bắt đầu, hãy làm theo các hướng dẫn được cung cấp trong màn hình hướng dẫn Cài đặt Git cho đến khi quá trình cài đặt hoàn tất.
    Mở command prompt (hoặc Git Bash) rồi gõ git version để xác định Git đã được cài đặt thành công cùng phiên bản của nó.
    Cài đặt Git trên Mac
    Hầu hết các phiên bản của MacOS đã cài đặt Git, và bạn có thể kích hoạt thông qua Terminal với git version. Tuy nhiên, nếu Git chưa được cài đặt vì một lý do nào đó, bạn hãy làm theo các bước sau:
    Đi đến trình cài đặt Git dành cho MacOS và tải xuống phiên bản mới nhất. Sau đó, thực hiện việc cài đặt theo hướng dẫn.
    Mở terminal, rồi gõ git version để kiểm tra.
    Cài đặt Git trên Linux (Ubuntu)
    Mở command prompt và chạy dòng lệnh sudo apt-get update để chắc chắn rằng mọi thứ đều được cập nhật.
    Sau đó, để cài đặt Git, chạy dòng lệnh: sudo apt-get install git-all.
    Xác minh cài đặt bằng cách nhập lệnh sau: git --version.
    2. Tạo kho lưu trữ cục bộ (Local Repository)
    Sau khi bạn đã cài đặt Git thành công, bạn cần đăng nhập vào Github, sau đó ấn vào dấu + trên menu và chọn New repository.
    Bạn sẽ cần đặt tên cho kho chứa của bạn, sau đó lựa chọn loại kho chứa phù hợp – Public (ai cũng có thể clone) và Private (chỉ có những người được cấp quyền mới có thể clone). Sau khi bạn đã chọn xong những tuỳ chọn của repo mới, hãy ấn Create Repository để tạo. 
    Khi tạo xong nó sẽ dẫn bạn tới trang hướng dẫn làm việc với kho chứa vừa tạo. Và kho chứa của bạn bây giờ sẽ có địa chỉ là https://github.com/$user-name/$repository, ví dụ ở hình dưới là: https://github.com/ltnquang/ute.git.
    3. Clone repo về máy
    Tiếp theo, việc của bạn bây giờ là hãy clone repo mới này về máy của mình bằng lệnh git clone địa_chỉ.
    Ví dụ ở trên, chúng ta sẽ clone repo về máy bằng lệnh:
    $ git clone https://github.com/ltnquang/ute.git
    4. Push code lên git
    Thêm/sửa/xóa các file/thư mục trên repo vừa clone về, sau đó lần lượt chạy từng lệnh sau:
    $ git add
    $ git commit -m "điền nội dung commit vào đây"
    $ git push origin master
    Chú ý: Trỏ đúng thư mục mà chúng ta clone git về, ví dụ cd 'tên thư mục' để chuyển đến.
    Vậy là bạn hoàn thành việc push code lên git rồi đó. Hãy vào lại GitHub repo để kiểm tra nhé!
    
    `,
    category: 'Technology',
    cover: '../images/blogs/b1.jpg',
    date: 'DECEMBER 27, 2023'
  },

  {
    id: 2,
    title: 'KIẾN THỨC CẦN THIẾT ĐỂ TRỞ THÀNH WEB DEVELOPE',
    desc: ` 1. Git & GitHub  Khi viết code, các web developer có thể sẽ cần phải xem lại đoạn code mình đã làm trước đây. Có một phương pháp đơn giản là dùng tính năng undo/redo của trình biên soạn. Tuy nhiên, bạn có thể bất cẩn ấn nhầm phím khác thay vì redo khiến lịch sử trạng thái lưu lại bị ghi đè hoặc không thể redo hoặc editor không lưu lại lịch sử sau khi đóng.
    Bên cạnh đó, việc nhiều người cùng làm việc trong dự án đòi hỏi các thành viên phải chia sẻ các thay đổi mình tạo ra với nhau. Việc làm này nhằm đảm bảo mọi người đều đang làm việc trên cùng một phiên bản dự án. 
    2. HTTP/HTTPS
Có thể bạn đã biết: Tất cả các trình duyệt mà bạn truy cập sẽ thấy tiền tố HTTP hoặc HTTPS được thêm vào sau địa chỉ URL của website đó.
HTTP (tên đầy đủ: Hypertext Transfer Protocol) là giao thức truyền tải siêu văn bản. Nó được sử dụng trong www (World Wide Web) để truyền tải dữ liệu từ dạng văn bản, âm thanh đến hình ảnh giữa Web server đến các trình duyệt Web và ngược lại.
Còn HTTPS (tên đầy đủ: Hypertext Transfer Protocol Secure) là giao thức truyền tải siêu văn bản an toàn. Hiểu đơn giản, đây là giao thức HTTP nhưng tích hợp thêm Chứng chỉ bảo mật TLS/SSL nhằm mã hóa các thông điệp để tăng tính bảo mật cho website.
Đây đều là những kiến thức căn bản mà bất cứ một nhà phát triển web nào cũng cần sở hữu. 
3. Cấu trúc dữ liệu và thuật toán
Hiện nay, các website ngày càng trở nên phức tạp và chứa một lượng dữ liệu ngày càng lớn và đa dạng. Điều này đã dẫn đến sự xuất hiện của 3 vấn đề quan trọng mà mọi nhà lập trình web đều phải đối mặt:  

Tìm kiếm dữ liệu: Sẽ là bất khả thi để có thể thực hiện việc tìm kiếm một dữ liệu bất kỳ trong hàng triệu dữ liệu khác
Tốc độ bộ vi xử lý: Mặc dù bộ vi xử lý có tốc độ rất cao, nhưng nó cũng có giới hạn. Khi lưu lượng dữ liệu lên tới hàng tỷ bản ghi, tốc độ xử lý cũng sẽ chậm đi đáng kể.
Đa yêu cầu: Khi hàng nghìn người dùng cùng thực hiện tìm kiếm trên một Web Server, thật khó khăn để có thể xử lý cùng lúc tất cả các yêu cầu đó`,
    category: 'IT',
    cover: '../images/blogs/b2.jpg',
    date:'DECEMBER 26, 2023'
  },
  {
    id: 3,
    title: 'Lập trình AI – ngôn ngữ phổ biến',
    desc:`Python là một ngôn ngữ lập trình AI đã trở nên phổ biến rộng rãi hiện nay. Lý do chính cho sự thành công này đến từ cú pháp đơn giản, ít mã hóa hơn và một số lượng lớn các thư viện có sẵn. Cú pháp đơn giản có nghĩa là bạn có thể tập trung vào giá trị cốt lõi của lập trình, tư duy hoặc giải quyết vấn đề.
    Các thư viện nổi tiếng có thể kể đến là NumPy, SciPy, matplotlib, nltk, SimpleAI. Python là một ngôn ngữ lập trình AI mã nguồn mở. Đó là lý do tại sao nó có một lượng người hâm mộ khổng lồ trong cộng đồng các lập trình viên. 
    Trong khi các ngôn ngữ lập trình AI khác sử dụng dấu câu, thì Python sử dụng từ khóa tiếng Anh. Nó được thiết kế để người dùng có thể đọc được. Nó chỉ có một vài từ khóa và có cú pháp được xác định rõ ràng. Nếu bạn là sinh viên, bạn sẽ tiếp thu ngôn ngữ này một cách nhanh chóng.
    Python hỗ trợ lập trình hướng đối tượng (OOP), kiểm tra dynamic, thu gom rác tự động và có thể được tích hợp với C ++, C, Java, Cobra và nhiều ngôn ngữ khác.
    Điểm mấu chốt là Python được coi là ngôn ngữ lập trình AI tốt nhất vì tính đơn giản của nó.`,
    category: 'AI',
    cover: '../images/blogs/b3.jpg',
    date: 'DECEMBER 27, 2023'
  },
  {
    id: 4,
    title: 'RESTful API là gì? 6 ràng buộc kiến trúc cơ bản của RESTful API',
    desc: `RESTful API là gì?
    Để hiểu rõ RESTful API là gì, ta cần làm rõ hai khái niệm thành phần của nó. Bao gồm: 
    API là viết tắt của Application Programing Interface (Giao diện lập trình ứng dụng). Thuật ngữ này dùng để chỉ phương thức kết nối từ ứng dụng đến các thư viện khác nhau.
    REST là từ viết tắt của REpresentational State Transfer (Truyền trạng thái đại diện). Đây là một tiêu chuẩn dùng để xây dựng API, giúp API trở nên thân thiện hơn với người dùng. Khái niệm này được Roy Fielding giới thiệu lần đầu vào năm 2000 trong luận văn tiến sĩ nổi tiếng của ông.
    Do đó, RESTful API (hay còn được gọi là REST API) là thuật ngữ dùng để chỉ những API được xây dựng theo cấu trúc REST. Mặc dù REST có thể được sử dụng với mọi giao thức, nhưng nó thường dùng HTTP cho Web API.
    Những ràng buộc kiến trúc cơ bản của RESTful API
    Thực tế cho thấy, có rất nhiều API tự nhận mình là RESTful, nhưng chúng lại không đáp ứng được những ràng buộc mà tiến sĩ Fielding đặt ra. Một RESTful API phải thỏa mãn những ràng buộc (hay điều kiện) sau đây:
    1. Client–server (Máy khách – máy chủ)
    Ràng buộc này hoạt động dựa trên ý tưởng rằng máy khách và máy chủ phải hoàn toàn tách biệt và được phép phát triển riêng lẻ, độc lập. Phương thức hoạt động chính của REST là tách biệt giao diện người dùng ra khỏi dữ liệu lưu trữ.
    
    Với cách thức này, người dùng có thể thực hiện thay đổi với các ứng dụng di động của mình một cách độc lập. Việc này không làm ảnh hưởng đến cấu trúc dữ liệu hoặc thiết kế cơ sở dữ liệu của máy chủ. Ngược lại, việc điều chỉnh cơ sở dữ liệu hoặc thay đổi ứng dụng của máy chủ cũng không ảnh hưởng đến ứng dụng của máy khách.
    
    2. Stateless (Phi trạng thái)
    Bất kỳ một RESTful API nào cũng phải phi trạng thái. Nghĩa là mỗi yêu cầu (request) từ máy khách đến máy chủ có thể được thực hiện độc lập. Đồng thời, mỗi yêu cầu phải chứa mọi thông tin cần thiết để máy chủ hiểu và hoàn thành nó.
    
    Ngoài ra, yêu cầu của máy khách không thể lạm dụng bất kỳ thông tin nào trên máy chủ. Đó cũng chính là lý do khiến trạng thái phiên (session state) được giữ hoàn toàn trên máy khách. Điều này sẽ giúp tăng độ tin cậy cho API, hạn chế lỗi và giảm tài nguyên sử dụng.
    
    3. Cacheable (Lưu được vào bộ nhớ cache)
    API phi trạng thái có thể tăng số lượng request, nhất là khi có nhiều cuộc gọi đến và đi. Do đó, RESTful API được thiết kế để lưu trữ dữ liệu vào cache để tăng tính tái sử dụng.
    
    Cụ thể, ràng buộc này yêu cầu mỗi phản hồi phải đánh dấu dữ liệu bên trong nó là lưu được hoặc không lưu được vào cache. Nếu phản hồi lưu được vào cache, thì máy khách có thể sử dụng lại dữ liệu của phản hồi đó cho các yêu cầu tương tự sau này.
    
    4. Uniform interface (Giao diện thống nhất)
    REST áp dụng những nguyên tắc chung của kỹ thuật phần mềm cho giao diện thành phần. Chính vì lý do đó, tổng thể kiến trúc hệ thống được đơn giản hóa. Khả năng hiển thị của các tương tác cũng được cải thiện đáng kể.
    
    Để có giao diện thống nhất, REST cần nhiều ràng buộc kiến trúc cho các thành phần bên trong. Chẳng hạn, việc biểu diễn tài nguyên trên toàn hệ thống phải tuân theo các nguyên tắc cụ thể. Các nguyên tắc đó bao gồm: quy ước đặt tên, định dạng liên kết, định dạng dữ liệu (XML hoặc JSON).
    
    Ngoài ra, tất cả tài nguyên phải được truy cập thông qua một cách chung như HTTP GET. Việc điều chỉnh, sửa đổi tài nguyên cũng phải sử dụng một cách tiếp cận nhất quán.
    
    5. Layered system (Hệ thống phân lớp)
    Kiểu hệ thống phân lớp cho phép một kiến trúc chứa nhiều lớp phân cấp. Mỗi lớp sẽ có một chức năng và trách nhiệm cụ thể. Cách thức của REST là hạn chế hành vi của các thành phần trong một lớp. Mỗi thành phần hoàn toàn không thể thấy được những gì ở bên ngoài lớp mà chúng đang tương tác.
    
    6. Code on demand (Mã theo yêu cầu)
    Ràng buộc này là tùy chọn, không bắt buộc. Do đó, đây cũng là ràng buộc ít được biết đến của REST.
    
    Ràng buộc này cho phép người dùng mở rộng chức năng của máy khách. Họ có thể tải xuống và thực thi mã dưới dạng các ứng dụng nhỏ (applet) hoặc tập lệnh. Điều này sẽ đơn giản hóa công việc cho máy khách, bằng cách giảm các tính năng bắt buộc triển khai từ trước.
    
    Tóm lại, một RESTful API phải thỏa mãn 6 ràng buộc về thiết kế nêu trên. Trước khi sử dụng, bạn cần phải kiểm tra kỹ từng ràng buộc để xem API đó có phù hợp với dự án của mình hay không. Hy vọng bài viết này sẽ giúp bạn hiểu rõ hơn về RESTful API.`,
    category: 'Fashion',
    cover: '../images/blogs/b4.jpg',
    date: 'DECEMBER 27, 2023'
  },
  {
    id: 5,
    title: 'Selenium Webdriver là gì? Top những ưu, nhược điểm mà bạn cần biết',
    desc: ` Selenium Webdriver là gì?
    Selenium Webdriver là một thành phần quan trọng của bộ công cụ Selenium. Đây là một bộ công cụ kiểm thử (test) tự động nổi tiếng. Nó được ưu chuộng vì có mã nguồn mở, có khả năng hỗ trợ nhiều ngôn ngữ lập trình.
    Bộ công cụ này gồm có bốn thành phần là: Selenium IDE, Selenium RC, Selenium Grid và Selenium Webdriver.
    So với các thành phần còn lại, Selenium Webdriver được đánh giá cao hơn hẳn. Bởi lẽ nó cho phép người dùng chạy các câu lệnh kiểm tra trực tiếp bằng trình duyệt web
    Ưu điểm của Selenium Webdriver là gì?
1. Mã nguồn mở
Selenium WebDriver được các tester trên thế giới ưa thích vì nó là một phần mềm mã nguồn mở (open-source). Điều này đồng nghĩa với việc bạn không cần phải tốn tiền khi sử dụng. Điều đó sẽ giúp giảm thiểu chi phí cho cả quá trình test.
2. Tương thích nhiều trình duyệt
Selenium WebDriver tương thích với gần như tất cả các trình duyệt web phổ biến hiện tại. Chẳng hạn như Opera, Yandex, Firefox, Internet Explorer, Chrome. Bạn có thể dễ dàng chạy các trình duyệt này ở bất kỳ hệ điều hành nào, dù là Windows, Mac hay Linux.
3. Hỗ trợ đa ngôn ngữ lập trình
Selenium WebDriver hỗ trợ gần hết các ngôn ngữ lập trình phổ biến hiện nay (C#, Java, Python, Ruby, Perl,…). Do đó, người dùng không cần phải học thêm một ngôn ngữ lập trình mới để làm việc với công cụ này. Bạn hoàn toàn có thể viết các đoạn script một cách hiệu quả bằng chính ngôn ngữ lập trình đang là thế mạnh của mình.
Nhược điểm của Selenium Webdriver là gì?
1. Chỉ hỗ trợ ứng dụng web
Đúng như tên gọi, giới hạn của Selenium Webdriver là chỉ hoạt động trên nền tảng website. Bạn không thể tìm cách để mở rộng công cụ này cho các nền tảng ứng dụng của Windows. Hạn chế này sẽ khiến bạn rắc rối trong một vài trường hợp, chẳng hạn như khi phải kiểm tra tốc độ kết nối với ứng dụng Windows.
2. Đòi hỏi kinh nghiệm lập trình
Một trong những xu hướng hiện nay là thực hiện test tự động mà không cần đến code. Điều này giúp một người không cần có kiến thức chuyên môn vẫn có thể thao tác thông qua các công cụ hỗ trợ.
Tuy nhiên, Selenium Webdriver lại đi ngược với điều đó. Để sử dụng tốt công cụ này, tester phải có kiến thức về một ngôn ngữ lập trình nhất định. Đồng thời, bạn phải có kinh nghiệm sử dụng các công cụ test tự động trước đó.
 `,
    category: 'IT',
    cover: '../images/blogs/b5.jpg',
    date: 'DECEMBER 27, 2023'
  },
  {
    id: 6,
    title: 'Python làm được gì? – 5 ứng dụng phổ biến của Python và ưu điểm nhược điểm',
    desc: `Python là gì?
    Python là một ngôn ngữ lập trình cực kỳ phổ biến với các lập trình viên. Viết phần mềm tự động bằng Python cực kỳ đơn giản và thú vị.
    Một số những ứng dụng phổ biến của Python là:
    Xây dựng những chú bot
    Trích xuất dữ liệu từ trang web (web scrapping)
    Học máy (machine learning), hình hoá dữ liệu (data visualization), phân tích dữ liệu (data analysis)
    Xây dựng trang web với các framework như Django và Flask
    Phát triển game với Pygame
    Phát triển ứng dụng điện thoại với các framework như Kivy
    Trong bài viết này, Got It sẽ chia sẻ với bạn 5 ứng dụng nổi bật nhất của Python cùng một số thư viện hỗ trợ. Tìm hiểu xong, biết đâu bạn sẽ có nhiều động lực để học Python hơn đó!
    1. Python làm được gì? – Phát triển trang web
    Python có những framework hỗ trợ cho việc phát triển web rất hiệu quả như Django hay Flask. Nó có thể được sử dụng để xây dựng các server-side web application và dễ dàng tích hợp với bất kỳ hệ thống frontend nào.
    
    Thông thường, các nhà phát triển phần mềm sẽ dùng JavaScript cho phần frontend và Python để phát triển hệ thống vận hành server-side. Python không được sử dụng trực tiếp trong các browser. `,
    category: 'IT',
    cover: '../images/blogs/b6.jpg',
    date: 'DECEMBER 27, 2023'
  },
  {
    id: 7,
    title: 'Hướng dẫn cách triển khai và debug code Python trên Docker',
    desc: `Bạn đã bao giờ mất hàng tiếng đồng hồ, thậm chí vài ngày để cài đặt một số thư viện cần thiết cho việc chạy một project trên máy tính của mình chưa? Nếu có thì đây là bài viết dành cho bạn.
    Thông thường, khi bạn tham gia vào quá trình phát triển một project, bạn sẽ cần tải mã nguồn của project đó về. Tiếp theo là cài đặt môi trường và chạy được code của project đó trên máy tính của mình, trước khi bạn có thể bắt tay vào code thêm bất cứ tính năng nào.
    Với Python, những thư viện cần thiết cho quá trình cài đặt môi trường phát triển sẽ được khai báo trong file requirements.txt. Một trong những vấn đề bạn có thể gặp phải đó là thư viện được yêu cầu có version không tương thích với nền tảng máy tính của bạn. Việc này rất dễ xảy ra nếu version của thư viện đã quá cũ hoặc máy tính của bạn là một máy tính quá mới (ví dụ Macbook sử dụng chip M1 hay M2). Để khắc phục vấn đề này, bạn có thể phải build lại thư viện từ mã nguồn của thư viện đó. Mà việc này thì rất hay lỗi do máy tính thiếu thư viện này, thiếu thư viện kia hoặc các thư viện cần thiết cho việc build chưa được link đúng.
    Vậy làm sao để có thể cài đặt môi trường phát triển một cách dễ dàng, không bị phụ thuộc vào nền tảng máy tính? Docker chính là một lựa chọn sáng suốt! Docker cho phép bạn đóng gói ứng dụng của mình vào các container, bảo đảm việc cung cấp một môi trường đồng nhất, giúp bạn dễ dàng chạy và triển khai ứng dụng trên bất kỳ máy tính nào.
    Trong bài viết này, Got It sẽ hướng dẫn cách triển khai và debug code Python trên Docker sử dụng các IDE phổ biến như Pycharm hay Visual Studio Code. 
    Lưu ý: Nội dung bài viết này hướng tới những độc giả đã có kiến thức cơ bản về Docker. Nếu bạn chưa từng sử dụng Docker, vui lòng tìm hiểu thêm tại đây. `,
    category: 'IT',
    cover: '../images/blogs/b7.jpg',
    date: 'DECEMBER 27, 2023'
  },
  {
    id: 8,
    title: 'Top website tự học tester miễn phí (updated 2021)',
    desc: `1. Udemy – Website tự học tester phổ biến
    Udemy là một trong những nền tảng kiến thức online chất lượng nhất hiện nay. Đây là lựa chọn lý tưởng phù hợp cho các bạn thích học qua video để linh hoạt giờ giấc. Hầu hết các khóa học trên Udemy thường phải tốn một khoản phí nhỏ. Tuy nhiên, nền tảng giáo dục online này vẫn có những khóa học hoàn toàn miễn phí dành cho bạn. Những khóa học miễn phí này thường là những khóa cơ bản hoặc của những giảng viên mới. Vì vậy, bạn có thể tận dụng điều này để tìm hiểu về kiến thức nền tảng của nghề tester.
    `,
    category: 'Study',
    cover: '../images/blogs/b8.jpg',
    date: 'DECEMBER 27, 2023'
  },
  {
    id: 9,
    title: 'TEACH YOUR DRAGON HOW TO FLY',
    desc: "Magnis modipsae que lib voloratati andigen daepedor quiate ut reporemni aut labor. Laceaque quiae sitiorem ut restibusaes es tumquam core posae volor remped modis volor. Doloreiur qui commolu ptatemp dolupta orem retibusam emnis et consent accullignis lomnus. We don't want to overload you with hundreds of styles you don't want, or need. We give you a strong base to express your own creativity.",
    category: 'Fashion',
    cover: '../images/blogs/b9.jpg',
    date: 'DECEMBER 27, 2023'
  },

  {
    id: 10,
    title: 'TEACH YOUR DRAGON HOW TO FLY',
    desc: "Magnis modipsae que lib voloratati andigen daepedor quiate ut reporemni aut labor. Laceaque quiae sitiorem ut restibusaes es tumquam core posae volor remped modis volor. Doloreiur qui commolu ptatemp dolupta orem retibusam emnis et consent accullignis lomnus. We don't want to overload you with hundreds of styles you don't want, or need. We give you a strong base to express your own creativity.",
    category: 'Fashion',
    cover: '../images/blogs/b10.jpg',
    date: 'DECEMBER 27, 2023'
  }
]

import MyPortfolio from "../assets/images/projects/my-portfolio.png";
import YelpCamp from "../assets/images/projects/yelpcamp.png";
import NgotBand from "../assets/images/projects/ngot-band.png";
import MeTv from "../assets/images/projects/metv.png";
import SmartHome from "../assets/images/projects/smart_home.png";
import ErrorSys from "../assets/images/projects/error_system.png";
import PrintSys from "../assets/images/projects/print_system.png";
import BuildSys from "../assets/images/projects/build_system.png";
import SaleOrderSys from "../assets/images/projects/sale_orders_system.png";
import WorkflowSys from "../assets/images/projects/workflow_system.png";
import TravelApp from "../assets/images/projects/travel_application.png";

export const workExperiences = [
  {
    year: "2022",
    projects: [
      {
        title: "My Portfolio",
        img: MyPortfolio,
        technicals: ["HTML", "SCSS", "ReactJS", "React Bootstrap", "Swiper"],
        roles: "Developer",
        details:
          "Xây dựng một portfolio website bằng Reactjs kèm một số thư viện như react-bootstrap, react-scroll, swiper,... . Người dùng có thể chuyển đổi qua lại giữa giao diện tối và sáng cũng như ngôn ngữ tiếng Việt và tiếng Anh",
        details_en:
          "Build a portfolio website with Reactjs and libraries like react-bootstrap, react-scroll, swiper, etc. Users can switch back and forth between dark and light interfaces and switch languages between Vietnamese and English.",
        git: "https://github.com/ntd-97/my-portfolio",
        demo: "https://ntd-97.github.io/my-portfolio/",
      },
      {
        title: "Metv",
        img: MeTv,
        technicals: [
          "HTML",
          "CSS",
          "Tailwind CSS",
          "Swiper",
          "ReactJS",
          "Redux",
          "Redux Saga",
        ],
        roles: "Developer",
        details:
          "Xây dựng web phim cho phép người dùng có thể xem thông tin phim, tìm kiếm phim - diễn viên, hiển thị và lọc phim theo danh sách. Bên cạnh đó người dùng còn có thể thêm phim vào danh sách xem sau và danh sách yêu thích.",
        details_en:
          "Build a movie web allows users to view movie information - tv series, search movies - tv series - actors, and filter movies - tv series by list.  In addition, users can add movies and TV shows to their watch-later and favorites lists.",
        git: "https://github.com/ntd-97/movie",
        demo: "https://mellifluous-longma-fc46e4.netlify.app/movies",
      },
      {
        title: "Ngọt Band",
        img: NgotBand,
        technicals: [
          "HTML",
          "CSS",
          "Tailwind CSS",
          "Swiper",
          "ReactJS",
          "Redux",
          "Redux Saga",
        ],
        roles: "Developer",
        details:
          "Xây dựng một trang web giới thiệu nhóm nhạc bằng HTML, CSS và ReactJS. Trang web cho phép người dùng xem thông tin show cũng như đăng ký tài khoản và mua vé.",
        details_en:
          "Build a music band showcase website using HTML, CSS and ReactJS. The site allows users to view show information, register for an account and purchase tickets.",
        git: "https://github.com/ntd-97/ngot-band-reactjs",
        demo: "https://chipper-valkyrie-93ed8f.netlify.app/",
      },
      {
        title: "YelpCamp",
        img: YelpCamp,
        technicals: [
          "EJS",
          "CSS",
          "Bootstrap",
          "Javascript",
          "NodeJS",
          "ExpressJS",
          "MongoDB",
        ],
        roles: "Developer",
        details:
          "Xây dựng ứng dụng web cho phép người dùng đăng ký, đăng nhập, thêm, sửa và xóa địa điểm cắm trại. Các địa điểm cắm trại này sẽ được hiển thị lên bảng đồ và có thể truy cập từ đây. Bên cạnh đó người dùng có thể thêm, sửa và xóa các đánh giá cho từng địa điểm.",
        details_en:
          "Build a web application that allows users to register, log in, add, edit and delete camping sites. These campsites will be displayed on the map and accessed from here. Besides, users can add, edit and delete reviews for each location.",
        git: "https://github.com/ntd-97/yelp-camp",
        demo: "https://whispering-taiga-58252.herokuapp.com/",
      },
      {
        title: "Travel Application",
        img: TravelApp,
        technicals: ["ABAP", "SAP Cloud Platform"],
        roles: "Developer",
        details:
          "Xây dựng một ứng dụng quản lý chuyến bay bằng ABAP trên SAP Cloud Platform. Sau đó lập tài liệu quá trình thực hiện theo yêu cầu khách hàng",
        details_en:
          "Build a flight management application using ABAP on the SAP Cloud Platform. Then document the implementation process according to customer requirements.",
        git: "",
        demo: "",
      },
    ],
  },
  {
    year: "2021",
    projects: [
      {
        title: "Building materials management system (VB Convert)",
        img: BuildSys,
        technicals: ["VB6", "VB.NET", "SQL"],
        roles: "Developer, Tester",
        details:
          "Dựa trên source code VB6 của dự án cũ tiến hành chuyển đổi sang VB.NET. Sau khi chuyển đổi xong sẽ kiểm tra các tính năng của màn hình với tập dữ liệu xác định. Đảm bảo hiển thị đúng và hoạt động bình thường. Với vai trò tester thì sẽ viết testcase và test cả 2 hệ thống trên cùng 1 tập dữ liệu, đảm bảo 2 hệ thống hiển thị và hoạt động giống nhau. Chụp lại màn hình 2 hệ thống để chứng minh kết quả test.",
        details_en:
          "Based on the VB6 source code of the old project, convert to VB.NET. After the conversion, I will test the screen's features with the specified data set. Ensure correct display and operation well. As a tester, I will write test cases and test both systems on the same data set, ensuring that the two systems display and behave the same. Get evidence to demonstrate test results.",
        git: "",
        demo: "",
      },
      {
        title: "Sale orders management system ",
        img: SaleOrderSys,
        technicals: ["Java", "SAP Cloud Platform", "SAP UI5"],
        roles: "Developer",
        details:
          "Dựa theo tài liệu mà khách hàng cung cấp, sử dụng SAP UI5 để sửa lại giao diện và viết thêm một số API bằng Java cho hệ thống quản lý đơn đặt hàng.",
        details_en:
          "Based on the documentation provided by the customer, use SAP UI5 to revise the interface and write some APIs in Java for the sales order management system.",
        git: "",
        demo: "",
      },
      {
        title: "Workflow management system ",
        img: WorkflowSys,
        technicals: ["Javascript"],
        roles: "Developer, Tester",
        details:
          "Dựa theo tài liệu mà khách hàng cung cấp. Thêm các ràng buộc, quyền cho app trong flow trên Kintone và đảm bảo app hoạt động đúng như yêu cầu. Với vai trò tester tiến hành viết testcase theo tài liệu sau đó kiểm thử. Lập tài liệu triển khai lên môi trường người dùng",
        details_en:
          "Based on the documents provided by the customer. Add constraints and permissions to the app in flow on Kintone and ensure it works as it should. As a tester, write test cases according to the document and then test. Write deployment documentation to the user environment.",
        git: "",
        demo: "",
      },
    ],
  },
  {
    year: "2020",
    projects: [
      {
        title: "Error reporting and management system",
        img: ErrorSys,
        technicals: ["Java", "SQL"],
        roles: "Tester",
        details:
          "Dựa trên yêu cầu khách hàng kiểm tra và sửa lại tài liệu thiết kế. Viết testcase và thực thi test để đảm bảo hệ thống hoạt động đúng như tài liệu thiết kế mô tả. Chụp lại màn hình hệ thống để chứng minh kết quả test",
        details_en:
          "Based on customer requirements, check and revise design documents. Write test cases and execute tests to ensure the system works as described in the design document - capture system screen to demonstrate test results.",
        git: "",
        demo: "",
      },
      {
        title: "Printing product management system (VB Covert)",
        img: PrintSys,
        technicals: ["VB6", "VB.NET", "SQL"],
        roles: "Tester",
        details:
          "Dựa trên source code của hệ thống cũ tiến hành viết testcase cho từng màn hình. Sau đó thực thi test để xác nhận với cùng 1 tập dữ liệu thì 2 hệ thống hiển thị và vận hành giống nhau. Đồng thời cũng kiểm tra các tính năng mới thêm vào hoạt động bình thường và không ảnh hưởng tới các tính năng khác. Chụp lại màn hình 2 hệ thống để chứng minh kết quả test.",
        details_en:
          "Based on the source code of the old system, write test cases for each form. Then execute the test to confirm that the two systems display and operate the same with the same data set. Also, check the newly added features work correctly and do not affect other parts - screen capture of 2 systems to demonstrate test results.",
        git: "",
        demo: "",
      },
    ],
  },
  {
    year: "2019",
    projects: [
      {
        title: "Building SmartHome System with Alexa",
        img: SmartHome,
        technicals: ["C", "Alexa API", "AWS Lambda", "NodeMCU"],
        roles: "Developer",
        details:
          "Xây dựng mô hình nhà thông minh với trung tâm điều khiển là loa EchoDot tích hợp trợ lý ảo Alexa. Người dùng sẽ sử dụng giọng nói để điều khiển các thiết bị như đèn, tivi, cảm biến nhiệt độ, độ ẩm trong nhà.",
        details_en:
          "Build a smart home model with the control center being an EchoDot speaker with a built-in Alexa virtual assistant. Users will use voice to control devices such as lights, televisions, temperature and humidity sensors in the house.",
        git: "",
        demo: "",
      },
    ],
  },
];

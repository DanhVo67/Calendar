<template>
    <div class="about-container">
      <h1>About</h1>
  
      <section class="feature">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
          <img src="../assets/img02.png" alt="" style="width: 200%; height: auto;">
     
        </div>
        <h2>Tính năng và Lợi ích</h2>
        <ul>
          <li><strong>Quản lý lịch trình thông minh:</strong> Tạo và sắp xếp các sự kiện, công việc, hoạt động cá nhân một cách khoa học theo ngày, tuần hoặc tháng. Tối ưu hóa thời gian và nâng cao hiệu suất mỗi ngày.</li>
          <li><strong>Thông báo thông minh, không bỏ lỡ điều quan trọng:</strong> Nhận nhắc nhở kịp thời qua email hoặc thông báo trực tiếp trên ứng dụng, đảm bảo bạn luôn theo kịp mọi công việc và sự kiện quan trọng.</li>
          <li><strong>Chia sẻ lịch trình dễ dàng, hiệu quả:</strong> Người dùng có thể chia sẻ lịch làm việc của mình với người khác, hữu ích cho việc làm việc nhóm hoặc quản lý công việc gia đình.</li>
          <li><strong>Đa nền tảng và tiện dụng:</strong> Đồ án được phát triển để hoạt động trên nhiều nền tảng, bao gồm desktop và thiết bị di động, đảm bảo sự tiện lợi và linh hoạt cho người dùng.</li>
          <li><strong>Bảo mật thông tin:</strong> Các thông tin cá nhân và lịch trình của người dùng được bảo vệ chặt chẽ, đảm bảo an toàn và riêng tư.</li>
        </ul>
      </section>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
          <img src="../assets/img03.png" alt="" style="width: 200%; height: auto;">
     
        </div>
      <section class="future">
        <h2>Định hướng tương lai</h2>
        <p>Đồ án Lịch cá nhân của tôi không ngừng phát triển và cải tiến để mang lại trải nghiệm tốt nhất cho người dùng. Những hướng đi trong tương lai bao gồm:</p>
        <ul>
          <li>Tối ưu hóa giao diện người dùng để dễ dàng sử dụng hơn.</li>
          <li>Mở rộng tính năng chia sẻ lịch và làm việc nhóm.</li>
          <li>Thêm tính năng đồng bộ hóa với các dịch vụ lưu trữ đám mây.</li>
          <li>Cải thiện tính năng nhắc nhở và thông báo.</li>
          <li>Nghiên cứu và tích hợp các công nghệ mới để nâng cao hiệu suất và độ tin cậy của ứng dụng.</li>
          <li>Tất cả vì một công cụ không chỉ quản lý thời gian – mà còn giúp bạn làm chủ cuộc sống! 🌟
            Luôn lắng nghe phản hồi từ người dùng để cải tiến không ngừng.</li>
        </ul>
      </section>
  
      <footer class="footer">
        <div class="footer-content">
          <p>Designed by 2 anh tài</p>
          <p>Phone: 0000999999</p>
          <div class="social-icons">
            <a href="mailto:youremail@gmail.com" target="_blank">
  <i class="fa fa-envelope"></i>
</a>

            <a href="https://www.facebook.com/share/163N5FSBrr/" target="_blank">
              <img src="../assets/facebook (1).png" alt="">
            </a>
            <a href="https://www.facebook.com/share/18vrUXLzmx/" target="_blank">
              <img src="../assets/facebook (1).png" alt="">
            </a>
            <a href="" target="_blank">
                <img src="../assets/gmail.png" alt="">
            </a>
            <a href="https://github.com/DanhVo67/Calendar" target="_blank">
                <img src="../assets/github.png" alt="">
            </a>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <style scoped>
  /* Reset và cài đặt chung */
  * {
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }
  img{
    width: 25px;
  }
  .about-container {
    max-width: 800px;
    margin: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: calc(100vh - 160px); /* Giữ khoảng cách đủ để footer không bị trùng lên */
  }
  
  h1 {
    text-align: center;
    margin-bottom: 30px;
    color: #333;
  }
  
  .feature,
  .future {
    margin-bottom: 40px;
  }
  
  .feature ul,
  .future ul {
    list-style-type: disc;
    padding-left: 20px;
  }
  
  .feature h2,
  .future h2 {
    margin-bottom: 10px;
    color: #007bff;
  }
  
  .feature li,
  .future li {
    margin-bottom: 10px;
    line-height: 1.6;
  }
  
  /* Footer styles */
  .footer {
    background-color:  lightgray;
    color: black;
    padding: 20px 0;
    text-align: center;
  }
  
  .footer-content {
    max-width: 800px;
    margin: auto;
  }
  
  .footer p {
    margin-bottom: 10px;
  }
  
  .social-icons {
    margin-top: 10px;
  }
  
  .social-icons a {
    color: white;
    font-size: 20px;
    margin: 0 10px;
  }
  
  .social-icons a:hover {
    color: #007bff;
  }
  
  @media (max-width: 768px) {
    .about-container {
      padding: 10px;
    }
  }
  </style>
    
"use client";
import { useState } from "react";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [course, setCourse] = useState<any>(null);

  const openPopup = (data: any) => {
    setCourse(data);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setCourse(null);
  };

  return (
    <main>
      <header className="navbar">
        <nav className="nav-menu">
          <div className="logo">
            <img className="logo" src="/logo.jpg" alt="Logo" />
          </div>

          <ul>
            <li className="has-dropdown">
              <span className="menu-title">
                Về chúng tôi <span className="arrow">▾</span>
              </span>
              <div className="dropdown-box">
                <div className="dropdown-item">
                  <strong>Giới thiệu chung</strong>
                  <span>Về Khóa Học</span>
                </div>
                <div className="dropdown-item">
                  <strong>Khách hàng</strong>
                  <span>Khách hàng của chúng tôi</span>
                </div>
              </div>
            </li>

            <li><span className="menu-title">Đối tác</span></li>

            <li className="has-dropdown">
              <span className="menu-title">
                Tư vấn <span className="arrow">▾</span>
              </span>
              <div className="dropdown-box">
                <div className="dropdown-item">
                  <strong>Tư vấn lộ trình học</strong>
                  <span>Dành cho sinh viên & người mới</span>
                </div>
                <div className="dropdown-item">
                  <strong>Tư vấn doanh nghiệp</strong>
                  <span>Giải pháp an ninh mạng</span>
                </div>
                <div className="dropdown-item">
                  <strong>Đào tạo nội bộ</strong>
                  <span>Huấn luyện đội ngũ IT</span>
                </div>
              </div>
            </li>

            <li className="has-dropdown">
              <span className="menu-title">
                Sản phẩm <span className="arrow">▾</span>
              </span>

              <div className="dropdown-box">
                <div
                  className="dropdown-item"
                  onClick={() =>
                    openPopup({
                      name: "Nhập môn An ninh mạng",
                      level: "Cơ bản",
                      time: "20 giờ",
                      desc: "Trang bị kiến thức nền tảng về bảo mật và an toàn thông tin."
                    })
                  }
                >
                  <strong>Nhập môn An ninh mạng</strong>
                  <span>Cơ bản: 20 giờ</span>
                </div>

                <div
                  className="dropdown-item"
                  onClick={() =>
                    openPopup({
                      name: "Pentest Web cơ bản",
                      level: "Trung cấp",
                      time: "30 giờ",
                      desc: "Thực hành SQL Injection, XSS, CSRF trên các hệ thống mô phỏng."
                    })
                  }
                >
                  <strong>Pentest Web cơ bản</strong>
                  <span>Trung cấp: 30 giờ</span>
                </div>

                <div
                  className="dropdown-item"
                  onClick={() =>
                    openPopup({
                      name: "Bảo mật hệ thống",
                      level: "Nâng cao",
                      time: "40 giờ",
                      desc: "Bảo mật hệ điều hành, máy chủ và hệ thống doanh nghiệp."
                    })
                  }
                >
                  <strong>Bảo mật hệ thống</strong>
                  <span>Nâng cao: 40 giờ</span>
                </div>
              </div>
            </li>


            <li><span className="menu-title">Tuyển dụng</span></li>
            <li><span className="menu-title">Liên hệ</span></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <h1>Nền tảng học An Ninh Mạng</h1>
            <p>
              Học trực tuyến từ cơ bản đến nâng cao về Cyber Security,
              Pentest và bảo mật hệ thống.
            </p>
            <div className="hero-actions">
              <button className="btn-primary">Đăng ký học</button>
              <button className="btn-outline">Xem khóa học</button>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Nội dung đào tạo</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Kiến thức nền tảng</h3>
            <p>Mạng máy tính, bảo mật và an toàn thông tin</p>
          </div>
          <div className="feature-item">
            <h3>Pentest thực tế</h3>
            <p>SQL Injection, XSS, CSRF</p>
          </div>
          <div className="feature-item">
            <h3>Mô phỏng tấn công</h3>
            <p>Red Team – Blue Team</p>
          </div>
          <div className="feature-item">
            <h3>Chứng chỉ</h3>
            <p>Nhận chứng chỉ sau khi hoàn thành khóa học</p>
          </div>
        </div>
      </section>

      <section className="courses">
        <h2>Khóa học tiêu biểu</h2>
        <div className="course-list">
          <div
            className="course-card"
            onClick={() =>
              openPopup({
                name: "Nhập môn An ninh mạng",
                level: "Cơ bản",
                time: "20 giờ",
                desc: "Trang bị kiến thức nền tảng về bảo mật và an toàn thông tin."
              })
            }
          >
            <h3>Nhập môn An ninh mạng</h3>
            <p>Cấp độ: Cơ bản</p>
            <p>Thời lượng: 20 giờ</p>
          </div>

          <div
            className="course-card"
            onClick={() =>
              openPopup({
                name: "Pentest Web cơ bản",
                level: "Trung cấp",
                time: "30 giờ",
                desc: "Thực hành kiểm thử bảo mật web với SQL Injection, XSS, CSRF."
              })
            }
          >
            <h3>Pentest Web cơ bản</h3>
            <p>Cấp độ: Trung cấp</p>
            <p>Thời lượng: 30 giờ</p>
          </div>

          <div
            className="course-card"
            onClick={() =>
              openPopup({
                name: "Bảo mật hệ thống",
                level: "Nâng cao",
                time: "40 giờ",
                desc: "Bảo mật hệ điều hành, máy chủ và hệ thống doanh nghiệp."
              })
            }
          >
            <h3>Bảo mật hệ thống</h3>
            <p>Cấp độ: Nâng cao</p>
            <p>Thời lượng: 40 giờ</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <h4 className="footer-title1">Khóa học An Ninh Mạng</h4>
            <ul>
              <li>Nhập môn An ninh mạng</li>
              <li>Pentest Web cơ bản</li>
              <li>Bảo mật hệ thống</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title2">Tư vấn</h4>
            <ul>
              <li>Tư vấn lộ trình học</li>
              <li>Tư vấn doanh nghiệp</li>
              <li>Đào tạo nội bộ</li>
              <li>Hỗ trợ kỹ thuật</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title3">Liên hệ</h4>
            <ul>
              <li>Email: 123@gmail.com</li>
              <li>Hotline: 0123 456 789</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          2026 Cyber Security E-Learning
        </div>
      </footer>

      {showPopup && (
        <div className="modal-overlay" onClick={closePopup}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>{course.name}</h3>
            <p><strong>Cấp độ:</strong> {course.level}</p>
            <p><strong>Thời lượng:</strong> {course.time}</p>
            <p>{course.desc}</p>

            <div className="modal-actions">
              <button className="btn-primary">Đăng ký khóa học</button>
              <button className="btn-outline" onClick={closePopup}>
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

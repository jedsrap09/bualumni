import { useState, useEffect } from "react";
// import FormInput from "./components/FormInput";
import { test, findId } from "../services/tests";

function Register() {
  const [students, setStudents] = useState();

  const getStudent = () => {
    test().then((res) => {
      setStudents(res);
    });
  };

  const getStudentById = () => {
    findId(100).then((res) => {
      setStudents(res);
    });
  };

  useEffect(() => {
    // getStudent();
    getStudentById();
  }, []);

  console.log("student ", students?.result[0]);

  return (
    <>
      <div class="container-lg">
        <div class="row">
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                Navbar
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled">Disabled</a>
                  </li>
                </ul>
                <a type="button" class="btn-login" href="login.jsx">
                  เข้าสู่ระบบ
                </a>
                <form class="search" action="##">
                  <input type="text" placeholder="Search" name="search" />
                  <button type="submit">
                    <i class="fa fa-search"></i>
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>

        <div class="row-form">
          <div class="username">
            <label for="inputUsername" class="col-form-label">
              ชื่อผู้ใช้งาน
            </label>
            <input
              type="text"
              id="inputUsername"
              class="form-control"
              aria-labelledby="UsernameHelpInline"
              value={students?.result[0]?.username}
            />
            <span id="UsernameHelpInline" class="form-text">
              Must be 8-20 characters long.
            </span>
          </div>


          <div class="password">
            <label for="inputPassword" class="col-form-label">
              รหัสผ่าน
            </label>
            <input
              type="text"
              id="inputPassword"
              class="form-control"
              aria-labelledby="passwordHelpInline"
            />
            <span id="passwordHelpInline" class="form-text">
              Must be 8-20 characters long.
            </span>
          </div>

          <div class="fname">
            <label for="inputFirstname" class="col-form-label">
              ชื่อจริง
            </label>
            <input
              type="text"
              id="inputFirstname"
              class="form-control"
              aria-labelledby
            />
          </div>

          <div class="midname">
            <label for="inputMidname" class="col-form-label">
              ชื่อกลาง
            </label>
            <input
              type="text"
              id="inputMidname"
              class="form-control"
              aria-labelledby
            />
          </div>

          <div class="lname">
            <label for="inputLastname" class="col-form-label">
              นามสกุล
            </label>
            <input
              type="text"
              id="inputLastname"
              class="form-control"
              aria-labelledby
            />
          </div>

          <label class="col-form-label">เลือกเพศ</label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioMale"
            />
            <label class="gender" for="flexRadioDefault1">
              ชาย
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioFemale"
            />
            <label class="gender" for="flexRadioDefault1">
              หญิง
            </label>
          </div>

          <div class="email">
            <label for="inputEmail" class="col-form-label">
              อีเมล์
            </label>
            <input
              type="text"
              id="inputEmail"
              class="form-control"
              aria-labelledby
            />
          </div>

          <div class="studentid">
            <label for="inputStudentid" class="col-form-label">
              รหัสนักศึกษา
            </label>
            <input
              type="text"
              id="inputStudentid"
              class="form-control"
              aria-labelledby
            />
          </div>

          <div class="facultyid">
            <label for="inputFacultyid" class="col-form-label">
              คณะที่ศึกษา
            </label>
            <input
              type="text"
              id="inputFacultyid"
              class="form-control"
              aria-labelledby
            />
          </div>

          <div class="departmentid">
            <label for="inputDepartmentid" class="col-form-label">
              สาขาที่ศึกษา
            </label>
            <input
              type="text"
              id="inputDepartmentid"
              class="form-control"
              aria-labelledby
            />
          </div>

          <div class="majorid">
            <label for="inputMajorid" class="col-form-label">
              วิชาเอก
            </label>
            <input
              type="text"
              id="inputMajorid"
              class="form-control"
              aria-labelledby
            />
          </div>

          <div class="cardid">
            <label for="inputCardid" class="col-form-label">
              เลขบัตรประจำตัวประชาชน
            </label>
            <input
              type="text"
              id="inputCardid"
              class="form-control"
              aria-labelledby
            />
          </div>

          <div class="passportid">
            <label for="inputPassportid" class="col-form-label">
              หมายเลขหนังสือเดินทาง
            </label>
            <input
              type="text"
              id="inputPassportid"
              class="form-control"
              aria-labelledby
            />
          </div>

          <div class="telnum">
            <label for="inputTelnumber" class="col-form-label">
              เบอร์โทรศัพท์
            </label>
            <input
              type="text"
              id="inputTelnumber"
              class="form-control"
              aria-labelledby
            />
          </div>
          <div class="mb-3">
            <label class="col-form-label">เลือกหลักสูตร</label>
            <select
              id="ticket"
              class="form-select"
              aria-label="Default select example"
            >
              <option selected>หลักสูตร</option>
              <option value="1">ธรรมดา</option>
              <option value="2">นานาชาติ</option>
            </select>
          </div>

          <a type="button" class="btn-clear" href="##">
            ล้าง
          </a>
          <a type="button" class="btn-confirm" href="##">
            ยืนยัน
          </a>
        </div>
      </div>
      <footer></footer>
    </>
  );
}

export default Register;

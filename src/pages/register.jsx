import { useState, useEffect } from "react";
// import FormInput from "./components/FormInput";
import { getAllStudent, findId, addAlumni } from "../services/tests";

const initialData = {
  fname: "",
  midname: "",
  lname: "",
  email: "",
  telnum: 0,
  graduation_years: 0,
  address: "",
  eng_program: true,
  birthdate: "",
  student_id: 0,
  passport_id: 0,
  card_id: "",
  username: "",
  password: "",
  faculty_id: "",
  department_id: "",
  major_id: "",
  gender: "",
};

function Register() {
  const [students, setStudents] = useState();
  const [formRegister, setformRegister] = useState(initialData);

  const getStudent = () => {
    getAllStudent().then((res) => {
      setStudents(res);
    });
  };

  const getStudentById = () => {
    findId(100).then((res) => {
      setStudents(res);
    });
  };

  const searchAlumni = () => {
    findId(100).then((res) => {
      setStudents(res);
    });
  };

  const handleFormChange = (e) => {
    setformRegister({
      ...formRegister,
      [e.target?.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    addAlumni(formRegister).then((res) => {
      console.log("res ", res);
    });
  };

  useEffect(() => {
    // getStudent();
    getStudentById();
  }, []);

  console.log("form ", formRegister);

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
                  <button onClick={searchAlumni} type="submit">
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
              name="username"
              onChange={(e) => handleFormChange(e)}
              // value={students?.result[0]?.username}
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
              name="password"
              onChange={(e) => handleFormChange(e)}
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
              name="fname"
              onChange={(e) => handleFormChange(e)}
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
              name="midname"
              onChange={(e) => handleFormChange(e)}
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
              name="lname"
              onChange={(e) => handleFormChange(e)}
            />
          </div>

          <label class="col-form-label">เลือกเพศ</label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              id="flexRadioMale"
              name="gender"
              value="male"
              onChange={(e) => handleFormChange(e)}
            />
            <label class="gender" for="flexRadioDefault1">
              ชาย
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              id="flexRadioFemale"
              name="gender"
              value="female"
              onChange={(e) => handleFormChange(e)}
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
              name="email"
              onChange={(e) => handleFormChange(e)}
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
              name="student_id"
              onChange={(e) => handleFormChange(e)}
            />
          </div>

          <div class="graduationyears">
            <label for="inputGraduationyears" class="col-form-label">
              ปีที่จบการศึกษา
            </label>
            <input
              type="text"
              id="inputGraduationyears"
              class="form-control"
              aria-labelledby
              name="graduation_years"
              onChange={(e) => handleFormChange(e)}
            />
          </div>

          <div class="address">
            <label for="inputAddress" class="col-form-label">
              ที่อยู่
            </label>
            <input
              type="text"
              id="inputAddress"
              class="form-control"
              aria-labelledby
              name="address"
              onChange={(e) => handleFormChange(e)}
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
              name="faculty_id"
              onChange={(e) => handleFormChange(e)}
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
              name="department_id"
              onChange={(e) => handleFormChange(e)}
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
              name="major_id"
              onChange={(e) => handleFormChange(e)}
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
              name="card_id"
              onChange={(e) => handleFormChange(e)}
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
              name="passport_id"
              onChange={(e) => handleFormChange(e)}
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
              name="telnum"
              onChange={(e) => handleFormChange(e)}
            />
          </div>
          <div class="mb-3">
            <label class="col-form-label">เลือกหลักสูตร</label>
            <select
              id="ticket"
              class="form-select"
              aria-label="Default select example"
              name="eng_program"
              onChange={(e) => handleFormChange(e)}
            >
              <option selected>หลักสูตร</option>
              <option value={false}>ธรรมดา</option>
              <option value={true}>นานาชาติ</option>
            </select>
          </div>
          <button class="btn-clear" type="button">
            ล้าง
          </button>
          <button onClick={handleSubmit} class="btn-clear" type="button">
            ยืนยัน
          </button>
        </div>
      </div>
      <footer></footer>
    </>
  );
}

export default Register;

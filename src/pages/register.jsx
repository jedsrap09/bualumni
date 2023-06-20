import { useState, useEffect } from "react";
// import FormInput from "./components/FormInput";
import { getAllStudent, findId, addAlumni } from "../services/alumniServices";
import DatePicker from "react-multi-date-picker";
import moment from "moment/moment";

const initialData = {
  fname: "",
  midname: "",
  lname: "",
  email: "",
  telnum: 0,
  graduation_years: 0,
  address: "",
  eng_program: true,
  birthdate: moment().format("DD/MM/YYYY"),
  student_id: 0,
  passport_id: 0,
  card_id: "",
  username: "",
  password: "",
  faculty_id: "",
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
      [e.target?.name]: e.target?.value,
    });
    console.log("test ", e.target?.name);
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
              <a class="navbar-brand" href="#"></a>
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
                    <a class="nav-link active" aria-current="page" href="#"></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"></a>
                  </li>
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ></a>
                  <li class="nav-item">
                    <a class="nav-link disabled"></a>
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
              // aria-labelledby="UsernameHelpInline"
              name="username"
              onChange={(e) => handleFormChange(e)}
              // value={students?.result[0]?.username}
            />
            {/* <span id="UsernameHelpInline" class="form-text">
              Must be 8-20 characters long.
            </span> */}
          </div>

          <div class="password">
            <label for="inputPassword" class="col-form-label">
              รหัสผ่าน
            </label>
            <input
              type="text"
              id="inputPassword"
              class="form-control"
              // aria-labelledby="passwordHelpInline"
              name="password"
              onChange={(e) => handleFormChange(e)}
            />
            {/* <span id="passwordHelpInline" class="form-text">
              Must be 8-20 characters long.
            </span> */}
          </div>

          <div class="fname">
            <label for="inputFirstname" class="col-form-label">
              ชื่อจริง
            </label>
            <input
              type="text"
              id="inputFirstname"
              class="form-control"
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

          <div class="birthdate">
            <label for="inputbirthdate" class="col-form-label">
              วันเดือนปีเกิด
            </label>
            <DatePicker
              value={formRegister?.birthdate}
              selected={moment(formRegister.birthdate, "DD/MM/YYYY")}
              format="DD/MM/YYYY"
              id="datepicker"
              aria-labelledby="datepicker"
              name="birthdate"
              onChange={(e) => handleFormChange(e)}
            />
          </div>

          <div class="email">
            <label for="inputEmail" class="col-form-label">
              อีเมล์
            </label>
            <input
              type="text"
              id="inputEmail"
              class="form-control"
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
              name="address"
              onChange={(e) => handleFormChange(e)}
            />
          </div>

          <div class="facultyid">
            <label for="inputfacultyid" class="col-form-label">
              คณะที่ศึกษา
            </label>
            {/* <input
                type="text"
                id="inputFacultyid"
                class="form-control"
                aria-labelledby
                name="faculty_id"
                onChange={(e) => handleFormChange(e)}
              /> */}
            <select
              class="form-control m-b-sm ng-valid ng-not-empty ng-dirty ng-valid-parse ng-touched"
              id="txt-search-school-school"
              // ng-model="f_search_school.school"
              // ng-change="get_department(f_search_school.school);"
            >
              <option value="">-- เลือกคณะ --</option>
              <option value="1" data-slug="busem">
                คณะการสร้างเจ้าของธุรกิจและการบริหารกิจการ
              </option>
              <option value="2" data-slug="digital-media">
                คณะดิจิทัลมีเดียและศิลปะภาพยนตร์
              </option>
              <option value="3" data-slug="law">
                คณะนิติศาสตร์
              </option>
              <option value="4" data-slug="comarts">
                คณะนิเทศศาสตร์
              </option>
              <option value="5" data-slug="business">
                คณะบริหารธุรกิจ
              </option>
              <option value="6" data-slug="accounting">
                คณะบัญชี
              </option>
              <option value="7" data-slug="humanities">
                คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว
              </option>
              <option value="8" data-slug="it-innovation">
                คณะเทคโนโลยีสารสนเทศและนวัตกรรม
              </option>
              <option value="9" data-slug="engineering">
                คณะวิศวกรรมศาสตร์
              </option>
              <option value="10" data-slug="arts">
                คณะศิลปกรรมศาสตร์
              </option>
              <option value="12" data-slug="arch">
                คณะสถาปัตยกรรมศาสตร์
              </option>
              <option value="11" data-slug="economics">
                คณะเศรษฐศาสตร์และการลงทุน
              </option>
              <option value="13" data-slug="international-programs">
                หลักสูตรนานาชาติ
              </option>
              <option value="14" data-slug="buci">
                หลักสูตรนานาชาติจีน
              </option>
            </select>
          </div>

          <div class="majorid">
            <label for="inputMajorid" class="col-form-label">
              สาขาที่ศึกษา
            </label>
            <select
              class="form-control ng-pristine ng-valid ng-empty ng-touched"
              id="txt-search-school-department"
              // ng-model="f_search_school.department"
              // ng-options="dept.slug as dept.name for dept in departments"
              // ng-disabled="f_search_school.school == null"
            >
              <option value="" class="" selected="selected">
                -- เลือกสาขาวิชา --
              </option>
              <option
                label="Entrepreneurship"
                value="string:international-programs/entrepreneurship"
              >
                Entrepreneurship
              </option>
              <option
                label="สาขาวิชาการเป็นเจ้าของธุรกิจ"
                value="string:busem/entrepreneurship"
              >
                สาขาวิชาการเป็นเจ้าของธุรกิจ
              </option>

              <option
                label="สาขาวิชาภาพยนตร์"
                value="string:digital-media/film"
              >
                สาขาวิชาภาพยนตร์
              </option>
              <option
                label="สาขาวิชาสื่อดิจิทัล"
                value="string:digital-media/digital-media"
              >
                สาขาวิชาสื่อดิจิทัล
              </option>

              <option 
                label="หลักสูตรนิติศาสตรบัณฑิต" 
                value="string:law/law"
              >
                หลักสูตรนิติศาสตรบัณฑิต
              </option>

              <option
                label="Communication Strategy and Ideation"
                value="string:international-programs/communication-strategy-ideation"
              >
                Communication Strategy and Ideation
              </option>
              <option
                label="Innovative Media Production"
                value="string:international-programs/innovative-media-production"
              >
                Innovative Media Production
              </option>
              <option
                label="สาขาวิชาการผลิตอีเว้นท์ และการจัดการนิทรรศการและการประชุม"
                value="string:comarts/event-production-and-mice-management"
              >
                สาขาวิชาการผลิตอีเว้นท์ และการจัดการนิทรรศการและการประชุม
              </option>
              <option
                label="สาขาวิชาการผลิตเนื้อหาสร้างสรรค์และประสบการณ์ดิจิทัล"
                value="string:comarts/creative-content-production-digital-experience"
              >
                สาขาวิชาการผลิตเนื้อหาสร้างสรรค์และประสบการณ์ดิจิทัล
              </option>
              <option
                label="สาขาวิชาการสื่อสารและสื่อใหม่  (มุ่งเน้นการโฆษณาดิจิทัล)"
                value="string:comarts/digital-advertising"
              >
                สาขาวิชาการสื่อสารและสื่อใหม่ (มุ่งเน้นการโฆษณาดิจิทัล)
              </option>
              <option
                label="สาขาวิชาการสื่อสารและสื่อใหม่ (มุ่งเน้นการประชาสัมพันธ์ดิจิทัล)"
                value="string:comarts/digital-public-relations"
              >
                สาขาวิชาการสื่อสารและสื่อใหม่ (มุ่งเน้นการประชาสัมพันธ์ดิจิทัล)
              </option>
              <option
                label="สาขาวิชาการสื่อสารและสื่อใหม่ (มุ่งเน้นการสร้างแบรนด์อินฟลูเอนเซอร์)"
                value="string:comarts/influencer-branding"
              >
                สาขาวิชาการสื่อสารและสื่อใหม่
                (มุ่งเน้นการสร้างแบรนด์อินฟลูเอนเซอร์)
              </option>
              <option
                label="สาขาวิชาการสื่อสารและสื่อใหม่ (มุ่งเน้นการสื่อสารดิจิทัลและอุตสาหกรรมสื่อ)"
                value="string:comarts/digital-communication-media"
              >
                สาขาวิชาการสื่อสารและสื่อใหม่
                (มุ่งเน้นการสื่อสารดิจิทัลและอุตสาหกรรมสื่อ)
              </option>
              <option
                label="สาขาวิชาการสื่อสารและสื่อใหม่ (มุ่งเน้นการสื่อสารแบรนด์สร้างสรรค์)"
                value="string:comarts/creative-branding"
              >
                สาขาวิชาการสื่อสารและสื่อใหม่
                (มุ่งเน้นการสื่อสารแบรนด์สร้างสรรค์)
              </option>
              <option
                label="สาขาวิชาวิทยุกระจายเสียง วิทยุโทรทัศน์ และการผลิตสื่อสตรีมมิง"
                value="string:comarts/broadcasting"
              >
                สาขาวิชาวิทยุกระจายเสียง วิทยุโทรทัศน์ และการผลิตสื่อสตรีมมิง
              </option>
              <option
                label="สาขาวิชาศิลปะการแสดง"
                value="string:comarts/performing-arts"
              >
                สาขาวิชาศิลปะการแสดง
              </option>
              <option
                label="หลักสูตรนิเทศศาสตร์ (มุ่งเน้นวารสารศาสตร์ดิจิทัล)"
                value="string:comarts/digital-journalism"
              >
                หลักสูตรนิเทศศาสตร์ (มุ่งเน้นวารสารศาสตร์ดิจิทัล)
              </option>
            </select>
          </div>

          {/* <div class="majorid">
            <label for="inputMajorid" class="col-form-label">
              สาขาที่ศึกษา
            </label>
            <input
              type="text"
              id="inputMajorid"
              class="form-control"
              aria-labelledby
              name="major_id"
              onChange={(e) => handleFormChange(e)}
            />
          </div> */}

          <div class="cardid">
            <label for="inputCardid" class="col-form-label">
              เลขบัตรประจำตัวประชาชน
            </label>
            <input
              type="text"
              id="inputCardid"
              class="form-control"
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
              <option value={false}>ปกติ</option>
              <option value={true}>นานาชาติ</option>
            </select>
          </div>
          <button class="btn-clear" type="button">
            ล้าง
          </button>
          <button class="btn-clear" type="button">
            แก้ไข
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

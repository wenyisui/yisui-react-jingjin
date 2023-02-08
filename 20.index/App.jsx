// 高阶组件


/**
 *  Student List
 *  
 *  {
 *    id, name, grade
 *  }
 *  Teacher List
 * 
 *  {
 *    id, name, subject, like 
 *  }
 */

import { fetchListData } from "./server/modal";

import StudentList from "./components/StudentList";
import TeacherList from "./components/TeacherList";
import listHoc from "./components/ListHoc";

const StudentListHoc = listHoc(StudentList, fetchListData)
const TeacherListHoc = listHoc(TeacherList, fetchListData)


class App extends React.Component {

    // state = {
    //     studentList: [],
    //     teacherList: []
    // }

    // async componentDidMount() {
    //     const studentData = await fetchListData('student');
    //     const teacherData = await fetchListData('teacher');
        
    //     console.log(studentData)
    //     this.setState({
    //         studentList: studentData.data,
    //         teacherList: teacherData.data
    //     })
    //     // fetchListData('students').then((res)=>{
    //     //     console.log(res)
    //     // }).catch((err)=>{
    //     //     console.log(err)
    //     // })
    // }

    // removeStudent (id) {
    //     this.setState ({
    //         studentList: this.state.studentList.filter(item => item.id !==id )
    //     })
    // }
    // likeTeacher (id) {
    //     this.setState ({
    //         teacherList: this.state.teacherList.map(item => {
    //             if(item.id===id) {
    //                 item.like +=1;
    //             }

    //             return item;
    //         } )
    //     })
    // }
    render () {
        return (
            <div className="app">
                <StudentListHoc field="student" />
                <TeacherListHoc field="teacher" />
                {/* <StudentList 
                  data = { this.state.studentList }
                  removeStudent={ this.removeStudent.bind(this) }
                />
                <TeacherList
                  data = { this.state.teacherList }
                  likeTeacher={ this.likeTeacher.bind(this) }
                /> */}
            </div>
        )
    }
}

ReactDOM.render (
    <App />,
    document.getElementById('app')
)
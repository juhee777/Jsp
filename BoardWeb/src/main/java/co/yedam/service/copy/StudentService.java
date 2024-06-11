package co.yedam.service.copy;

import java.util.List;

import co.yedam.vo.Student;

public interface StudentService {
	List<Student> studentList();
	boolean addStudent(Student std);
	boolean modifyStudent(Student std);
}

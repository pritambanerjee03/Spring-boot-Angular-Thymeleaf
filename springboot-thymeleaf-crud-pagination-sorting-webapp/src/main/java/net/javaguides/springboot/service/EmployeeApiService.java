package net.javaguides.springboot.service;

import net.javaguides.springboot.model.Employee;
import org.springframework.data.domain.Page;

import java.util.List;

public interface EmployeeApiService {
	List<Employee> getAllEmployees();
	void saveEmployee(Employee employee);
	Employee getEmployeeById(long id);
	Employee updateEmployeeById(long id, Employee employee);
	void deleteEmployeeById(long id);

}

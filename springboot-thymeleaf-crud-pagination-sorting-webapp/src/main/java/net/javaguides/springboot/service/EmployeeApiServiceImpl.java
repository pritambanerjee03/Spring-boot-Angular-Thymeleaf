package net.javaguides.springboot.service;

import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeApiServiceImpl implements EmployeeApiService {

	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public List<Employee> getAllEmployees() {
		return employeeRepository.findAll();
	}

	@Override
	public void saveEmployee(Employee employee) {
		this.employeeRepository.save(employee);
	}

	@Override
	public Employee getEmployeeById(long id) {
		Optional<Employee> optional = employeeRepository.findById(id);
		Employee employee = null;
		if (optional.isPresent()) {
			employee = optional.get();
		} else {
			throw new RuntimeException(" Employee not found for id :: " + id);
		}
		return employee;
	}

	@Override
	public Employee updateEmployeeById(long id, Employee employee) {
		Optional<Employee> optional = employeeRepository.findById(id);
		Employee employeeUpdated = null;
		if (optional.isPresent()) {
			employeeUpdated = optional.get();
			employeeUpdated.setFirstName(employee.getFirstName());
			employeeUpdated.setLastName(employee.getLastName());
			employeeUpdated.setEmail(employee.getEmail());
			employeeRepository.save(employeeUpdated);
		} else {
			throw new RuntimeException(" Employee not found for id :: ");
		}
		return employee;
	}

	@Override
	public void deleteEmployeeById(long id) {
		this.employeeRepository.deleteById(id);
	}


}

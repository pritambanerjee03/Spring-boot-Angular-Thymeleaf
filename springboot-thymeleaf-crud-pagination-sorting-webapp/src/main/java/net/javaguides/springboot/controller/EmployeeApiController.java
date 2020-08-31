package net.javaguides.springboot.controller;

import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.service.EmployeeApiService;
import net.javaguides.springboot.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeApiController {

	@Autowired
	private EmployeeApiService employeeService;
	

	@GetMapping("/showEmployees")
	public List<Employee> showNewEmployeeForm() {
		return employeeService.getAllEmployees();
	}
	
	@PostMapping("/saveEmployee")
	public String saveEmployee(@RequestBody Employee employee) {
		employeeService.saveEmployee(employee);
		return employee.getFirstName()+" Inserted Successfully";
	}
	
	@GetMapping("/showEmployeeById/{id}")
	public Employee showFormForUpdate(@PathVariable long id) {
		
		// get employee from the service
		Employee employee = employeeService.getEmployeeById(id);

		return employee;
	}

    @PutMapping("/updateEmployee/{id}")
    public String showForUpdate(@PathVariable long id, @RequestBody Employee employee) {

        // get employee from the service
        Employee employeeUpdated = employeeService.updateEmployeeById(id, employee);

        return employeeUpdated.getFirstName()+" Updated Successfully";
    }
	
	@DeleteMapping("/deleteEmployee/{id}")
	public String deleteEmployee(@PathVariable long id) {

		employeeService.deleteEmployeeById(id);
		return id+" Deleted Successfully";
	}


}

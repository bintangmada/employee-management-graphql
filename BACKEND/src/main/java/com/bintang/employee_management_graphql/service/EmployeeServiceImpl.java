package com.bintang.employee_management_graphql.service;

import com.bintang.employee_management_graphql.dto.request.EmployeeRequest;
import com.bintang.employee_management_graphql.dto.response.EmployeeResponse;
import com.bintang.employee_management_graphql.entity.Employee;
import com.bintang.employee_management_graphql.repository.EmployeeRepository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional(readOnly = true)
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    @Transactional
    public EmployeeResponse createEmployee(EmployeeRequest request) {

        if (employeeRepository.existsByEmailAndDeletedFalse(request.getEmail())) {
            throw new IllegalArgumentException("Email already exists");
        }

        Employee employee = new Employee();
        employee.setName(request.getName());
        employee.setEmail(request.getEmail());
        employee.setPosition(request.getPosition());
        employee.setDeleted(false);

        Employee savedEmployee = employeeRepository.save(employee);

        return convertToResponse(savedEmployee);
    }

    @Override
    public List<EmployeeResponse> getAllEmployees() {
        return employeeRepository.findAllByDeletedFalse()
                .stream()
                .map(this::convertToResponse)
                .toList();
    }

    @Override
    public EmployeeResponse getEmployeeById(Long id) {
        Employee employee = findActiveEmployee(id);
        return convertToResponse(employee);
    }

    @Override
    @Transactional
    public EmployeeResponse updateEmployee(Long id, EmployeeRequest request) {

        Employee employee = findActiveEmployee(id);

        boolean emailChanged = !employee.getEmail().equals(request.getEmail());

        if(emailChanged && employeeRepository.existsByEmailAndDeletedFalse(request.getEmail())){
            throw new IllegalArgumentException("Email already exists");
        }

        employee.setName(request.getName());
        employee.setEmail(request.getEmail());
        employee.setPosition(request.getPosition());

        Employee updatedEmployee = employeeRepository.save(employee);

        return convertToResponse(updatedEmployee);
    }

    @Override
    public Boolean deleteEmployee(Long id) {
        Employee employee = findActiveEmployee(id);
        employee.setDeleted(true);
        employeeRepository.save(employee);
        return true;
    }

    private Employee findActiveEmployee(Long id) {
        return employeeRepository.findByIdAndDeletedFalse(id)
                .orElseThrow(() -> new RuntimeException("Employee not found with ID: " + id));
    }

    // ENTITY TO DTO
    private EmployeeResponse convertToResponse(Employee employee) {
        return new EmployeeResponse(
                employee.getId(),
                employee.getName(),
                employee.getEmail(),
                employee.getPosition()
        );
    }
}

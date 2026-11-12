package com.bintang.employee_management_graphql.graphql;

import com.bintang.employee_management_graphql.dto.request.EmployeeRequest;
import com.bintang.employee_management_graphql.dto.response.EmployeeResponse;
import com.bintang.employee_management_graphql.service.EmployeeService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class EmployeeGraphqlController {

    private final EmployeeService employeeService;

    public EmployeeGraphqlController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    // QUERY: GET ALL EMPLOYEE
    @QueryMapping
    public List<EmployeeResponse> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    // QUERY: GET EMPLOYEE BY ID
    @QueryMapping
    public EmployeeResponse getEmployeeById(@Argument Long id) {
        return employeeService.getEmployeeById(id);
    }

    // MUTATION: CREATE EMPLOYEE
    @MutationMapping
    public EmployeeResponse createEmployee(@Argument EmployeeRequest input) {
        return employeeService.createEmployee(input);
    }

    // MUTATION: UPDATE EMPLOYEE
    @MutationMapping
    public EmployeeResponse updateEmployee(@Argument Long id, @Argument EmployeeRequest input) {
        return employeeService.updateEmployee(id, input);
    }

    // MUTATION: SOFT DELETE EMPLOYEE
    @MutationMapping
    public Boolean deleteEmployee(@Argument Long id) {
        return employeeService.deleteEmployee(id);
    }

}

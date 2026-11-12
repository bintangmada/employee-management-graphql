package com.bintang.employee_management_graphql.service;

import com.bintang.employee_management_graphql.dto.request.EmployeeRequest;
import com.bintang.employee_management_graphql.dto.response.EmployeeResponse;

import java.util.List;

public interface EmployeeService {

    EmployeeResponse createEmployee(EmployeeRequest request);

    List<EmployeeResponse> getAllEmployees();

    EmployeeResponse getEmployeeById(Long id);

    EmployeeResponse updateEmployee(Long id, EmployeeRequest request);

    Boolean deleteEmployee(Long id);

}

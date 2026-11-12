package com.bintang.employee_management_graphql.repository;

import com.bintang.employee_management_graphql.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}

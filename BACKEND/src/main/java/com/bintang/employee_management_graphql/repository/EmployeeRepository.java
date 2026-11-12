package com.bintang.employee_management_graphql.repository;

import com.bintang.employee_management_graphql.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    List<Employee> findAllByDeletedFalse();
    Optional<Employee> findByIdAndDeletedFalse(Long id);
    boolean existsByEmailAndDeletedFalse(String email);


}

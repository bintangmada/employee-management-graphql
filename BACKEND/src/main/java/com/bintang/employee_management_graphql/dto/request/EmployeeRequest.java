package com.bintang.employee_management_graphql.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeRequest {

    private String name;
    private String email;
    private String position;

}

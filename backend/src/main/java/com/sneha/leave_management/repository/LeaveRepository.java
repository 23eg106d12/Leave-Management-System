package com.sneha.leave_management.repository;

import com.sneha.leave_management.entity.LeaveRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LeaveRepository extends JpaRepository<LeaveRequest, Long> {
}

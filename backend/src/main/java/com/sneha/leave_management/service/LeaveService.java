package com.sneha.leave_management.service;

import com.sneha.leave_management.entity.LeaveRequest;
import com.sneha.leave_management.repository.LeaveRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LeaveService {

    private final LeaveRepository leaveRepository;

    public LeaveService(LeaveRepository leaveRepository) {
        this.leaveRepository = leaveRepository;
    }

    public LeaveRequest save(LeaveRequest leave) {
        return leaveRepository.save(leave);
    }

    public List<LeaveRequest> getAll() {
        return leaveRepository.findAll();
    }

    public LeaveRequest updateStatus(Long id, String status) {
        LeaveRequest leave = leaveRepository.findById(id).orElseThrow();
        leave.setStatus(status);
        return leaveRepository.save(leave);
    }

    public void delete(Long id) {
        leaveRepository.deleteById(id);
    }
}

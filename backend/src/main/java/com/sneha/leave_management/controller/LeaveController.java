package com.sneha.leave_management.controller;

import com.sneha.leave_management.entity.LeaveRequest;
import com.sneha.leave_management.service.LeaveService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/leaves")
public class LeaveController {

    private final LeaveService leaveService;

    public LeaveController(LeaveService leaveService) {
        this.leaveService = leaveService;
    }

    @PostMapping
    public LeaveRequest createLeave(@RequestBody LeaveRequest leave) {
        return leaveService.save(leave);
    }

    @GetMapping
    public List<LeaveRequest> getAllLeaves() {
        return leaveService.getAll();
    }

    @PutMapping("/{id}")
    public LeaveRequest updateStatus(@PathVariable("id") Long id, @RequestParam("status") String status) {
        return leaveService.updateStatus(id, status);
    }

    @DeleteMapping("/{id}")
    public void deleteLeave(@PathVariable("id") Long id) {
        leaveService.delete(id);
    }
}

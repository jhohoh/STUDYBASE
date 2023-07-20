package com.project.matching.controller;

import com.project.matching.dto.UserDto;
import com.project.matching.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

@RestController
@Slf4j
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    private HttpSession httpSession;

    private UserDto getSessionUser() {
        UserDto currentUser = (UserDto) httpSession.getAttribute("userInfo");
        return currentUser;
    }

    @GetMapping("/login")
    public String loginPage() {
        return "login";
    }

    @PostMapping("/login")
    public String login(@ModelAttribute("user") UserDto userDto) {
        return "login";
    }

    @GetMapping("/join")
    public String joinPage() {
        return "join";
    }


}

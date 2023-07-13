package com.project.matching.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainControlelr {
    @GetMapping("/api/hello")
    public String Hello(){
        return "Hello, World";
    }
}

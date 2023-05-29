package com.example.ajaxtest.controller;

import com.example.ajaxtest.dto.AjaxDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
public class AjaxController {
    @GetMapping("/ex01")
    public String ex01() {
        System.out.println("AjaxController.ex01");
        //return index는 index.html을 가져오는 것이 아닌 index.html에 작성된 text 전체를 js 함수 값에 맞춰 리턴한다.
        return "index";
    }

    @PostMapping("/ex02")
    public @ResponseBody String ex02() {
        System.out.println("AjaxController.ex02");
        //@ResponseBody 의 값을 res 매개변수 값에 return 값 그대로를(메세지를) 넘겨준다.
        return "index";
    }

    @GetMapping("/ex03")
    public @ResponseBody String ex03(@RequestParam("param1") String param1, @RequestParam("param2") String param2) {
        System.out.println("param1 : " + param1 + "\nparam2 : " + param2);
        return "ex03 메서드 호출 리턴";
    }

    @PostMapping("/ex04")
    public @ResponseBody String ex04(@RequestParam("param1") String param1, @RequestParam("param2") String param2) {
        System.out.println("param1 : " + param1 + "\nparam2 : " + param2);
        return "ex04 메서드 호출 리턴";
    }

    @GetMapping("/ex05")
    public @ResponseBody AjaxDto ex05(@ModelAttribute AjaxDto ajaxDto) {
        System.out.println("ajaxDto = " + ajaxDto);
        return ajaxDto;
    }

    @PostMapping("/ex06")
    public @ResponseBody AjaxDto ex06(@ModelAttribute AjaxDto ajaxDto) {
        System.out.println("ajaxDto = " + ajaxDto);
        return ajaxDto;
    }

    @PostMapping("/ex07")
    public @ResponseBody AjaxDto ex07(@RequestBody AjaxDto ajaxDto) {
        System.out.println("ajaxDto = " + ajaxDto);
        return ajaxDto;
    }

    private List<AjaxDto> ajaxDtoList() {
        List<AjaxDto> ajaxDtos = new ArrayList<>();
        ajaxDtos.add(new AjaxDto("data1", "data11"));
        ajaxDtos.add(new AjaxDto("data2", "data22"));
        return ajaxDtos;
    }

    @PostMapping("/ex08")
    public @ResponseBody List<AjaxDto> ex08(@RequestBody AjaxDto ajaxDto) {
        System.out.println("ajaxDto = " + ajaxDto);
        List<AjaxDto> returnList = ajaxDtoList();
        returnList.add(ajaxDto);
        return returnList;
    }

    //ResponseEntity는 body 정보 뿐만 아니라 header 정보 (HttpStatus : 404 500 등) 들의 값을 리턴해준다
    @PostMapping("/ex09")
    public ResponseEntity ex09(@RequestBody AjaxDto ajaxDto) {
        System.out.println("ajaxDto = " + ajaxDto);
        //리턴문이 조금 다르다(넘길 데이터 값, HttpStatus 리턴값)
//        return new ResponseEntity<>(HttpStatus.OK);
        return new ResponseEntity<>(ajaxDto, HttpStatus.OK);
    }

    @PostMapping("/ex10")
    public ResponseEntity ex10(@RequestBody AjaxDto ajaxDto) {
        System.out.println("ajaxDto = " + ajaxDto);
        List<AjaxDto> returnList = ajaxDtoList();
        returnList.add(ajaxDto);
        return new ResponseEntity<>(returnList, HttpStatus.OK);
    }

}

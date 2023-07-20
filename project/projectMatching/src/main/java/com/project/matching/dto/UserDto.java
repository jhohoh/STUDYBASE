package com.project.matching.dto;

import com.project.matching.entity.UserEntity;
import lombok.*;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.Column;
import javax.persistence.Id;
import java.util.UUID;

@Slf4j
@Builder
@Getter
@Setter
@NoArgsConstructor(force = true)
@AllArgsConstructor
public class UserDto {
    private final String uuid;

    private final String email;

    private final String password;

    private final String name;

    private final Long gender;

    private final String phoneNumber;

    private final Long age;

    //회원가입을 할 때 필요한 생성자
    public UserDto(String email, String password, String name, Long gender, String phoneNumber, Long age) {
        this.uuid = UUID.randomUUID().toString();
        this.email = email;
        this.password = password;
        this.name = name;
        this.gender = gender;
        this.phoneNumber = phoneNumber;
        this.age = age;
    }

    public static UserDto toUserDto(UserEntity userEntity) {
        UserDto userDto = UserDto.builder()
                .uuid(userEntity.getUuid())
                .email(userEntity.getEmail())
                .password(userEntity.getPassword())
                .name(userEntity.getName())
                .gender(userEntity.getGender())
                .phoneNumber(userEntity.getPhoneNumber())
                .age(userEntity.getAge()).build();
        return userDto;
    }
}

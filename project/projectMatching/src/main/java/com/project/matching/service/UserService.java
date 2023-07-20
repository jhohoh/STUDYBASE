package com.project.matching.service;

import com.project.matching.dto.UserDto;
import com.project.matching.entity.UserEntity;
import com.project.matching.repository.UserRepository;
import lombok.*;
import lombok.extern.slf4j.Slf4j;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
@AllArgsConstructor
public class UserService {
    @Autowired
    private UserRepository userRepository;

    //회원가입 메서드
    public UserDto join(UserDto userDto) {
        UserEntity userEntity = UserEntity.toUserEntity(userDto);
        Optional<UserEntity> userResult = Optional.of(userRepository.save(userEntity));
        if (userResult.isPresent()) {
            return null;
        } else {
            userRepository.save(userEntity);
            return UserDto.toUserDto(userEntity);
        }
    }
}
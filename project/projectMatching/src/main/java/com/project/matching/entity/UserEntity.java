package com.project.matching.entity;

import com.project.matching.dto.UserDto;
import lombok.*;
import org.apache.catalina.User;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.UUID;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserEntity {
    @Id
    private String uuid;

    @Column
    private String email;

    @Column
    private String password;

    @Column
    private String name;

    @Column
    private Long gender;

    @Column
    private String phoneNumber;

    @Column
    private Long age;



    public static UserEntity toUserEntity(UserDto userDto) {
        UserEntity userEntity = new UserEntity();
        userEntity.setUuid(userDto.getUuid());
        userEntity.setEmail(userDto.getEmail());
        userEntity.setPassword(userDto.getPassword());
        userEntity.setName(userDto.getName());
        userEntity.setGender(userDto.getGender());
        userEntity.setAge(userDto.getAge());
        return userEntity;
    }


}

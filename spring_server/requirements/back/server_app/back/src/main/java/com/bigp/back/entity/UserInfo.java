package com.bigp.back.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserInfo {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    private int appId;
    private String email;
    private Short joinMethods;
    private String password;

    @OneToMany(cascade=CascadeType.ALL, mappedBy="baby")
    @JsonManagedReference
    private List<BabyInfo> babyInfoList;

    @OneToMany(cascade=CascadeType.ALL, mappedBy="chat")
    private List
}

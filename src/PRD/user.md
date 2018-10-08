---
name: User
menu: PRD
order: 4
route: /prd/user
---
# 用户部分
## 1. 用户数据
   
``` graphql
type User {
  id: Int!
  password: String! # min=3, max=30, one lower case, one digit number
  username: String! # min=3,max=20
  realname: String
  email: String
  phone: String
  avatar: String
  gender: bool # male = true; female = false;
  wechat: String 
  location: String # 现在所在城市，通过获取地理位置接口设置默认值
  verifyCode: String
  joinedYear: int
  enrollmentYear: int
  createdTime: String # 2018-05-06 18:49:48.032 +0800 CST
  position: String # 现在的职位（title）
  isGraduated: Boolean 
  isActivated: Boolean # Account was activated via verify code
  isValidated: Boolean # Account was validated by admin
  isBasicCompleted: Boolean
  isAdmin: Boolean # Whether user is admin
  abilities: [String] # Python, Golang, Resetful, Communication, etc
  projectIDs: [Int]
  mentorIDs: [Int]
  menteeIDs: [Int]
  groupIDs: [int]
  companyIDs: [int]
}
```

## 2. 信息呈现

<img style={{maxWidth:'100%'}} src="https://storage.fredliang.cn/web/2018-10-08-userdetails.png"/>

### 2.1 左侧个人信息详情

1. 公司，组别需要做相应跳转

### 2.2 右侧为项目列表

1. 描述文字长度限制
2. 图片以列表形式呈现
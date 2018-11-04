---
name: Project
menu: PRD
route: /prd/project
order: 96
---

# 项目部分

``` graphql
type Project {
  id: Int!
  title: String!
  description: String
  startedTime: String
  endedTime: String
  adminID: Int!
  github: String
  logo: String # image URL
  images: [String] # image URL
  files: [String] # files URL
  memberIDs: [Int]
  roles: [String]
  createdTime: String!
}
```
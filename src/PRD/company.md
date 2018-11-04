---
name: Company
menu: PRD
route: /prd/company
order: 94
---

# 企业信息部分

``` graphql
type Company {
  id: Int!
  name: String!
  description: String
  logo: String # image URL
  images: [String] # image URL
  adminIDs: [Int]
  memberIDs: [Int]
}
```
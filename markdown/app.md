# 后端 API 文档

### 基础信息
- 服务地址：`http://0.0.0.0:81`
- 数据格式：请求/响应均为 JSON
- 跨域支持：所有接口默认开启 `Access-Control-Allow-Origin: *`
- 状态码规则：
  - `Code = 0`：请求成功
  - `Code < 0`：业务异常（具体含义见各接口）
  - HTTP 状态码：200（成功）、400（参数错误）、401（认证失败）、500（服务器错误）

### 通用错误码
| 错误码 | 含义 | 说明 |
|----|----|----|
| `-INVALID_TOKEN` | Token 无效/缺失 | 未传 Token 或 Token 不存在 |
| `-TOKEN_EXPIRED` | Token 过期 | Token 超过 30 天有效期 |
| `-NONE_RESOURCE` | 资源不存在 | 请求路径/数据不存在 |
| `-INVALID_DAFMT` | 数据格式错误 | 非 JSON 格式请求体 |
| `-REQUIRED_HEAD` | 必传参数缺失 | 用户名/密码等参数未传 |
| `-INVALID_INPUT` | 输入值错误 | 用户名/密码不匹配 |
| `-DB_NONE_ERROR` | 数据库操作失败 | 增删改查异常 |
| `-INVALID_PBTOK` | 服务鉴权失败 | 安全哈希值不匹配 |

## 接口详情
### 1. 静态资源路由（前端页面/资源加载）
| 接口项 | 说明 |
|----|----|
| 接口路径 | `/`、`/<path:path>`、`/assets/<path:filename>`、`/favicon.ico` |
| 请求方法 | GET |
| 功能描述 | 提供 Vue 前端打包后的静态资源（HTML/JS/CSS/图片/图标），修复 Windows 下 JS MIME 类型错误 |
| 成功响应 | 资源二进制内容（如 HTML/JS 文件）|
| 失败响应 | ```json {"Code": -3, "Error": "NONE_RESOURCE_1"}``` `404`|
| 备注 | 替代 Flask 原生 `send_from_directory`，避免响应头截断问题 |

### 2. 用户登录接口
| 接口项 | 说明 |
|----|----|
| 接口路径 | `/api/login` |
| 请求方法 | POST |
| 功能描述 | 用户登录认证，生成并返回绑定用户名的 Token |
| 请求头 | `Content-Type: application/json` |
| 请求体 | ```json {"username": "用户账号", "password": "用户密码"} ``` |
| 成功响应 | ```json {   "Code": 0,   "Message": "SERVE_SUCCESS",   "Token": "uuid格式的令牌" } ``` `200`|
| 失败响应 | 参数缺失：`{"Code": -5, "Error": "REQUIRED_HEAD_1"}` `400` 账号密码错误：`{"Code": -6, "Error": "INVALID_INPUT_1"}` `401` 数据库异常：`{"Code": -7, "Error": "DB_NONE_ERROR_1"}` `500` |

### 3. 获取用户个人信息接口
| 接口项 | 说明 |
|----|----|
| 接口路径 | `/api/fetch_profile` |
| 请求方法 | GET |
| 功能描述 | 获取用户基础信息 |
| 请求头 | `Authorization: Bearer <Token>`|
| 成功响应 | ```json {"Code": 0, "Message": "SERVE_SUCCESS", "Data": {"username": "用户名", "email": "用户邮箱", "bio": "个人简介", "urls": ["链接1", "链接2"]}} ``` `200` |
| 失败响应 | Token 无效/过期：```json {"Code": -1/-2/-3, "Error": "INVALID_TOKEN_*"}``` `401` 数据不存在：```json {"Code": -7, "Error": "DB_NONE_ERROR_1"}``` `500` |

### 4. 获取用户账户信息接口
| 接口项 | 说明 |
|----|----|
| 接口路径 | `/api/fetch_account` |
| 请求方法 | GET |
| 功能描述 | 获取用户账户配置信息 |
| 请求头 | `Authorization: Bearer <Token>` |
| 成功响应 | ```json {"Code": 0, "Message": "SERVE_SUCCESS", "Data": {"name": "用户姓名", "date": "日期", "lang": "语言标识"}} ``` `200` |
| 失败响应       | Token 无效/过期： `401` 数据库异常：`500` |

### 5. 获取核心业务数据接口
| 接口项 | 说明  |
|----|----|
| 接口路径 | `/api/fetch_data` |
| 请求方法 | POST |
| 功能描述 | 获取基本的展示数据 |
| 请求头 | `Authorization: Bearer <Token>` |
| 成功响应 | ```json {"Code": 0, "Message": "SERVE_SUCCESS", "Params": {"Acc": 98.5, "Num_type": 2, "Cnt": 100, "Cpu": 25.0, "Mem": 40.0, "Time": "2026-02-08 12:00:00"}, "Data": [{"plate": "车牌", "text": "文本内容", "time": "2026-02-08 11:59:00"}]} ``` `200` |
| 失败响应 | Token 无效/过期： `401` 数据库异常：`500` |

### 6. 获取未审核记录数接口
| 接口项 | 说明 |
|----|----|
| 接口路径 | `/api/fetch_count` |
| 请求方法 | GET |
| 功能描述 | 获取 `behavior` 表中 `review = -1` 的未审核记录数量 |
| 成功响应 | ```json {"Code": 0, "Message": "SERVE_SUCCESS", "Params": {"Cnt": 50}} ``` `200` |
| 失败响应 | 数据库异常：```json {"Code": -7, "Error": "DB_NONE_ERROR_1"}``` `500` |

### 7. MQTT 消息发布接口
| 接口项 | 说明 |
|----|----|
| 接口路径 | `/api/publish` |
| 请求方法 | POST |
| 功能描述 | 验证服务端安全哈希，发布消息到 MQTT 主题 |
| 请求体 | ```json {"security": "服务端安全哈希", "topic": "MQTT主题", "text": "消息内容" } ``` |
| 成功响应 | ```json {"Code": 0, "Message": "SERVE_SUCCESS" } ``` `200` |
| 失败响应 | 参数缺失：```json {"Code": -6, "Error": "INVALID_INPUT_2"}``` `401` 哈希验证失败：```json {"Code": -8, "Error": "INVALID_PBTOK_1"}``` `401` 数据库/MQTT 异常： `500` |
| 备注 | 消息格式固定为 `{"Event": 1, "Text": "消息内容"}`，而且这是专门为后端开放的接口 |

### 8. 业务数据上传接口
| 接口项 | 说明 |
|----|----|
| 接口路径 | `/api/upload` |
| 请求方法 | POST |
| 功能描述 | 验证服务端安全哈希，上传车牌/文本/审核结果到 `behavior` 表 |
| 请求体 | ```json {"security": "服务端安全哈希", "plate": "车牌号码", "text": "识别文本", "real": -1/0/1} ``` |
| 成功响应 | ```json {"Code": 0, "Message": "SERVE_SUCCESS"} ``` `200` |
| 失败响应 | 参数缺失： `401` 哈希验证失败： `401` 数据库异常： `500` |
| 备注 | 这是专门为后端开放的接口 |

### 9. 安全状态更新接口
| 接口项 | 说明 |
|----|----|
| 接口路径 | `/api/security` |
| 请求方法 | POST |
| 功能描述 | 验证服务端安全哈希，更新系统安全状态码并返回状态变更标识 |
| 请求体 | ```json {"security": "服务端安全哈希", "code": 1 // 安全状态码 } ``` |
| 成功响应 | ```json {   "Code": 0, "Message": "SERVE_SUCCESS", "Change": 0/1} ``` `200` |
| 失败响应 | 参数缺失：```json {"Code": -6, "Error": "INVALID_INPUT_2"}``` `400` 哈希验证失败： `401` 状态码不存在：```json {"Code": -7, "Error": "DB_NONE_ERROR_1"}``` `401` |
| 备注 | 这是专门为后端开放的接口 |

### 10. 视频获取接口
| 接口项 | 说明 |
|----|----|
| 接口路径 | `/runs/live/ext/{id}.mp4` |
| 请求方法 | GET |
| 功能描述 | 直接获取视频，所有人都可以访问 |
| 成功响应 | ```视频数据``` (HTTP 200/206) |
| 失败响应 | ```json {"Code":-3,"Error":"NONE_RESOURCE_1"}``` `401` |

### 11. 识别行为获取接口
| 接口项 | 说明 |
|----|----|
| 接口路径 | `/api/fetch_video` |
| 请求方法 | GET |
| 功能描述 | 获取所有识别出有问题的数据 |
| 成功响应 | ```json {'Code': 0, 'Message': 'SERVE_SUCCESS', 'Data': {'title': ['id', 'plate', 'text', 'time'], 'data': [[id1, plate1, text1, time1], [id2, plate2, text2, time2]]}} ``` `200` |
| 失败响应 | 参数缺失：```json {"Code": -1, "Error": "INVALID_TOKEN_1"}``` `401` 状态码不存在：```json {"Code": -7, "Error": "DB_NONE_ERROR_1"}``` `401` |
| 备注 | 数据可能一条都没有，Data.data 就是空的 |

### 12. 人工复核上传接口
| 接口项 | 说明 |
|----|----|
| 接口路径 | `/api/upload_review` |
| 请求方法 | POST |
| 功能描述 | 验证服务端安全哈希，更新状态表 |
| 请求体 | ```json {"id": id, "text": "填写的内容", "status": "accept/reject"} ``` |
| 成功响应 | ```json {"Code": 0, "Message": "SERVE_SUCCESS"} ``` `200` |
| 失败响应 | 参数缺失: `401` 哈希验证失败： `401` 数据库异常： `500` |

## 补充说明
1. **Token 机制**：Token 有效期为 30 天，过期后自动删除，需重新登录获取；
2. **服务器部署**：生产环境使用 Waitress 服务器，禁用所有 WARNING 级日志。
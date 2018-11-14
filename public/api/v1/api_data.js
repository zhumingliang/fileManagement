define({ "api": [  {    "type": "GET",    "url": "/api/v1/contract/export",    "title": "12-导出合同报表",    "group": "CMS",    "version": "1.0.1",    "description": "<p>@apiExample {get}  请求样例: http://mengant.cn/api/v1/contract/list/pass?time_begin=2018-11-01&amp;time_end=2018-11-20&amp;key=</p>",    "parameter": {      "fields": {        "请求参数说明": [          {            "group": "请求参数说明",            "type": "String",            "optional": false,            "field": "time_begin",            "description": "<p>时间查询开始时间</p>"          },          {            "group": "请求参数说明",            "type": "String",            "optional": false,            "field": "time_end",            "description": "<p>时间查询结束时间</p>"          },          {            "group": "请求参数说明",            "type": "String",            "optional": false,            "field": "key",            "description": "<p>关键字查询</p>"          }        ]      }    },    "filename": "application/api/controller/v1/Contract.php",    "groupTitle": "CMS",    "name": "GetApiV1ContractExport"  },  {    "type": "GET",    "url": "/api/v1/contract/list/delete",    "title": "10-获取删除合同列表",    "group": "CMS",    "version": "1.0.1",    "description": "<p>@apiExample {get}  请求样例: http://mengant.cn/api/v1/contract/list/delete?page=1&amp;size=10&amp;key=</p>",    "parameter": {      "fields": {        "请求参数说明": [          {            "group": "请求参数说明",            "type": "int",            "optional": false,            "field": "page",            "description": "<p>1</p>"          },          {            "group": "请求参数说明",            "type": "int",            "optional": false,            "field": "size",            "description": "<p>10</p>"          },          {            "group": "请求参数说明",            "type": "String",            "optional": false,            "field": "key",            "description": "<p>关键字查询</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "返回样例:",          "content": "{\"total\":1,\"per_page\":\"10\",\"current_page\":1,\"last_page\":1,\"data\":[{\"id\":1,\"name\":\"合同名称\",\"pact_number\":\"a12123121\",\"company\":\"公司名称\",\"money\":20000,\"station_code\":\"123\",\"url\":\"http:\\/\\/a\",\"cover\":\"http:\\/\\/a\"}]}",          "type": "json"        }      ],      "fields": {        "返回参数说明": [          {            "group": "返回参数说明",            "type": "int",            "optional": false,            "field": "current_page",            "description": "<p>当前页码</p>"          },          {            "group": "返回参数说明",            "type": "int",            "optional": false,            "field": "total",            "description": "<p>数据总数</p>"          },          {            "group": "返回参数说明",            "type": "int",            "optional": false,            "field": "per_page",            "description": "<p>每页多少条数据</p>"          },          {            "group": "返回参数说明",            "type": "int",            "optional": false,            "field": "last_page",            "description": "<p>最后页码</p>"          },          {            "group": "返回参数说明",            "type": "int",            "optional": false,            "field": "id",            "description": "<p>合同id</p>"          },          {            "group": "返回参数说明",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>合同名称</p>"          },          {            "group": "返回参数说明",            "type": "String",            "optional": false,            "field": "pact_number",            "description": "<p>合同编号</p>"          },          {            "group": "返回参数说明",            "type": "String",            "optional": false,            "field": "company",            "description": "<p>合作单位</p>"          },          {            "group": "返回参数说明",            "type": "String",            "optional": false,            "field": "money",            "description": "<p>合同金额</p>"          },          {            "group": "返回参数说明",            "type": "String",            "optional": false,            "field": "cover",            "description": "<p>合同封面</p>"          }        ]      }    },    "filename": "application/api/controller/v1/Contract.php",    "groupTitle": "CMS",    "name": "GetApiV1ContractListDelete"  },  {    "type": "GET",    "url": "/api/v1/contract/list/pass",    "title": "11-获取审核通过合同列表",    "group": "CMS",    "version": "1.0.1",    "description": "<p>@apiExample {get}  请求样例: http://mengant.cn/api/v1/contract/list/pass?page=1&amp;size=10&amp;time_begin=2018-11-01&amp;time_end=2018-11-20&amp;key=</p>",    "parameter": {      "fields": {        "请求参数说明": [          {            "group": "请求参数说明",            "type": "int",            "optional": false,            "field": "page",            "description": "<p>1</p>"          },          {            "group": "请求参数说明",            "type": "int",            "optional": false,            "field": "size",            "description": "<p>10</p>"          },          {            "group": "请求参数说明",            "type": "String",            "optional": false,            "field": "time_begin",            "description": "<p>时间查询开始时间</p>"          },          {            "group": "请求参数说明",            "type": "String",            "optional": false,            "field": "time_end",            "description": "<p>时间查询结束时间</p>"          },          {            "group": "请求参数说明",            "type": "String",            "optional": false,            "field": "key",            "description": "<p>关键字查询</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "返回样例:",          "content": "{\"total\":1,\"per_page\":\"10\",\"current_page\":1,\"last_page\":1,\"data\":[{\"id\":1,\"name\":\"合同名称\",\"pact_number\":\"a12123121\",\"company\":\"公司名称\",\"money\":20000,\"station_code\":\"123\",\"url\":\"http:\\/\\/a\",\"cover\":\"http:\\/\\/a\"}]}",          "type": "json"        }      ],      "fields": {        "返回参数说明": [          {            "group": "返回参数说明",            "type": "int",            "optional": false,            "field": "current_page",            "description": "<p>当前页码</p>"          },          {            "group": "返回参数说明",            "type": "int",            "optional": false,            "field": "total",            "description": "<p>数据总数</p>"          },          {            "group": "返回参数说明",            "type": "int",            "optional": false,            "field": "per_page",            "description": "<p>每页多少条数据</p>"          },          {            "group": "返回参数说明",            "type": "int",            "optional": false,            "field": "last_page",            "description": "<p>最后页码</p>"          },          {            "group": "返回参数说明",            "type": "int",            "optional": false,            "field": "id",            "description": "<p>合同id</p>"          },          {            "group": "返回参数说明",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>合同名称</p>"          },          {            "group": "返回参数说明",            "type": "String",            "optional": false,            "field": "pact_number",            "description": "<p>合同编号</p>"          },          {            "group": "返回参数说明",            "type": "String",            "optional": false,            "field": "company",            "description": "<p>合作单位</p>"          },          {            "group": "返回参数说明",            "type": "String",            "optional": false,            "field": "money",            "description": "<p>合同金额</p>"          },          {            "group": "返回参数说明",            "type": "String",            "optional": false,            "field": "cover",            "description": "<p>合同封面</p>"          },          {            "group": "返回参数说明",            "type": "String",            "optional": false,            "field": "url",            "description": "<p>合同pdf地址(管理员权限才会返回/前端需控制下载按钮显示与隐藏：登录时返回了参数grade：1 | 管理员)</p>"          }        ]      }    },    "filename": "application/api/controller/v1/Contract.php",    "groupTitle": "CMS",    "name": "GetApiV1ContractListPass"  },  {    "type": "GET",    "url": "/api/v1/contract/list/ready",    "title": "9-获取待处理合同列表",    "group": "CMS",    "version": "1.0.1",    "description": "<p>@apiExample {get}  请求样例: http://mengant.cn/api/v1/contract/list/ready?page=1&amp;size=10&amp;key=</p>",    "parameter": {      "fields": {        "请求参数说明": [          {            "group": "请求参数说明",            "type": "int",            "optional": false,            "field": "page",            "description": "<p>1</p>"          },          {            "group": "请求参数说明",            "type": "int",            "optional": false,            "field": "size",            "description": "<p>10</p>"          },          {            "group": "请求参数说明",            "type": "String",            "optional": false,            "field": "key",            "description": "<p>关键字查询</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "返回样例:",          "content": "{\"total\":1,\"per_page\":\"10\",\"current_page\":1,\"last_page\":1,\"data\":[{\"id\":1,\"name\":\"合同名称\",\"pact_number\":\"a12123121\",\"company\":\"公司名称\",\"money\":20000,\"station_code\":\"123\",\"url\":\"http:\\/\\/a\",\"cover\":\"http:\\/\\/a\"}]}",          "type": "json"        }      ],      "fields": {        "返回参数说明": [          {            "group": "返回参数说明",            "type": "int",            "optional": false,            "field": "current_page",            "description": "<p>当前页码</p>"          },          {            "group": "返回参数说明",            "type": "int",            "optional": false,            "field": "total",            "description": "<p>数据总数</p>"          },          {            "group": "返回参数说明",            "type": "int",            "optional": false,            "field": "per_page",            "description": "<p>每页多少条数据</p>"          },          {            "group": "返回参数说明",            "type": "int",            "optional": false,            "field": "last_page",            "description": "<p>最后页码</p>"          },          {            "group": "返回参数说明",            "type": "int",            "optional": false,            "field": "id",            "description": "<p>合同id</p>"          },          {            "group": "返回参数说明",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>合同名称</p>"          },          {            "group": "返回参数说明",            "type": "String",            "optional": false,            "field": "pact_number",            "description": "<p>合同编号</p>"          },          {            "group": "返回参数说明",            "type": "String",            "optional": false,            "field": "company",            "description": "<p>合作单位</p>"          },          {            "group": "返回参数说明",            "type": "String",            "optional": false,            "field": "money",            "description": "<p>合同金额</p>"          },          {            "group": "返回参数说明",            "type": "String",            "optional": false,            "field": "cover",            "description": "<p>合同封面</p>"          }        ]      }    },    "filename": "application/api/controller/v1/Contract.php",    "groupTitle": "CMS",    "name": "GetApiV1ContractListReady"  },  {    "type": "GET",    "url": "/api/v1/token/admin",    "title": "1-CMS获取登陆token",    "group": "CMS",    "version": "1.0.1",    "description": "<p>后台用户登录</p>",    "examples": [      {        "title": "请求样例:",        "content": "{\n   \"phone\": \"18956225230\",\n   \"pwd\": \"a123456\"\n }",        "type": "post"      }    ],    "parameter": {      "fields": {        "请求参数说明": [          {            "group": "请求参数说明",            "type": "String",            "optional": false,            "field": "phone",            "description": "<p>用户手机号</p>"          },          {            "group": "请求参数说明",            "type": "String",            "optional": false,            "field": "pwd",            "description": "<p>用户密码</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "返回样例:",          "content": "{\"u_id\":1,\"username\":\"管理员\",\"token\":\"bde274895aa23cff9462d5db49690452\"}",          "type": "json"        }      ],      "fields": {        "返回参数说明": [          {            "group": "返回参数说明",            "type": "int",            "optional": false,            "field": "u_id",            "description": "<p>用户id</p>"          },          {            "group": "返回参数说明",            "type": "int",            "optional": false,            "field": "username",            "description": "<p>管理员名称</p>"          },          {            "group": "返回参数说明",            "type": "String",            "optional": false,            "field": "token",            "description": "<p>口令令牌，每次请求接口需要传入，有效期 2 hours</p>"          }        ]      }    },    "filename": "application/api/controller/v1/Token.php",    "groupTitle": "CMS",    "name": "GetApiV1TokenAdmin"  },  {    "type": "GET",    "url": "/api/v1/token/loginOut",    "title": "2-CMS退出登陆",    "group": "CMS",    "version": "1.0.1",    "description": "<p>CMS退出当前账号登陆。</p>",    "examples": [      {        "title": "请求样例:",        "content": "http://test.mengant.cn/api/v1/token/loginOut",        "type": "get"      }    ],    "success": {      "examples": [        {          "title": "返回样例:",          "content": "{\"msg\":\"ok\",\"errorCode\":0}",          "type": "json"        }      ],      "fields": {        "返回参数说明": [          {            "group": "返回参数说明",            "type": "int",            "optional": false,            "field": "error_code",            "description": "<p>错误码： 0表示操作成功无错误</p>"          },          {            "group": "返回参数说明",            "type": "String",            "optional": false,            "field": "msg",            "description": "<p>信息描述</p>"          }        ]      }    },    "filename": "application/api/controller/v1/Token.php",    "groupTitle": "CMS",    "name": "GetApiV1TokenLoginout"  },  {    "type": "POST",    "url": "/api/v1/admin/pwd/update",    "title": "4-CMS-用户修改密码",    "group": "CMS",    "version": "1.0.1",    "description": "<p>后台用户修改账号密码</p>",    "examples": [      {        "title": "请求样例:",        "content": "{\n   \"new_pwd\": \"aaaaaa\",\n   \"old_pwd\": \"a123456\"\n }",        "type": "post"      }    ],    "parameter": {      "fields": {        "请求参数说明": [          {            "group": "请求参数说明",            "type": "String",            "optional": false,            "field": "new_pwd",            "description": "<p>新密码</p>"          },          {            "group": "请求参数说明",            "type": "String",            "optional": false,            "field": "old_pwd",            "description": "<p>旧密码</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "返回样例:",          "content": "{\"msg\":\"ok\",\"errorCode\":0}",          "type": "json"        }      ],      "fields": {        "返回参数说明": [          {            "group": "返回参数说明",            "type": "int",            "optional": false,            "field": "error_code",            "description": "<p>错误代码 0 表示没有错误</p>"          },          {            "group": "返回参数说明",            "type": "String",            "optional": false,            "field": "msg",            "description": "<p>操作结果描述</p>"          }        ]      }    },    "filename": "application/api/controller/v1/Admin.php",    "groupTitle": "CMS",    "name": "PostApiV1AdminPwdUpdate"  },  {    "type": "POST",    "url": "/api/v1/admin/save",    "title": "12-管理员新增用户-新增用户",    "group": "CMS",    "version": "1.0.1",    "description": "<p>@apiExample {post}  请求样例: { &quot;phone&quot;: &quot;1311111111&quot;, &quot;pwd&quot;: &quot;a111111&quot;, &quot;email&quot;: &quot;a111111&quot;, }</p>",    "parameter": {      "fields": {        "请求参数说明": [          {            "group": "请求参数说明",            "type": "String",            "optional": false,            "field": "phone",            "description": "<p>用户名</p>"          },          {            "group": "请求参数说明",            "type": "String",            "optional": false,            "field": "pwd",            "description": "<p>密码</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "返回样例:",          "content": "{\"msg\": \"ok\",\"error_code\": 0}",          "type": "json"        }      ],      "fields": {        "返回参数说明": [          {            "group": "返回参数说明",            "type": "int",            "optional": false,            "field": "error_code",            "description": "<p>错误代码 0 表示没有错误</p>"          },          {            "group": "返回参数说明",            "type": "String",            "optional": false,            "field": "msg",            "description": "<p>操作结果描述</p>"          }        ]      }    },    "filename": "application/api/controller/v1/Admin.php",    "groupTitle": "CMS",    "name": "PostApiV1AdminSave"  },  {    "type": "POST",    "url": "/api/v1/admin/username/update",    "title": "3-CMS-用户修改用户名",    "group": "CMS",    "version": "1.0.1",    "description": "<p>后台用户修改用户名</p>",    "examples": [      {        "title": "请求样例:",        "content": "{\n   \"pwd\": \"a123456\",\n   \"username\": \"修改名字\"\n }",        "type": "post"      }    ],    "parameter": {      "fields": {        "请求参数说明": [          {            "group": "请求参数说明",            "type": "String",            "optional": false,            "field": "pwd",            "description": "<p>密码</p>"          },          {            "group": "请求参数说明",            "type": "String",            "optional": false,            "field": "username",            "description": "<p>用户名</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "返回样例:",          "content": "{\"msg\":\"ok\",\"errorCode\":0}",          "type": "json"        }      ],      "fields": {        "返回参数说明": [          {            "group": "返回参数说明",            "type": "int",            "optional": false,            "field": "error_code",            "description": "<p>错误代码 0 表示没有错误</p>"          },          {            "group": "返回参数说明",            "type": "String",            "optional": false,            "field": "msg",            "description": "<p>操作结果描述</p>"          }        ]      }    },    "filename": "application/api/controller/v1/Admin.php",    "groupTitle": "CMS",    "name": "PostApiV1AdminUsernameUpdate"  },  {    "type": "POST",    "url": "/api/v1/contract/delete",    "title": "8-管理员-删除合同",    "group": "CMS",    "version": "1.0.1",    "description": "<p>管理员删除合同</p>",    "examples": [      {        "title": "请求样例:",        "content": "{\n\"id\": 1\n}",        "type": "POST"      }    ],    "parameter": {      "fields": {        "请求参数说明": [          {            "group": "请求参数说明",            "type": "int",            "optional": false,            "field": "id",            "description": "<p>合同id</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "返回样例:",          "content": "{\"msg\": \"ok\",\"error_code\": 0}",          "type": "json"        }      ],      "fields": {        "返回参数说明": [          {            "group": "返回参数说明",            "type": "int",            "optional": false,            "field": "error_code",            "description": "<p>错误代码 0 表示没有错误</p>"          },          {            "group": "返回参数说明",            "type": "String",            "optional": false,            "field": "msg",            "description": "<p>操作结果描述</p>"          }        ]      }    },    "filename": "application/api/controller/v1/Contract.php",    "groupTitle": "CMS",    "name": "PostApiV1ContractDelete"  },  {    "type": "POST",    "url": "/api/v1/contract/examine",    "title": "7-管理员-对合同进行审核",    "group": "CMS",    "version": "1.0.1",    "description": "<p>管理员-对合同进行审核</p>",    "examples": [      {        "title": "请求样例:",        "content": "{\n\"id\": 1,\n\"name\": \"合同名称\",\n\"pact_number\": \"合同编号\",\n\"company\": \"公司名称\",\n\"money\":2000000,\n\"station_code\": \"a111111\"\n}",        "type": "post"      }    ],    "parameter": {      "fields": {        "请求参数说明": [          {            "group": "请求参数说明",            "type": "int",            "optional": false,            "field": "id",            "description": "<p>合同id</p>"          },          {            "group": "请求参数说明",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>合同名称</p>"          },          {            "group": "请求参数说明",            "type": "String",            "optional": false,            "field": "pact_number",            "description": "<p>合同编号</p>"          },          {            "group": "请求参数说明",            "type": "String",            "optional": false,            "field": "company",            "description": "<p>合作单位</p>"          },          {            "group": "请求参数说明",            "type": "int",            "optional": false,            "field": "money",            "description": "<p>合同金额（单位：元）</p>"          },          {            "group": "请求参数说明",            "type": "String",            "optional": false,            "field": "station_code",            "description": "<p>基站编码</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "返回样例:",          "content": "{\"msg\": \"ok\",\"error_code\": 0}",          "type": "json"        }      ],      "fields": {        "返回参数说明": [          {            "group": "返回参数说明",            "type": "int",            "optional": false,            "field": "error_code",            "description": "<p>错误代码 0 表示没有错误</p>"          },          {            "group": "返回参数说明",            "type": "String",            "optional": false,            "field": "msg",            "description": "<p>操作结果描述</p>"          }        ]      }    },    "filename": "application/api/controller/v1/Contract.php",    "groupTitle": "CMS",    "name": "PostApiV1ContractExamine"  },  {    "type": "POST",    "url": "/api/v1/contract/update",    "title": "6-更新合同信息",    "group": "CMS",    "version": "1.0.1",    "description": "<p>合同识别系统 回调处理合同</p>",    "examples": [      {        "title": "请求样例:",        "content": "{\n\"id\": 1,\n\"name\": \"合同名称\",\n\"pact_number\": \"合同编号\",\n\"company\": \"公司名称\",\n\"money\":2000000,\n\"station_code\": \"a111111\"\n}",        "type": "post"      }    ],    "parameter": {      "fields": {        "请求参数说明": [          {            "group": "请求参数说明",            "type": "int",            "optional": false,            "field": "id",            "description": "<p>合同id</p>"          },          {            "group": "请求参数说明",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>合同名称</p>"          },          {            "group": "请求参数说明",            "type": "String",            "optional": false,            "field": "pact_number",            "description": "<p>合同编号</p>"          },          {            "group": "请求参数说明",            "type": "String",            "optional": false,            "field": "company",            "description": "<p>合作单位</p>"          },          {            "group": "请求参数说明",            "type": "int",            "optional": false,            "field": "money",            "description": "<p>合同金额（单位：元）</p>"          },          {            "group": "请求参数说明",            "type": "String",            "optional": false,            "field": "station_code",            "description": "<p>基站编码</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "返回样例:",          "content": "{\"msg\": \"ok\",\"error_code\": 0}",          "type": "json"        }      ],      "fields": {        "返回参数说明": [          {            "group": "返回参数说明",            "type": "int",            "optional": false,            "field": "error_code",            "description": "<p>错误代码 0 表示没有错误</p>"          },          {            "group": "返回参数说明",            "type": "String",            "optional": false,            "field": "msg",            "description": "<p>操作结果描述</p>"          }        ]      }    },    "filename": "application/api/controller/v1/Contract.php",    "groupTitle": "CMS",    "name": "PostApiV1ContractUpdate"  },  {    "type": "POST",    "url": "/api/v1/contract/upload",    "title": "5-上传合同pdf文件",    "group": "CMS",    "version": "1.0.1",    "description": "<p>@apiParam (请求参数说明) {String} file  上传时自定义名称</p>",    "success": {      "examples": [        {          "title": "返回样例:",          "content": "{\"msg\": \"ok\",\"error_code\": 0}",          "type": "json"        }      ],      "fields": {        "返回参数说明": [          {            "group": "返回参数说明",            "type": "int",            "optional": false,            "field": "error_code",            "description": "<p>错误代码 0 表示没有错误</p>"          },          {            "group": "返回参数说明",            "type": "String",            "optional": false,            "field": "msg",            "description": "<p>操作结果描述</p>"          }        ]      }    },    "filename": "application/api/controller/v1/Contract.php",    "groupTitle": "CMS",    "name": "PostApiV1ContractUpload"  }] });

define({ "api": [
  {
    "type": "get",
    "url": "/admin/flag_on_post",
    "title": "Get all Flags",
    "name": "Get_all_Flags",
    "group": "Admin_Post_Flag",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>admin's unique x-access-token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "flags",
            "description": "<p>detail of flag on post</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/flag_on_post.js",
    "groupTitle": "Admin_Post_Flag"
  },
  {
    "type": "get",
    "url": "/admin/:admin_id",
    "title": "Admin Get by ID",
    "name": "Admin_Admin_Get_by_ID",
    "group": "Admin_Profile",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "user",
            "description": "<p>Admin user object.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/profile.js",
    "groupTitle": "Admin_Profile"
  },
  {
    "type": "put",
    "url": "/admin/",
    "title": "Admin Profile",
    "name": "Admin_Profile",
    "group": "Admin_Profile",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "user",
            "description": "<p>Admin user object.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/profile.js",
    "groupTitle": "Admin_Profile"
  },
  {
    "type": "post",
    "url": "/admin/user/checkemail",
    "title": "Check Unique",
    "name": "Check_Unique",
    "group": "Admin_Side_User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email to be check uniqueness</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "count",
            "description": "<p>no of existing email</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/users.js",
    "groupTitle": "Admin_Side_User"
  },
  {
    "type": "delete",
    "url": "/admin/user/:authUserId",
    "title": "Delete",
    "name": "Delete",
    "group": "Admin_Side_User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/users.js",
    "groupTitle": "Admin_Side_User"
  },
  {
    "type": "get",
    "url": "/admin/user",
    "title": "Get all",
    "name": "Get_all",
    "group": "Admin_Side_User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "users",
            "description": "<p>Array of users document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/users.js",
    "groupTitle": "Admin_Side_User"
  },
  {
    "type": "put",
    "url": "/admin/user/:authUserId",
    "title": "Update",
    "name": "Update",
    "group": "Admin_Side_User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First name of user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last name of user</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "mobileNumber",
            "description": "<p>mobileNumber</p>"
          },
          {
            "group": "Parameter",
            "type": "Enum",
            "optional": false,
            "field": "gender",
            "description": "<p>gender | <code>Possible Values ('male', 'female', 'transgender')</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "dateOfBirth",
            "description": "<p>Date of Birth</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "goal",
            "description": "<p>goal  of user&gt;<br><pre>example. { &quot;name&quot; : &quot;gain_muscle&quot;, &quot;start&quot; : 0 }</pre><code>Possible Values ('gain_muscle', 'improve_mobility', 'lose_fat', 'gain_strength', 'gain_power', 'increase_endurance')</code></p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": true,
            "field": "user_img",
            "description": "<p>avatar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "aboutMe",
            "description": "<p>aboutMe</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>status</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "user",
            "description": "<p>JSON of users document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/users.js",
    "groupTitle": "Admin_Side_User"
  },
  {
    "type": "post",
    "url": "/admin/user/filter",
    "title": "User Filter",
    "name": "User_User_Filter",
    "group": "Admin_Side_User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "columnFilter",
            "description": "<p>columnFilter Object for filter data</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "columnSort",
            "description": "<p>columnSort Object for Sorting Data</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "columnFilterEqual",
            "description": "<p>columnFilterEqual Object for select box</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>pageSize</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>page number</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "filtered_users",
            "description": "<p>filtered details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/users.js",
    "groupTitle": "Admin_Side_User"
  },
  {
    "type": "get",
    "url": "/admin/user/:authUserId",
    "title": "Get by authUserId",
    "name": "Users_by_authUserId",
    "group": "Admin_Side_User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "user",
            "description": "<p>JSON of user document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/users.js",
    "groupTitle": "Admin_Side_User"
  },
  {
    "type": "get",
    "url": "/auth0_user_sync",
    "title": "Auth0 User Sync",
    "name": "Auth0_User_Sync",
    "group": "Auth0_User_Sync",
    "description": "<p>Auth0 User Sync</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Auth0_User_Sync"
  },
  {
    "type": "post",
    "url": "/admin/badge",
    "title": "Add",
    "name": "Add",
    "group": "Badge",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of badge</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "descriptionCompleted",
            "description": "<p>description of Completed badge</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "descriptionInCompleted",
            "description": "<p>description of InCompleted badge</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "unit",
            "description": "<p>unit of badge</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>value of badge</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "task",
            "description": "<p>task of badge</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "timeType",
            "description": "<p>timeType of badge | possible values<code>[&quot;standard&quot;, &quot;time_window&quot;]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "timeWindowType",
            "description": "<p>timeWindowType of badge | possible values<code>[&quot;day&quot;, &quot;week&quot;, &quot;month&quot;, &quot;year&quot;]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "duration",
            "description": "<p>duration of badge</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "point",
            "description": "<p>point of badge</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "badge",
            "description": "<p>added badge detail</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/badge.js",
    "groupTitle": "Badge"
  },
  {
    "type": "delete",
    "url": "/admin/badge/:badge_id",
    "title": "Delete",
    "name": "Delete",
    "group": "Badge",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/badge.js",
    "groupTitle": "Badge"
  },
  {
    "type": "post",
    "url": "/admin/badge/filter",
    "title": "Filter",
    "name": "Filter",
    "description": "<p>Request Object :<pre><code>{ pageSize: 10, page: 0, columnFilter: [ { id: &quot;firstName&quot;, value: &quot;mi&quot; } ], columnSort: [ { id: &quot;firstName&quot;, value: true } ], columnFilterEqual: [ { id: &quot;email&quot;, value: &quot;ake@narola.email&quot; } ] }</code></pre></p>",
    "group": "Badge",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "columnFilter",
            "description": "<p>columnFilter Object for filter data</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "columnSort",
            "description": "<p>columnSort Object for Sorting Data</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "columnFilterEqual",
            "description": "<p>columnFilterEqual Object for select box</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>pageSize</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>page number</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "filtered_badges",
            "description": "<p>filtered details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/badge.js",
    "groupTitle": "Badge"
  },
  {
    "type": "get",
    "url": "/admin/badge/badge_id",
    "title": "Get by ID",
    "name": "Get_Badge_by_ID",
    "group": "Badge",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "badge",
            "description": "<p>Array of badges document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/badge.js",
    "groupTitle": "Badge"
  },
  {
    "type": "get",
    "url": "/admin/badge",
    "title": "Get all",
    "name": "Get_all",
    "group": "Badge",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "badges",
            "description": "<p>Array of badges document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/badge.js",
    "groupTitle": "Badge"
  },
  {
    "type": "get",
    "url": "/admin/badge/undo/:badge_id",
    "title": "Undo",
    "name": "Undo",
    "group": "Badge",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/badge.js",
    "groupTitle": "Badge"
  },
  {
    "type": "put",
    "url": "/admin/badge",
    "title": "Update",
    "name": "Update",
    "group": "Badge",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Name of badge</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "descriptionCompleted",
            "description": "<p>description of Completed badge</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "descriptionInCompleted",
            "description": "<p>description of InCompleted badge</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "unit",
            "description": "<p>unit of badge</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "value",
            "description": "<p>value of badge</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "task",
            "description": "<p>task of badge</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "timeType",
            "description": "<p>timeType of badge | possible values<code>[&quot;standard&quot;, &quot;time_window&quot;]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "timeWindowType",
            "description": "<p>timeWindowType of badge | possible values<code>[&quot;day&quot;, &quot;week&quot;, &quot;month&quot;, &quot;year&quot;]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "duration",
            "description": "<p>duration of badge</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "point",
            "description": "<p>point of badge</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "status",
            "description": "<p>status of badge</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "badge",
            "description": "<p>updated badge detail</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/badge.js",
    "groupTitle": "Badge"
  },
  {
    "type": "post",
    "url": "/admin/badge_category",
    "title": "Add",
    "name": "Add",
    "group": "Badge_Category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of badge_category</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "badge_category",
            "description": "<p>added badge_category detail</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/badge_category.js",
    "groupTitle": "Badge_Category"
  },
  {
    "type": "delete",
    "url": "/admin/badge_category/:badge_category_id",
    "title": "Delete",
    "name": "Delete",
    "group": "Badge_Category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/badge_category.js",
    "groupTitle": "Badge_Category"
  },
  {
    "type": "post",
    "url": "/admin/badge_category/filter",
    "title": "Filter",
    "name": "Filter",
    "group": "Badge_Category",
    "description": "<p>Request Object :<pre><code> { pageSize: 10, page: 0, columnFilter: [ { id: &quot;firstName&quot;, value: &quot;mi&quot; } ], columnSort: [ { id: &quot;firstName&quot;, value: true } ], columnFilterEqual: [ { id: &quot;email&quot;, value: &quot;ake@narola.email&quot; } ] }</code></pre></p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "columnFilter",
            "description": "<p>columnFilter Object for filter data</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "columnSort",
            "description": "<p>columnSort Object for Sorting Data</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "columnFilterEqual",
            "description": "<p>columnFilterEqual Object for select box</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>pageSize</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>page number</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "filtered_badge_categories",
            "description": "<p>filtered details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/badge_category.js",
    "groupTitle": "Badge_Category"
  },
  {
    "type": "get",
    "url": "/admin/badge_category/badge_category_id",
    "title": "Get by ID",
    "name": "Get_Badge_Category_by_ID",
    "group": "Badge_Category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "badge_category",
            "description": "<p>Array of badge_category document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/badge_category.js",
    "groupTitle": "Badge_Category"
  },
  {
    "type": "get",
    "url": "/admin/badge_category",
    "title": "Get all",
    "name": "Get_all",
    "group": "Badge_Category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "badge_categories",
            "description": "<p>Array of badge_category document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/badge_category.js",
    "groupTitle": "Badge_Category"
  },
  {
    "type": "put",
    "url": "/admin/badge_category/:badge_category_id",
    "title": "Update",
    "name": "Update",
    "group": "Badge_Category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of badge category</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of badge category</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "badge_category",
            "description": "<p>Array of badge_category document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/badge_category.js",
    "groupTitle": "Badge_Category"
  },
  {
    "type": "post",
    "url": "/admin/badge_task",
    "title": "Add",
    "name": "Add",
    "group": "Badge_Task",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of badge_task</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>description of badge_task</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "unit",
            "description": "<p>Unit of task activity</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "badge_task",
            "description": "<p>added badge_task detail</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/badge_task.js",
    "groupTitle": "Badge_Task"
  },
  {
    "type": "delete",
    "url": "/admin/badge_task/:badge_task_id",
    "title": "Delete",
    "name": "Delete",
    "group": "Badge_Task",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/badge_task.js",
    "groupTitle": "Badge_Task"
  },
  {
    "type": "post",
    "url": "/admin/badge_task/filter",
    "title": "Filter",
    "name": "Filter",
    "description": "<p>Request Object :<pre><code> { pageSize: 10, page: 0, columnFilter: [ { id: &quot;firstName&quot;, value: &quot;mi&quot; } ], columnSort: [ { id: &quot;firstName&quot;, value: true } ], columnFilterEqual: [ { id: &quot;email&quot;, value: &quot;ake@narola.email&quot; } ] }</code></pre></p>",
    "group": "Badge_Task",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "columnFilter",
            "description": "<p>columnFilter Object for filter data</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "columnSort",
            "description": "<p>columnSort Object for Sorting Data</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "columnFilterEqual",
            "description": "<p>columnFilterEqual Object for select box</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>pageSize</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>page number</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "filtered_badge_tasks",
            "description": "<p>filtered details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/badge_task.js",
    "groupTitle": "Badge_Task"
  },
  {
    "type": "get",
    "url": "/admin/badge_task/badge_task_id",
    "title": "Get by ID",
    "name": "Get_Badge_Task_by_ID",
    "group": "Badge_Task",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "badge_task",
            "description": "<p>Array of badge_task document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/badge_task.js",
    "groupTitle": "Badge_Task"
  },
  {
    "type": "get",
    "url": "/admin/badge_task",
    "title": "Get all",
    "name": "Get_all",
    "group": "Badge_Task",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "badge_tasks",
            "description": "<p>Array of badge_task document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/badge_task.js",
    "groupTitle": "Badge_Task"
  },
  {
    "type": "put",
    "url": "/admin/badge_task/:badge_task_id",
    "title": "Update",
    "name": "Update",
    "group": "Badge_Task",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of badge_task</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>description of badge_task</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "unit",
            "description": "<p>Unit of task activity | <code>[&quot;kms&quot;,&quot;kgs&quot;]</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "badge_task",
            "description": "<p>Array of badge_task document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/badge_task.js",
    "groupTitle": "Badge_Task"
  },
  {
    "type": "post",
    "url": "/admin/equipment_category/filter",
    "title": "Filter",
    "name": "Filter",
    "description": "<p>Request Object :<pre><code>{ pageSize: 10, page: 0, columnFilter: [ { id: &quot;firstName&quot;, value: &quot;mi&quot; } ], columnSort: [ { id: &quot;firstName&quot;, value: true } ], columnFilterEqual: [ { id: &quot;email&quot;, value: &quot;amc@narola.email&quot; } ] }</code></pre></p>",
    "group": "BodyPart",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "columnFilter",
            "description": "<p>columnFilter Object for filter data</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "columnSort",
            "description": "<p>columnSort Object for Sorting Data</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "columnFilterEqual",
            "description": "<p>columnFilterEqual Object for select box</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>pageSize</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>page number</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "filtered_equipment_categories",
            "description": "<p>filtered details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/equipment_category.js",
    "groupTitle": "BodyPart"
  },
  {
    "type": "post",
    "url": "/admin/bodyparts/filter",
    "title": "Filter",
    "name": "Filter",
    "description": "<p>Request Object :<pre><code>{ pageSize: 10, page: 0, columnFilter: [ { id: &quot;firstName&quot;, value: &quot;mi&quot; } ], columnSort: [ { id: &quot;firstName&quot;, value: true } ], columnFilterEqual: [ { id: &quot;email&quot;, value: &quot;amc@narola.email&quot; } ] }</code></pre></p>",
    "group": "BodyPart",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "columnFilter",
            "description": "<p>columnFilter Object for filter data</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "columnSort",
            "description": "<p>columnSort Object for Sorting Data</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "columnFilterEqual",
            "description": "<p>columnFilterEqual Object for select box</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>pageSize</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>page number</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "filtered_bodypart",
            "description": "<p>filtered details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/bodyparts.js",
    "groupTitle": "BodyPart"
  },
  {
    "type": "post",
    "url": "/admin/bodypart",
    "title": "Add",
    "name": "Add",
    "group": "Body_Parts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bodypart",
            "description": "<p>Name of Body Part</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "bodypart",
            "description": "<p>added Bodypart detail</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/bodyparts.js",
    "groupTitle": "Body_Parts"
  },
  {
    "type": "delete",
    "url": "/admin/bodypart/:body_part_id",
    "title": "Delete",
    "name": "Delete",
    "group": "Body_Parts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/bodyparts.js",
    "groupTitle": "Body_Parts"
  },
  {
    "type": "get",
    "url": "/admin/bodypart",
    "title": "Get all",
    "name": "Get_all",
    "group": "Body_Parts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "bodyparts",
            "description": "<p>Array of bodyparts document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/bodyparts.js",
    "groupTitle": "Body_Parts"
  },
  {
    "type": "get",
    "url": "/admin/bodypart/body_part_id",
    "title": "Get by ID",
    "name": "Get_by_ID",
    "group": "Body_Parts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "bodypart",
            "description": "<p>JSON of Body part document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/bodyparts.js",
    "groupTitle": "Body_Parts"
  },
  {
    "type": "put",
    "url": "/admin/bodypart/undo/:body_part_id",
    "title": "Undo",
    "name": "Undo",
    "group": "Body_Parts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/bodyparts.js",
    "groupTitle": "Body_Parts"
  },
  {
    "type": "put",
    "url": "/admin/bodypart/:body_part_id",
    "title": "Update",
    "name": "Update",
    "group": "Body_Parts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bodypart",
            "description": "<p>Name of Body Part</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "bodypart",
            "description": "<p>JSON of bodypart document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/bodyparts.js",
    "groupTitle": "Body_Parts"
  },
  {
    "type": "put",
    "url": "/admin_change_password",
    "title": "Admin Change Password",
    "name": "Admin_Change_Password",
    "group": "Change_Password_API",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "user",
            "description": "<p>Admin user object.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Change_Password_API"
  },
  {
    "type": "put",
    "url": "/admin/change_password",
    "title": "Admin Change Password",
    "name": "Admin_Change_Password",
    "group": "Change_Password_API",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "user",
            "description": "<p>Admin user object.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/password.js",
    "groupTitle": "Change_Password_API"
  },
  {
    "type": "get",
    "url": "/nutrition/",
    "title": "Get all",
    "name": "Get_all",
    "group": "Common_Nutrition",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Admin's or User's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "nutritions",
            "description": "<p>Array of nutrition's document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Common_Nutrition"
  },
  {
    "type": "post",
    "url": "/admin/dashboard",
    "title": "Dashboard",
    "name": "Dashboard",
    "group": "Dashboard",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "dashboard",
            "description": "<p>dashboard detail</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/dashboard.js",
    "groupTitle": "Dashboard"
  },
  {
    "type": "post",
    "url": "/admin/equipment",
    "title": "Add",
    "name": "Add",
    "group": "Equipment",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category_id",
            "description": "<p>Equipment's Category id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of Equipment Equipment</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>status of Equipment</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Description of Equipment</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": true,
            "field": "equipment_img",
            "description": "<p>Equipment image</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "equipment",
            "description": "<p>Equipment details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/equipment.js",
    "groupTitle": "Equipment"
  },
  {
    "type": "delete",
    "url": "/admin/equipment/:equipment_id",
    "title": "Delete",
    "name": "Delete",
    "group": "Equipment",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/equipment.js",
    "groupTitle": "Equipment"
  },
  {
    "type": "post",
    "url": "/admin/equipment/filter",
    "title": "Filter",
    "name": "Filter",
    "description": "<p>Request Object :<pre><code> { pageSize: 10, page: 0, columnFilter: [ { id: &quot;firstName&quot;, value: &quot;mi&quot; } ], columnSort: [ { id: &quot;firstName&quot;, value: true } ], columnFilterEqual: [ { id: &quot;email&quot;, value: &quot;amc@narola.email&quot; } ] }</code></pre></p>",
    "group": "Equipment",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "columnFilter",
            "description": "<p>columnFilter Object for filter data</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "columnSort",
            "description": "<p>columnSort Object for Sorting Data</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "columnFilterEqual",
            "description": "<p>columnFilterEqual Object for select box</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>pageSize</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>page number</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "filtered_equipments",
            "description": "<p>filtered details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/equipment.js",
    "groupTitle": "Equipment"
  },
  {
    "type": "get",
    "url": "/admin/equipment",
    "title": "Get all",
    "name": "Get_all",
    "group": "Equipment",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "equipments",
            "description": "<p>Array of equipments document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/equipment.js",
    "groupTitle": "Equipment"
  },
  {
    "type": "get",
    "url": "/admin/equipment/:equipment_id",
    "title": "Get by ID",
    "name": "Get_equipment_by_ID",
    "group": "Equipment",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "equipment",
            "description": "<p>Object of equipment document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/equipment.js",
    "groupTitle": "Equipment"
  },
  {
    "type": "get",
    "url": "/admin/equipment/undo/:equipment_id",
    "title": "Undo",
    "name": "Undo",
    "group": "Equipment",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/equipment.js",
    "groupTitle": "Equipment"
  },
  {
    "type": "put",
    "url": "/admin/equipment/:equipment_id",
    "title": "Update",
    "name": "Update",
    "group": "Equipment",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of equipment Equipment</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Description of equipment</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": true,
            "field": "equipment_img",
            "description": "<p>Equipment image</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category_id",
            "description": "<p>Equipment's Category id</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Status for equipment</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "equipment",
            "description": "<p>Equipment details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/equipment.js",
    "groupTitle": "Equipment"
  },
  {
    "type": "post",
    "url": "/admin/equipment_category",
    "title": "Add",
    "name": "Add",
    "group": "Equipment_category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of equipment category</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Description of equipment category</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "equipment_category",
            "description": "<p>Equipment category details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/equipment_category.js",
    "groupTitle": "Equipment_category"
  },
  {
    "type": "delete",
    "url": "/admin/equipment_category/:equipment_category_id",
    "title": "Delete",
    "name": "Delete",
    "group": "Equipment_category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/equipment_category.js",
    "groupTitle": "Equipment_category"
  },
  {
    "type": "get",
    "url": "/admin/equipment_category",
    "title": "Get all",
    "name": "Get_all",
    "group": "Equipment_category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "equipment_categories",
            "description": "<p>Array of equipment's categories document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/equipment_category.js",
    "groupTitle": "Equipment_category"
  },
  {
    "type": "put",
    "url": "/admin/equipment_category/undo/:equipment_category_id",
    "title": "Undo",
    "name": "Undo",
    "group": "Equipment_category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/equipment_category.js",
    "groupTitle": "Equipment_category"
  },
  {
    "type": "put",
    "url": "/admin/equipment_category/:equipment_category_id",
    "title": "Update",
    "name": "Update",
    "group": "Equipment_category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Equipment category name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Equipment category description</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "equipment_category",
            "description": "<p>Equipment category details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/equipment_category.js",
    "groupTitle": "Equipment_category"
  },
  {
    "type": "post",
    "url": "/admin/exercise",
    "title": "Add",
    "name": "Add",
    "group": "Exercise",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of Exercise</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Description of Exercise</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mainMuscleGroup",
            "description": "<p>Reference id of from muscles group collection</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "otherMuscleGroup",
            "description": "<p>Reference ids of from muscles group collection</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "detailedMuscleGroup",
            "description": "<p>Reference ids of from muscles group collection</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "category",
            "description": "<p>Category of exercise</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "subCategory",
            "description": "<p>Sub Category of exercise <code>not required if category balance is seleted</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Enum",
            "optional": true,
            "field": "mechanics",
            "description": "<p>Mechanics of Exercise | Possible Values('Compound', 'Isolation')</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "equipments",
            "description": "<p>Reference ids from equipments collection</p>"
          },
          {
            "group": "Parameter",
            "type": "Enum",
            "optional": false,
            "field": "difficltyLevel",
            "description": "<p>Difficlty level of exercise | Possible Values('Beginner', 'Intermediate', 'Expert')</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "steps",
            "description": "<p>Steps of Exercise</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "tips",
            "description": "<p>tips of Exercise</p>"
          },
          {
            "group": "Parameter",
            "type": "Files",
            "optional": true,
            "field": "images",
            "description": "<p>Images of Exercise</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "exercise",
            "description": "<p>Exercise details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/exercise.js",
    "groupTitle": "Exercise"
  },
  {
    "type": "delete",
    "url": "/admin/exercise/:exercise_id",
    "title": "Delete",
    "name": "Delete",
    "group": "Exercise",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/exercise.js",
    "groupTitle": "Exercise"
  },
  {
    "type": "post",
    "url": "/admin/exercise/filter",
    "title": "Filter",
    "name": "Filter",
    "description": "<p>Request Object :<pre><code> { pageSize: 10, page: 0, columnFilter: [ { id: &quot;firstName&quot;, value: &quot;mi&quot; } ], columnSort: [ { id: &quot;firstName&quot;, value: true } ], columnFilterEqual: [ { id: &quot;email&quot;, value: &quot;ake@narola.email&quot; } ] }</code></pre></p>",
    "group": "Exercise",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "columnFilter",
            "description": "<p>columnFilter Object for filter data</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "columnSort",
            "description": "<p>columnSort Object for Sorting Data</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "columnFilterEqual",
            "description": "<p>columnFilterEqual Object for select box</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>pageSize</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>page number</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "filtered_exercises",
            "description": "<p>filtered details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/exercise.js",
    "groupTitle": "Exercise"
  },
  {
    "type": "get",
    "url": "/admin/exercise/exercise_id",
    "title": "Get by ID",
    "name": "Get_Exercise_by_ID",
    "group": "Exercise",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "exercise_id",
            "description": "<p>ID of Exercise</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "exercise",
            "description": "<p>Array of Exercise document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/exercise.js",
    "groupTitle": "Exercise"
  },
  {
    "type": "get",
    "url": "/admin/exercise",
    "title": "Get all",
    "name": "Get_all",
    "group": "Exercise",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "exercises",
            "description": "<p>Array of Exercises document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/exercise.js",
    "groupTitle": "Exercise"
  },
  {
    "type": "put",
    "url": "/admin/exercise/undo/:exercise_id",
    "title": "Undo",
    "name": "Undo",
    "group": "Exercise",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/exercise.js",
    "groupTitle": "Exercise"
  },
  {
    "type": "put",
    "url": "/admin/exercise",
    "title": "Update",
    "name": "Update",
    "group": "Exercise",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of Exercise</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Description of Exercise</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mainMuscleGroup",
            "description": "<p>Reference id of from muscles group collection</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "otherMuscleGroup",
            "description": "<p>Reference ids of from muscles group collection</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "detailedMuscleGroup",
            "description": "<p>Reference ids of from muscles group collection</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "category",
            "description": "<p>Category of exercise</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "subCategory",
            "description": "<p>Sub Category of exercise <code>not required if category balance is seleted</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Enum",
            "optional": true,
            "field": "mechanics",
            "description": "<p>Mechanics of Exercise | Possible Values('Compound', 'Isolation')</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "equipments",
            "description": "<p>Reference ids from equipments collection</p>"
          },
          {
            "group": "Parameter",
            "type": "Enum",
            "optional": false,
            "field": "difficltyLevel",
            "description": "<p>Difficlty level of exercise | Possible Values('Beginner', 'Intermediate', 'Expert')</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "steps",
            "description": "<p>Steps of Exercise</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "tips",
            "description": "<p>tips of Exercise</p>"
          },
          {
            "group": "Parameter",
            "type": "Files",
            "optional": true,
            "field": "images",
            "description": "<p>Images of Exercise</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "exercise",
            "description": "<p>Exercise details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/exercise.js",
    "groupTitle": "Exercise"
  },
  {
    "type": "post",
    "url": "/admin/exercise_type",
    "title": "Add",
    "name": "Add",
    "group": "Exercise_Type",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of Exercise_types</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of Exercise types</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "exercise_type",
            "description": "<p>Exercise types details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/exercise_types.js",
    "groupTitle": "Exercise_Type"
  },
  {
    "type": "delete",
    "url": "/admin/exercise_type/:exercise_type_id",
    "title": "Delete",
    "name": "Delete",
    "group": "Exercise_Type",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/exercise_types.js",
    "groupTitle": "Exercise_Type"
  },
  {
    "type": "post",
    "url": "/admin/exercise_type/filter",
    "title": "Filter",
    "name": "Filter",
    "group": "Exercise_Type",
    "description": "<p>Request Object :<pre><code> { pageSize: 10, page: 0, columnFilter: [ { id: &quot;firstName&quot;, value: &quot;mi&quot; } ], columnSort: [ { id: &quot;firstName&quot;, value: true } ], columnFilterEqual: [ { id: &quot;email&quot;, value: &quot;ake@narola.email&quot; } ] }</code></pre></p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "columnFilter",
            "description": "<p>columnFilter Object for filter data</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "columnSort",
            "description": "<p>columnSort Object for Sorting Data</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "columnFilterEqual",
            "description": "<p>columnFilterEqual Object for select box</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>pageSize</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>page number</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "filtered_exercise_types",
            "description": "<p>filtered details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/exercise_types.js",
    "groupTitle": "Exercise_Type"
  },
  {
    "type": "get",
    "url": "/admin/exercise_type",
    "title": "Get all",
    "name": "Get_all",
    "group": "Exercise_Type",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "exercise_types",
            "description": "<p>Array of exercise_types's document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/exercise_types.js",
    "groupTitle": "Exercise_Type"
  },
  {
    "type": "get",
    "url": "/admin/exercise_type/exercise_type_id",
    "title": "Get by ID",
    "name": "Get_by_ID",
    "group": "Exercise_Type",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "exercise_id",
            "description": "<p>ID of Exercise</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "exercise_type",
            "description": "<p>JSON of exercise_type document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/exercise_types.js",
    "groupTitle": "Exercise_Type"
  },
  {
    "type": "put",
    "url": "/admin/exercise_type/:exercise_type_id",
    "title": "Update",
    "name": "Update",
    "group": "Exercise_Type",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Exercise type name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Exercise type description</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>status of Exercise type</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "exercise_type",
            "description": "<p>Exercise Type details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/exercise_types.js",
    "groupTitle": "Exercise_Type"
  },
  {
    "type": "get",
    "url": "/user/users_nutritions",
    "title": "Get User Nutrition",
    "name": "Get_User_Nutrition",
    "group": "Get_User_Nutrition",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "user_nutritions",
            "description": "<p>Array of user_nutritions document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/users_nutritions.js",
    "groupTitle": "Get_User_Nutrition"
  },
  {
    "type": "post",
    "url": "/admin/ingredient",
    "title": "Add",
    "name": "Add",
    "group": "Ingredient",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of Ingredient</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>description of Ingredient</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "allowInShopList",
            "description": "<p>allowInShopList of Ingredient</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": true,
            "field": "ingredient_img",
            "description": "<p>image of Ingredient</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "ingredient",
            "description": "<p>ingredient details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/ingredients.js",
    "groupTitle": "Ingredient"
  },
  {
    "type": "delete",
    "url": "/admin/ingredient/:ingredient_id",
    "title": "Delete",
    "name": "Delete",
    "group": "Ingredient",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/ingredients.js",
    "groupTitle": "Ingredient"
  },
  {
    "type": "post",
    "url": "/admin/ingredient/filter",
    "title": "Filter",
    "name": "Filter",
    "description": "<p>Request Object :<pre><code> { pageSize: 10, page: 0, columnFilter: [ { id: &quot;firstName&quot;, value: &quot;mi&quot; } ], columnSort: [ { id: &quot;firstName&quot;, value: true } ], columnFilterEqual: [ { id: &quot;email&quot;, value: &quot;ake@narola.email&quot; } ] }</code></pre></p>",
    "group": "Ingredient",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "columnFilter",
            "description": "<p>columnFilter Object for filter data</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "columnSort",
            "description": "<p>columnSort Object for Sorting Data</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "columnFilterEqual",
            "description": "<p>columnFilterEqual Object for select box</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>pageSize</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>page number</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "filtered_ingredients",
            "description": "<p>filtered details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/ingredients.js",
    "groupTitle": "Ingredient"
  },
  {
    "type": "get",
    "url": "/admin/ingredient",
    "title": "Get all",
    "name": "Get_all",
    "group": "Ingredient",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "ingredients",
            "description": "<p>Array of Ingredients document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/ingredients.js",
    "groupTitle": "Ingredient"
  },
  {
    "type": "put",
    "url": "/admin/ingredient/:ingredient_id",
    "title": "Update",
    "name": "Update",
    "group": "Ingredient",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of Ingredient</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>description of Ingredient</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "allowInShopList",
            "description": "<p>allowInShopList of Ingredient</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": true,
            "field": "ingredient_img",
            "description": "<p>image of Ingredient</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "ingredient",
            "description": "<p>ingredient details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/ingredients.js",
    "groupTitle": "Ingredient"
  },
  {
    "type": "get",
    "url": "/admin/ingredient/ingredient_id",
    "title": "Get by ID",
    "name": "__Get_Ingredient_by_ID",
    "group": "Ingredient",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ingredient_id",
            "description": "<p>ID of Ingredient</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "ingredient",
            "description": "<p>Object of Ingredient document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/ingredients.js",
    "groupTitle": "Ingredient"
  },
  {
    "type": "post",
    "url": "/user/post/like",
    "title": "Add",
    "name": "Add_Comment",
    "group": "Likes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "postId",
            "description": "<p>postId of post</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "timeline",
            "description": "<p>added like detail</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/like.js",
    "groupTitle": "Likes"
  },
  {
    "type": "post",
    "url": "/admin_login",
    "title": "Admin Login",
    "name": "Admin_Login",
    "group": "Login_API",
    "description": "<p>Login request for admin role</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "user",
            "description": "<p>Admin user object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Unique token which needs to be passed in subsequent requests.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refresh_token",
            "description": "<p>Unique token which needs to be passed to generate next access token.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Login_API"
  },
  {
    "type": "post",
    "url": "/user_login",
    "title": "User Login",
    "name": "User_Login",
    "group": "Login_API",
    "description": "<p>Login request for user role</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "user",
            "description": "<p>User object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Unique token which needs to be passed in subsequent requests.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refresh_token",
            "description": "<p>Unique token which needs to be passed to generate next access token.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Login_API"
  },
  {
    "type": "post",
    "url": "/admin/nutrition",
    "title": "Add",
    "name": "Add",
    "group": "Nutrition",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of nutrition</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Description of nutrition</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "nutrition",
            "description": "<p>Nutrition details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/nutrition.js",
    "groupTitle": "Nutrition"
  },
  {
    "type": "delete",
    "url": "/admin/nutrition/:nutrition_id",
    "title": "Delete",
    "name": "Delete",
    "group": "Nutrition",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/nutrition.js",
    "groupTitle": "Nutrition"
  },
  {
    "type": "get",
    "url": "/admin/nutrition",
    "title": "Get all",
    "name": "Get_all",
    "group": "Nutrition",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "nutritions",
            "description": "<p>Array of nutrition's document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/nutrition.js",
    "groupTitle": "Nutrition"
  },
  {
    "type": "get",
    "url": "/admin/nutrition/:nutrition_id",
    "title": "Get by ID",
    "name": "Get_by_ID",
    "group": "Nutrition",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "nutrition",
            "description": "<p>nutrition's document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/nutrition.js",
    "groupTitle": "Nutrition"
  },
  {
    "type": "put",
    "url": "/admin/nutrition/:nutrition_id",
    "title": "Update",
    "name": "Update",
    "group": "Nutrition",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nutrition name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Nutrition descruption</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "nutrition",
            "description": "<p>Nutrition details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/nutrition.js",
    "groupTitle": "Nutrition"
  },
  {
    "type": "post",
    "url": "/admin/nutrition_preferences",
    "title": "Add",
    "name": "Add",
    "group": "Nutrition_Preferences",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of User</p>"
          },
          {
            "group": "Parameter",
            "type": "Enum-Array",
            "optional": false,
            "field": "dietaryRestrictedRecipieTypes",
            "description": "<p>| Possible Values ('pescaterian','paleo','vegetarian','vegan','dairy-free','kosher','islam','coeliac')</p>"
          },
          {
            "group": "Parameter",
            "type": "Enum-Array",
            "optional": false,
            "field": "recipieDifficulty",
            "description": "<p>recipieDifficulty level |  Possible Values ('easy', 'medium', 'hard')</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "nutritionTargets",
            "description": "<p>nutritionTargets  [title:{title},start:{start value},end:{end value}]</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "maxRecipieTime",
            "description": "<p>Description [{dayDrive : enum, time : 'value'}] | Possible Values (&quot;breakfast&quot;, &quot;lunch&quot;, &quot;dinner&quot;,&quot;Snacks&quot;)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "nutrition_preference",
            "description": "<p>nutrition_preference details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/nutrition_preferences.js",
    "groupTitle": "Nutrition_Preferences"
  },
  {
    "type": "delete",
    "url": "/admin/nutrition_preferences/:nutrition_preferences_id",
    "title": "Delete",
    "name": "Delete",
    "group": "Nutrition_Preferences",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/nutrition_preferences.js",
    "groupTitle": "Nutrition_Preferences"
  },
  {
    "type": "get",
    "url": "/admin/nutrition_preferences",
    "title": "Get all",
    "name": "Get_all",
    "group": "Nutrition_Preferences",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "nutrition_preferences",
            "description": "<p>Array of nutrition_preferences 's document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/nutrition_preferences.js",
    "groupTitle": "Nutrition_Preferences"
  },
  {
    "type": "get",
    "url": "/admin/nutrition_preferences/:nutrition_preferences_id",
    "title": "Get by ID",
    "name": "Get_by_ID",
    "group": "Nutrition_Preferences",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "nutrition_preference",
            "description": "<p>nutrition_preferences's document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/nutrition_preferences.js",
    "groupTitle": "Nutrition_Preferences"
  },
  {
    "type": "put",
    "url": "/admin/nutrition_preferences/:nutrition_preferences_id",
    "title": "Update",
    "name": "Update",
    "group": "Nutrition_Preferences",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of User</p>"
          },
          {
            "group": "Parameter",
            "type": "Enum-Array",
            "optional": false,
            "field": "dietaryRestrictedRecipieTypes",
            "description": "<p>| Possible Values ('pescaterian','paleo','vegetarian','vegan','dairy-free','kosher','islam','coeliac')</p>"
          },
          {
            "group": "Parameter",
            "type": "Enum-Array",
            "optional": false,
            "field": "recipieDifficulty",
            "description": "<p>recipieDifficulty level |  Possible Values ('easy', 'medium', 'hard')</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "nutritionTargets",
            "description": "<p>nutritionTargets  [title:{title},start:{start value},end:{end value}]</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "maxRecipieTime",
            "description": "<p>Description [{dayDrive : enum, time : 'value'}] | Possible Values (&quot;breakfast&quot;, &quot;lunch&quot;, &quot;dinner&quot;,&quot;Snacks&quot;)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "nutrition_preference",
            "description": "<p>nutrition_preference details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/nutrition_preferences.js",
    "groupTitle": "Nutrition_Preferences"
  },
  {
    "type": "get",
    "url": "/nutritional_label/:type",
    "title": "Get all",
    "name": "Get_all",
    "group": "Nutritional_labels",
    "description": "<p>parameter type can be diet or health</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Admin's or User's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type of nutritional_label <code>diet or health </code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "labels",
            "description": "<p>Array of nutritional_labels's document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Nutritional_labels"
  },
  {
    "type": "put",
    "url": "/admin/recipes",
    "title": "Add",
    "name": "Add",
    "group": "Recipes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of recipe</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>description of recipe</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "method",
            "description": "<p>method of recipe</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "ingredients",
            "description": "<p>ingredients of recipe</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "ingredientsIncluded",
            "description": "<p>ingredientsIncluded</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "preparationTime",
            "description": "<p>time of preparationTime</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "cookTime",
            "description": "<p>cooking time</p>"
          },
          {
            "group": "Parameter",
            "type": "Enum",
            "optional": true,
            "field": "difficultyLevel",
            "description": "<p>difficultyLevel of recipe</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "rating",
            "description": "<p>rating of recipe</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "recipeType",
            "description": "<p>recipe Type | Possible Values ('pescaterian','paleo','vegetarian','vegan','dairy-free','kosher','islam','coeliac')</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "nutritions",
            "description": "<p>nutritions Object Array</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": true,
            "field": "recipe_img",
            "description": "<p>recipe image</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "recipe",
            "description": "<p>JSON of recipes document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/recipes.js",
    "groupTitle": "Recipes"
  },
  {
    "type": "post",
    "url": "/admin/recipes",
    "title": "Add",
    "name": "Add",
    "group": "Recipes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of recipe</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>description of recipe</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "method",
            "description": "<p>method of recipe</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "ingredients",
            "description": "<p>ingredients of recipe</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "ingredientsIncluded",
            "description": "<p>ingredientsIncluded</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "preparationTime",
            "description": "<p>time of preparationTime</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "cookTime",
            "description": "<p>cooking time</p>"
          },
          {
            "group": "Parameter",
            "type": "Enum",
            "optional": true,
            "field": "difficultyLevel",
            "description": "<p>difficultyLevel of recipe</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "rating",
            "description": "<p>rating of recipe</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "recipeType",
            "description": "<p>recipe Type | Possible Values ('pescaterian','paleo','vegetarian','vegan','dairy-free','kosher','islam','coeliac')</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "nutritions",
            "description": "<p>nutritions Object Array</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": true,
            "field": "recipe_img",
            "description": "<p>recipe image</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "recipe",
            "description": "<p>Array of recipes document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/recipes.js",
    "groupTitle": "Recipes"
  },
  {
    "type": "delete",
    "url": "/admin/recipe/:recipe_id",
    "title": "Delete",
    "name": "Delete",
    "group": "Recipes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/recipes.js",
    "groupTitle": "Recipes"
  },
  {
    "type": "post",
    "url": "/admin/recipes/filter",
    "title": "Filter",
    "name": "Filter",
    "group": "Recipes",
    "description": "<p>Request Object :<pre><code> { pageSize: 10, page: 0, columnFilter: [ { id: &quot;firstName&quot;, value: &quot;mi&quot; } ], columnSort: [ { id: &quot;firstName&quot;, value: true } ], columnFilterEqual: [ { id: &quot;email&quot;, value: &quot;ake@narola.email&quot; } ] }</code></pre></p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "columnFilter",
            "description": "<p>columnFilter Object for filter data</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "columnSort",
            "description": "<p>columnSort Object for Sorting Data</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "columnFilterEqual",
            "description": "<p>columnFilterEqual Object for select box</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>pageSize</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>page number</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "filtered_recipes",
            "description": "<p>filtered details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/recipes.js",
    "groupTitle": "Recipes"
  },
  {
    "type": "get",
    "url": "/admin/recipes",
    "title": "Get all",
    "name": "Get_all",
    "group": "Recipes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "recipes",
            "description": "<p>Array of recipes document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/recipes.js",
    "groupTitle": "Recipes"
  },
  {
    "type": "get",
    "url": "/admin/recipes/recipe_id",
    "title": "Get by ID",
    "name": "Get_by_ID",
    "group": "Recipes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "recipe",
            "description": "<p>Array of Recipes document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/recipes.js",
    "groupTitle": "Recipes"
  },
  {
    "type": "post",
    "url": "/user/shopping_cart",
    "title": "Get Shopping Cart",
    "name": "Get_Shopping_Cart",
    "group": "Shopping_Cart",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "start_date",
            "description": "<p>start date of recipe</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "end_date",
            "description": "<p>end date of recipe</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "shopping_cart",
            "description": "<p>added shopping cart detail</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/shopping_cart.js",
    "groupTitle": "Shopping_Cart"
  },
  {
    "type": "socket on",
    "url": "disconnect",
    "title": "Disconnect Socket",
    "name": "Disconnect_Socket",
    "group": "Sokets",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "flag",
            "description": "<p>flag</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "socket/socketServer.js",
    "groupTitle": "Sokets"
  },
  {
    "type": "socket on",
    "url": "request_users_conversation_channels",
    "title": "Get user channels",
    "name": "Get_user_channels",
    "group": "Sokets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>Data of user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "resp_data",
            "description": "<p>resp_data of channel</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "socket/socketServer.js",
    "groupTitle": "Sokets"
  },
  {
    "type": "socket on",
    "url": "user_notifications_count",
    "title": "Get user notification counts",
    "name": "Get_user_notification_counts",
    "group": "Sokets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token of user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>count of notifications</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "socket/socketServer.js",
    "groupTitle": "Sokets"
  },
  {
    "type": "socket on",
    "url": "request_logged_user_friends",
    "title": "Get user's friends",
    "name": "Get_user_s_friends",
    "group": "Sokets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "friends",
            "description": "<p>Data of user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "resp_data",
            "description": "<p>resp_data of channel</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "socket/socketServer.js",
    "groupTitle": "Sokets"
  },
  {
    "type": "socket on",
    "url": "user_friends_count",
    "title": "Get user's friends count",
    "name": "Get_user_s_friends_count",
    "group": "Sokets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token of user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>count of friends</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "socket/socketServer.js",
    "groupTitle": "Sokets"
  },
  {
    "type": "socket on",
    "url": "get_user_conversation_by_channel",
    "title": "Get user's messages by channel ID",
    "name": "Get_user_s_messages_by_channel_ID",
    "group": "Sokets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>Data of user(token,channel_id,start,end)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "resp_data",
            "description": "<p>resp_data of channel</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "socket/socketServer.js",
    "groupTitle": "Sokets"
  },
  {
    "type": "socket on",
    "url": "send_new_message",
    "title": "Get user's messages by channel ID",
    "name": "Get_user_s_messages_by_channel_ID",
    "group": "Sokets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>Data of user(token,channel_id,start,end)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "resp_data",
            "description": "<p>resp_data of channel</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "socket/socketServer.js",
    "groupTitle": "Sokets"
  },
  {
    "type": "socket on",
    "url": "user_messages_count",
    "title": "Get user's unread messages count",
    "name": "Get_user_s_unread_messages_count",
    "group": "Sokets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token of user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>count of messages</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "socket/socketServer.js",
    "groupTitle": "Sokets"
  },
  {
    "type": "socket on",
    "url": "request_typing_start",
    "title": "Indicate user typing...",
    "name": "Indicate_user_typing___",
    "group": "Sokets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>{friendId:&quot;&quot;,channelId:&quot;&quot;} of friend</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "flag",
            "description": "<p>flag</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "socket/socketServer.js",
    "groupTitle": "Sokets"
  },
  {
    "type": "socket on",
    "url": "request_typing_stop",
    "title": "Indicate user typing stop",
    "name": "Indicate_user_typing_stop",
    "group": "Sokets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>{friendId:&quot;&quot;,channelId:&quot;&quot;} of friend</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "channel",
            "description": "<p>channel data</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "socket/socketServer.js",
    "groupTitle": "Sokets"
  },
  {
    "type": "socket on",
    "url": "join",
    "title": "Join user to socket",
    "name": "Join_user_to_socket",
    "group": "Sokets",
    "version": "0.0.0",
    "filename": "socket/socketServer.js",
    "groupTitle": "Sokets"
  },
  {
    "type": "socket on",
    "url": "request_make_user_offline",
    "title": "Make user offline",
    "name": "Make_user_offline",
    "group": "Sokets",
    "version": "0.0.0",
    "filename": "socket/socketServer.js",
    "groupTitle": "Sokets"
  },
  {
    "type": "socket on",
    "url": "mark_message_as_read",
    "title": "Mark messages as read",
    "name": "Mark_messages_as_read",
    "group": "Sokets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>{userId:&quot;&quot;,channelId:&quot;&quot;} of user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "flag",
            "description": "<p>flag</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "socket/socketServer.js",
    "groupTitle": "Sokets"
  },
  {
    "type": "socket on",
    "url": "get_channel_id",
    "title": "User Channel",
    "name": "User_Channel",
    "group": "Sokets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>Data of user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "channel",
            "description": "<p>channel of channel</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "socket/socketServer.js",
    "groupTitle": "Sokets"
  },
  {
    "type": "post",
    "url": "/admin/test_exercise",
    "title": "Add",
    "name": "Add",
    "group": "Test_Exercises",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of test_exercise</p>"
          },
          {
            "group": "Parameter",
            "type": "Enum",
            "optional": false,
            "field": "category",
            "description": "<p>category of test_exercise<code>Enum:[&quot;strength&quot;, &quot;flexibility&quot;, &quot;posture&quot;, &quot;cardio&quot;]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Enum",
            "optional": false,
            "field": "subCategory",
            "description": "<p>subCategory of test_exercise<code>Enum:[&quot;upper_body&quot;, &quot;side&quot;, &quot;lower_body&quot;, &quot;cardio&quot;]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>description of test_exercise</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "images",
            "description": "<p>image of test_exercise</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "featureImage",
            "description": "<p>feature Image of test_exercise</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "instructions",
            "description": "<p>instructions of test_exercise</p>"
          },
          {
            "group": "Parameter",
            "type": "Enum",
            "optional": false,
            "field": "format",
            "description": "<p>format of test_exercise<code>Enum:[&quot;max_rep&quot;, &quot;multiselect&quot;, &quot;a_or_b&quot;]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "max_rep",
            "description": "<p>max_rep of test_exercise</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "multiselect",
            "description": "<p>multiselect of test_exercise</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "a_or_b",
            "description": "<p>a_or_b of test_exercise</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "textField",
            "description": "<p>text Field of test_exercise</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "test_exercise",
            "description": "<p>added test_exercise detail</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/test_exercises.js",
    "groupTitle": "Test_Exercises"
  },
  {
    "type": "delete",
    "url": "/admin/test_exercise/:test_exercise_id",
    "title": "Delete",
    "name": "Delete",
    "group": "Test_Exercises",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/test_exercises.js",
    "groupTitle": "Test_Exercises"
  },
  {
    "type": "post",
    "url": "/admin/test_exercise/filter",
    "title": "Filter",
    "name": "Filter",
    "description": "<p>Request Object :<pre><code> { pageSize: 10, page: 0, columnFilter: [ { id: &quot;firstName&quot;, value: &quot;mi&quot; } ], columnSort: [ { id: &quot;firstName&quot;, value: true } ], columnFilterEqual: [ { id: &quot;email&quot;, value: &quot;ake@narola.email&quot; } ] }</code></pre></p>",
    "group": "Test_Exercises",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "columnFilter",
            "description": "<p>columnFilter Object for filter data</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "columnSort",
            "description": "<p>columnSort Object for Sorting Data</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "columnFilterEqual",
            "description": "<p>columnFilterEqual Object for select box</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>pageSize</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>page number</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "filtered_test_exercises",
            "description": "<p>filtered details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"status\": 1,\n \"message\": \"filtered data is found\",\n \"count\": 2,\n \"filtered_total_pages\": 1,\n \"filtered_test_exercises\": \n [\n   object array of data\n ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/test_exercises.js",
    "groupTitle": "Test_Exercises"
  },
  {
    "type": "get",
    "url": "/admin/test_exercise/test_exercise_id",
    "title": "Get by ID",
    "name": "Get_Test_Exercises_by_ID",
    "group": "Test_Exercises",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "test_exercise",
            "description": "<p>JSON of test_exercises document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/test_exercises.js",
    "groupTitle": "Test_Exercises"
  },
  {
    "type": "get",
    "url": "/admin/test_exercise",
    "title": "Get all",
    "name": "Get_all",
    "group": "Test_Exercises",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "test_exercises",
            "description": "<p>Array of test_exercises document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/test_exercises.js",
    "groupTitle": "Test_Exercises"
  },
  {
    "type": "put",
    "url": "/admin/test_exercise/undo/:test_exercise_id",
    "title": "Undo",
    "name": "Undo",
    "group": "Test_Exercises",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "test_exercise",
            "description": "<p>test exercise detail</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/test_exercises.js",
    "groupTitle": "Test_Exercises"
  },
  {
    "type": "put",
    "url": "/admin/test_exercise",
    "title": "Update",
    "name": "Update",
    "group": "Test_Exercises",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of test_exercise</p>"
          },
          {
            "group": "Parameter",
            "type": "Enum",
            "optional": false,
            "field": "category",
            "description": "<p>category of test_exercise<code>Enum:[&quot;strength&quot;, &quot;flexibility&quot;, &quot;posture&quot;, &quot;cardio&quot;]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Enum",
            "optional": false,
            "field": "subCategory",
            "description": "<p>subCategory of test_exercise<code>Enum:[&quot;upper_body&quot;, &quot;side&quot;, &quot;lower_body&quot;, &quot;cardio&quot;]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>description of test_exercise</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": true,
            "field": "featureImage",
            "description": "<p>feature Image of test_exercise</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "images",
            "description": "<p>image of test_exercise</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "instructions",
            "description": "<p>instructions of test_exercise</p>"
          },
          {
            "group": "Parameter",
            "type": "Enum",
            "optional": false,
            "field": "format",
            "description": "<p>format of test_exercise<code>Enum:[&quot;max_rep&quot;, &quot;multiselect&quot;, &quot;a_or_b&quot;]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "max_rep",
            "description": "<p>max_rep of test_exercise</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "multiselect",
            "description": "<p>multiselect of test_exercise</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "a_or_b",
            "description": "<p>a_or_b of test_exercise</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "textField",
            "description": "<p>text Field of test_exercise</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": true,
            "field": "delete_multiselect_image_ids",
            "description": "<p>delete multiselect image ids of test_exercise's image records</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "test_exercise",
            "description": "<p>updated test_exercise detail</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/test_exercises.js",
    "groupTitle": "Test_Exercises"
  },
  {
    "type": "get",
    "url": "/user/profile",
    "title": "Get User Profile by AuthID",
    "name": "Get_Profile_by_AuthID",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "user",
            "description": "<p>Array of users document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/profile.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/profile/:username",
    "title": "Get User Profile by username",
    "name": "Get_Profile_by_username",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "user",
            "description": "<p>JSON of users document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/profile.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/profile/preferences",
    "title": "Get User Profile preferences",
    "name": "Get_Profile_preferences",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "user_settings",
            "description": "<p>JSON of users_settings document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/profile.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/profile/photo",
    "title": "Profile Picture - Update",
    "name": "Profile_Picture___Update",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_img",
            "description": "<p>base64 encoded data</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/profile.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/profile",
    "title": "Profile - Update",
    "name": "Profile___Update",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "firstName",
            "description": "<p>First name of user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lastName",
            "description": "<p>Last name of user</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "mobileNumber",
            "description": "<p>mobileNumber</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "height",
            "description": "<p>height</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "weight",
            "description": "<p>weight</p>"
          },
          {
            "group": "Parameter",
            "type": "Enum",
            "optional": true,
            "field": "gender",
            "description": "<p>gender | Possible Values ('male', 'female', 'transgender')</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "dateOfBirth",
            "description": "<p>Date of Birth</p>"
          },
          {
            "group": "Parameter",
            "type": "Enum-Array",
            "optional": true,
            "field": "goals",
            "description": "<p>goals | Possible Values ('gain_muscle', 'improve_mobility', 'lose_fat','gain_strength', 'gain_power', 'increase_endurance')</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "aboutMe",
            "description": "<p>aboutMe</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "workoutLocation",
            "description": "<p>workoutLocation</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "status",
            "description": "<p>status of profile</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "user",
            "description": "<p>JSON of users document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/profile.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/profile/preferences",
    "title": "Save User Preference",
    "name": "Save_Preference",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "distance",
            "description": "<p>distance unit of user. <code>Enum : [&quot;km&quot;, &quot;mile&quot;]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "weight",
            "description": "<p>weight unit of user. <code>Enum : [&quot;kg&quot;, &quot;lb&quot;]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bodyMeasurement",
            "description": "<p>body measurement unit of user. <code>Enum : [&quot;cm&quot;, &quot;inch&quot;]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "postAccessibility",
            "description": "<p>post accessibility of user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "commentAccessibility",
            "description": "<p>comment accessibility of user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "messageAccessibility",
            "description": "<p>message accessibility of user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "friendRequestAccessibility",
            "description": "<p>friend request accessibility of user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "user_settings",
            "description": "<p>user preference in user_settings detail.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/profile.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/badge/:type",
    "title": "Get all",
    "name": "Get_all",
    "group": "User_Badges",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "type",
            "description": "<p>type of badges<code>Possible values complete,incomplete or tracking</code></p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "badges",
            "description": "<p>JSON of badges_assign's document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/badges.js",
    "groupTitle": "User_Badges"
  },
  {
    "type": "put",
    "url": "/admin/user/change_block_status",
    "title": "Block/Unblock User",
    "name": "Block_Unblock_User",
    "group": "User_Block_Unblock_User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authUserId",
            "description": "<p>user auth Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>user block status<code>true|false</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "user",
            "description": "<p>updated user detail</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/users.js",
    "groupTitle": "User_Block_Unblock_User"
  },
  {
    "type": "get",
    "url": "/user/body_fat_log",
    "title": "Save",
    "name": "Save",
    "group": "User_Body_Fat_Logs",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "body_fat_logs",
            "description": "<p>JSON of body_fat_logs document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/body_fat_logs.js",
    "groupTitle": "User_Body_Fat_Logs"
  },
  {
    "type": "get",
    "url": "/user/bodypart",
    "title": "Get all",
    "name": "Get_all",
    "group": "User_Body_Parts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "bodyparts",
            "description": "<p>Array of bodyparts document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/bodyparts.js",
    "groupTitle": "User_Body_Parts"
  },
  {
    "type": "put",
    "url": "/user/change_password",
    "title": "Change Password",
    "name": "Change_Password",
    "group": "User_Change_Password",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>newPassword of user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "user",
            "description": "<p>updated user detail</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/change_password.js",
    "groupTitle": "User_Change_Password"
  },
  {
    "type": "delete",
    "url": "/user/chat/:username/:message_id",
    "title": "Delete",
    "name": "Delete",
    "group": "User_Chat",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/chat.js",
    "groupTitle": "User_Chat"
  },
  {
    "type": "delete",
    "url": "/user/chat/:username",
    "title": "Delete",
    "name": "Delete",
    "group": "User_Chat",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/chat.js",
    "groupTitle": "User_Chat"
  },
  {
    "type": "get",
    "url": "/user/chat/channel_id/:start?/:limit?",
    "title": "Get recently messages",
    "name": "Get_recently_messages",
    "group": "User_Chat",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "channels",
            "description": "<p>Array of conversations_replies document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/chat.js",
    "groupTitle": "User_Chat"
  },
  {
    "type": "get",
    "url": "/user/chat/messages/:start?/:limit?",
    "title": "Get recently messages",
    "name": "Get_recently_messages",
    "group": "User_Chat",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "messages",
            "description": "<p>Array of conversations_replies document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/chat.js",
    "groupTitle": "User_Chat"
  },
  {
    "type": "get",
    "url": "/user/chat/",
    "title": "Get unread  messages count",
    "name": "Get_unread_messages_count",
    "group": "User_Chat",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "channels",
            "description": "<p>Array of conversations_replies document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/chat.js",
    "groupTitle": "User_Chat"
  },
  {
    "type": "post",
    "url": "/user/chat",
    "title": "Send",
    "name": "Send",
    "group": "User_Chat",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message of chat conversation</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "friendId",
            "description": "<p>Id of friend</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "channel",
            "description": "<p>message sent in conversations_replies detail</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/chat.js",
    "groupTitle": "User_Chat"
  },
  {
    "type": "post",
    "url": "/user/dashboard",
    "title": "Get User Dashboard",
    "name": "Get_User_Dashboard",
    "group": "User_Dashboard",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "today",
            "description": "<p>today date</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "dashboard",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/dashboard.js",
    "groupTitle": "User_Dashboard"
  },
  {
    "type": "post",
    "url": "/user/dashboard/body_fat",
    "title": "Save",
    "name": "Save_Bodyfat",
    "group": "User_Dashboard",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "start",
            "description": "<p>start date</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "end",
            "description": "<p>end date</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "widgets",
            "description": "<p>JSON of widgets_settings's document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/dashboard.js",
    "groupTitle": "User_Dashboard"
  },
  {
    "type": "post",
    "url": "/user/dashboard/muscle",
    "title": "Save",
    "name": "Save_Muscle",
    "group": "User_Dashboard",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "type",
            "description": "<p>type type of muscle</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "start",
            "description": "<p>start date</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "end",
            "description": "<p>end date</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "widgets",
            "description": "<p>JSON of widgets_settings's document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/dashboard.js",
    "groupTitle": "User_Dashboard"
  },
  {
    "type": "post",
    "url": "/user/dashboard/complete",
    "title": "Workout completed",
    "name": "Workout_completed",
    "group": "User_Dashboard",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "exerciseId",
            "description": "<p>id of Day</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "isCompleted",
            "description": "<p>status of workout</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/dashboard.js",
    "groupTitle": "User_Dashboard"
  },
  {
    "type": "get",
    "url": "/user/equipment",
    "title": "Get User's all Equipment",
    "name": "Get_all_User_s_Equipment",
    "group": "User_Equipment",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "equipments",
            "description": "<p>Array of equipments document.</p> <pre><code>Response Data: <br>{<br>     \"status\": 1,<br>     \"message\": \"Record founds\",<br>     \"equipments\": {<br>         \"user_equipments\": {},<br>         \"all_equipments\": []<br>     }<br>}</code></pre>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/equipment.js",
    "groupTitle": "User_Equipment"
  },
  {
    "type": "post",
    "url": "/user/equipment/",
    "title": "Save User Equipment",
    "name": "Save_Equipment",
    "group": "User_Equipment",
    "description": "<p>Save User Equipment API is for save and update User Equipment. if record is exists it would update else insert.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "equipmentIds",
            "description": "<p>equipmentIds of equipments</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "user_equipments",
            "description": "<p>Array of user's equipments document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/equipment.js",
    "groupTitle": "User_Equipment"
  },
  {
    "type": "get",
    "url": "/user/exercise",
    "title": "Get all",
    "name": "Get_all",
    "group": "User_Exercise",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "exercise",
            "description": "<p>Array of exercise_types's document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/exercise.js",
    "groupTitle": "User_Exercise"
  },
  {
    "type": "get",
    "url": "/user/exercise/names",
    "title": "Get all Exercise Name and ID",
    "name": "Get_all_Exercise_Name_and_ID",
    "group": "User_Exercise",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "exercises",
            "description": "<p>Array of exercise_types's document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/exercise.js",
    "groupTitle": "User_Exercise"
  },
  {
    "type": "get",
    "url": "/user/exercise_preference",
    "title": "Get by User ID",
    "name": "Get_by_User_ID",
    "group": "User_Exercise_Preferences",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "exercise_preference",
            "description": "<p>exercise_preference's document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/exercise_preference.js",
    "groupTitle": "User_Exercise_Preferences"
  },
  {
    "type": "get",
    "url": "/user/exercise_preference/reset",
    "title": "Reset Exercise Preferences",
    "name": "Reset_Exercise_Preferences",
    "group": "User_Exercise_Preferences",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "exercise_preference",
            "description": "<p>exercise_preference's document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/exercise_preference.js",
    "groupTitle": "User_Exercise_Preferences"
  },
  {
    "type": "post",
    "url": "/user/exercise_preference",
    "title": "Save exercise Preference",
    "name": "Save",
    "group": "User_Exercise_Preferences",
    "description": "<p>Add exercise Preference if not exists else update existing document</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "workoutIntensity",
            "description": "<p>workout Intensity of user exercise</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "exerciseExperience",
            "description": "<p>exercise Experience</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "excludeExercise",
            "description": "<p>exclude Exercise ref ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "excludeExerciseType",
            "description": "<p>exclude Exercise Type ref ID of exercise type</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "existingInjuries",
            "description": "<p>existing Injuries ref ID of body part collection</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "workoutscheduletype",
            "description": "<p>workout schedule type <br><code>1 for Automatic <br>2 for manual</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "timeSchedule",
            "description": "<p>timeSchedule of exercise preference <br><code>{ &quot;monday&quot;:10, &quot;tuesday&quot;:20, &quot;wednesday&quot;:40, &quot;thursday&quot;:103, &quot;friday&quot;:40, &quot;saturday&quot;:50, &quot;sunday&quot;:70 }</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "exercise_preference",
            "description": "<p>exercise_preference details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/exercise_preference.js",
    "groupTitle": "User_Exercise_Preferences"
  },
  {
    "type": "get",
    "url": "/user/exercise_type",
    "title": "Get all",
    "name": "Get_all",
    "group": "User_Exercise_Type",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "exercise_types",
            "description": "<p>Array of exercise_types's document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/exercise_type.js",
    "groupTitle": "User_Exercise_Type"
  },
  {
    "type": "put",
    "url": "/user/friend/:request_id",
    "title": "Approve request",
    "name": "Approve_request",
    "group": "User_Friends",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "friend",
            "description": "<p>approved friend detail</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/friends.js",
    "groupTitle": "User_Friends"
  },
  {
    "type": "delete",
    "url": "/user/friend/:request_id",
    "title": "Delete request",
    "name": "Delete_request",
    "group": "User_Friends",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/friends.js",
    "groupTitle": "User_Friends"
  },
  {
    "type": "get",
    "url": "/user/friend/:username?/:type?/:skip?/:limit?/:sort?",
    "title": "Get by Username",
    "name": "Get_by_Username",
    "group": "User_Friends",
    "description": "<p>Get friends by Username second parameter is used to get by status of friend 1 for pending friends and 2 for approved friend</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "friend",
            "description": "<p>Array of friends document</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Response",
        "content": "\"self\": 1,\n\"isFriend\": 0,\n\"status\": 1,\n\"message\": \" found\",\n\"friends\": [\n    {\n    }\n  ]",
        "type": "json"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/friends.js",
    "groupTitle": "User_Friends"
  },
  {
    "type": "post",
    "url": "/user/friend",
    "title": "Send request",
    "name": "Send_request",
    "group": "User_Friends",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "friendId",
            "description": "<p>Id of friend</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "friend",
            "description": "<p>request sent in friends detail</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/friends.js",
    "groupTitle": "User_Friends"
  },
  {
    "type": "post",
    "url": "/user/gallery",
    "title": "Add",
    "name": "Add",
    "group": "User_Gallery",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "images",
            "description": "<p>User's  Images</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Description of Images</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "privacy",
            "description": "<p>privacy of Image <br><code>1 for OnlyMe<br>2 for Friends<br>3 for Public</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>message for successful and unsuccessful image upload</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/gallery.js",
    "groupTitle": "User_Gallery"
  },
  {
    "type": "delete",
    "url": "/user/gallery/:photo_id",
    "title": "Delete",
    "name": "Delete",
    "group": "User_Gallery",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/gallery.js",
    "groupTitle": "User_Gallery"
  },
  {
    "type": "get",
    "url": "/user/gallery",
    "title": "Get all",
    "name": "Get_all",
    "group": "User_Gallery",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "user_gallery_photos",
            "description": "<p>JSON of user post photos 's document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/gallery.js",
    "groupTitle": "User_Gallery"
  },
  {
    "type": "get",
    "url": "/user/gallery/:user_post_id",
    "title": "Get by ID",
    "name": "Get_by_ID",
    "group": "User_Gallery",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "user_post_photo",
            "description": "<p>user_post_photo's document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/gallery.js",
    "groupTitle": "User_Gallery"
  },
  {
    "type": "put",
    "url": "/user/gallery/:photo_id",
    "title": "Update",
    "name": "Update",
    "group": "User_Gallery",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "image",
            "description": "<p>User's  Image</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of Image</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "privacy",
            "description": "<p>privacy of Image <br><code>1 for OnlyMe<br>2 for Friends<br>3 for Public</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>status of Image <br><code>1 for Active<br>2 for Inactive</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "user_post_photo",
            "description": "<p>user_post_photo details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/gallery.js",
    "groupTitle": "User_Gallery"
  },
  {
    "type": "post",
    "url": "/user/measurement/get_log_dates_by_date",
    "title": "Get Logs of User Measurement",
    "name": "Get_Logs_of_User_Measurement",
    "group": "User_Measurement",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "logDate",
            "description": "<p>logDate of user's Measurement</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "logdates",
            "description": "<p>Measurement details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/measurement.js",
    "groupTitle": "User_Measurement"
  },
  {
    "type": "post",
    "url": "/user/measurement/get_by_id_logdate",
    "title": "Get User Measurement",
    "name": "Get_User_Measurement_by_User_Id_and_LogDate",
    "group": "User_Measurement",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "logDate",
            "description": "<p>logDate of bodymesurement</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "measurement_logs",
            "description": "<p>data of body_measurement document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/measurement.js",
    "groupTitle": "User_Measurement"
  },
  {
    "type": "post",
    "url": "/user/measurement",
    "title": "Save User Measurement",
    "name": "Save_User_Measurement",
    "group": "User_Measurement",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "logDate",
            "description": "<p>logDate of body mesurement</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "neck",
            "description": "<p>neck of body mesurement</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "shoulder",
            "description": "<p>shoulder of body mesurement</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "chest",
            "description": "<p>chest of body mesurement</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "upperArm",
            "description": "<p>upperArm of body mesurement</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "waist",
            "description": "<p>waist of body mesurement</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "forearm",
            "description": "<p>forearm of body mesurement</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "hips",
            "description": "<p>hips of body mesurement</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "thigh",
            "description": "<p>thigh of body mesurement</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "calf",
            "description": "<p>calf of body mesurement</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "weight",
            "description": "<p>weight of body mesurement</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "height",
            "description": "<p>height of body mesurement</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "measurement",
            "description": "<p>Measurement details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/measurement.js",
    "groupTitle": "User_Measurement"
  },
  {
    "type": "get",
    "url": "/user/notification/:type?",
    "title": "Get Notification",
    "name": "Get_Notification",
    "group": "User_Notification",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "notifications",
            "description": "<p>Array of notifications document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/notifications.js",
    "groupTitle": "User_Notification"
  },
  {
    "type": "get",
    "url": "/user/notification/all/:skip?/:limit?/:sort?",
    "title": "Get all Notification",
    "name": "Get_Notification",
    "group": "User_Notification",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "notifications",
            "description": "<p>Array of notifications document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/notifications.js",
    "groupTitle": "User_Notification"
  },
  {
    "type": "put",
    "url": "/user/notification/:notification_id",
    "title": "Make Notification as Read",
    "name": "Make_Notification_as_Read",
    "group": "User_Notification",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/notifications.js",
    "groupTitle": "User_Notification"
  },
  {
    "type": "put",
    "url": "/user/users_nutritions/:notification_id",
    "title": "Make Notification as Read",
    "name": "Make_Notification_as_Read",
    "group": "User_Notification",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/users_nutritions.js",
    "groupTitle": "User_Notification"
  },
  {
    "type": "put",
    "url": "/user/notification",
    "title": "Mark as read",
    "name": "Mark_as_read",
    "group": "User_Notification",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/users_nutritions.js",
    "groupTitle": "User_Notification"
  },
  {
    "type": "put",
    "url": "/user/notification",
    "title": "Mark as read",
    "name": "Mark_as_read",
    "group": "User_Notification",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/notifications.js",
    "groupTitle": "User_Notification"
  },
  {
    "type": "get",
    "url": "/user/nutrition_preference",
    "title": "Get by User ID",
    "name": "Get_by_User_ID",
    "group": "User_Nutrition_Preference",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "nutrition_preference",
            "description": "<p>nutrition_preference's document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/nutrition_preferences.js",
    "groupTitle": "User_Nutrition_Preference"
  },
  {
    "type": "get",
    "url": "/user/nutrition_preference/reset",
    "title": "Reset Nutrition Preference",
    "name": "Reset_Nutrition_Preference",
    "group": "User_Nutrition_Preference",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "nutrition_preference",
            "description": "<p>nutrition_preference's document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/nutrition_preferences.js",
    "groupTitle": "User_Nutrition_Preference"
  },
  {
    "type": "post",
    "url": "/user/nutrition_preference",
    "title": "Save Nutrition Preference",
    "name": "Save",
    "group": "User_Nutrition_Preference",
    "description": "<p>Add Nutrition Preference if not exists else update existing document</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Enum-Array",
            "optional": false,
            "field": "dietRestrictionLabels",
            "description": "<p>dietRestrictionLabels</p>"
          },
          {
            "group": "Parameter",
            "type": "Enum-Array",
            "optional": false,
            "field": "healthRestrictionLabels",
            "description": "<p>healthRestrictionLabels</p>"
          },
          {
            "group": "Parameter",
            "type": "Enum-Array",
            "optional": false,
            "field": "excludeIngredients",
            "description": "<p>excludeIngredients</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "nutritionTargets",
            "description": "<p>nutritionTargets  [title:{title},start:{start value},end:{end value}]</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "maxRecipeTime",
            "description": "<p>max Recipe Time <code>[{dayDrive : enum, time : 'value'}]</code> | Possible Values (&quot;breakfast&quot;, &quot;lunch&quot;, &quot;dinner&quot;,&quot;Snacks&quot;)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "nutrition_preference",
            "description": "<p>nutrition_preference details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/nutrition_preferences.js",
    "groupTitle": "User_Nutrition_Preference"
  },
  {
    "type": "post",
    "url": "/user/personal_goal",
    "title": "Add",
    "name": "Add",
    "group": "User_Personal_Goal",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "target",
            "description": "<p>target of goal</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "task",
            "description": "<p>task of goal</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "unit",
            "description": "<p>unit of goal</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "goal",
            "description": "<p>message for successful user_personal_goals added</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/personal_goals.js",
    "groupTitle": "User_Personal_Goal"
  },
  {
    "type": "delete",
    "url": "/user/personal_goal/:goal_id",
    "title": "Delete",
    "name": "Delete",
    "group": "User_Personal_Goal",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/personal_goals.js",
    "groupTitle": "User_Personal_Goal"
  },
  {
    "type": "get",
    "url": "/user/personal_goal/:type/:start/:limit",
    "title": "Get all",
    "name": "Get_all",
    "group": "User_Personal_Goal",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>type of completed goal 1 for completed and 0 for uncompleted</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "start",
            "description": "<p>start of records</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>offset of records</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "goals",
            "description": "<p>JSON of user_personal_goals's document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/personal_goals.js",
    "groupTitle": "User_Personal_Goal"
  },
  {
    "type": "get",
    "url": "/user/personal_goal/:goal_id",
    "title": "Get by Goal ID",
    "name": "Get_by_Goal_ID",
    "group": "User_Personal_Goal",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "goal",
            "description": "<p>user_personal_goals's document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/personal_goals.js",
    "groupTitle": "User_Personal_Goal"
  },
  {
    "type": "put",
    "url": "/user/personal_goal/:goal_id",
    "title": "Update(completed goal)",
    "name": "Update_completed_goal_",
    "group": "User_Personal_Goal",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "goal",
            "description": "<p>user_personal_goals details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/personal_goals.js",
    "groupTitle": "User_Personal_Goal"
  },
  {
    "type": "post",
    "url": "/user/post/comment",
    "title": "Add",
    "name": "Add",
    "group": "User_Post_Comment",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>comment of post</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "postId",
            "description": "<p>postId of post</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "timeline",
            "description": "<p>added comment detail</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/comment.js",
    "groupTitle": "User_Post_Comment"
  },
  {
    "type": "delete",
    "url": "/user/post/comment/:comment_id",
    "title": "Delete",
    "name": "Delete",
    "group": "User_Post_Comment",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/comment.js",
    "groupTitle": "User_Post_Comment"
  },
  {
    "type": "put",
    "url": "/user/post/comment/:comment_id",
    "title": "Update",
    "name": "Update",
    "group": "User_Post_Comment",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>comment of post</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "postId",
            "description": "<p>postId of post</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "timeline",
            "description": "<p>updated comment detail</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/comment.js",
    "groupTitle": "User_Post_Comment"
  },
  {
    "type": "post",
    "url": "/user/flag_on_post",
    "title": "Send",
    "name": "Send",
    "group": "User_Post_Flag",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type of flag</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>comment on flag</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "flag",
            "description": "<p>detail of flag on post</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/flag_on_post.js",
    "groupTitle": "User_Post_Flag"
  },
  {
    "type": "get",
    "url": "/user/primary_goal/",
    "title": "Get Goal",
    "name": "Get_Goal",
    "group": "User_Primary_Goal",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "goal",
            "description": "<p>goal document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/primary_goals.js",
    "groupTitle": "User_Primary_Goal"
  },
  {
    "type": "post",
    "url": "/user/user_program/day",
    "title": "Add User program day",
    "name": "Add_User_program_day",
    "group": "User_Program",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of workout</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of workout</p>"
          },
          {
            "group": "Parameter",
            "type": "Enum",
            "optional": false,
            "field": "type",
            "description": "<p>type of workout | Possbile value <code>Enum: [&quot;exercise&quot;,&quot;restday&quot;]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "day",
            "description": "<p>day of workout</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "program",
            "description": "<p>workout day details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_program.js",
    "groupTitle": "User_Program"
  },
  {
    "type": "post",
    "url": "/user/user_program",
    "title": "Add user's program",
    "name": "Add_user_s_program",
    "group": "User_Program",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of program</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of program</p>"
          },
          {
            "group": "Parameter",
            "type": "Enum",
            "optional": false,
            "field": "type",
            "description": "<p>type of program creator | Possible Values<code>Enum : ['admin','user'] </code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "program",
            "description": "<p>JSON of user_programs document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_program.js",
    "groupTitle": "User_Program"
  },
  {
    "type": "post",
    "url": "/user/user_program/workout",
    "title": "Add user's program's exercises",
    "name": "Add_user_s_program_s_exercises",
    "group": "User_Program",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "programId",
            "description": "<p>Id of program</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of workout</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of workout</p>"
          },
          {
            "group": "Parameter",
            "type": "Enum",
            "optional": false,
            "field": "type",
            "description": "<p>type of workout | Possbile value <code>Enum: [&quot;exercise&quot;,&quot;restday&quot;]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "day",
            "description": "<p>day of workout</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "exercises",
            "description": "<p>list of exercises of workout</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "sequence",
            "description": "<p>sequence of exercises of workout</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "workout",
            "description": "<p>JSON of user_programs document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_program.js",
    "groupTitle": "User_Program"
  },
  {
    "type": "post",
    "url": "/user/user_program/copy",
    "title": "Copy User Program",
    "name": "Copy_User_Program",
    "group": "User_Program",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "workoutId",
            "description": "<p>workoutId of workout</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "day",
            "description": "<p>day of workout</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_program.js",
    "groupTitle": "User_Program"
  },
  {
    "type": "delete",
    "url": "/user/user_program/:program_id",
    "title": "Delete user's program by _id",
    "name": "Delete_user_s_program_by__id",
    "group": "User_Program",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_program.js",
    "groupTitle": "User_Program"
  },
  {
    "type": "post",
    "url": "/user/user_program/delete/exercises",
    "title": "Delete user's program's exercise by _ids",
    "name": "Delete_user_s_program_s_exercise_by__ids",
    "group": "User_Program",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "exercisesIds",
            "description": "<p>Array list of exercises ids</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_program.js",
    "groupTitle": "User_Program"
  },
  {
    "type": "get",
    "url": "/user/user_program/workout/:workout_id",
    "title": "Get user's program by workout_id",
    "name": "Get_Group_by_workout",
    "group": "User_Program",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "workouts",
            "description": "<p>JSON of user_program document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_program.js",
    "groupTitle": "User_Program"
  },
  {
    "type": "get",
    "url": "/user/user_program/",
    "title": "Get user's program",
    "name": "Get_user_s_program",
    "group": "User_Program",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "programs",
            "description": "<p>JSON of user_programs document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_program.js",
    "groupTitle": "User_Program"
  },
  {
    "type": "get",
    "url": "/user/user_program/names",
    "title": "Get user's program",
    "name": "Get_user_s_program",
    "group": "User_Program",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "user_programs",
            "description": "<p>JSON of user_programs document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_program.js",
    "groupTitle": "User_Program"
  },
  {
    "type": "get",
    "url": "/user/user_program/:program_id",
    "title": "Get user's program by _id",
    "name": "Get_user_s_program_by__id",
    "group": "User_Program",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "program",
            "description": "<p>JSON of user_program document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_program.js",
    "groupTitle": "User_Program"
  },
  {
    "type": "put",
    "url": "/user/user_program/workout/:workout_day_id",
    "title": "Update user's program's exercises",
    "name": "Update_user_s_program_s_exercises",
    "group": "User_Program",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type of program</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subType",
            "description": "<p>subType of program</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userWorkoutsId",
            "description": "<p>userWorkoutsId of program</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "exercises",
            "description": "<p>list of exercises of workout</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "sequence",
            "description": "<p>sequence of exercises of workout</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "workouts",
            "description": "<p>JSON of user_programs document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_program.js",
    "groupTitle": "User_Program"
  },
  {
    "type": "put",
    "url": "/user/user_program/day/:program_day_id",
    "title": "update user's program",
    "name": "update_user_s_program",
    "group": "User_Program",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "program",
            "description": "<p>JSON of user_programs document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_program.js",
    "groupTitle": "User_Program"
  },
  {
    "type": "put",
    "url": "/user/user_program",
    "title": "update user's program",
    "name": "update_user_s_program",
    "group": "User_Program",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "program",
            "description": "<p>JSON of user_programs document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_program.js",
    "groupTitle": "User_Program"
  },
  {
    "type": "post",
    "url": "/user/progress_photo",
    "title": "Add",
    "name": "Add",
    "group": "User_Progress_Photo",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "image",
            "description": "<p>User's Progress Image</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of progress</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>date of progress photo</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "user_progress_photo",
            "description": "<p>user_progress_photo details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_progress_photos.js",
    "groupTitle": "User_Progress_Photo"
  },
  {
    "type": "delete",
    "url": "/user/progress_photo/:photo_id",
    "title": "Delete",
    "name": "Delete",
    "group": "User_Progress_Photo",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_progress_photos.js",
    "groupTitle": "User_Progress_Photo"
  },
  {
    "type": "get",
    "url": "/user/progress_photo/:username/:start?/:limit?:/:sort_by",
    "title": "Get all",
    "name": "Get_all",
    "group": "User_Progress_Photo",
    "description": "<p>username: user's username, start use for skip record. default is 0, limit is use to limit the records. default is : 10</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "user_progress_photos",
            "description": "<p>Array of user's progress_photos 's document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_progress_photos.js",
    "groupTitle": "User_Progress_Photo"
  },
  {
    "type": "get",
    "url": "/user/progress_photo/username/latest_month_wise/:limit?",
    "title": "Get all Latest",
    "name": "Get_all_Latest",
    "group": "User_Progress_Photo",
    "description": "<p>limit is use to limit the records. default is : 10</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "user_progress_photos",
            "description": "<p>Array of user's progress_photos 's document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_progress_photos.js",
    "groupTitle": "User_Progress_Photo"
  },
  {
    "type": "get",
    "url": "/user/progress_photo/:user_photo_id",
    "title": "Get by ID",
    "name": "Get_by_ID",
    "group": "User_Progress_Photo",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "user_progress_photo",
            "description": "<p>progress_photo's document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_progress_photos.js",
    "groupTitle": "User_Progress_Photo"
  },
  {
    "type": "post",
    "url": "/user/recipe/",
    "title": "Add",
    "name": "Add",
    "group": "User_Recipe",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "user_recipe",
            "description": "<p>user recipe object</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "user_recipe",
            "description": "<p>user_recipes details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_recipe.js",
    "groupTitle": "User_Recipe"
  },
  {
    "type": "put",
    "url": "/user/recipe/",
    "title": "Complete recipe",
    "name": "Complete_recipe",
    "group": "User_Recipe",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>date of recipe</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_recipe.js",
    "groupTitle": "User_Recipe"
  },
  {
    "type": "delete",
    "url": "/user/recipe/:recipe_id",
    "title": "Delete",
    "name": "Delete",
    "group": "User_Recipe",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_recipe.js",
    "groupTitle": "User_Recipe"
  },
  {
    "type": "get",
    "url": "/user/recipe/",
    "title": "Get recipe",
    "name": "Get",
    "group": "User_Recipe",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "user_recipe",
            "description": "<p>Array of user_recipes 's document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_recipe.js",
    "groupTitle": "User_Recipe"
  },
  {
    "type": "post",
    "url": "/user/search",
    "title": "Search users",
    "name": "Search_users",
    "group": "User_Search",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of user</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "start",
            "description": "<p>start of user</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>limit of user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "users",
            "description": "<p>data of users document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/search.js",
    "groupTitle": "User_Search"
  },
  {
    "type": "post",
    "url": "/user/secondary_goal",
    "title": "Add",
    "name": "Add",
    "group": "User_Secondary_Goal",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "task",
            "description": "<p>task of goal | Possible values<code> gain_muscle, improve_mobility, lose_fat, gain_strength, gain_power, increase_endurance </code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "goal",
            "description": "<p>message for successful user_secondary_goals added</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/secondary_goals.js",
    "groupTitle": "User_Secondary_Goal"
  },
  {
    "type": "delete",
    "url": "/user/secondary_goal/:goal_id",
    "title": "Delete",
    "name": "Delete",
    "group": "User_Secondary_Goal",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/secondary_goals.js",
    "groupTitle": "User_Secondary_Goal"
  },
  {
    "type": "get",
    "url": "/user/secondary_goal",
    "title": "Get all",
    "name": "Get_all",
    "group": "User_Secondary_Goal",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "goals",
            "description": "<p>JSON of user_secondary_goals 's document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/secondary_goals.js",
    "groupTitle": "User_Secondary_Goal"
  },
  {
    "type": "get",
    "url": "/user/secondary_goal/:goal_id",
    "title": "Get by Goal ID",
    "name": "Get_by_Goal_ID",
    "group": "User_Secondary_Goal",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "goal",
            "description": "<p>user_secondary_goals's document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/secondary_goals.js",
    "groupTitle": "User_Secondary_Goal"
  },
  {
    "type": "post",
    "url": "/user/statistics/graph_data",
    "title": "Get Graph Data",
    "name": "Get_Graph_Data",
    "group": "User_Statistics",
    "description": "<p><font color=red>Type can be strength, cardio</font></p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "stats",
            "description": "<p>JSON of statistics's document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/statistics.js",
    "groupTitle": "User_Statistics"
  },
  {
    "type": "post",
    "url": "/user/statistics/single",
    "title": "Get",
    "name": "Get_statistics_data_for_strength_and_cardio",
    "group": "User_Statistics",
    "description": "<p><font color=red>Type can be strength, cardio</font></p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "stats",
            "description": "<p>JSON of statistics's document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/statistics.js",
    "groupTitle": "User_Statistics"
  },
  {
    "type": "post",
    "url": "/user/statistics",
    "title": "Get",
    "name": "Get_statistics_data_for_strength_and_cardio",
    "group": "User_Statistics",
    "description": "<p><font color=red>Type can be strength, cardio</font></p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "stats",
            "description": "<p>JSON of statistics's document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/statistics.js",
    "groupTitle": "User_Statistics"
  },
  {
    "type": "post",
    "url": "/user/test_exercise",
    "title": "Save exercise Preference",
    "name": "Save",
    "group": "User_Test_Exercise",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\"user_test_exercises\":{\n< test exercise id >: {\n \"format\": < format of test exercise >,\n \"value\": < value of test exercise >\n},\n< test exercise id >: {\n \"format\": < format of test exercise >,\n\"value\": < value of test exercise >\n},\n< test exercise id >: {\n \"format\": < format of test exercise >,\n \"value\": < value of test exercise >\n},\ntest exercise id >: {\n\"format\": < format of test exercise >,\n \"value\": < value of test exercise >\n}\n}\n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "user_test_exercies",
            "description": "<p>user_test_exercies  details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/test_exercises.js",
    "groupTitle": "User_Test_Exercise"
  },
  {
    "type": "delete",
    "url": "/user/test_exercise/reset",
    "title": "Delete Test Exercise",
    "name": "Test_Exercise",
    "group": "User_Test_Exercise",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>message of delete</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/test_exercises.js",
    "groupTitle": "User_Test_Exercise"
  },
  {
    "type": "get",
    "url": "/user/test_exercise",
    "title": "Get all",
    "name": "Get_all",
    "group": "User_Test_Exercises",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Admin's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "test_exercises",
            "description": "<p>Array of test_exercises document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/test_exercises.js",
    "groupTitle": "User_Test_Exercises"
  },
  {
    "type": "post",
    "url": "/user/timeline",
    "title": "Add",
    "name": "Add",
    "group": "User_Timeline",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": true,
            "field": "images",
            "description": "<p>User's  Images is required on if description is not exist.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "onWall",
            "description": "<p>id of user on whose timeline you are posting post</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>image caption or timeline post is required on if images is not exist.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "privacy",
            "description": "<p>privacy of Image <br><code>1 for OnlyMe<br>2 for Friends<br>3 for Public</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>message for successful and unsuccessful image upload</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/timeline.js",
    "groupTitle": "User_Timeline"
  },
  {
    "type": "delete",
    "url": "/user/timeline/:timelineId",
    "title": "Delete",
    "name": "Delete",
    "group": "User_Timeline",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/timeline.js",
    "groupTitle": "User_Timeline"
  },
  {
    "type": "get",
    "url": "/user/timeline/privacy/:username",
    "title": "Get User Preference",
    "name": "Get_Preference",
    "group": "User_Timeline",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "user_settings",
            "description": "<p>user preference in user_settings detail</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/timeline.js",
    "groupTitle": "User_Timeline"
  },
  {
    "type": "get",
    "url": "/user/timeline/:username/:start?/:offset?",
    "title": "Get all",
    "name": "Get_all",
    "group": "User_Timeline",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "timeline",
            "description": "<p>JSON of user_posts 's document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/timeline.js",
    "groupTitle": "User_Timeline"
  },
  {
    "type": "get",
    "url": "/user/timeline/:post_id",
    "title": "Get by ID",
    "name": "Get_by_ID",
    "group": "User_Timeline",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "timeline",
            "description": "<p>JSON of user_posts 's document</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/timeline.js",
    "groupTitle": "User_Timeline"
  },
  {
    "type": "get",
    "url": "/user/timeline/:user_post_id",
    "title": "Get by ID",
    "name": "Get_by_ID",
    "group": "User_Timeline",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "user_post_photo",
            "description": "<p>user_post_photo's document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/timeline.js",
    "groupTitle": "User_Timeline"
  },
  {
    "type": "get",
    "url": "/user/timeline/widgets/:username",
    "title": "Get user's widgets",
    "name": "Get_user_s_widgets",
    "group": "User_Timeline",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>widgets data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/timeline.js",
    "groupTitle": "User_Timeline"
  },
  {
    "type": "post",
    "url": "/user/timeline/body_fat",
    "title": "Save",
    "name": "Save_Bodyfat",
    "group": "User_Timeline",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "start",
            "description": "<p>start date</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "end",
            "description": "<p>end date</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "widgets",
            "description": "<p>JSON of widgets_settings's document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/timeline.js",
    "groupTitle": "User_Timeline"
  },
  {
    "type": "post",
    "url": "/user/timeline/muscle",
    "title": "Save",
    "name": "Save_Muscle",
    "group": "User_Timeline",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "type",
            "description": "<p>type type of muscle</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "start",
            "description": "<p>start date</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "end",
            "description": "<p>end date</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "widgets",
            "description": "<p>JSON of widgets_settings's document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/timeline.js",
    "groupTitle": "User_Timeline"
  },
  {
    "type": "put",
    "url": "/user/timeline/:timelineId",
    "title": "Update",
    "name": "Update",
    "group": "User_Timeline",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Description of Image</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "privacy",
            "description": "<p>privacy of Image <br><code>1 for OnlyMe<br>2 for Friends<br>3 for Public</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "status",
            "description": "<p>status of Image <br><code>1 for Active<br>2 for Inactive</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "user_post_photo",
            "description": "<p>user_post_photo details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/timeline.js",
    "groupTitle": "User_Timeline"
  },
  {
    "type": "post",
    "url": "/user/widgets/:type",
    "title": "Save",
    "name": "Save_Widgets",
    "group": "User_Widgets",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "widgets",
            "description": "<p>JSON of widgets_settings's document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/widgets.js",
    "groupTitle": "User_Widgets"
  },
  {
    "type": "post",
    "url": "/user/workout/first_workout",
    "title": "Get all user's workout",
    "name": "Get_all_user_s_workout",
    "group": "User_Workout",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workout_id",
            "description": "<p>Id of user_workout document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_workouts.js",
    "groupTitle": "User_Workout"
  },
  {
    "type": "post",
    "url": "/user/workout/today",
    "title": "Get all user's workout",
    "name": "Get_all_user_s_workout",
    "group": "User_Workout",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "user_workouts",
            "description": "<p>JSON of user_workout document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_workouts.js",
    "groupTitle": "User_Workout"
  },
  {
    "type": "post",
    "url": "/user/workout/calendar_list",
    "title": "Get all user's workout for calendar",
    "name": "Get_all_user_s_workout_for_calendar",
    "group": "User_Workout",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "calendar_list",
            "description": "<p>list of user_workout document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_workouts.js",
    "groupTitle": "User_Workout"
  },
  {
    "type": "post",
    "url": "/user/progress",
    "title": "Get Progress Detail by Date and type",
    "name": "Get_Progress_Detail_by_Date_and_type",
    "group": "User_Workout_Progress",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>user's unique access-key</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "start",
            "description": "<p>start date of progress</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "end",
            "description": "<p>end date of progress</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>category of progress |<code> possible values ['mobility','strength',cardio] </code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "progress",
            "description": "<p>JSON of user_test_exercises 's document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/workout_progress.js",
    "groupTitle": "User_Workout_Progress"
  },
  {
    "type": "post",
    "url": "/user/user_workouts/workout",
    "title": "Add User Workouts",
    "name": "Add_User_Workouts",
    "group": "User_Workouts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type of workout</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subType",
            "description": "<p>subType of workout</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userWorkoutsId",
            "description": "<p>userWorkoutsId of workout</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "exercises",
            "description": "<p>exercises of workout</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "workout",
            "description": "<p>workout details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_workouts.js",
    "groupTitle": "User_Workouts"
  },
  {
    "type": "post",
    "url": "/user/user_workouts/day",
    "title": "Add User Workouts day",
    "name": "Add_User_Workouts_day",
    "group": "User_Workouts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of workout</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of workout</p>"
          },
          {
            "group": "Parameter",
            "type": "Enum",
            "optional": false,
            "field": "type",
            "description": "<p>type of workout | Possbile value <code>Enum: [&quot;exercise&quot;,&quot;restday&quot;]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>date of workout</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "day",
            "description": "<p>workout day details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_workouts.js",
    "groupTitle": "User_Workouts"
  },
  {
    "type": "post",
    "url": "/user/user_workouts/assign_program",
    "title": "Assign user's program",
    "name": "Assign_user_s_program",
    "group": "User_Workouts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "programId",
            "description": "<p>Program ID of program</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Date of program</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "workout",
            "description": "<p>JSON of user_programs document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_workouts.js",
    "groupTitle": "User_Workouts"
  },
  {
    "type": "put",
    "url": "/user/user_workouts/complete",
    "title": "Complete User workout",
    "name": "Complete_User_workout",
    "group": "User_Workouts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "childId",
            "description": "<p>Id of Workout to be complete</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parentId",
            "description": "<p>Id of Workout to be return as response</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "isCompleted",
            "description": "<p>isCompleted status of Workout to be complete</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_workouts.js",
    "groupTitle": "User_Workouts"
  },
  {
    "type": "post",
    "url": "/user/user_workouts/copy",
    "title": "Copy User Workouts",
    "name": "Copy_User_Workouts",
    "group": "User_Workouts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "exerciseId",
            "description": "<p>exerciseId of workout</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>date of workout</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_workouts.js",
    "groupTitle": "User_Workouts"
  },
  {
    "type": "post",
    "url": "/user/user_workouts/workout_delete",
    "title": "Delete User workout",
    "name": "Delete_User_workout",
    "group": "User_Workouts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_workouts.js",
    "groupTitle": "User_Workouts"
  },
  {
    "type": "post",
    "url": "/user/user_workouts/delete/exercise",
    "title": "Delete User workout exercise",
    "name": "Delete_User_workout_exercise",
    "group": "User_Workouts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parentId",
            "description": "<p>Parent Id of workout.[ collection name : user_workouts]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "childId",
            "description": "<p>childId Id of workout's exercise.[ collection name : user_workouts_exercise ]</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "subChildIds",
            "description": "<p>subChildIds Ids of workout's exercise'subCollection</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_workouts.js",
    "groupTitle": "User_Workouts"
  },
  {
    "type": "post",
    "url": "/user/user_workouts/delete/exercise",
    "title": "Delete User workout exercise",
    "name": "Delete_User_workout_exercise",
    "group": "User_Workouts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parentId",
            "description": "<p>Parent Id of workout.[ collection name : user_workouts]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "childId",
            "description": "<p>childId Id of workout's exercise.[ collection name : user_workouts_exercise ]</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "subChildIds",
            "description": "<p>subChildIds Ids of workout's exercise'subCollection</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workouts",
            "description": "<p>workouts data of program</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_program.js",
    "groupTitle": "User_Workouts"
  },
  {
    "type": "get",
    "url": "/user/user_workouts/:workout_id",
    "title": "Get User Workouts",
    "name": "Get_User_Workouts",
    "group": "User_Workouts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "workouts",
            "description": "<p>JSON of user_workouts</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_workouts.js",
    "groupTitle": "User_Workouts"
  },
  {
    "type": "post",
    "url": "/user/user_workouts/",
    "title": "Get User Workouts",
    "name": "Get_User_Workouts",
    "group": "User_Workouts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Date of user's workout program</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "workouts",
            "description": "<p>JSON of user_workouts</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_workouts.js",
    "groupTitle": "User_Workouts"
  },
  {
    "type": "post",
    "url": "/user/user_workouts/workouts_list_by_date",
    "title": "List of all workout by Date",
    "name": "List_of_all_workout_by_Date",
    "group": "User_Workouts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "workouts_list",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_workouts.js",
    "groupTitle": "User_Workouts"
  },
  {
    "type": "post",
    "url": "/user/user_workouts/bulk_complete",
    "title": "Multiple Workout completed by exerciseDay",
    "name": "Multiple_Workout_completed_by_exerciseDay",
    "group": "User_Workouts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "exerciseIds",
            "description": "<p>ids of Days</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "isCompleted",
            "description": "<p>status of workout</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_workouts.js",
    "groupTitle": "User_Workouts"
  },
  {
    "type": "post",
    "url": "/user/user_program/delete",
    "title": "Multiple program Workout delete",
    "name": "Multiple_Workout_delete",
    "group": "User_Workouts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "exerciseIds",
            "description": "<p>ids of Days</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "parentId",
            "description": "<p>parentId of Day</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workouts",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_program.js",
    "groupTitle": "User_Workouts"
  },
  {
    "type": "post",
    "url": "/user/user_workouts/delete",
    "title": "Multiple Workout delete by Days",
    "name": "Multiple_Workout_delete_by_Days",
    "group": "User_Workouts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "exerciseIds",
            "description": "<p>ids of Days</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "parentId",
            "description": "<p>parentId of Day</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_workouts.js",
    "groupTitle": "User_Workouts"
  },
  {
    "type": "put",
    "url": "/user/user_workouts/:workout_id",
    "title": "Update User Workouts",
    "name": "Update_User_Workouts",
    "group": "User_Workouts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of workout</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>description of workout</p>"
          },
          {
            "group": "Parameter",
            "type": "Enum",
            "optional": true,
            "field": "type",
            "description": "<p>type of workout | Possbile value <code>Enum: [&quot;exercise&quot;,&quot;restday&quot;]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "date",
            "description": "<p>date of workout</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "friend",
            "description": "<p>approved friend detail</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_workouts.js",
    "groupTitle": "User_Workouts"
  },
  {
    "type": "post",
    "url": "/user/user_workouts/exercises",
    "title": "Update User Workouts",
    "name": "Update_User_Workouts",
    "group": "User_Workouts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type of workout</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subType",
            "description": "<p>subType of workout</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userWorkoutsId",
            "description": "<p>userWorkoutsId of workout</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "exercises",
            "description": "<p>exercises of workout</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "workout",
            "description": "<p>workout details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_workouts.js",
    "groupTitle": "User_Workouts"
  },
  {
    "type": "put",
    "url": "/user/user_workouts/workout",
    "title": "Update User Workouts",
    "name": "Update_User_Workouts",
    "group": "User_Workouts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type of workout</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subType",
            "description": "<p>subType of workout</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userWorkoutsId",
            "description": "<p>userWorkoutsId of workout</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "exercises",
            "description": "<p>exercises of workout</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "workout",
            "description": "<p>workout details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_workouts.js",
    "groupTitle": "User_Workouts"
  },
  {
    "type": "put",
    "url": "/user/user_workouts/reorder_exercises",
    "title": "Update reorder of exercise",
    "name": "Update_reorder_of_exercise",
    "group": "User_Workouts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "workoutId",
            "description": "<p>workoutId of exercise</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "reorderExercises",
            "description": "<p>array of new exercise sequence</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/user_workouts.js",
    "groupTitle": "User_Workouts"
  },
  {
    "type": "post",
    "url": "/user/nutrition/todays_meal",
    "title": "Get User recipe by Date",
    "name": "Get_User_recipes_by_Date",
    "group": "User_recipes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>date of recipe</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "todays_meal",
            "description": "<p>data of user_recipes document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/nutrition.js",
    "groupTitle": "User_recipes"
  },
  {
    "type": "get",
    "url": "/user/nutrition/recipe/:recipe_id",
    "title": "Get recipe by ID",
    "name": "Get_by_recipe_ID",
    "group": "User_recipes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "user_recipe",
            "description": "<p>Array of user_recipes 's document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/nutrition.js",
    "groupTitle": "User_recipes"
  },
  {
    "type": "put",
    "url": "/user/profile/update_aboutme",
    "title": "update aboutme - Update",
    "name": "update_aboutme___Update",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "about",
            "description": "<p>about of user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "height",
            "description": "<p>height of user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "weight",
            "description": "<p>weight of user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "user",
            "description": "<p>JSON of users document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/profile.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/exercise_measurements",
    "title": "Add Exercise measurements",
    "name": "Add_Exercise_measurements",
    "group": "Workout_Exercise_Measurements",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "workoutType",
            "description": "<p>workoutType of exercise measurements</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "time",
            "description": "<p>time of exercise measurements</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "disatance",
            "description": "<p>disatance of exercise measurements</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reps",
            "description": "<p>reps of exercise measurements</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "evalation",
            "description": "<p>evalation of exercise measurements</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timeUnit",
            "description": "<p>timeUnit of exercise measurements</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "disatanceUnit",
            "description": "<p>disatanceUnit of exercise measurements</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "evalationUnit",
            "description": "<p>evalationUnit of exercise measurements</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "measurement",
            "description": "<p>Added exercise_measurements details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/exercise_measurements.js",
    "groupTitle": "Workout_Exercise_Measurements"
  },
  {
    "type": "get",
    "url": "/user/exercise_measurements",
    "title": "Get All measurements",
    "name": "Get_All_measurements",
    "group": "Workout_Exercise_Measurements",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User's unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "measurements",
            "description": "<p>Array of exercise_measurements document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Validation or error message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user/exercise_measurements.js",
    "groupTitle": "Workout_Exercise_Measurements"
  }
] });

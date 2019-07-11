(window["webpackJsonpVXETable"]=window["webpackJsonpVXETable"]||[]).push([["tree"],{"15b1":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("多选树表格")]),n("vxe-table",{attrs:{resizable:"","tree-config":{key:"id",children:"children"},data:e.tableData},on:{"update:data":function(t){e.tableData=t},"select-change":e.selectChangeEvent}},[n("vxe-table-column",{attrs:{type:"selection",prop:"checked",width:"120","tree-node":""}}),n("vxe-table-column",{attrs:{field:"name",title:"Name"}}),n("vxe-table-column",{attrs:{field:"size",title:"Size"}}),n("vxe-table-column",{attrs:{field:"type",title:"Type"}}),n("vxe-table-column",{attrs:{field:"date",title:"Date"}})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")])],1)},l=[],i=(n("5df3"),n("1c4c"),n("ac6a"),n("1487")),o=n.n(i),r=n("c695"),c=n.n(r),d={data:function(){return{tableData:[],demoCodes:['\n        <vxe-table\n          resizable\n          :tree-config="{key: \'id\', children: \'children\'}"\n          :data.sync="tableData"\n          @select-change="selectChangeEvent">\n          <vxe-table-column type="selection" tree-node></vxe-table-column>\n          <vxe-table-column field="name" title="Name"></vxe-table-column>\n          <vxe-table-column field="size" title="Size"></vxe-table-column>\n          <vxe-table-column field="type" title="Type"></vxe-table-column>\n          <vxe-table-column field="date" title="Date"></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: []\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_TREE_DATA_LIST.slice(0)\n          },\n          methods: {\n            selectChangeEvent ({ selection }) {\n              console.info(`勾选${selection.length}个树形节点`, selection)\n            }\n          }\n        }\n        "]}},created:function(){this.tableData=c.a.clone(window.MOCK_TREE_DATA_LIST,!0)},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){o.a.highlightBlock(e)})},methods:{selectChangeEvent:function(e){var t=e.selection;console.info("勾选".concat(t.length,"个树形节点"),t)}}},s=d,u=n("2877"),v=Object(u["a"])(s,a,l,!1,null,null,null);t["default"]=v.exports},"165f":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("树表格，通过配置 "),n("table-api-link",{attrs:{prop:"tree-config"}}),e._v(" 和指定列 "),n("table-column-api-link",{attrs:{prop:"tree-node"}}),e._v(" 属性来开启树表格")],1),n("p",[e._v("还可以通过 "),n("table-api-link",{attrs:{prop:"trigger"}}),e._v(" 指定触发方式")],1),n("vxe-table",{attrs:{border:"",resizable:"","tree-config":{key:"id",children:"children"},data:e.tableData},on:{"update:data":function(t){e.tableData=t}}},[n("vxe-table-column",{attrs:{field:"name",title:"Name"}}),n("vxe-table-column",{attrs:{field:"size",title:"Size"}}),n("vxe-table-column",{attrs:{field:"type",title:"Type"}}),n("vxe-table-column",{attrs:{field:"date",title:"Date","tree-node":""}})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")]),n("p",[e._v("默认展开所有树节点，通过 "),n("table-api-link",{attrs:{prop:"expand-config"}}),e._v(" 参数设置默认展开树节点")],1),n("vxe-table",{attrs:{data:e.tableData,"tree-config":{key:"id",children:"children",expandAll:!0}},on:{"update:data":function(t){e.tableData=t}}},[n("vxe-table-column",{attrs:{type:"index",width:"160",title:"序号","tree-node":""}}),n("vxe-table-column",{attrs:{field:"name",title:"Name"}}),n("vxe-table-column",{attrs:{field:"size",title:"Size"}}),n("vxe-table-column",{attrs:{field:"type",title:"Type"}}),n("vxe-table-column",{attrs:{field:"date",title:"Date"}})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[3]))]),e._v("\n  ")])],1)},l=[],i=(n("5df3"),n("1c4c"),n("ac6a"),n("1487")),o=n.n(i),r=n("c695"),c=n.n(r),d={data:function(){return{tableData:[],demoCodes:['\n        <vxe-table\n          border\n          resizable\n          :tree-config="{key: \'id\', children: \'children\'}"\n          :data.sync="tableData">\n          <vxe-table-column field="name" title="Name"></vxe-table-column>\n          <vxe-table-column field="size" title="Size"></vxe-table-column>\n          <vxe-table-column field="type" title="Type"></vxe-table-column>\n          <vxe-table-column field="date" title="Date" tree-node></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: []\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_TREE_DATA_LIST.slice(0)\n          }\n        }\n        ",'\n        <vxe-table\n          :data.sync="tableData"\n          :tree-config="{key: \'id\', children: \'children\', expandAll: true}">\n          <vxe-table-column type="index" width="120" title="序号" tree-node></vxe-table-column>\n          <vxe-table-column field="name" title="Name"></vxe-table-column>\n          <vxe-table-column field="size" title="Size"></vxe-table-column>\n          <vxe-table-column field="type" title="Type"></vxe-table-column>\n          <vxe-table-column field="date" title="Date"></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: []\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_TREE_DATA_LIST.slice(0)\n          }\n        }\n        "]}},created:function(){this.tableData=c.a.clone(window.MOCK_TREE_DATA_LIST,!0)},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){o.a.highlightBlock(e)})}},s=d,u=n("2877"),v=Object(u["a"])(s,a,l,!1,null,null,null);t["default"]=v.exports},"728f":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("可编辑树表格，还可以通过手动调用展开收起")]),n("vxe-toolbar",{scopedSlots:e._u([{key:"buttons",fn:function(){return[n("vxe-button",{on:{click:function(t){return e.$refs.xTree.toggleTreeExpansion(e.tableData[0],!0)}}},[e._v("切换第一个")]),n("vxe-button",{on:{click:function(t){return e.$refs.xTree.setTreeExpansion(e.tableData[2],!0)}}},[e._v("展开第三个")]),n("vxe-button",{on:{click:function(t){return e.$refs.xTree.setAllTreeExpansion(!0)}}},[e._v("展开所有")]),n("vxe-button",{on:{click:function(t){return e.$refs.xTree.clearTreeExpand()}}},[e._v("关闭所有")])]},proxy:!0}])}),n("vxe-table",{ref:"xTree",attrs:{resizable:"","tree-config":{key:"id",children:"children"},"edit-config":{trigger:"click",mode:"row"},"select-config":{labelField:"id"},data:e.tableData},on:{"update:data":function(t){e.tableData=t}}},[n("vxe-table-column",{attrs:{type:"selection",title:"ID","tree-node":""}}),n("vxe-table-column",{attrs:{field:"name",title:"Name","edit-render":{name:"input"}}}),n("vxe-table-column",{attrs:{field:"size",title:"Size","edit-render":{name:"input"}}}),n("vxe-table-column",{attrs:{field:"type",title:"Type","edit-render":{name:"input"}}}),n("vxe-table-column",{attrs:{field:"date",title:"Date","edit-render":{name:"input"}}})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")])],1)},l=[],i=(n("5df3"),n("1c4c"),n("ac6a"),n("1487")),o=n.n(i),r=n("c695"),c=n.n(r),d={data:function(){return{tableData:[],demoCodes:['\n        <vxe-toolbar>\n          <template v-slot:buttons>\n            <vxe-button @click="$refs.xTree.toggleTreeExpansion(tableData[0], true)">切换第一个</vxe-button>\n            <vxe-button @click="$refs.xTree.setTreeExpansion(tableData[2], true)">展开第三个</vxe-button>\n            <vxe-button @click="$refs.xTree.setAllTreeExpansion(true)">展开所有</vxe-button>\n            <vxe-button @click="$refs.xTree.clearTreeExpand()">关闭所有</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          resizable\n          ref="xTree"\n          :tree-config="{key: \'id\', children: \'children\'}"\n          :edit-config="{trigger: \'click\', mode: \'row\'}"\n          :select-config="{labelField: \'id\'}"\n          :data.sync="tableData">\n          <vxe-table-column type="selection" title="ID" tree-node></vxe-table-column>\n          <vxe-table-column field="name" title="Name" :edit-render="{name: \'input\'}"></vxe-table-column>\n          <vxe-table-column field="size" title="Size" :edit-render="{name: \'input\'}"></vxe-table-column>\n          <vxe-table-column field="type" title="Type" :edit-render="{name: \'input\'}"></vxe-table-column>\n          <vxe-table-column field="date" title="Date" :edit-render="{name: \'input\'}"></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: []\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_TREE_DATA_LIST.slice(0)\n          }\n        }\n        "]}},created:function(){this.tableData=c.a.clone(window.MOCK_TREE_DATA_LIST,!0)},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){o.a.highlightBlock(e)})}},s=d,u=n("2877"),v=Object(u["a"])(s,a,l,!1,null,null,null);t["default"]=v.exports},ce1c:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("使用 "),n("table-api-link",{attrs:{prop:"highlight-current-row"}}),e._v(" 方式")],1),n("vxe-table",{attrs:{"highlight-current-row":"","tree-config":{key:"id",children:"children"},data:e.tableData},on:{"update:data":function(t){e.tableData=t}}},[n("vxe-table-column",{attrs:{field:"name",title:"Name","tree-node":""}}),n("vxe-table-column",{attrs:{field:"size",title:"Size"}}),n("vxe-table-column",{attrs:{field:"type",title:"Type"}}),n("vxe-table-column",{attrs:{field:"date",title:"Date"}})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")]),n("p",[e._v("使用 radio 方式")]),n("vxe-table",{attrs:{"tree-config":{key:"id",children:"children"},"radio-config":{labelField:"name"},data:e.tableData},on:{"update:data":function(t){e.tableData=t}}},[n("vxe-table-column",{attrs:{type:"radio",title:"Name","tree-node":""}}),n("vxe-table-column",{attrs:{field:"size",title:"Size"}}),n("vxe-table-column",{attrs:{field:"type",title:"Type"}}),n("vxe-table-column",{attrs:{field:"date",title:"Date"}})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[3]))]),e._v("\n  ")]),n("p",[e._v("当然也可以两种方式同时使用")]),n("vxe-table",{attrs:{resizable:"","highlight-current-row":"","tree-config":{key:"id",children:"children"},data:e.tableData},on:{"update:data":function(t){e.tableData=t}}},[n("vxe-table-column",{attrs:{type:"radio",width:"120","tree-node":""}}),n("vxe-table-column",{attrs:{field:"name",title:"Name"}}),n("vxe-table-column",{attrs:{field:"size",title:"Size"}}),n("vxe-table-column",{attrs:{field:"type",title:"Type"}}),n("vxe-table-column",{attrs:{field:"date",title:"Date"}})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[4]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[5]))]),e._v("\n  ")])],1)},l=[],i=(n("5df3"),n("1c4c"),n("ac6a"),n("1487")),o=n.n(i),r=n("c695"),c=n.n(r),d={data:function(){return{tableData:[],demoCodes:['\n        <vxe-table\n          highlight-current-row\n          :tree-config="{key: \'id\', children: \'children\'}"\n          :data.sync="tableData">\n          <vxe-table-column field="name" title="Name" tree-node></vxe-table-column>\n          <vxe-table-column field="size" title="Size"></vxe-table-column>\n          <vxe-table-column field="type" title="Type"></vxe-table-column>\n          <vxe-table-column field="date" title="Date"></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: []\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_TREE_DATA_LIST.slice(0)\n          }\n        }\n        ",'\n        <vxe-table\n          :tree-config="{key: \'id\', children: \'children\'}"\n          :data.sync="tableData">\n          <vxe-table-column type="radio" width="120" tree-node></vxe-table-column>\n          <vxe-table-column field="name" title="Name"></vxe-table-column>\n          <vxe-table-column field="size" title="Size"></vxe-table-column>\n          <vxe-table-column field="type" title="Type"></vxe-table-column>\n          <vxe-table-column field="date" title="Date"></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: []\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_TREE_DATA_LIST.slice(0)\n          }\n        }\n        ",'\n        <vxe-table\n          resizable\n          highlight-current-row\n          :tree-config="{key: \'id\', children: \'children\'}"\n          :data.sync="tableData">\n          <vxe-table-column type="radio" width="120" tree-node></vxe-table-column>\n          <vxe-table-column field="name" title="Name"></vxe-table-column>\n          <vxe-table-column field="size" title="Size"></vxe-table-column>\n          <vxe-table-column field="type" title="Type"></vxe-table-column>\n          <vxe-table-column field="date" title="Date"></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: []\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_TREE_DATA_LIST.slice(0)\n          }\n        }\n        "]}},created:function(){this.tableData=c.a.clone(window.MOCK_TREE_DATA_LIST,!0)},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){o.a.highlightBlock(e)})}},s=d,u=n("2877"),v=Object(u["a"])(s,a,l,!1,null,null,null);t["default"]=v.exports},d69a:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("增删改查、工具栏")]),n("p",{staticClass:"red"},[e._v("必须指定 "),n("table-api-link",{attrs:{prop:"row-key"}}),e._v(" 或者 ( "),n("table-api-link",{attrs:{prop:"select-config"}}),e._v("、"),n("table-api-link",{attrs:{prop:"tree-config"}}),e._v("、"),n("table-api-link",{attrs:{prop:"expand-config"}}),e._v("、"),n("table-api-link",{attrs:{prop:"edit-config"}}),e._v(" ) 中的 key 任意配置一个即可")],1),n("vxe-toolbar",{attrs:{data:e.tableData,setting:""},scopedSlots:e._u([{key:"buttons",fn:function(){return[n("vxe-button",{on:{click:e.insertEvent}},[e._v("新增")]),n("vxe-button",{on:{click:function(t){return e.$refs.xTree.removeSelecteds()}}},[e._v("移除选中")]),n("vxe-button",{on:{click:e.getInsertEvent}},[e._v("获取新增")]),n("vxe-button",{on:{click:e.getRemoveEvent}},[e._v("获取删除")]),n("vxe-button",{on:{click:e.getUpdateEvent}},[e._v("获取修改")])]},proxy:!0}])}),n("vxe-table",{ref:"xTree",attrs:{resizable:"","tree-config":{key:"id",children:"children"},"edit-config":{trigger:"click",mode:"row",showStatus:!0},data:e.tableData},on:{"update:data":function(t){e.tableData=t}}},[n("vxe-table-column",{attrs:{type:"selection",width:"120","tree-node":""}}),n("vxe-table-column",{attrs:{field:"name",title:"Name","edit-render":{name:"input"}}}),n("vxe-table-column",{attrs:{field:"size",title:"Size","edit-render":{name:"input"}}}),n("vxe-table-column",{attrs:{field:"type",title:"Type","edit-render":{name:"input"}}}),n("vxe-table-column",{attrs:{field:"date",title:"Date","edit-render":{name:"input"}}})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")])],1)},l=[],i=(n("5df3"),n("1c4c"),n("ac6a"),n("1487")),o=n.n(i),r=n("c695"),c=n.n(r),d={data:function(){return{tableData:[],demoCodes:['\n        <vxe-toolbar :data="tableData" setting>\n          <template v-slot:buttons>\n            <vxe-button @click="insertEvent">新增</vxe-button>\n            <vxe-button @click="$refs.xTree.removeSelecteds()">移除选中</vxe-button>\n            <vxe-button @click="getInsertEvent">获取新增</vxe-button>\n            <vxe-button @click="getRemoveEvent">获取删除</vxe-button>\n            <vxe-button @click="getUpdateEvent">获取修改</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          resizable\n          ref="xTree"\n          :tree-config="{key: \'id\', children: \'children\'}"\n          :edit-config="{trigger: \'click\', mode: \'row\', showStatus: true}"\n          :data.sync="tableData">\n          <vxe-table-column type="selection" width="120" tree-node></vxe-table-column>\n          <vxe-table-column field="name" title="Name" :edit-render="{name: \'input\'}"></vxe-table-column>\n          <vxe-table-column field="size" title="Size" :edit-render="{name: \'input\'}"></vxe-table-column>\n          <vxe-table-column field="type" title="Type" :edit-render="{name: \'input\'}"></vxe-table-column>\n          <vxe-table-column field="date" title="Date" :edit-render="{name: \'input\'}"></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: []\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_TREE_DATA_LIST.slice(0)\n          },\n          methods: {\n            insertEvent () {\n              let record = {\n                date: XEUtils.toDateString(new Date(), 'yyyy-MM-dd')\n              }\n              this.$refs.xTree.insert(record)\n                .then(({ row }) => this.$refs.xTree.setActiveRow(row))\n            },\n            getInsertEvent () {\n              let insertRecords = this.$refs.xTree.getInsertRecords()\n              this.$XMsg.alert(insertRecords.length)\n            },\n            getRemoveEvent () {\n              let removeRecords = this.$refs.xTree.getRemoveRecords()\n              this.$XMsg.alert(removeRecords.length)\n            },\n            getUpdateEvent () {\n              let updateRecords = this.$refs.xTree.getUpdateRecords()\n              this.$XMsg.alert(updateRecords.length)\n            }\n          }\n        }\n        "]}},created:function(){this.tableData=c.a.clone(window.MOCK_TREE_DATA_LIST,!0)},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){o.a.highlightBlock(e)})},methods:{insertEvent:function(){var e=this,t={date:c.a.toDateString(new Date,"yyyy-MM-dd")};this.$refs.xTree.insert(t).then(function(t){var n=t.row;return e.$refs.xTree.setActiveRow(n)})},getInsertEvent:function(){var e=this.$refs.xTree.getInsertRecords();this.$XMsg.alert(e.length)},getRemoveEvent:function(){var e=this.$refs.xTree.getRemoveRecords();this.$XMsg.alert(e.length)},getUpdateEvent:function(){var e=this.$refs.xTree.getUpdateRecords();this.$XMsg.alert(e.length)}}},s=d,u=n("2877"),v=Object(u["a"])(s,a,l,!1,null,null,null);t["default"]=v.exports}}]);
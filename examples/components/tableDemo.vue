<template>
  <div class="y-common-table-contanier">
    <div class="y-common-table-operator-group">
      <a-button type="primary"
                icon="play-circle">
        操作
      </a-button>
      <a-button icon="poweroff">
        关机
      </a-button>
      <a-button icon="loading">
        重启
      </a-button>
      <a-dropdown>
        <a-menu slot="overlay"
                @click="handleMenuClick">
          <a-menu-item key="1">
            1st item
          </a-menu-item>
          <a-menu-item key="2">
            2nd item
          </a-menu-item>
          <a-menu-item key="3">
            3rd item
          </a-menu-item>
        </a-menu>
        <a-button>
          更多
          <a-icon type="down" />
        </a-button>
      </a-dropdown>
    </div>
    <a-table :columns="columns"
             :data-source="data"
             :row-selection="{
        selectedRowKeys: selectedRowKeys,
        onChange: onSelectChange
      }"
             :pagination="false">
      <a slot="name"
         slot-scope="text"
         class="y-button-link">{{ text }}</a>
      <span slot="tags"
            slot-scope="tags">
        <a-tag v-for="tag in tags"
               :key="tag"
               :color="
            tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'
          ">
          {{ tag.toUpperCase() }}
        </a-tag>
      </span>
      <template v-slot:action>
        <div class="y-table-column-action-button">
          <y-buttonAction text="新增" />
          <span class="spacing"></span>
          <y-buttonAction text="修改" />
          <span class="spacing"></span>
          <y-buttonAction text="复制" />
          <span class="spacing"></span>
          <y-buttonAction text="删除" />
          <span class="spacing"></span>
          <a-dropdown :trigger="['click']">
            <y-buttonAction text="更多" />
            <a-menu>
              <a-menu-item>
                <a href="javascript:;">a</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
      </template>
    </a-table>
  </div>
</template>

<script>
const columns = [
  {
    title: "标题",
    dataIndex: "name",
    key: "name",
    scopedSlots: { customRender: "name" },
    filters: [
      {
        text: "Joe",
        value: "Joe"
      },
      {
        text: "Jim",
        value: "Jim"
      }
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "AddressAddressAddressAddress",
    dataIndex: "address",
    key: "address",
    ellipsis: true
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    scopedSlots: { customRender: "tags" }
  },
  {
    title: "操作",
    key: "action",
    scopedSlots: { customRender: "action" }
  }
];

const data = [
  {
    key: "1",
    name: "内容文本，点击可进入详情",
    age: 32,
    address:
      "New York No. 1 Lake Park  New York NoNew York NoNew York NoNew York NoNew York NoNew York NoNew York No",
    tags: ["nice", "developer"]
  },
  {
    key: "2",
    name: "内容文本，点击可进入详情",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"]
  },
  {
    key: "3",
    name: "内容文本，点击可进入详情",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  }
];

export default {
  data() {
    return {
      data,
      columns,
      selectedRowKeys: [] // Check here to configure the default column
    };
  },
  methods: {
    onSelectChange(selectedRowKeys) {
      console.log("selectedRowKeys changed: ", selectedRowKeys);
      this.selectedRowKeys = selectedRowKeys;
    },
    handleMenuClick(e) {
      console.log("click", e);
    }
  }
};
</script>

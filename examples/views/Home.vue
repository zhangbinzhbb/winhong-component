<template>
  <div class="home">
    <a-row>
      <a-col :span="24">
        <span class="row-label">button组件：</span>
        <y-button> 123 </y-button>
      </a-col>
    </a-row>
    <a-divider />
    <a-row>
      <a-col :span="24" class="flex-row">
        <span class="row-label">表格组件：</span>
        <div style="width: 80%; padding-top: 10px">
          <table-demo />
        </div>
      </a-col>
    </a-row>

    <a-row>
      <a-col :span="24" class="flex-row">
        <span class="row-label" style="padding-top: 10px">分页组件：</span>
        <y-pagination :total="total" :page.sync="pages.page" :limit.sync="pages.limit" @pagination="paginationChange" />
      </a-col>
    </a-row>
    <a-divider />

    <a-row style="padding-top: 10px">
      <a-col :span="24" class="flex-row">
        <span class="row-label">自定义表格组件：</span>
        <div>
          <y-table-box>
            <template v-slot:button>button</template>
            <template v-slot:table>table</template>
          </y-table-box>
        </div>
      </a-col>
    </a-row>
    <a-divider />

    <a-row style="padding-top: 10px">
      <a-col :span="24" class="flex-row">
        <span class="row-label">tag标签组件：</span>
        <y-link-tag :data="dataArr" v-model="linkTagValue" :selectType="1" />
        选中值：{{ linkTagValue }}
      </a-col>
    </a-row>
    <a-divider />
    <a-row>
      <a-col :span="24" class="flex-row">
        <span class="row-label">上传组件：</span>
        <div style="width: 80%; padding-top: 10px">
          <upload />
        </div>
      </a-col>
    </a-row>
    <a-divider />
    <a-row style="padding-top: 10px">
      <a-col :span="24" class="flex-row">
        <span class="row-label">tree组件：</span>
        <y-custom-tree />
      </a-col>
    </a-row>

    <a-row style="padding-top: 10px">
      <a-col :span="24" class="flex-row">
        <span class="row-label">spin 全局组件：</span>
        <div>
          <a-button type="primary" @click="show" style="margin-right: 20px">show</a-button>
          <a-button type="primary" @click="hide">hide</a-button>
        </div>
      </a-col>
    </a-row>
    <!-- <a-divider />
    <a-row style="padding-top: 10px">
      <a-col :span="24" class="flex-row">
        <span class="row-label">自定义日期选择框面板组件：</span>
        <div>
          <y-custom-date-picker />
        </div>
      </a-col>
    </a-row> -->
  </div>
</template>

<script>
import tableDemo from '@/components/tableDemo';
import upload from '@/components/upload';
export default {
  name: 'Home',
  components: { tableDemo, upload },
  data() {
    return {
      total: 100,
      pages: {
        page: 1,
        limit: 10,
      },
      dataArr: [
        {
          label: 'CNware',
          value: '1',
        },
        {
          label: 'CNwareKV',
          value: '2',
        },
        {
          label: 'PowerVC',
          value: '3',
        },
        {
          label: '标签4',
          value: '4',
        },
        {
          label: '标签5',
          value: '5',
        },
      ],
      linkTagValue: '3,5',
    };
  },
  methods: {
    show() {
      this.$YSpin.show();
      setTimeout(() => {
        this.$YSpin.hide();
      }, 3000);
    },
    hide() {
      this.$YSpin.hide();
    },
    paginationChange(pages) {
      this.pages = pages;
    },
  },
};
</script>

<style lang="less">
.home {
  padding-top: 10px;
  padding-left: 100px;
  text-align: left;
  .flex-row {
    display: flex;
    align-items: center;
  }
  .row-label {
    width: 120px;
    display: inline-block;
  }
}
</style>

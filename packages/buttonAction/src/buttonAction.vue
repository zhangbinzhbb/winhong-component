<template>
  <div class="y-button-action" @click="handleClickLink">
    <span :class="className">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'YButtonAction',
  props: ['text', 'size'],
  computed: {
    className() {
      const size = this.size;
      let className = '';
      if (size === 'small') {
        className = 'y-button-action-small';
      } else if (size === 'large') {
        className = 'y-button-action-large';
      } else {
        className = 'y-button-action-default';
      }
      return className;
    },
  },
  methods: {
    // Ctrl or CMD and click, open in new window when use `to`
    handleClickLink(event) {
      this.$emit('click', event);
    },
  },
};
</script>

<style lang="less" scoped>
@import '~/src/styles/components/buttonAction.less';
</style>

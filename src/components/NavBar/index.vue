<template>
  <div class="nav-bar">
    <div class="nav-bar__helper">
      <i :class="helperClass" @click="handleCollapse"></i>
    </div>
    <div class="nav-bar__main">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    collapse: {
      type: Boolean
    }
  },
  computed: {
    helperClass() {
      return {
        'el-icon-icon-outdent': !this.collapse,
        'el-icon-icon-indent': this.collapse
      };
    }
  },
  methods: {
    handleCollapse() {
      this.$emit('onCollapse');
    }
  }
};
</script>

<style src="./style.scss" lang="scss">
</style>
